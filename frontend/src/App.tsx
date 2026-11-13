import React, { useState } from 'react';
import { SnowfallAnimation } from './components/SnowfallAnimation';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductSection } from './components/ProductSection';
import { WhyYoullLoveIt } from './components/WhyYoullLoveIt';
import { EmotionalChristmasSection } from './components/EmotionalChristmasSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export default function App() {
  const [replayKey, setReplayKey] = useState<number>(0);

  const handleTriggerReplaySnowfall = () => {
    setReplayKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2420] flex flex-col font-sans selection:bg-[#C5A059]/25 selection:text-[#0E2218]">
      {/* 1. Snowfall Opening Animation (5-10 seconds, canvas-based, non-blocking) */}
      <SnowfallAnimation triggerReplayKey={replayKey} />

      {/* 2. Top Navigation Bar */}
      <Navbar onReplaySnowfall={handleTriggerReplaySnowfall} />

      {/* 3. Main Sections */}
      <main className="flex-1">
        <HeroSection />

        {/* 4. Product Section */}
        <ProductSection />

        {/* 5. Why You'll Love It Section (4 feature cards) */}
        <WhyYoullLoveIt />

        {/* 6. Emotional Christmas Section */}
        <EmotionalChristmasSection />

        {/* 7. FAQ Section */}
        <FAQSection />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
