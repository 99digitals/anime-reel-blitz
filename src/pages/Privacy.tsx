
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: May 2, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            WorkLinc ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains 
            how we collect, use, and share information about you when you purchase our 1800 Anime Reels Bundle.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <p>
            When you purchase our product, we collect certain information from you, including:
          </p>
          <ul className="list-disc ml-8 my-4">
            <li>Contact information (such as name, email address)</li>
            <li>Billing information and payment details</li>
            <li>Information about your purchase</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc ml-8 my-4">
            <li>Process your order and payment</li>
            <li>Deliver the digital product to you</li>
            <li>Communicate with you about your purchase</li>
            <li>Provide customer support</li>
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

export default Privacy;
