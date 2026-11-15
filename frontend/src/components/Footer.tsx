import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
  onOpenShipping: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenTerms,
  onOpenPrivacy,
  onOpenShipping,
}) => {
  return (
    <footer id="footer" className="bg-[#08150E] text-[#D0DDD5] border-t border-[#1D4430]">
      {/* Brand Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16 border-b border-[#153324]">
        <div className="max-w-2xl space-y-4">
          <span className="font-display-luxury text-2xl font-bold tracking-[0.2em] text-[#FCFAF6] block">
            ZNNKstudio
          </span>
          <p className="font-serif-luxury text-xl text-[#E5CF8E] italic font-normal">
            "Connecting the daily reveal with pieces that can be looked at and considered one by one."
          </p>
          <p className="text-xs text-[#8BA496] max-w-md font-light leading-relaxed">
            Curating mixed necklaces, earrings, rings, and bracelets in our signature white Christmas-tree presentation.
          </p>
        </div>
      </div>

      {/* Main Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-xs">
          {/* Col 1: Shop */}
          <div className="space-y-3">
            <h5 className="font-serif-luxury text-sm font-semibold tracking-wider uppercase text-[#FCFAF6]">
              Shop
            </h5>
            <ul className="space-y-2 text-[#9BB1A5]">
              <li>
                <a href="#product" className="hover:text-[#D8B772] transition-colors">
                  Advent Calendar 2026
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-[#D8B772] transition-colors">
                  Product Overview
                </a>
              </li>
              <li>
                <a href="#why-youll-love-it" className="hover:text-[#D8B772] transition-colors">
                  Calendar Features
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-[#D8B772] transition-colors">
                  Deluxe Presentation Box
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: The Collection */}
          <div className="space-y-3">
            <h5 className="font-serif-luxury text-sm font-semibold tracking-wider uppercase text-[#FCFAF6]">
              Jewelry Pieces
            </h5>
            <ul className="space-y-2 text-[#9BB1A5]">
              <li>
                <a href="#product" className="hover:text-[#D8B772] transition-colors">
                  Mixed Necklaces
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-[#D8B772] transition-colors">
                  Holiday Studs & Hoops
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-[#D8B772] transition-colors">
                  Stacking Rings
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-[#D8B772] transition-colors">
                  Fine Chain Bracelets
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Shipping Information */}
          

          {/* Col 4: Contact */}
          <div className="space-y-3">
            <h5 className="font-serif-luxury text-sm font-semibold tracking-wider uppercase text-[#FCFAF6]">
              Contact
            </h5>
            <ul className="space-y-2 text-[#9BB1A5]">
              <li>
                <span className="text-[11px] text-[#7A9587] block">Brand</span>
                <span className="text-[#FCFAF6]">ZNNKstudio</span>
              </li>
              <li>
                <span className="text-[11px] text-[#7A9587] block">Client Support</span>
                <a
                  href="mailto:znnkstudio@gmail.com"
                  className="text-[#FCFAF6] hover:text-[#D8B772] transition-colors"
                >
                  znnkstudio@gmail.com
                </a>
              </li>
              <li>
                <span className="text-[11px] text-[#7A9587] block">Concierge Hours</span>
                <span className="text-[#FCFAF6]">Mon–Sun: 8am – 9pm EST</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Policies */}
          <div className="space-y-3">
            <h5 className="font-serif-luxury text-sm font-semibold tracking-wider uppercase text-[#FCFAF6]">
              Policies
            </h5>
            <ul className="space-y-2 text-[#9BB1A5]">
              <li>
                <a
                  href="#privacy-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenPrivacy();
                  }}
                  className="hover:text-[#D8B772] transition-colors text-left"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms-and-conditions"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenTerms();
                  }}
                  className="hover:text-[#D8B772] transition-colors text-left"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#shipping-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenShipping();
                  }}
                  className="hover:text-[#D8B772] transition-colors text-left"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D8B772] transition-colors">
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D8B772] transition-colors">
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Payment Badges */}
      <div className="bg-[#050D09] py-6 border-t border-[#122A1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F887A]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span>© 2026 ZNNKstudio. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <a
              href="#terms-and-conditions"
              onClick={(e) => {
                e.preventDefault();
                onOpenTerms();
              }}
              className="text-[#D8B772] hover:text-[#FCFAF6] underline underline-offset-2 transition-colors font-medium"
            >
              Terms & Conditions
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="#privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                onOpenPrivacy();
              }}
              className="text-[#D8B772] hover:text-[#FCFAF6] underline underline-offset-2 transition-colors font-medium"
            >
              Privacy Policy
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="#shipping-policy"
              onClick={(e) => {
                e.preventDefault();
                onOpenShipping();
              }}
              className="text-[#D8B772] hover:text-[#FCFAF6] underline underline-offset-2 transition-colors font-medium"
            >
              Shipping Policy
            </a>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-[#C5A059] fill-[#C5A059]" /> for the holidays
            </span>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-3 text-[11px] font-mono tracking-wider text-[#A0B8AA]">
            <span>VISA</span>
            <span>·</span>
            <span>MASTERCARD</span>
            <span>·</span>
            <span>AMEX</span>
            <span>·</span>
            <span>APPLE PAY</span>
            <span>·</span>
            <span>PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
