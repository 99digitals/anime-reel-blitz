
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { HeaderNav } from '@/components/HeaderNav';
import { useEffect } from 'react';

const Terms = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Terms of Service</h1>
          
          <div className="prose max-w-none text-gray-200">
            <p className="mb-6">Last updated: May 12, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">1. Introduction</h2>
            <p>
              Welcome to the 1800 Anime Reels Bundle. These Terms of Service govern your use of our product and provide 
              information about the product we offer, outlined below. When you purchase our product, you agree to these terms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">2. License and Usage Rights</h2>
            <p>
              Upon purchasing the 1800 Anime Reels Bundle, you receive a non-exclusive, worldwide license to use the content 
              for commercial and non-commercial purposes. This license allows you to:
            </p>
            <ul className="list-disc ml-8 my-4 space-y-2">
              <li>Use the reels on your social media accounts</li>
              <li>Edit, modify, and customize the reels as needed</li>
              <li>Use the reels for client work or for promoting businesses</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-300">3. Restrictions</h2>
            <p>You may not:</p>
            <ul className="list-disc ml-8 my-4 space-y-2">
              <li>Resell, redistribute, or provide these reels as part of another bundle</li>
              <li>Claim copyright or ownership of the original reels</li>
              <li>Use the reels in a way that violates any laws or regulations</li>
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

export default Terms;
