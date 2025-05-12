
import { Button } from '@/components/ui/button';
import { Star, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  redirectToPurchase: () => void;
}

export const FinalCTA = ({ redirectToPurchase }: FinalCTAProps) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-gray-900 via-purple-950 to-gray-900 text-white border-t border-purple-800/30">
      <div className="container mx-auto text-center">
        <span className="inline-block px-4 py-1 bg-red-600 text-white rounded-full mb-4 font-medium animate-pulse-slow">DON'T MISS OUT</span>
        <h2 className="text-3xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">Ready to Skyrocket Your Social Media?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-purple-200 font-medium">
          Join 2,000+ creators who are growing their accounts with our premium anime reels package!
        </p>
        
        <div className="bg-purple-900/30 p-6 md:p-10 rounded-2xl max-w-3xl mx-auto border border-purple-700/50 backdrop-blur-sm shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start bg-purple-900/50 p-4 rounded-lg border border-purple-700/50">
              <Star className="h-6 w-6 text-yellow-400 mr-3 mt-1" fill="currentColor" />
              <div className="text-left">
                <h3 className="font-bold text-white text-lg">Premium Quality</h3>
                <p className="text-purple-200">1800+ hand-picked anime reels ready to post</p>
              </div>
            </div>
            
            <div className="flex items-start bg-purple-900/50 p-4 rounded-lg border border-purple-700/50">
              <Clock className="h-6 w-6 text-yellow-400 mr-3 mt-1" />
              <div className="text-left">
                <h3 className="font-bold text-white text-lg">Limited Time</h3>
                <p className="text-purple-200">80% discount ends today - don't miss it!</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8 text-center">
            <p className="text-2xl md:text-3xl font-black mb-2">
              <span className="line-through text-gray-400 text-lg mr-2">₹999</span>
              <span className="text-white">₹199</span>
            </p>
            <p className="text-yellow-400 font-medium">One-time payment • Lifetime access • No recurring fees</p>
          </div>
        
          <Button 
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 hover:from-yellow-600 hover:to-orange-600 px-8 py-8 text-xl md:text-2xl font-black w-full md:max-w-md mx-auto shadow-xl animate-pulse-slow tracking-wide border-4 border-white flex items-center justify-center gap-2"
            onClick={redirectToPurchase}
          >
            GET INSTANT ACCESS NOW <ArrowRight className="ml-2" />
          </Button>
          
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-purple-200">
            <ShieldCheck className="h-4 w-4 text-green-400" />
            <span>Secure checkout • 30-day money-back guarantee</span>
          </div>
        </div>
        
        <div className="mt-8 bg-purple-900/30 p-4 rounded-lg max-w-lg mx-auto border border-purple-800/30">
          <p className="text-white/90 italic">
            "My followers increased by 15k in just 3 weeks after using these reels consistently. Best investment for my social growth!"
          </p>
          <p className="mt-2 text-purple-300 font-medium">— Vikram M., Fashion Creator</p>
        </div>
      </div>
    </section>
  );
};
