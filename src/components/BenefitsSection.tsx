
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
    <section className="py-12 px-4 bg-gradient-to-br from-purple-100 to-fuchsia-100">
      <div className="container mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-xl border-2 border-purple-300 mb-8">
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-center text-purple-800">Why These Reels Convert</h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-gray-800 font-semibold">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-black w-full mt-8 shadow-xl animate-pulse-light tracking-wide border-2 border-orange-600"
            onClick={redirectToPurchase}
          >
            GET ALL 1800+ REELS NOW
          </Button>
          <p className="text-center text-sm text-gray-700 mt-3 font-medium">
            Secure payment • Instant delivery • 30-day guarantee
          </p>
        </div>
      </div>
    </section>
  );
};
