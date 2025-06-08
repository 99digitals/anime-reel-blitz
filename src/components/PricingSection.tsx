
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const PricingSection = () => {
  const features = [
    "1800 Premium anime reels ready to post",
    "Multiple anime styles and themes",
    "Fully customizable text and captions",
    "Commercial usage rights",
    "Compatible with all social platforms",
    "Regular updates with fresh content"
  ];
  
  const handlePurchase = () => {
    window.open("https://rzp.io/rzp/L0POQliw", "_blank");
  };
  
  return (
    <section className="py-12 px-4 md:py-16 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-white">Pricing That Makes <span className="text-yellow-400">Sense</span></h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Unlock the full power of anime for your social media presence at an unbeatable price
          </p>
        </div>
        
        <div className="max-w-md mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-purple-700/50">
          <div className="bg-purple-900 text-white p-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold">1800+ Anime Reels Bundle</h3>
            <div className="flex items-center justify-center mt-3 space-x-1">
              <span className="text-3xl md:text-4xl font-bold">₹99</span>
              <span className="text-base opacity-80">one-time</span>
            </div>
            <p className="mt-2 text-purple-300 text-sm">
              <span className="line-through">₹999</span> Limited time offer!
            </p>
          </div>
          
          <div className="p-6">
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              className="mt-6 w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 font-bold py-4 rounded-lg text-base animate-pulse-light h-auto border-2 border-white"
              onClick={handlePurchase}
            >
              Get Instant Access
            </Button>
            
            <p className="text-center text-xs md:text-sm text-gray-400 mt-3">
              Secure checkout • Instant delivery • 30-day guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
