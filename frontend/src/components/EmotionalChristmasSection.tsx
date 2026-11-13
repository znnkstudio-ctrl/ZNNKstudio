import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import product1 from "/src/assets/images/shopify/product_1.png";
export const EmotionalChristmasSection: React.FC = () => {
  return (
    <section id="story" className="relative py-24 lg:py-32 overflow-hidden bg-[#0C1E15] text-[#F7F4EC]">
      {/* Background imagery with measured contrast scrim for readability (§1.F) */}
      <div className="absolute inset-0 z-0">
        <img
          src={product1}
          alt="Warm Christmas fireplace atmosphere with glowing tree and candles"
          className="w-full h-full object-cover object-center opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1E15] via-[#0C1E15]/90 to-[#0C1E15]/75" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Emotional Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#D8B772]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A Cherished Holiday Tradition</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl text-[#FCFAF6] font-normal leading-[1.15] tracking-tight">
              More Than a Gift. <br />
              <span className="italic text-[#E5CF8E]">A Little Moment of Joy Every Day.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#D0DDD5] font-light leading-relaxed max-w-2xl">
              <p>
                There is a quiet wonder in the early mornings of December. While the world outside rests in winter stillness, your day begins with a gentle ritual: turning to your festive tree, pausing for a breath, and opening that day's numbered door.
              </p>
              <p>
                Inside, a tender glint of gold or a polished silver detail awaits. One day it is a pendant that catches the morning sun; the next, delicate crystal studs ready for evening celebrations, or a smooth stacking ring that stays on your finger through the new year.
              </p>
              <p className="text-sm sm:text-base text-[#E5CF8E] italic font-serif-luxury">
                "It transforms the hustle of the holidays into twenty-four peaceful pauses, each marked by a piece you will cherish long after the tree is taken down."
              </p>
            </div>

            {/* Emotional Quotes / Heart note */}
            <div className="pt-4 flex items-center gap-4 text-xs text-[#9BB1A5]">
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
                <span>Crafted for daily delight</span>
              </div>
              <span aria-hidden="true">·</span>
              <span>Cherished by thousands of jewelry lovers</span>
            </div>
          </div>

          {/* Right Column: Emotional Close-up Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-[#D8B772]/30 shadow-2xl group bg-[#153324]/40">
              <img
                src={product1}
                alt="Woman joyfully opening day 24 compartment to reveal a sparkling necklace"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E15]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-xs text-[#FCFAF6] font-light">
                <p className="font-serif-luxury text-base text-[#F7F4EC]">
                  The Thrill of the Daily Reveal
                </p>
                <p className="text-[#B9CEC2] text-xs">
                  Twenty-four carefully tucked treasures, waiting to be uncovered one by one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
