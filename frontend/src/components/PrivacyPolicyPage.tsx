import React, { useEffect } from 'react';
import { ArrowLeft, Printer, ShieldCheck } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  onBack,
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
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Privacy & GDPR</span>
            </div>

            <h1 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#0E2218] font-normal tracking-tight leading-snug">
              PRIVACY POLICY – ZNNK STUDIO
            </h1>

            <div className="pt-2 text-sm text-[#3A4A3F] space-y-1">
              <p>
                <span className="font-semibold text-[#0E2218]">Date of last update:</span> 13 November 2026
              </p>
              <p>
                <span className="font-semibold text-[#0E2218]">Website:</span>{' '}
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
                <span className="font-semibold text-[#0E2218]">Contact:</span>{' '}
                <a
                  href="mailto:znnkstudio@gmail.com"
                  className="text-[#153324] underline underline-offset-2 hover:text-[#C5A059]"
                >
                  znnkstudio@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Sections 1 - 13 */}
          <div className="space-y-8 text-sm sm:text-[15px] text-[#3A4A3F] leading-relaxed">
            {/* 1. General Provisions */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                1. General Provisions
              </h2>
              <p>
                This Privacy Policy sets out the rules for the processing and protection of personal data of users of the ZNNK STUDIO online store, available at https://znnkstudio.eu.
              </p>
              <p>The Store sells products through the Shopify platform.</p>
              <p>
                This Policy has been prepared in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR) and applicable data protection law.
              </p>
              <p>
                Using the Store and making purchases involves the processing of personal data to the extent necessary to provide the services.
              </p>
            </section>

            {/* 2. Data Controller */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                2. Data Controller
              </h2>
              <p>
                The controller of personal data is the entity operating the ZNNK STUDIO online store.
              </p>
              <p>
                For matters relating to the protection of personal data, you can contact us at:
              </p>
              <p className="font-medium text-[#0E2218]">
                Email:{' '}
                <a
                  href="mailto:znnkstudio@gmail.com"
                  className="underline underline-offset-2 hover:text-[#C5A059]"
                >
                  znnkstudio@gmail.com
                </a>
              </p>
              <p>
                The Controller makes every effort to ensure that personal data is processed in accordance with applicable law and is appropriately protected against unauthorized access.
              </p>
            </section>

            {/* 3. What Personal Data Do We Collect? */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                3. What Personal Data Do We Collect?
              </h2>
              <p>Depending on how you use the Store, we may collect the following data:</p>

              <div className="space-y-4 pt-1">
                <div>
                  <h3 className="font-semibold text-[#0E2218] mb-1">Identification data:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>first and last name;</li>
                    <li>data necessary to identify the order.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-[#0E2218] mb-1">Contact data:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>email address;</li>
                    <li>telephone number, if provided.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-[#0E2218] mb-1">Delivery data:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>delivery address;</li>
                    <li>country and postal code;</li>
                    <li>information necessary to deliver the order.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-[#0E2218] mb-1">Order data:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>products purchased;</li>
                    <li>order number;</li>
                    <li>order value;</li>
                    <li>purchase history;</li>
                    <li>information relating to payments and returns.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-[#0E2218] mb-1">Technical data:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>IP address;</li>
                    <li>web browser information;</li>
                    <li>device information;</li>
                    <li>data on activity on the website;</li>
                    <li>information collected using cookies.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. Purposes of Data Processing */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                4. Purposes of Data Processing
              </h2>
              <p>Personal data is processed for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-[#0E2218]">Order fulfilment</strong> – processing data necessary to accept, handle and deliver the order.
                </li>
                <li>
                  <strong className="text-[#0E2218]">Payment handling</strong> – processing information necessary to complete the transaction via the available payment providers.
                </li>
                <li>
                  <strong className="text-[#0E2218]">Customer communication</strong> – responding to questions, messages, requests and complaints.
                </li>
                <li>
                  <strong className="text-[#0E2218]">Returns and complaints</strong> – handling consumer rights and fulfilling obligations arising from law.
                </li>
                <li>
                  <strong className="text-[#0E2218]">Legal obligations</strong> – retaining accounting and tax records and fulfilling other legal obligations.
                </li>
                <li>
                  <strong className="text-[#0E2218]">Store security</strong> – preventing fraud, abuse and unauthorized activity.
                </li>
                <li>
                  <strong className="text-[#0E2218]">Marketing</strong> – sending commercial information, if the Customer has given appropriate consent or there is another appropriate legal basis.
                </li>
              </ul>
            </section>

            {/* 5. Legal Basis for Processing */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                5. Legal Basis for Processing
              </h2>
              <p>We process personal data on the basis of:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-[#0E2218]">Art. 6(1)(b) GDPR</strong> – to perform a sales agreement or to take steps prior to entering into it.
                </li>
                <li>
                  <strong className="text-[#0E2218]">Art. 6(1)(c) GDPR</strong> – to comply with legal obligations to which the Controller is subject.
                </li>
                <li>
                  <strong className="text-[#0E2218]">Art. 6(1)(f) GDPR</strong> – to pursue the legitimate interests of the Controller, such as protection against fraud, establishment or defence of legal claims and ensuring the security of the Store.
                </li>
                <li>
                  <strong className="text-[#0E2218]">Art. 6(1)(a) GDPR</strong> – on the basis of consent, in particular in the case of marketing activities or the use of certain cookies, where consent is required.
                </li>
              </ul>
            </section>

            {/* 6. Sharing of Personal Data */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                6. Sharing of Personal Data
              </h2>
              <p>
                Personal data may be shared with third parties only to the extent necessary for the proper functioning of the Store and the fulfilment of orders.
              </p>
              <p>These may include in particular:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-[#0E2218]">Shopify</strong> – the technology platform operating the online store.
                </li>
                <li>
                  <strong className="text-[#0E2218]">Payment providers</strong> – entities handling online payments.
                </li>
                <li>
                  <strong className="text-[#0E2218]">Courier and transport companies</strong> – entities responsible for delivering orders.
                </li>
                <li>
                  <strong className="text-[#0E2218]">IT service providers</strong> – entities providing hosting, security and technical support.
                </li>
                <li>
                  <strong className="text-[#0E2218]">Public authorities</strong> – where the obligation to disclose data arises from law.
                </li>
              </ul>
              <p className="font-medium text-[#0E2218]">
                Personal data is not sold to third parties.
              </p>
            </section>

            {/* 7. Transfers of Data Outside the European Economic Area */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                7. Transfers of Data Outside the European Economic Area
              </h2>
              <p>
                Due to the use of the Shopify platform and external service providers, some personal data may be transferred to and processed outside the European Economic Area.
              </p>
              <p>
                In such cases, data is transferred using the safeguards provided for by the GDPR, such as adequacy decisions, standard contractual clauses or other appropriate safeguards.
              </p>
            </section>

            {/* 8. Data Retention Period */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                8. Data Retention Period
              </h2>
              <p>
                We retain personal data only for the period necessary to achieve the purposes for which it was collected.
              </p>
              <p>In particular:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-[#0E2218]">Data related to orders</strong> – for the period necessary to perform the agreement and to handle any claims.
                </li>
                <li>
                  <strong className="text-[#0E2218]">Accounting and tax data</strong> – for the period required by law.
                </li>
                <li>
                  <strong className="text-[#0E2218]">Data related to complaints and returns</strong> – for the period necessary to handle them and to pursue any claims.
                </li>
                <li>
                  <strong className="text-[#0E2218]">Data processed on the basis of consent</strong> – until the consent is withdrawn or the purpose of processing ceases.
                </li>
                <li>
                  <strong className="text-[#0E2218]">Technical data and cookies</strong> – for the period resulting from the nature of the given cookie and the browser settings or the user’s consent.
                </li>
              </ul>
            </section>

            {/* 9. User Rights */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                9. User Rights
              </h2>
              <p>
                Every person whose personal data is processed has the rights arising from the GDPR, in particular:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>The right of access to their personal data.</li>
                <li>The right to rectification of inaccurate data.</li>
                <li>
                  The right to erasure of data, where the grounds provided for by law apply.
                </li>
                <li>The right to restriction of processing.</li>
                <li>The right to data portability.</li>
                <li>The right to object to the processing of data.</li>
                <li>
                  The right to withdraw consent at any time, where processing is based on consent.
                </li>
                <li>
                  The right to lodge a complaint with the competent data protection supervisory authority.
                </li>
              </ul>
              <p>
                To exercise the above rights, please contact:{' '}
                <a
                  href="mailto:znnkstudio@gmail.com"
                  className="text-[#0E2218] font-medium underline underline-offset-2 hover:text-[#C5A059]"
                >
                  znnkstudio@gmail.com
                </a>
              </p>
            </section>

            {/* 10. Cookies and Technologies Necessary for the Operation of the Store */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                10. Cookies and Technologies Necessary for the Operation of the Store
              </h2>
              <p>
                The ZNNK STUDIO online store uses cookies and similar technologies used by the Shopify platform that are necessary for the proper functioning of the website and the handling of orders.
              </p>
              <p>These technologies may be used in particular to:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>ensure the security of the website;</li>
                <li>ensure the proper operation of the purchasing and payment process;</li>
                <li>remember settings necessary to use the Store;</li>
                <li>ensure the proper functioning of the Shopify platform.</li>
              </ul>
              <p>
                The Store does not use its own additional cookies for advertising, marketing or analytical purposes.
              </p>
              <p>
                Necessary technologies are used to the extent required for the proper functioning of the Store.
              </p>
              <p>
                The user can manage cookie settings using their web browser settings. Restricting certain cookies may affect the proper functioning of the Store.
              </p>
            </section>

            {/* 11. Data Security */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                11. Data Security
              </h2>
              <p>
                The Controller applies appropriate technical and organizational measures to protect personal data.
              </p>
              <p>
                Personal data is protected against unauthorized access, loss, destruction or unauthorized disclosure.
              </p>
              <p>
                Access to data is granted only to authorized persons and entities to the extent necessary to perform the tasks entrusted to them.
              </p>
              <p>
                Data transmission in the Store takes place using the security measures offered by the Shopify platform and appropriate internet technologies.
              </p>
            </section>

            {/* 12. Changes to the Privacy Policy */}
            <section className="space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                12. Changes to the Privacy Policy
              </h2>
              <p>
                The Controller reserves the right to update this Privacy Policy in the event of changes in law, the way the Store operates or the technologies used.
              </p>
              <p>
                The current version of the Privacy Policy will be published on the website https://znnkstudio.eu.
              </p>
              <p>
                Changes take effect upon publication of the new version, unless a different date is indicated.
              </p>
            </section>

            {/* 13. Contact */}
            <section className="mt-10 pt-8 border-t border-[#EEE9DC]">
              <div className="bg-[#FAF8F5] border border-[#D8B772]/40 rounded-2xl p-6 sm:p-8 space-y-3">
                <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#0E2218] font-semibold">
                  13. Contact
                </h2>
                <p className="text-sm text-[#3A4A3F]">
                  If you have any questions regarding personal data protection, privacy or data processing, please contact us:
                </p>
                <div className="space-y-1 text-sm text-[#1E2420] pt-1">
                  <p className="font-semibold text-[#0E2218]">ZNNK STUDIO</p>
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
                  <p>
                    <span className="font-semibold">Email:</span>{' '}
                    <a
                      href="mailto:znnkstudio@gmail.com"
                      className="underline underline-offset-2 hover:text-[#C5A059]"
                    >
                      znnkstudio@gmail.com
                    </a>
                  </p>
                  <p className="pt-2 text-xs text-[#5D6B62]">
                    Privacy Policy effective date: 13 November 2026
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
