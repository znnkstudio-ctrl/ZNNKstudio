import React, { useEffect } from 'react';
import { ArrowLeft, Printer, Package } from 'lucide-react';

interface ShippingPolicyPageProps {
  onBack: () => void;
  onOpenTerms?: () => void;
}

export const ShippingPolicyPage: React.FC<ShippingPolicyPageProps> = ({
  onBack,
  onOpenTerms,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2420] flex flex-col font-sans selection:bg-[#C5A059]/25 selection:text-[#0E2218]">
      {/* Standalone Document Header */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EEE9DC] print:hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#D8B772]/50 bg-white text-[#0E2218] hover:bg-[#EEE9DC]/60 transition-colors text-xs font-semibold uppercase tracking-wider cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#C5A059]" />
            <span>Back to Store</span>
          </button>

          <button
            type="button"
            onClick={onBack}
            className="font-display-luxury text-lg sm:text-xl font-bold tracking-[0.18em] text-[#0E2218] hover:text-[#C5A059] transition-colors cursor-pointer"
          >
            ZNNKstudio
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0E2218] text-[#F7F4EC] hover:bg-[#153324] transition-colors text-xs font-medium cursor-pointer"
            title="Print or Save as PDF"
          >
            <Printer className="w-3.5 h-3.5 text-[#D8B772]" />
            <span className="hidden sm:inline">Print / Save</span>
          </button>
        </div>
      </header>

      {/* Document Content */}
      <main className="flex-1 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#EEE9DC] shadow-sm p-6 sm:p-10 lg:p-14 space-y-8">
          {/* Title Block */}
          <div className="border-b border-[#EEE9DC] pb-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#A8833B]">
              <Package className="w-3.5 h-3.5" />
              <span>Delivery Information</span>
            </div>

            <h1 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#0E2218] font-normal tracking-tight leading-snug">
              SHIPPING POLICY
            </h1>

            <div className="pt-2 text-sm text-[#3A4A3F] space-y-1">
              <p className="font-semibold text-[#0E2218]">ZNNK STUDIO Online Store</p>
              <p>
                <span className="font-semibold text-[#0E2218]">Store address:</span>{' '}
                <a
                  href="https://znnkstudio.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#153324] underline underline-offset-2 hover:text-[#C5A059]"
                >
                  https://znnkstudio.eu
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#0E2218]">Effective date:</span> 13 November 2026
              </p>
            </div>
          </div>

          {/* Sections 1 - 8 */}
          <div className="space-y-8 text-sm sm:text-[15px] text-[#3A4A3F] leading-relaxed">
            {/* 1. General Information */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                1. General Information
              </h2>
              <p>
                This Shipping Policy sets out the rules for fulfilling and delivering orders placed in the ZNNK STUDIO online store, available at https://znnkstudio.eu.
              </p>
              <p>
                The Store sells one physical product. Orders are fulfilled after they have been correctly placed and payment has been credited.
              </p>
            </section>

            {/* 2. Fulfilment and Delivery Time */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                2. Fulfilment and Delivery Time
              </h2>
              <p>
                The standard time for preparing the order and delivering the product is 4 to 12 days.
              </p>
              <p>
                The stated period is indicative. The actual delivery time may depend, among other things, on product availability, the carrier, the place of delivery and circumstances beyond the Seller’s control.
              </p>
              <p>
                In the event of a delay, the Seller will inform the Customer, where possible.
              </p>
            </section>

            {/* 3. Shipping Costs */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                3. Shipping Costs
              </h2>
              <p>
                The delivery cost is not included in the product price. It is charged separately and added to the order value.
              </p>
              <p>
                The amount of the delivery cost is presented to the Customer when placing the order, before payment is made.
              </p>
              <p>
                Before confirming the purchase, the Customer can review the total amount to be paid, including the product price and the delivery cost.
              </p>
            </section>

            {/* 4. Delivery Method */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                4. Delivery Method
              </h2>
              <p>
                Orders are delivered to the address provided by the Customer when placing the order.
              </p>
              <p>
                Delivery is carried out through an available carrier or logistics operator.
              </p>
              <p>
                The Customer is obliged to provide correct and complete address details necessary to deliver the parcel.
              </p>
            </section>

            {/* 5. Shipment Tracking */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                5. Shipment Tracking
              </h2>
              <p>The ZNNK STUDIO Store does not provide shipment tracking numbers.</p>
              <p>If you have questions about the status of your order, you can contact the Seller by email at:</p>
              <p className="font-medium text-[#0E2218]">
                <a
                  href="mailto:znnkstudio@gmail.com"
                  className="underline underline-offset-2 hover:text-[#C5A059]"
                >
                  znnkstudio@gmail.com
                </a>
              </p>
              <p>
                It is advisable to include the order number in your message to help identify it.
              </p>
            </section>

            {/* 6. Delivery Problems */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                6. Delivery Problems
              </h2>
              <p>
                If the order does not arrive within the expected time, the Customer is asked to contact{' '}
                <a
                  href="mailto:znnkstudio@gmail.com"
                  className="text-[#0E2218] font-medium underline underline-offset-2 hover:text-[#C5A059]"
                >
                  znnkstudio@gmail.com
                </a>
                .
              </p>
              <p>
                If the Customer receives a damaged product or a product that does not conform to the agreement, the Customer may submit a complaint in accordance with the rules described in the Store’s{' '}
                {onOpenTerms ? (
                  <a
                    href="#terms-and-conditions"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenTerms();
                    }}
                    className="text-[#0E2218] font-medium underline underline-offset-2 hover:text-[#C5A059]"
                  >
                    Terms and Conditions
                  </a>
                ) : (
                  'Terms and Conditions'
                )}
                .
              </p>
            </section>

            {/* 7. Incorrect Address or Uncollected Parcel */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                7. Incorrect Address or Uncollected Parcel
              </h2>
              <p>
                The Customer is responsible for the accuracy of the data provided when placing the order.
              </p>
              <p>
                If the Customer notices an error in the address, they should contact the Seller as soon as possible.
              </p>
              <p>
                Failure to collect a parcel does not automatically result in the loss of consumer rights arising from applicable law.
              </p>
            </section>

            {/* 8. Contact */}
            <section className="mt-10 pt-8 border-t border-[#EEE9DC]">
              <div className="bg-[#FAF8F5] border border-[#D8B772]/40 rounded-2xl p-6 sm:p-8 space-y-3">
                <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                  8. Contact
                </h2>
                <p className="text-sm text-[#3A4A3F]">
                  For matters concerning shipping, delivery or order fulfilment, you can contact the Store:
                </p>
                <div className="space-y-1 text-sm text-[#1E2420] pt-1">
                  <p className="font-semibold text-[#0E2218]">ZNNK STUDIO</p>
                  <p>
                    <span className="font-semibold">Email:</span>{' '}
                    <a
                      href="mailto:znnkstudio@gmail.com"
                      className="underline underline-offset-2 hover:text-[#C5A059]"
                    >
                      znnkstudio@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Website:</span>{' '}
                    <a
                      href="https://znnkstudio.eu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-[#C5A059]"
                    >
                      https://znnkstudio.eu
                    </a>
                  </p>
                  <p className="pt-2 text-xs text-[#5D6B62]">
                    This Shipping Policy is effective from 13 November 2026.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom Back Button */}
          <div className="pt-6 border-t border-[#EEE9DC] flex justify-start print:hidden">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E2218] text-[#F7F4EC] hover:bg-[#153324] transition-colors text-xs font-semibold uppercase tracking-wider cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#D8B772]" />
              <span>Return to Store</span>
            </button>
          </div>
        </article>
      </main>
    </div>
  );
};
