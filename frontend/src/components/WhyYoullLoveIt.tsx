import React from 'react';
import { Calendar, Gem, TreePine, Gift } from 'lucide-react';

const FEATURES = [
  {
    icon: Calendar,
    title: '24 Days of Surprises',
    description:
      'Each numbered compartment brings a new daily ritual throughout December. Discover a fresh sparkle every morning leading up to Christmas Eve.',
    highlight: 'A morning ritual',
  },
  {
    icon: Gem,
    title: 'Beautiful Mixed Jewelry',
    description:
      'A harmonious curation of necklaces, earrings, rings, and bracelets. Wear each piece individually or layer them together as your personal collection grows.',
    highlight: 'Versatile variety',
  },
  {
    icon: TreePine,
    title: 'Festive Christmas Tree Packaging',
    description:
      'Crafted in a sculptural white Christmas-tree silhouette with forest green and champagne gold-tone accents. Beautiful displayed on any mantel or vanity.',
    highlight: 'Holiday decor piece',
  },
  {
    icon: Gift,
    title: 'A Perfect Christmas Gift',
    description:
      'An unforgettable present for someone who treasures jewelry and holiday anticipation. Arrives ready to gift with an elegant festive finish.',
    highlight: 'Gift ready',
  },
];

export const WhyYoullLoveIt: React.FC = () => {
  return (
    <section id="why-youll-love-it" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#A8833B]">
            Thoughtfully Designed
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#0E2218] font-normal tracking-tight">
            Why You’ll Love It
          </h2>
          <p className="text-sm sm:text-base text-[#5D6B62] font-light">
            Every detail—from the architectural tree silhouette to the daily reveal—was created to elevate your festive countdown.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative rounded-2xl bg-white p-7 border border-[#EEE9DC] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#D8B772]/50 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & subtle pill-free editorial index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#F7F4EC] text-[#0E2218] flex items-center justify-center group-hover:bg-[#0E2218] group-hover:text-[#D8B772] transition-colors duration-300">
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="text-xs font-serif-luxury text-[#A8833B] tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-xl text-[#0E2218] font-semibold mb-3 tracking-tight group-hover:text-[#153324]">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#5D6B62] leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F2EFE7] flex items-center gap-1.5 text-xs text-[#C5A059] font-medium tracking-wide">
                  <span>{feature.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
