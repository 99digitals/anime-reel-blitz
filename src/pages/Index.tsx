
import { useEffect } from 'react';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { Footer } from '@/components/Footer';
import { FAQSection } from '@/components/FAQSection';
import { CountdownTimer } from '@/components/CountdownTimer';
import { PricingSection } from '@/components/PricingSection';
import { HeaderNav } from '@/components/HeaderNav';
import { HeroSection } from '@/components/HeroSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { PreviewSection } from '@/components/PreviewSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FinalCTA } from '@/components/FinalCTA';
import { SocialProofNotifications } from '@/components/SocialProofNotifications';
import { initializeMetaPixel, trackViewContent, trackInitiateCheckout } from '@/utils/metaPixel';

const Index = () => {
  useEffect(() => {
    // Initialize Meta Pixel
    initializeMetaPixel('1660731888189701');
    
    // Track ViewContent event
    trackViewContent();
  }, []);

  const redirectToPurchase = () => {
    // Track InitiateCheckout event before redirecting
    trackInitiateCheckout();
    window.open("https://rzp.io/rzp/L0POQliw", "_blank");
  };
  
  const scrollToReels = () => {
    document.getElementById('preview-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <HeaderNav redirectToPurchase={redirectToPurchase} />

      {/* Hero Section */}
      <HeroSection redirectToPurchase={redirectToPurchase} scrollToReels={scrollToReels} />

      {/* Countdown Timer */}
      <CountdownTimer />

      {/* Benefits Section */}
      <BenefitsSection redirectToPurchase={redirectToPurchase} />

      {/* Features Section */}
      <FeaturesSection />

      {/* Preview Section */}
      <PreviewSection redirectToPurchase={redirectToPurchase} />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA */}
      <FinalCTA redirectToPurchase={redirectToPurchase} />

      {/* Footer */}
      <Footer />
      
      {/* Social Proof Notifications */}
      <SocialProofNotifications />
      
      {/* WhatsApp Widget */}
      <WhatsAppWidget phoneNumber="919103395556" />
    </div>
  );
};

export default Index;
