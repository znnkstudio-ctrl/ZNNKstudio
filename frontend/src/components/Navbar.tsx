import React from 'react';
import { Snowflake } from 'lucide-react';

interface NavbarProps {
  onReplaySnowfall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onReplaySnowfall,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EEE9DC] transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, one line */}
        <a
          href="#"
          className="font-display-luxury text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#0E2218] whitespace-nowrap shrink-0 hover:text-[#C5A059] transition-colors"
        >
          ZNNKstudio
        </a>

        {/* Zone 2: 4-5 nav links, single-line text */}
        <nav className="hidden md:flex items-center gap-7 text-xs lg:text-sm font-medium tracking-wider uppercase text-[#2C3E32]">
          <a
            href="#hero"
            className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Overview
          </a>
          <a
            href="#product"
            className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            The Calendar
          </a>
          <a
            href="#why-youll-love-it"
            className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Features
          </a>
          <a
            href="#story"
            className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Holiday Joy
          </a>
          <a
            href="#faq"
            className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: Snowfall replay action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onReplaySnowfall}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#153324] hover:text-[#C5A059] transition-colors rounded-lg border border-[#EEE9DC] hover:bg-[#EEE9DC]/50 whitespace-nowrap"
            title="Replay Christmas Snowfall"
            aria-label="Replay snowfall animation"
          >
            <Snowflake className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Snowfall</span>
          </button>
        </div>
      </div>
    </header>
  );
};
