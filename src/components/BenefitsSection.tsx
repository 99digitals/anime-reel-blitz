
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
    <section className="py-12 px-4 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900">
      <div className="container mx-auto">
        <div className="bg-purple-900/40 backdrop-blur-sm p-6 rounded-xl shadow-xl border-2 border-purple-700/50 mb-8">
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-center text-white">Why These Reels Convert</h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-purple-100 font-semibold">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 px-8 py-6 text-lg font-black w-full mt-8 shadow-xl animate-pulse-light tracking-wide border-2 border-white"
            onClick={redirectToPurchase}
          >
            GET ALL 1800+ REELS NOW
          </Button>
          <p className="text-center text-sm text-purple-200 mt-3 font-medium">
            Secure payment • Instant delivery • 30-day guarantee
          </p>
        </div>
      </div>
    </section>
  );
};
