
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
  
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-purple-gradient">Pricing That Makes Sense</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock the full power of anime for your social media presence at an unbeatable price
          </p>
        </div>
        
        <div className="max-w-md mx-auto bg-white rounded-2xl overflow-hidden shadow-xl border border-anime-purple/20">
          <div className="bg-anime-purple text-white p-8 text-center">
            <h3 className="text-2xl font-bold">1800 Anime Reels Bundle</h3>
            <div className="flex items-center justify-center mt-4 space-x-1">
              <span className="text-4xl font-bold">$97</span>
              <span className="text-lg opacity-80">one-time</span>
            </div>
            <p className="mt-2 text-anime-soft-purple/80 text-sm">
              <span className="line-through">$297</span> Limited time offer!
            </p>
          </div>
          
          <div className="p-8">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              className="mt-8 w-full bg-anime-orange hover:bg-anime-orange/90 text-white font-medium py-6 rounded-lg text-lg animate-pulse-light"
              onClick={() => window.open("https://shop.worklinc.com/product/1800-anime-reels-bundle/", "_blank")}
            >
              Get Instant Access
            </Button>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              Secure checkout • Instant delivery • 30-day guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
