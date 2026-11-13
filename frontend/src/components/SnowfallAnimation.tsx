import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';

interface SnowfallAnimationProps {
  onComplete?: () => void;
  triggerReplayKey?: number;
}

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speed: number;
  wind: number;
  windAngle: number;
  windSpeed: number;
  opacity: number;
  swingAmplitude: number;
  blur: number;
}

export const SnowfallAnimation: React.FC<SnowfallAnimationProps> = ({
  onComplete,
  triggerReplayKey = 0,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [greetingVisible, setGreetingVisible] = useState(true);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    setVisible(true);
    setFading(false);
    setGreetingVisible(true);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate balanced realistic snowflakes
    const flakeCount = Math.min(Math.floor((width * height) / 12000), 160);
    const flakes: Snowflake[] = [];

    for (let i = 0; i < flakeCount; i++) {
      flakes.push({
        x: Math.random() * width,
        y: Math.random() * height - height, // start above or across viewport
        radius: Math.random() * 2.8 + 1.2,
        speed: Math.random() * 1.8 + 0.8,
        wind: Math.random() * 0.6 - 0.3,
        windAngle: Math.random() * Math.PI * 2,
        windSpeed: Math.random() * 0.02 + 0.01,
        opacity: Math.random() * 0.6 + 0.35,
        swingAmplitude: Math.random() * 1.5 + 0.5,
        blur: Math.random() > 0.8 ? 1.5 : 0,
      });
    }

    let startTime = performance.now();
    const duration = 7500; // 7.5 seconds total runtime
    const fadeDuration = 1800; // 1.8s smooth fade out

    const render = (time: number) => {
      const elapsed = time - startTime;

      ctx.clearRect(0, 0, width, height);

      // Calculate global fade factor
      let globalAlpha = 1;
      if (elapsed > duration - fadeDuration) {
        globalAlpha = Math.max(0, (duration - elapsed) / fadeDuration);
      }

      ctx.save();
      ctx.globalAlpha = globalAlpha;

      for (let i = 0; i < flakes.length; i++) {
        const flake = flakes[i];

        // Horizontal sinusoidal drift + vertical fall
        flake.windAngle += flake.windSpeed;
        flake.x += Math.sin(flake.windAngle) * flake.swingAmplitude + flake.wind;
        flake.y += flake.speed;

        // Wrap around bottom
        if (flake.y > height + 10) {
          flake.y = -10;
          flake.x = Math.random() * width;
        }
        // Wrap around horizontal edges
        if (flake.x > width + 10) flake.x = -10;
        if (flake.x < -10) flake.x = width + 10;

        // Draw snowflake circle with soft edge
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          flake.x,
          flake.y,
          0,
          flake.x,
          flake.y,
          flake.radius
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${flake.opacity})`);
        gradient.addColorStop(0.7, `rgba(255, 255, 255, ${flake.opacity * 0.8})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      if (elapsed < duration) {
        animationFrameRef.current = requestAnimationFrame(render);
      } else {
        setVisible(false);
        if (onComplete) onComplete();
      }
    };

    animationFrameRef.current = requestAnimationFrame(render);

    // Fade greeting message earlier
    const greetingTimer = setTimeout(() => {
      setGreetingVisible(false);
    }, 4500);

    // Start container fade
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, duration - fadeDuration);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(greetingTimer);
      clearTimeout(fadeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, [triggerReplayKey, onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-none transition-opacity duration-1000 ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Subtle magical Christmas greeting overlay */}
      <div
        className={`absolute top-20 left-1/2 -translate-x-1/2 transition-all duration-1000 transform ${
          greetingVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 -translate-y-4 scale-95'
        }`}
      >
        <div className="bg-[#0E2218]/80 backdrop-blur-md border border-[#C5A059]/40 rounded-full px-6 py-2.5 shadow-2xl flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-[#D8B772] animate-pulse" />
          <span className="font-serif-luxury text-sm md:text-base tracking-widest text-[#F7F4EC] uppercase">
            A Little Christmas Magic Is Coming...
          </span>
          <Sparkles className="w-4 h-4 text-[#D8B772] animate-pulse" />
        </div>
      </div>
    </div>
  );
};
