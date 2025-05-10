
import { Button } from '@/components/ui/button';

interface FinalCTAProps {
  redirectToPurchase: () => void;
}

export const FinalCTA = ({ redirectToPurchase }: FinalCTAProps) => {
  return (
    <section className="py-16 px-4 bg-anime-purple text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Don't Miss This Limited-Time Opportunity</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          In just 30 seconds from now, you could be on your way to viral content and explosive growth!
        </p>
        <div className="max-w-md mx-auto">
          <Button 
            className="bg-white text-anime-purple hover:bg-gray-100 px-8 py-7 text-xl font-bold w-full shadow-lg animate-pulse-slow tracking-wide"
            onClick={redirectToPurchase}
          >
            GET 1800+ REELS NOW - 80% OFF
          </Button>
          <p className="mt-4 text-sm opacity-80">Secure checkout • Instant access • 30-day money-back guarantee</p>
        </div>
      </div>
    </section>
  );
};
