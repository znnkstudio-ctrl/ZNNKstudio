import React, { useEffect } from 'react';
import { ArrowLeft, Printer, FileText } from 'lucide-react';

interface TermsAndConditionsPageProps {
  onBack: () => void;
  onOpenPrivacy?: () => void;
}

export const TermsAndConditionsPage: React.FC<TermsAndConditionsPageProps> = ({
  onBack,
  onOpenPrivacy,
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
              <FileText className="w-3.5 h-3.5" />
              <span>Legal Document</span>
            </div>

            <h1 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#0E2218] font-normal tracking-tight leading-snug">
              TERMS AND CONDITIONS OF THE ZNNK STUDIO ONLINE STORE
            </h1>

            <div className="pt-2 text-sm text-[#3A4A3F] space-y-1">
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

          {/* Sections */}
          <div className="space-y-8 text-sm sm:text-[15px] text-[#3A4A3F] leading-relaxed">
            {/* §1 */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                §1. General Provisions
              </h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  These Terms and Conditions set out the rules for using the ZNNK STUDIO online store, available at https://znnkstudio.eu, hereinafter referred to as the “Store”.
                </li>
                <li>The Store sells products via the Internet.</li>
                <li>
                  The Store allows customers from European Union countries where delivery is available to make purchases.
                </li>
                <li>
                  These Terms and Conditions are addressed to consumers and businesses making purchases in the Store.
                </li>
                <li>
                  Sales are conducted in accordance with applicable European Union law and relevant national regulations.
                </li>
                <li>
                  The Store can be contacted by email at:{' '}
                  <a
                    href="mailto:znnkstudio@gmail.com"
                    className="text-[#0E2218] font-medium underline underline-offset-2 hover:text-[#C5A059]"
                  >
                    znnkstudio@gmail.com
                  </a>
                  .
                </li>
                <li>
                  Consumers do not lose the protection afforded by the mandatory provisions of the law of the country of their habitual residence.
                </li>
              </ol>
            </section>

            {/* §2 */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                §2. Definitions
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-[#0E2218]">Seller</strong> – the entity operating the ZNNK STUDIO online store.
                </li>
                <li>
                  <strong className="text-[#0E2218]">Customer</strong> – a natural person, legal person or organizational unit making purchases in the Store.
                </li>
                <li>
                  <strong className="text-[#0E2218]">Consumer</strong> – a natural person making a purchase for purposes not directly related to their business or professional activity.
                </li>
                <li>
                  <strong className="text-[#0E2218]">Product</strong> – a physical product offered for sale in the Store.
                </li>
                <li>
                  <strong className="text-[#0E2218]">Sales Agreement</strong> – an agreement concluded between the Seller and the Customer via the Store.
                </li>
              </ul>
            </section>

            {/* §3 */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                §3. Offer and Placing Orders
              </h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>The Store offers one standard product available on the website.</li>
                <li>Orders can be placed 24 hours a day via the Store’s website.</li>
                <li>
                  The purchasing process takes place by going directly from the product page to the order and payment process.
                </li>
                <li>
                  To make a purchase, the Customer:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>selects an available Product;</li>
                    <li>proceeds to the payment process;</li>
                    <li>provides the data required to fulfil the order;</li>
                    <li>selects the available delivery and payment options;</li>
                    <li>reads the Terms and Conditions;</li>
                    <li>confirms the order using a button clearly indicating an obligation to pay.</li>
                  </ul>
                </li>
                <li>
                  Before finally confirming the order, the Customer can review and correct the data entered.
                </li>
                <li>
                  After placing the order, the Customer receives confirmation of its receipt at the email address provided.
                </li>
                <li>
                  The Sales Agreement is concluded in accordance with the information presented to the Customer when placing the order and after the Seller accepts the order.
                </li>
              </ol>
            </section>

            {/* §4 */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                §4. Prices and Payments
              </h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Product prices are displayed in the currency available to the Customer when placing the order.
                </li>
                <li>Prices include taxes where required by applicable law.</li>
                <li>
                  Delivery costs are presented to the Customer before the order is finally confirmed.
                </li>
                <li>Available payment methods are displayed when placing the order.</li>
                <li>
                  Payments may be processed by external payment providers available in the Store.
                </li>
                <li>
                  If payment is not received, the Seller may suspend order fulfilment until the payment is credited.
                </li>
              </ol>
            </section>

            {/* §5 */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                §5. Order Preparation and Delivery
              </h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  The Seller delivers to the countries indicated as available when placing the order.
                </li>
                <li>
                  The standard combined time for preparing the order and delivering the Product to the Customer is 4 to 12 days.
                </li>
                <li>The stated period is the standard expected order fulfilment time.</li>
                <li>
                  Delivery time may depend on the destination country, the carrier and logistical conditions.
                </li>
                <li>
                  The Customer receives order confirmation at the email address provided.
                </li>
                <li>The Store does not provide individual shipment tracking numbers.</li>
                <li>
                  The Seller is responsible for the Product until it is physically received by the Customer or a third party designated by the Customer, in accordance with applicable law.
                </li>
                <li>
                  In the event of a delivery delay, the Customer may contact the Seller by email.
                </li>
              </ol>
            </section>

            {/* §6 */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                §6. Right of Withdrawal and Returns
              </h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  A Consumer has the right to withdraw from a distance sales agreement within 14 days without giving any reason, subject to the exceptions provided for by applicable law.
                </li>
                <li>
                  The withdrawal period begins on the day on which the Consumer, or a third party designated by the Consumer other than the carrier, takes possession of the Product.
                </li>
                <li>
                  To exercise the right of withdrawal, the Consumer must inform the Seller of their decision by means of an unequivocal statement sent to the email address indicated in §1 of these Terms and Conditions.
                </li>
                <li>The Consumer may use the withdrawal form, but this is not mandatory.</li>
                <li>
                  To meet the deadline, it is sufficient to send the notice of withdrawal before the 14-day period expires.
                </li>
                <li>
                  The Consumer must return the Product no later than 14 days from the day on which they informed the Seller of the withdrawal.
                </li>
                <li>
                  After receiving the return notification, the Seller will provide the Customer with information on the further procedure and the method of returning the Product.
                </li>
                <li>
                  The direct cost of returning the Product is borne by the Consumer, unless the Seller has agreed to bear it or has failed to inform the Consumer that they must bear it.
                </li>
                <li>
                  The Seller refunds all payments received from the Consumer, including the cost of the cheapest standard delivery offered in the Store.
                </li>
                <li>
                  The refund is made no later than 14 days from the day on which the Seller receives the notice of withdrawal. The Seller may withhold the refund until it receives the Product or proof of its return, whichever occurs first.
                </li>
                <li>
                  The refund is made using the same payment method used by the Consumer, unless the Consumer has expressly agreed to a different solution.
                </li>
                <li>
                  The Consumer is liable for any diminished value of the Product resulting from handling it in a way other than what is necessary to establish its nature, characteristics and functioning.
                </li>
                <li>
                  The right of withdrawal does not apply in cases specified by applicable law, in particular products made to the Consumer’s individual specification, perishable products, and sealed products which cannot be returned after opening for health or hygiene reasons.
                </li>
              </ol>
            </section>

            {/* §7 */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                §7. Complaints and Conformity of the Product with the Agreement
              </h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  The Seller is liable for the conformity of the Product with the agreement in accordance with applicable European Union law and relevant national regulations.
                </li>
                <li>
                  The Consumer has the right to file a complaint if the Product does not conform to the agreement.
                </li>
                <li>
                  Complaints should be submitted by email to the address indicated in §1 of these Terms and Conditions.
                </li>
                <li>
                  It is recommended that the complaint include:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>first and last name;</li>
                    <li>order number;</li>
                    <li>a description of the problem;</li>
                    <li>the preferred way of resolving the complaint;</li>
                    <li>photos documenting the problem, if available.</li>
                  </ul>
                </li>
                <li>
                  Failure to provide all of the above information does not deprive the Consumer of the right to file a complaint.
                </li>
                <li>
                  In the first instance, the Consumer may demand repair or replacement of the Product in accordance with applicable law.
                </li>
                <li>
                  In cases provided for by law, the Consumer may demand a price reduction or withdraw from the agreement.
                </li>
                <li>
                  The costs of handling a justified complaint and bringing the Product into conformity with the agreement are borne by the Seller.
                </li>
                <li>
                  The Seller will respond to the complaint within the period required by the relevant legal provisions.
                </li>
                <li>
                  The provisions of this section do not limit the Consumer’s statutory rights.
                </li>
              </ol>
            </section>

            {/* §8 */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                §8. Personal Data and Privacy
              </h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Customers’ personal data is processed in accordance with applicable law, in particular Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR).
                </li>
                <li>
                  Personal data is processed for the purpose of fulfilling orders, handling payments and deliveries, handling complaints and returns, and meeting legal obligations.
                </li>
                <li>
                  Data may be shared with entities involved in fulfilling the order, in particular payment providers, courier companies and technology service providers, including the Shopify platform.
                </li>
                <li>
                  Detailed information on the processing of personal data and cookies can be found in the Store’s separate{' '}
                  {onOpenPrivacy ? (
                    <a
                      href="#privacy-policy"
                      onClick={(e) => {
                        e.preventDefault();
                        onOpenPrivacy();
                      }}
                      className="text-[#0E2218] font-medium underline underline-offset-2 hover:text-[#C5A059]"
                    >
                      Privacy Policy
                    </a>
                  ) : (
                    'Privacy Policy'
                  )}
                  .
                </li>
              </ol>
            </section>

            {/* §9 */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                §9. Use of the Store
              </h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  The Customer undertakes to use the Store in accordance with applicable law and good practice.
                </li>
                <li>
                  It is prohibited to submit unlawful content or take actions that could disrupt the proper functioning of the Store.
                </li>
                <li>
                  The Seller exercises due care to ensure that the Store operates properly.
                </li>
                <li>
                  Nothing in these Terms and Conditions excludes or limits the Seller’s liability to the extent that such exclusion or limitation would be impermissible under applicable law.
                </li>
              </ol>
            </section>

            {/* §10 */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                §10. Governing Law
              </h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  These Terms and Conditions are governed by the law applicable to the Seller, subject to mandatory provisions protecting the Consumer in the country of their habitual residence.
                </li>
                <li>
                  In the case of sales to consumers from other European Union countries, these Terms and Conditions do not exclude the protection afforded to them by national provisions that cannot be excluded by agreement.
                </li>
                <li>
                  In the event of any discrepancy between the provisions of these Terms and Conditions and mandatory provisions of law, those provisions shall prevail.
                </li>
              </ol>
            </section>

            {/* §11 */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                §11. Final Provisions
              </h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  The Seller may amend these Terms and Conditions for important legal, organizational or technical reasons.
                </li>
                <li>
                  Amendments to the Terms and Conditions do not affect rights acquired by Customers or the terms of agreements concluded before the amendments came into force.
                </li>
                <li>
                  The new version of the Terms and Conditions will be published on the Store’s website.
                </li>
                <li>These Terms and Conditions are effective from 13 November 2026.</li>
                <li>
                  The Terms and Conditions are available free of charge on the Store’s website in a form that allows them to be saved and reproduced.
                </li>
              </ol>
            </section>

            {/* Annex No. 1 */}
            <section className="mt-10 pt-8 border-t border-[#EEE9DC]">
              <div className="bg-[#FAF8F5] border border-[#D8B772]/40 rounded-2xl p-6 sm:p-8 space-y-5">
                <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                  ANNEX NO. 1 – WITHDRAWAL FORM
                </h2>

                <div className="space-y-1 text-sm text-[#1E2420]">
                  <p>
                    <span className="font-semibold">To:</span> ZNNKstudio
                  </p>
                  <p>
                    <span className="font-semibold">Email address:</span>{' '}
                    <a
                      href="mailto:znnkstudio@gmail.com"
                      className="underline underline-offset-2 hover:text-[#C5A059]"
                    >
                      znnkstudio@gmail.com
                    </a>
                  </p>
                </div>

                <p className="text-sm text-[#3A4A3F]">
                  I/We (*) hereby inform you/give notice (*) of my/our withdrawal from the sales agreement for the following Product:
                </p>

                <div className="space-y-3 text-sm font-mono text-[#1E2420] pt-1">
                  <p>Product name: ____________________</p>
                  <p>Order number: ____________________</p>
                  <p>Order date: ____________________</p>
                  <p>Date of receipt of the Product: ____________________</p>
                  <p className="pt-2">Consumer’s name: ____________________</p>
                  <p>Consumer’s address: ____________________</p>
                  <p className="pt-2">Date: ____________________</p>
                  <p>
                    Consumer’s signature (only if this form is submitted in paper form): ____________________
                  </p>
                </div>

                <p className="text-xs text-[#5D6B62] italic pt-2">
                  (*) Delete as appropriate.
                </p>
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
