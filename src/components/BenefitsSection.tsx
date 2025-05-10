
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BenefitsSectionProps {
  redirectToPurchase: () => void;
}

export const BenefitsSection = ({ redirectToPurchase }: BenefitsSectionProps) => {
  const benefits = [
    "Grow your account 5x faster with content that triggers the algorithm",
    "Get featured on explore pages across all platforms",
    "Stand out instantly from thousands of boring accounts",
    "Save 100+ hours of content creation time per month",
    "Start monetizing your account within weeks, not years",
    "Unlock brand deals with engaging, shareable content"
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Why These Reels Convert</h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            className="bg-anime-orange hover:bg-anime-orange/90 text-white px-8 py-6 text-lg font-bold w-full mt-8 shadow-lg animate-pulse-light tracking-wide"
            onClick={redirectToPurchase}
          >
            GET ALL 1800+ REELS NOW
          </Button>
          <p className="text-center text-sm text-gray-500 mt-3">
            Secure payment • Instant delivery • 30-day guarantee
          </p>
        </div>
      </div>
    </section>
  );
};
