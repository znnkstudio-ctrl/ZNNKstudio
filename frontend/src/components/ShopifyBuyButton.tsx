import React, { useState } from 'react';
import { ChevronUp, ChevronDown, ArrowRight, Loader2 } from 'lucide-react';

interface ShopifyBuyButtonProps {
  productId?: string;
  unitPrice?: number;
  className?: string;
}

const SHOPIFY_DOMAIN = 'ws2uzp-50.myshopify.com';
const STOREFRONT_TOKEN = '1bf1e8be8fe782131d0ded01bf2aeb74';
const VARIANT_GID = 'gid://shopify/ProductVariant/59921238819148';
const VARIANT_NUMERIC_ID = '59921238819148';

export const ShopifyBuyButton: React.FC<ShopifyBuyButtonProps> = ({
  unitPrice = 27.95,
  className = '',
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [inputValue, setInputValue] = useState<string>('1');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateQuantity = (next: number) => {
    const clamped = Math.max(1, Math.min(99, next));
    setQuantity(clamped);
    setInputValue(String(clamped));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setInputValue(raw);
    const parsed = parseInt(raw, 10);
    if (!isNaN(parsed) && parsed >= 1) {
      setQuantity(Math.min(99, parsed));
    }
  };

  const handleInputBlur = () => {
    const parsed = parseInt(inputValue, 10);
    if (isNaN(parsed) || parsed < 1) {
      updateQuantity(1);
    } else {
      updateQuantity(parsed);
    }
  };

  const handleBuyNow = async () => {
    if (isLoading) return;
    setIsLoading(true);

    const qty = Math.max(1, quantity);
    const fallbackUrl = `https://${SHOPIFY_DOMAIN}/cart/${VARIANT_NUMERIC_ID}:${qty}`;

    try {
      const response = await fetch(`https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
        },
        body: JSON.stringify({
          query: `
            mutation CreateCart($lines: [CartLineInput!]!) {
              cartCreate(input: { lines: $lines }) {
                cart {
                  checkoutUrl
                }
                userErrors {
                  message
                }
              }
            }
          `,
          variables: {
            lines: [{ merchandiseId: VARIANT_GID, quantity: qty }],
          },
        }),
      });

      const result = await response.json();
      const checkoutUrl = result?.data?.cartCreate?.cart?.checkoutUrl;
      window.location.href = checkoutUrl || fallbackUrl;
    } catch {
      window.location.href = fallbackUrl;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="product-component-1794502348215" className={`w-full ${className}`}>
      <div className="flex items-stretch gap-3">
        {/* Editable Quantity Input with Up/Down Arrows */}
        <div className="flex items-center border border-[#D8B772]/60 bg-white rounded-xl overflow-hidden h-14 shadow-sm">
          <label htmlFor="shopify-qty-input" className="sr-only">
            Quantity
          </label>
          <input
            id="shopify-qty-input"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className="w-12 h-full text-center font-semibold text-base tabular-nums text-[#0E2218] bg-transparent focus:outline-none"
            aria-label="Quantity"
          />

          {/* Vertical Up/Down Arrow Buttons */}
          <div className="flex flex-col h-full border-l border-[#EEE9DC] w-9 bg-[#FAF8F5]">
            <button
              type="button"
              onClick={() => updateQuantity(quantity + 1)}
              className="flex-1 flex items-center justify-center text-[#153324] hover:bg-[#EEE9DC] hover:text-[#0E2218] transition-colors border-b border-[#EEE9DC]"
              aria-label="Increase quantity"
              title="Increase quantity"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => updateQuantity(quantity - 1)}
              disabled={quantity <= 1}
              className="flex-1 flex items-center justify-center text-[#153324] hover:bg-[#EEE9DC] hover:text-[#0E2218] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Decrease quantity"
              title="Decrease quantity"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Official Shopify Buy Now Button */}
        <button
          type="button"
          onClick={handleBuyNow}
          disabled={isLoading}
          className="flex-1 h-14 rounded-xl gold-foil-btn text-[#0E2218] font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-md disabled:opacity-75 cursor-pointer px-6 whitespace-nowrap"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Redirecting...</span>
            </>
          ) : (
            <>
              <span>Buy now · €{(unitPrice * quantity).toFixed(2)}</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
