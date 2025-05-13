
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { HeaderNav } from '@/components/HeaderNav';
import { useEffect } from 'react';

const Privacy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const redirectToPurchase = () => {
    window.open("https://rzp.io/rzp/L0POQliw", "_blank");
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HeaderNav redirectToPurchase={redirectToPurchase} />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Privacy Policy</h1>
          
          <div className="prose max-w-none text-gray-200">
            <p className="mb-6">Last updated: May 12, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">1. Introduction</h2>
            <p>99Digitals (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you purchase our 1800 Anime Reels Bundle.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">2. Information We Collect</h2>
            <p>
              When you purchase our product, we collect certain information from you, including:
            </p>
            <ul className="list-disc ml-8 my-4 space-y-2">
              <li>Contact information (such as name, email address)</li>
              <li>Billing information and payment details</li>
              <li>Information about your purchase</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc ml-8 my-4 space-y-2">
              <li>Process your order and payment</li>
              <li>Deliver the digital product to you</li>
              <li>Communicate with you about your purchase</li>
              <li>Provide customer support</li>
            </ul>
            
            <div className="mt-8">
              <Link to="/" className="text-purple-400 hover:underline flex items-center">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;
