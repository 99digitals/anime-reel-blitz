
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';

const Refund = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Refund Policy</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: May 2, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Digital Product Refunds</h2>
          <p>
            We stand behind the quality of our 1800 Anime Reels Bundle. If you are not completely satisfied with your 
            purchase, we offer a 30-day money-back guarantee from the date of purchase.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Refund Eligibility</h2>
          <p>
            To be eligible for a refund, please contact our support team within 30 days of your purchase with your 
            order details and reason for dissatisfaction.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Refund Process</h2>
          <p>Once we receive your refund request:</p>
          <ul className="list-disc ml-8 my-4">
            <li>Our team will review your request within 2-3 business days</li>
            <li>If approved, your refund will be processed to the original payment method</li>
            <li>Refunds may take 5-10 business days to appear in your account, depending on your payment provider</li>
          </ul>
          
          <div className="mt-8">
            <Link to="/" className="text-anime-purple hover:underline">
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
