
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { HeaderNav } from '@/components/HeaderNav';

const Refund = () => {
  const redirectToPurchase = () => {
    window.open("https://rzp.io/rzp/L0POQliw", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HeaderNav redirectToPurchase={redirectToPurchase} />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Refund Policy</h1>
        
        <div className="prose max-w-none text-gray-200">
          <p className="mb-4">Last updated: May 12, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">1. Digital Product Refunds</h2>
          <p>
            We stand behind the quality of our 1800 Anime Reels Bundle. If you are not completely satisfied with your 
            purchase, we offer a 30-day money-back guarantee from the date of purchase.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">2. Refund Eligibility</h2>
          <p>
            To be eligible for a refund, please contact our support team within 30 days of your purchase with your 
            order details and reason for dissatisfaction.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">3. Refund Situations</h2>
          <p>We will issue a refund for any of the following situations:</p>
          <ul className="list-disc ml-8 my-4">
            <li>The product was not delivered to you after purchase</li>
            <li>The product does not match the description provided</li>
            <li>Technical issues prevent you from accessing or using the product</li>
            <li>Duplicate purchase or accidental purchase</li>
            <li>You are unsatisfied with the quality of the product</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">4. Refund Process</h2>
          <p>Once we receive your refund request:</p>
          <ul className="list-disc ml-8 my-4">
            <li>Our team will review your request within 2-3 business days</li>
            <li>If approved, your refund will be processed to the original payment method</li>
            <li>Refunds may take 5-10 business days to appear in your account, depending on your payment provider</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">5. Contact Us</h2>
          <p>
            If you have any questions about our refund policy, please contact our customer support team via WhatsApp at +91 9103395556
            or email us at support@99digitals.com.
          </p>
          
          <div className="mt-8">
            <Link to="/" className="text-purple-400 hover:underline">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Refund;
