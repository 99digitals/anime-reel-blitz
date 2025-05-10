
import { ArrowDown, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const userImages = [
  "https://img.freepik.com/free-photo/close-up-portrait-woman-with-beautiful-hair-closed-eyes_23-2148286126.jpg?ga=GA1.1.854241204.1746212460&semt=ais_hybrid&w=740", 
  "https://img.freepik.com/free-photo/young-man-thinking-with-pensive-expression-ai-generated_1194-588529.jpg?t=st=1746212759~exp=1746216359~hmac=99b380c7a03f66e68f9a0952aaf53596cf5b4903386cc4fc24f2004235460fa8&w=826", 
  "https://img.freepik.com/free-photo/fashionable-young-woman-standing-front-blue-backdrop_23-2148204718.jpg?t=st=1746212760~exp=1746216360~hmac=b01d8d29b0ab2538a8adfa39c37a644b3f2d25a00b75f0ec89fcf97bd90b1795&w=826", 
  "https://img.freepik.com/free-photo/photorealistic-lawyer-day-celebration_23-2151053984.jpg?t=st=1746212763~exp=1746216363~hmac=27235254b1ad4b87df97dfa17407c944c873efebd5e991cf98daae0027952b58&w=826"
];

interface HeroSectionProps {
  redirectToPurchase: () => void;
  scrollToReels: () => void;
}

export const HeroSection = ({ redirectToPurchase, scrollToReels }: HeroSectionProps) => {
  return (
    <section className="pt-28 pb-12 px-4 bg-gradient-to-br from-anime-soft-purple via-white to-anime-pink/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="bg-white p-3 rounded-3xl shadow-xl max-w-md mx-auto">
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <img 
                  alt="1800 Anime Reels Bundle" 
                  className="w-full h-full object-cover" 
                  onError={e => {
                    e.currentTarget.src = "https://via.placeholder.com/600x600?text=Anime+Reels+Bundle";
                  }}
                  src="/lovable-uploads/fa41fe4b-d394-4f8c-8d38-f559b2a7f759.png" 
                />
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 bg-red-500 text-white font-bold py-2 px-4 rounded-full rotate-12 animate-pulse-light">
              ₹199 Today Only!
            </div>
            
            <div className="absolute -bottom-5 -left-5 bg-anime-purple text-white text-sm font-medium py-2 px-4 rounded-full animate-float shadow-lg">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 text-yellow-300" fill="currentColor" />
                <span>Best Seller</span>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block px-3 py-1 bg-anime-purple/10 text-anime-purple rounded-full text-sm font-medium mb-3">
              Limited Time Offer - 80% OFF
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-clip-text text-transparent bg-purple-gradient">1800+ Anime Reels</span> That Will 
              <span className="bg-clip-text text-transparent bg-orange-gradient"> 10x Your Following </span>
              In 30 Days
            </h1>
            
            <p className="text-lg md:text-xl mb-6 text-gray-700">
              Ready-to-post anime reels that <span className="font-bold">trigger the algorithm</span> and make your content go viral across all platforms
            </p>

            <Button 
              className="bg-anime-orange hover:bg-anime-orange/90 text-white px-6 py-6 text-lg md:text-xl w-full lg:w-auto font-bold tracking-wide shadow-lg animate-pulse-slow mb-4"
              onClick={redirectToPurchase}
            >
              GET 80% OFF NOW - ONLY ₹199
            </Button>

            <div className="mt-4 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {userImages.map((image, i) => (
                  <Avatar key={i} className="border-2 border-white w-8 h-8">
                    <AvatarImage src={image} alt={`User ${i + 1}`} />
                    <AvatarFallback>{i + 1}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="ml-3 text-sm">
                <span className="text-anime-purple font-semibold">4.9/5</span> 
                <span className="text-gray-500 ml-1">from 2000+ creators</span>
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              className="mt-6 text-gray-500 flex items-center mx-auto lg:mx-0 gap-1" 
              onClick={scrollToReels}
            >
              See examples <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
