
import { Button } from '@/components/ui/button';

interface FinalCTAProps {
  redirectToPurchase: () => void;
}

export const FinalCTA = ({ redirectToPurchase }: FinalCTAProps) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-black mb-6">Don't Miss This Limited-Time Opportunity</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-yellow-200 font-medium">
          In just 30 seconds from now, you could be on your way to viral content and explosive growth!
        </p>
        <div className="max-w-md mx-auto">
          <Button 
            className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 px-8 py-7 text-xl font-black w-full shadow-xl animate-pulse-slow tracking-wide border-4 border-white"
            onClick={redirectToPurchase}
          >
            GET 1800+ REELS NOW - 80% OFF
          </Button>
          <p className="mt-4 text-sm text-yellow-200 font-medium">Secure checkout • Instant access • 30-day money-back guarantee</p>
        </div>
      </div>
    </section>
  );
};
