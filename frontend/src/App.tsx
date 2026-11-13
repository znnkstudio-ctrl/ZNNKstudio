import React, { useState, useEffect } from 'react';
import { SnowfallAnimation } from './components/SnowfallAnimation';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductSection } from './components/ProductSection';
import { WhyYoullLoveIt } from './components/WhyYoullLoveIt';
import { EmotionalChristmasSection } from './components/EmotionalChristmasSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { TermsAndConditionsPage } from './components/TermsAndConditionsPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { ShippingPolicyPage } from './components/ShippingPolicyPage';

const TERMS_HASH = '#terms-and-conditions';
const PRIVACY_HASH = '#privacy-policy';
const SHIPPING_HASH = '#shipping-policy';

type LegalPage = 'none' | 'terms' | 'privacy' | 'shipping';

function getPageFromHash(): LegalPage {
  if (typeof window === 'undefined') return 'none';
  if (window.location.hash === TERMS_HASH) return 'terms';
  if (window.location.hash === PRIVACY_HASH) return 'privacy';
  if (window.location.hash === SHIPPING_HASH) return 'shipping';
  return 'none';
}

export default function App() {
  const [replayKey, setReplayKey] = useState<number>(0);
  const [activeLegalPage, setActiveLegalPage] = useState<LegalPage>(getPageFromHash);

  useEffect(() => {
    const syncRoute = () => {
      setActiveLegalPage(getPageFromHash());
    };
    window.addEventListener('hashchange', syncRoute);
    window.addEventListener('popstate', syncRoute);
    return () => {
      window.removeEventListener('hashchange', syncRoute);
      window.removeEventListener('popstate', syncRoute);
    };
  }, []);

  const handleOpenTerms = () => {
    if (window.location.hash !== TERMS_HASH) {
      window.history.pushState(null, '', TERMS_HASH);
    }
    setActiveLegalPage('terms');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleOpenPrivacy = () => {
    if (window.location.hash !== PRIVACY_HASH) {
      window.history.pushState(null, '', PRIVACY_HASH);
    }
    setActiveLegalPage('privacy');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleOpenShipping = () => {
    if (window.location.hash !== SHIPPING_HASH) {
      window.history.pushState(null, '', SHIPPING_HASH);
    }
    setActiveLegalPage('shipping');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleCloseLegalPage = () => {
    if (
      window.location.hash === TERMS_HASH ||
      window.location.hash === PRIVACY_HASH ||
      window.location.hash === SHIPPING_HASH
    ) {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
    setActiveLegalPage('none');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleTriggerReplaySnowfall = () => {
    setReplayKey((prev) => prev + 1);
  };

  if (activeLegalPage === 'terms') {
    return (
      <TermsAndConditionsPage
        onBack={handleCloseLegalPage}
        onOpenPrivacy={handleOpenPrivacy}
      />
    );
  }

  if (activeLegalPage === 'privacy') {
    return <PrivacyPolicyPage onBack={handleCloseLegalPage} />;
  }

  if (activeLegalPage === 'shipping') {
    return (
      <ShippingPolicyPage
        onBack={handleCloseLegalPage}
        onOpenTerms={handleOpenTerms}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2420] flex flex-col font-sans selection:bg-[#C5A059]/25 selection:text-[#0E2218]">
      {/* 1. Snowfall Opening Animation (5-10 seconds, canvas-based, non-blocking) */}
      <SnowfallAnimation triggerReplayKey={replayKey} />

      {/* 2. Top Navigation Bar */}
      <Navbar onReplaySnowfall={handleTriggerReplaySnowfall} />

      {/* 3. Main Sections */}
      <main className="flex-1">
        <HeroSection />

        {/* 4. Product Section */}
        <ProductSection />

        {/* 5. Why You'll Love It Section (4 feature cards) */}
        <WhyYoullLoveIt />

        {/* 6. Emotional Christmas Section */}
        <EmotionalChristmasSection />

        {/* 7. FAQ Section */}
        <FAQSection />
      </main>

      {/* 8. Footer */}
      <Footer
        onOpenTerms={handleOpenTerms}
        onOpenPrivacy={handleOpenPrivacy}
        onOpenShipping={handleOpenShipping}
      />
    </div>
  );
}
