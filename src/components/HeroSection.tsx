import { ArrowDown, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';

const userImages = ["https://img.freepik.com/free-photo/close-up-portrait-woman-with-beautiful-hair-closed-eyes_23-2148286126.jpg?ga=GA1.1.854241204.1746212460&semt=ais_hybrid&w=740", "https://img.freepik.com/free-photo/young-man-thinking-with-pensive-expression-ai-generated_1194-588529.jpg?t=st=1746212759~exp=1746216359~hmac=99b380c7a03f66e68f9a0952aaf53596cf5b4903386cc4fc24f2004235460fa8&w=826", "https://img.freepik.com/free-photo/fashionable-young-woman-standing-front-blue-backdrop_23-2148204718.jpg?t=st=1746212760~exp=1746216360~hmac=b01d8d29b0ab2538a8adfa39c37a644b3f2d25a00b75f0ec89fcf97bd90b1795&w=826", "https://img.freepik.com/free-photo/photorealistic-lawyer-day-celebration_23-2151053984.jpg?t=st=1746212763~exp=1746216363~hmac=27235254b1ad4b87df97dfa17407c944c873efebd5e991cf98daae0027952b58&w=826"];

interface HeroSectionProps {
  redirectToPurchase: () => void;
  scrollToReels: () => void;
}

export const HeroSection = ({
  redirectToPurchase,
  scrollToReels
}: HeroSectionProps) => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-14 pb-12 px-4 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight text-white drop-shadow-md">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">1800+ Anime Reels</span> That Will 
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"> 10x Your Following </span>
              In 30 Days
            </h1>
            
            <p className="text-lg md:text-xl mb-6 text-purple-200 font-medium">
              Ready-to-post anime reels that <span className="font-black bg-purple-800 px-2 rounded">trigger the algorithm</span> and make your content go viral across all platforms
            </p>

            <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 px-6 py-6 text-lg md:text-xl w-full lg:w-auto font-black tracking-wide shadow-xl animate-pulse-slow mb-4 border-2 border-white" onClick={redirectToPurchase}>
              YES! I WANT 1800+ REELS - ONLY ₹99
            </Button>

            <div className="mt-4 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {userImages.map((image, i) => <Avatar key={i} className="border-2 border-purple-400 w-8 h-8">
                    <AvatarImage src={image} alt={`User ${i + 1}`} />
                    <AvatarFallback>{i + 1}</AvatarFallback>
                  </Avatar>)}
              </div>
              <div className="ml-3 text-sm">
                <span className="text-yellow-400 font-bold">4.9/5</span> 
                <span className="text-purple-200 ml-1">from 2000+ creators</span>
              </div>
            </div>
            
            <Button variant="ghost" className="mt-6 text-purple-200 flex items-center mx-auto lg:mx-0 gap-1 hover:bg-purple-900/50" onClick={scrollToReels}>
              See examples <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 mb-8 lg:mb-0 relative mt-3">
            <div className="bg-purple-900/30 backdrop-blur-sm p-3 rounded-3xl shadow-2xl max-w-md mx-auto border-2 border-purple-700/50">
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <img alt="1800 Anime Reels Bundle" className="w-full h-full object-cover" onError={e => {
                e.currentTarget.src = "https://via.placeholder.com/600x600?text=Anime+Reels+Bundle";
              }} src="/lovable-uploads/e670e987-d383-48e0-bec2-fdb3342707ea.png" />
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 bg-red-600 text-white font-black py-2 px-4 rounded-full rotate-12 animate-pulse-light shadow-lg border-2 border-white">
              ₹99 Today Only!
            </div>
            
            <div className="absolute -bottom-5 -left-5 bg-purple-900 text-white text-sm font-bold py-2 px-4 rounded-full animate-float shadow-lg border-2 border-yellow-400">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 text-yellow-400" fill="currentColor" />
                <span>Best Seller</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
