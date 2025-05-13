
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { HeaderNav } from '@/components/HeaderNav';
import { ShieldCheck, MessageCircle } from 'lucide-react';
import { useEffect } from 'react';

const Refund = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const redirectToPurchase = () => {
    window.open("https://rzp.io/rzp/L0POQliw", "_blank");
  };
  
  return <div className="min-h-screen bg-gray-900 text-white">
      <HeaderNav redirectToPurchase={redirectToPurchase} />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Refund Policy</h1>
          
          <div className="prose max-w-none text-gray-200">
            <p className="mb-6">Last updated: May 12, 2025</p>
            
            <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-800/30 mb-8">
              <div className="flex items-center mb-4">
                <ShieldCheck className="h-6 w-6 text-green-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white m-0">Our Promise</h2>
              </div>
              <p className="text-purple-200">
                We stand behind the quality of our 1800+ Anime Reels Bundle. If you encounter issues with your 
                purchase, we offer a 30-day refund policy from the date of purchase for specific cases outlined below.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">1. Refund Eligibility</h2>
            <p>
              To be eligible for a refund, please contact our support team within 30 days of your purchase with your 
              order details and reason for requesting a refund.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">2. Refund Situations</h2>
            <p>We will issue a full refund for any of the following situations:</p>
            <ul className="list-disc ml-8 my-4 space-y-2">
              <li>The product was not delivered to you after purchase</li>
              <li>The product does not match the description provided</li>
              <li>Technical issues prevent you from accessing or using the product</li>
              <li>Duplicate purchase by accident</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">3. Refund Process</h2>
            <p>Once we receive your refund request:</p>
            <ul className="list-disc ml-8 my-4 space-y-2">
              <li>Our team will review your request within 2-3 business days</li>
              <li>If approved, your refund will be processed to the original payment method</li>
              <li>Refunds may take 3-5 business days to appear in your account, depending on your payment provider</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">4. Contact Us</h2>
            <p>
              If you have any questions about our refund policy, please contact our customer support team via WhatsApp at +91 9103395556
              or email us at support@99digitals.com.
            </p>
            
            <div className="mt-10 p-6 bg-purple-900/30 rounded-lg border border-purple-800/30">
              <p className="font-medium text-center text-white">
                Still have questions? We're here to help!
              </p>
              <p className="text-center mt-2">
                <a href="https://api.whatsapp.com/send?phone=919103395556" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-400 hover:text-green-300 font-medium">
                  <MessageCircle className="h-4 w-4 mr-1" /> Contact on WhatsApp
                </a>
              </p>
            </div>
            
            <div className="mt-8">
              <Link to="/" className="text-purple-400 hover:underline flex items-center">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default Refund;
