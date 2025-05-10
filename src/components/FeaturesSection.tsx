
import { TrendingUp, Wand2, Star } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8 text-anime-purple" />,
      title: "Trigger The Algorithm",
      description: "Our reels are specifically designed to hit all algorithm triggers that boost your content to explore pages and feeds."
    }, 
    {
      icon: <Wand2 className="h-8 w-8 text-anime-purple" />,
      title: "Ready In 30 Seconds",
      description: "Simply download, add your caption, and watch the engagement roll in. No editing skills required."
    }, 
    {
      icon: <Star className="h-8 w-8 text-anime-purple" fill="currentColor" />,
      title: "Monetize Immediately",
      description: "Content that attracts brand deals and sponsorships. Many creators land paid partnerships within weeks."
    }
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-t from-anime-soft-purple/20 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why <span className="bg-clip-text text-transparent bg-purple-gradient">Creators Are Going Viral</span> With Our Reels</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-anime-purple/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
