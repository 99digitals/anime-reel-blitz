
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: May 2, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to the 1800 Anime Reels Bundle. These Terms of Service govern your use of our product and provide 
            information about the product we offer, outlined below. When you purchase our product, you agree to these terms.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. License and Usage Rights</h2>
          <p>
            Upon purchasing the 1800 Anime Reels Bundle, you receive a non-exclusive, worldwide license to use the content 
            for commercial and non-commercial purposes. This license allows you to:
          </p>
          <ul className="list-disc ml-8 my-4">
            <li>Use the reels on your social media accounts</li>
            <li>Edit, modify, and customize the reels as needed</li>
            <li>Use the reels for client work or for promoting businesses</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Restrictions</h2>
          <p>You may not:</p>
          <ul className="list-disc ml-8 my-4">
            <li>Resell, redistribute, or provide these reels as part of another bundle</li>
            <li>Claim copyright or ownership of the original reels</li>
            <li>Use the reels in a way that violates any laws or regulations</li>
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

export default Terms;
