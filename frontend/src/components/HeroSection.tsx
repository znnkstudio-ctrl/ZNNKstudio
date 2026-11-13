import React from 'react';
import { ArrowDown, Sparkles, ShieldCheck } from 'lucide-react';
import product1 from "/src/assets/images/shopify/product_1.png";

export const HeroSection: React.FC = () => {
  const scrollToProduct = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('product');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative festive ambient gradient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#D8B772]/15 via-[#1D4430]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-center lg:text-left">
            {/* Subtle festive kicker */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#A8833B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Holiday Release</span>
              <span aria-hidden="true">·</span>
              <span>24 Daily Jewelry Surprises</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#0E2218] font-normal tracking-tight leading-[1.12] text-balance">
              Make Every Day Before Christmas Magical
            </h1>

            {/* Subheadline */}
            <p className="font-sans text-lg sm:text-xl text-[#3A4A3F] font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              24 little surprises. Beautiful jewelry. One unforgettable Christmas.
            </p>

            {/* Editorial summary */}
            <p className="text-sm text-[#5D6B62] leading-relaxed max-w-lg mx-auto lg:mx-0">
              This advent calendar brings mixed necklaces, earrings, rings and bracelets into a festive compartmented presentation. The white Christmas-tree box with green and gold-tone details gives the collection its seasonal identity.
            </p>

            {/* CTA Button & Quick Info */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#product"
                onClick={scrollToProduct}
                className="gold-foil-btn inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-[#0E2218] font-semibold text-sm tracking-wider uppercase transition-all whitespace-nowrap group cursor-pointer w-full sm:w-auto shadow-md"
              >
                <span>DISCOVER THE CALENDAR</span>
                <ArrowDown className="w-4 h-4 text-[#0E2218] group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#product"
                onClick={scrollToProduct}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-[#D8B772]/40 text-[#153324] hover:bg-[#EEE9DC]/50 font-medium text-sm tracking-wide transition-colors whitespace-nowrap w-full sm:w-auto"
              >
                <span>View The Calendar</span>
              </a>
            </div>

            {/* Trust Micro-Metrics */}
            <div className="pt-6 border-t border-[#EEE9DC] flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-[#5D6B62]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Shopify Verified Store</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Product Image Display */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Elegant framing card */}
            <div className="relative w-full max-w-xl mx-auto rounded-3xl bg-white p-3 sm:p-5 shadow-[0_25px_60px_-15px_rgba(14,34,24,0.18)] border border-[#EEE9DC] transition-transform duration-500 hover:scale-[1.01]">
              {/* Product Badge */}
              <div className="absolute top-6 left-6 z-10 bg-[#0E2218]/90 backdrop-blur-md border border-[#D8B772]/40 text-[#F7F4EC] px-3.5 py-1.5 rounded-full text-xs font-serif-luxury tracking-widest flex items-center gap-2 shadow-lg">
                <Sparkles className="w-3 h-3 text-[#D8B772]" />
                <span>24 JEWELRY SURPRISES</span>
              </div>

              {/* Main Authentic Product Photography */}
              <div className="relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden bg-white flex items-center justify-center p-3">
                <img
                  src={product1}
                  alt="Mixed Jewelry Advent Calendar - White Christmas tree box with green and gold-tone details showing necklaces, earrings, rings, and bracelets"
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption */}
              <div className="mt-3 px-2 flex items-center justify-between text-xs text-[#5D6B62]">
                <span className="font-serif-luxury italic text-sm text-[#153324]">
                  White Christmas-Tree Box with Green & Gold-Tone Detailing
                </span>
                <div className="flex items-center gap-2 font-semibold text-[#153324] tabular-nums shrink-0">
                  <span>€27.95</span>
                  <span className="text-[#8A968E] line-through font-normal">€33.54</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#B65757]/12 text-[#9B3B3B]">
                    -20%
                  </span>
                  <span className="text-[#5D6B62] font-normal">· In Stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
