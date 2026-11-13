import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'What is included in the advent calendar?',
    answer:
      'The advent calendar includes 24 individually compartmented daily reveals housed in an architectural white Christmas-tree-shaped box adorned with green and gold-tone details. Each compartment contains a distinct jewelry piece, bringing you 24 separate discoveries throughout the December holiday season.',
  },
  {
    question: 'What types of jewelry can I discover?',
    answer:
      'Inside, the assortment combines mixed necklaces, earrings, rings, and bracelets. Rather than asking you to build one charm bracelet throughout the month, the collection provides a diverse selection of standalone and stackable jewelry forms that can be considered, styled, and worn one by one.',
  },
  {
    question: 'Is this a good Christmas gift?',
    answer:
      'It makes an exceptional Christmas gift. Whether for a partner, daughter, friend, or jewelry enthusiast, this calendar provides an ongoing experience of joy and anticipation each morning leading up to Christmas Eve, packaged in a display-worthy festive tree box that looks gorgeous on any mantle.',
  },
  {
    question: 'What material is the jewelry made from?',
    answer:
      'The collection features carefully finished jewelry including 18K gold-tone and silver-tone accents, delicate chain work, faceted crystals, and tactile decorative finishes designed for comfortable daily wear and festive layering.',
  },
  {
    question: 'When should I start opening the calendar?',
    answer:
      'The traditional holiday countdown begins on December 1st by opening compartment number 1, continuing with one door each day through Christmas Eve (December 24th). We recommend ordering early so it arrives in time to begin on December 1st.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (idx: number) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter((i) => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FCFAF6] border-t border-[#EEE9DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#A8833B]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#0E2218] font-normal tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#5D6B62] font-light">
            Everything you need to know about the Mixed Jewelry Advent Calendar and holiday delivery.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-white border border-[#EEE9DC] overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 transition-colors hover:bg-[#FAF8F5]/80"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-luxury text-lg sm:text-xl text-[#0E2218] font-medium tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F7F4EC] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#0E2218] text-[#D8B772]' : 'text-[#153324]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 text-sm sm:text-base text-[#5D6B62] font-light leading-relaxed border-t border-[#F2EFE7] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Assistance strip */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F7F4EC] border border-[#EEE9DC] text-center space-y-2">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#153324]">
            Need Additional Assistance?
          </p>
          <p className="text-xs text-[#5D6B62]">
            Our holiday concierge team is available seven days a week to help with custom orders, corporate gifting, or delivery tracking.
          </p>
          <a
            href="#footer"
            className="inline-block text-xs font-semibold text-[#0E2218] underline underline-offset-4 hover:text-[#C5A059] pt-1"
          >
            Contact Customer Care
          </a>
        </div>
      </div>
    </section>
  );
};
