import React, { useState } from 'react';
import {
  Sparkles,
  Shield,
  ZoomIn,
} from 'lucide-react';
import { ShopifyBuyButton } from './ShopifyBuyButton';
import product1 from "/src/assets/images/shopify/product_1.png";
import product2 from "/src/assets/images/shopify/product_2.png";
import product3 from "/src/assets/images/shopify/product_3.png";
import product4 from "/src/assets/images/shopify/product_4.png";

const GALLERY_IMAGES = [
  {
    id: 'shopify-main',
    url: product1,
    label: 'Advent Calendar & All 24 Jewels',
  },
  {
    id: 'shopify-necklaces',
    url: product2,
    label: 'Curated Necklaces & Pendants',
  },
  {
    id: 'shopify-earrings',
    url: product3,
    label: 'Festive Earrings & Hoops',
  },
  {
    id: 'shopify-rings-bracelets',
    url: product4,
    label: 'Rings & Layered Bracelets',
  },
];

export const ProductSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  const PRODUCT_ID = '16309764489548';
  const BASE_PRICE_EUR = 27.95;
  const ORIGINAL_PRICE_EUR = Number((BASE_PRICE_EUR * 1.2).toFixed(2)); // €33.54 (+20%)

  const formatEur = (amount: number) => `€${amount.toFixed(2)}`;

  return (
    <section id="product" className="py-16 lg:py-24 bg-[#FCFAF6] border-t border-[#EEE9DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Gallery Column */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div className="relative aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-[#EEE9DC] shadow-lg group">
              <img
                src={GALLERY_IMAGES[selectedImage].url}
                alt={GALLERY_IMAGES[selectedImage].label}
                className="w-full h-full object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105 cursor-pointer bg-white"
                onClick={() => setIsZoomModalOpen(true)}
                referrerPolicy="no-referrer"
              />

              {/* Zoom Trigger Button */}
              <button
                onClick={() => setIsZoomModalOpen(true)}
                className="absolute bottom-4 right-4 p-2.5 rounded-full bg-white/95 backdrop-blur-sm text-[#153324] hover:text-[#C5A059] shadow-md transition-all hover:scale-110 border border-[#EEE9DC]"
                aria-label="Enlarge image"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              {/* Tag indicator */}
              <div className="absolute top-4 left-4 bg-[#0E2218]/90 backdrop-blur-sm text-[#F7F4EC] px-3.5 py-1.5 rounded-full text-xs font-serif-luxury tracking-wider border border-[#D8B772]/30">
                {GALLERY_IMAGES[selectedImage].label}
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {GALLERY_IMAGES.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden bg-white border-2 p-1 transition-all ${
                    selectedImage === idx
                      ? 'border-[#C5A059] ring-2 ring-[#C5A059]/20 scale-100 shadow-md'
                      : 'border-[#EEE9DC] opacity-75 hover:opacity-100'
                  }`}
                  aria-label={`View photo ${idx + 1}: ${img.label}`}
                >
                  <img
                    src={img.url}
                    alt={img.label}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>

            {/* Authentic Product Guarantee Note */}
            <div className="p-4 rounded-2xl bg-[#F7F4EC] border border-[#EEE9DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#5D6B62]">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
                All 24 holiday pieces shown in the official photograph are sealed inside.
              </span>
              <button
                onClick={() => setIsZoomModalOpen(true)}
                className="text-[#153324] font-semibold underline underline-offset-2 hover:text-[#C5A059] whitespace-nowrap"
              >
                Enlarge High-Res Photo
              </button>
            </div>
          </div>

          {/* Purchasing Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Title & Brand */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#A8833B]">
                  ZNNKstudio · Seasonal Collection
                </span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#0E2218] font-normal tracking-tight">
                Mixed Jewelry Advent Calendar
              </h2>
            </div>

            {/* Official Price Section (€27.95, compare at €33.54, -20%) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EEE9DC] shadow-sm space-y-3">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#7D8A81] mb-1">
                  Price
                </div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-3xl font-bold font-sans text-[#0E2218] tabular-nums">
                    {formatEur(BASE_PRICE_EUR)}
                  </span>
                  <span className="text-lg font-medium font-sans text-[#8A968E] line-through tabular-nums">
                    {formatEur(ORIGINAL_PRICE_EUR)}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold tracking-wide bg-[#B65757]/12 text-[#9B3B3B] border border-[#B65757]/25">
                    -20%
                  </span>
                </div>
              </div>

              {/* Stock Status */}
              <div className="pt-2 border-t border-[#EEE9DC] flex items-center text-xs text-[#5D6B62]">
                <div className="flex items-center gap-1.5 text-[#153324]">
                  <span className="w-2 h-2 rounded-full bg-[#1B3D2B]" />
                  <span className="font-medium">In Stock</span>
                </div>
              </div>
            </div>

            {/* Official Product Description */}
            <div className="space-y-3 text-sm text-[#3A4A3F] leading-relaxed font-light">
              <p>
                Make the Christmas countdown a series of small jewelry discoveries. This advent calendar brings mixed necklaces, earrings, rings and bracelets into a festive compartmented presentation, connecting the daily reveal with pieces that can be looked at and considered one by one.
              </p>
              <p>
                The white Christmas-tree box with green and gold-tone details gives the collection its seasonal identity before the first space is opened.
              </p>
              <p>
                Inside, the assortment combines different jewelry forms rather than asking you to build one charm bracelet throughout the month.
              </p>
              <p>
                Set the calendar somewhere easy to return to, then keep the revealed pieces together as the collection grows. The appeal is the unhurried discovery of another little detail, from a pendant shape to a different decorative finish.
              </p>
              <p className="font-serif-luxury italic text-base text-[#0E2218]">
                Bring a little more anticipation to the days before Christmas, one compartment at a time.
              </p>
            </div>

            {/* Official Shopify Buy Button */}
            <div className="space-y-4 pt-1">
              <ShopifyBuyButton productId={PRODUCT_ID} unitPrice={BASE_PRICE_EUR} />

              <div className="flex items-center justify-center gap-2 pt-1 text-xs text-[#5D6B62]">
                <Shield className="w-4 h-4 text-[#C5A059]" />
                <span>Authentic Quality · Secure Shopify Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Zoom View */}
      {isZoomModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsZoomModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl p-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsZoomModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#0E2218] text-white flex items-center justify-center hover:bg-[#153324]"
              aria-label="Close zoom"
            >
              ✕
            </button>
            <img
              src={GALLERY_IMAGES[selectedImage].url}
              alt={GALLERY_IMAGES[selectedImage].label}
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl mx-auto bg-white"
              referrerPolicy="no-referrer"
            />
            <div className="pt-3 text-xs text-[#5D6B62]">
              {GALLERY_IMAGES[selectedImage].label} · Official Mixed Jewelry Advent Calendar
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
