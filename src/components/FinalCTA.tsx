
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

interface FinalCTAProps {
  redirectToPurchase: () => void;
}

export const FinalCTA = ({ redirectToPurchase }: FinalCTAProps) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-gray-900 via-purple-950 to-gray-900 text-white border-t border-purple-800/30">
      <div className="container mx-auto text-center">
        <span className="inline-block px-4 py-1 bg-red-600 text-white rounded-full mb-4 font-medium animate-pulse-slow">FINAL CHANCE</span>
        <h2 className="text-2xl md:text-4xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">Don't Miss This Limited-Time Opportunity</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-purple-200 font-medium">
          In just 30 seconds from now, you could be on your way to viral content and explosive growth!
        </p>
        <div className="max-w-md mx-auto">
          <Button 
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 hover:from-yellow-600 hover:to-orange-600 px-8 py-7 text-xl font-black w-full shadow-xl animate-pulse-slow tracking-wide border-4 border-white"
            onClick={redirectToPurchase}
          >
            GET 1800+ REELS NOW - 80% OFF
          </Button>
          <p className="mt-4 text-sm text-purple-200 font-medium flex items-center justify-center">
            <Star className="h-4 w-4 text-yellow-400 mr-2" fill="currentColor" />
            Secure checkout • Instant access • 30-day money-back guarantee
          </p>
        </div>
        
        <div className="mt-8 bg-purple-900/30 p-4 rounded-lg max-w-lg mx-auto border border-purple-800/30">
          <p className="text-white/90 font-medium">
            "My followers increased by 15k in just 3 weeks after using these reels consistently. Best investment for my social growth!"
          </p>
          <p className="mt-2 text-purple-300 font-medium">— Vikram M., Fashion Creator</p>
        </div>
      </div>
    </section>
  );
};
