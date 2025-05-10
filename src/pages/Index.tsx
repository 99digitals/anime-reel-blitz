
import { useState, useEffect } from 'react';
import { ReelVideo } from '@/components/ReelVideo';
import { PricingSection } from '@/components/PricingSection';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { Footer } from '@/components/Footer';
import { FAQSection } from '@/components/FAQSection';
import { CountdownTimer } from '@/components/CountdownTimer';
import { ArrowDown, CheckCircle, Star, TrendingUp, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SocialProofNotifications } from '@/components/SocialProofNotifications';

// Updated reel video URLs
const reelVideos = [{
  url: "https://shop.worklinc.com/wp-content/uploads/2025/04/WorkLinc.in-1515.mp4",
  title: "Kawaii Anime Dance"
}, {
  url: "https://shop.worklinc.com/wp-content/uploads/2025/04/WorkLinc.in-1324.mp4",
  title: "Epic Battle Scene"
}, {
  url: "https://shop.worklinc.com/wp-content/uploads/2025/04/WorkLinc.in-1272.mp4",
  title: "Emotional Moment"
}, {
  url: "https://shop.worklinc.com/wp-content/uploads/2025/04/WorkLinc.in-2821.mp4",
  title: "Fantasy World Adventure"
}, {
  url: "https://shop.worklinc.com/wp-content/uploads/2025/04/WorkLinc.in-2161.mp4",
  title: "Slice of Life Scene"
}, {
  url: "https://shop.worklinc.com/wp-content/uploads/2025/04/WorkLinc.in-1046.mp4",
  title: "Action-Packed Sequence"
}];

// Indian user images with real URLs
const userImages = ["https://img.freepik.com/free-photo/close-up-portrait-woman-with-beautiful-hair-closed-eyes_23-2148286126.jpg?ga=GA1.1.854241204.1746212460&semt=ais_hybrid&w=740", "https://img.freepik.com/free-photo/young-man-thinking-with-pensive-expression-ai-generated_1194-588529.jpg?t=st=1746212759~exp=1746216359~hmac=99b380c7a03f66e68f9a0952aaf53596cf5b4903386cc4fc24f2004235460fa8&w=826", "https://img.freepik.com/free-photo/fashionable-young-woman-standing-front-blue-backdrop_23-2148204718.jpg?t=st=1746212760~exp=1746216360~hmac=b01d8d29b0ab2538a8adfa39c37a644b3f2d25a00b75f0ec89fcf97bd90b1795&w=826", "https://img.freepik.com/free-photo/photorealistic-lawyer-day-celebration_23-2151053984.jpg?t=st=1746212763~exp=1746216363~hmac=27235254b1ad4b87df97dfa17407c944c873efebd5e991cf98daae0027952b58&w=826"];

// Updated testimonials with Indian names and stronger benefits
const testimonials = [{
  text: "My engagement EXPLODED by 300% in just 2 weeks after using these anime reels. Brand deals started coming in immediately!",
  name: "Priya Sharma",
  position: "Beauty Influencer",
  image: "/lovable-uploads/indian-testimonial-1.jpg"
}, {
  text: "I went from 500 to 20,000 followers in one month with these reels. The algorithm absolutely loves this content!",
  name: "Rajesh Kumar",
  position: "Gaming Creator",
  image: "/lovable-uploads/indian-testimonial-2.jpg"
}, {
  text: "These reels helped me land THREE brand deals worth ₹50,000 each! The ROI is insane - best purchase I've made for my account.",
  name: "Sneha Patel",
  position: "Lifestyle Creator",
  image: "/lovable-uploads/indian-testimonial-3.jpg"
}];

// Benefits list with stronger claims
const benefits = [
  "Grow your account 5x faster with content that triggers the algorithm",
  "Get featured on explore pages across all platforms",
  "Stand out instantly from thousands of boring accounts",
  "Save 100+ hours of content creation time per month",
  "Start monetizing your account within weeks, not years",
  "Unlock brand deals with engaging, shareable content"
];

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToReels = () => {
    document.getElementById('preview-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  const redirectToPurchase = () => {
    window.open("https://rzp.io/rzp/L0POQliw", "_blank");
  };
  
  return <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-bold text-anime-purple">Anime Reels Bundle</div>
          
          <Button className="bg-anime-orange hover:bg-anime-orange/90 text-white" onClick={redirectToPurchase}>
            Get 80% OFF Today
          </Button>
        </div>
      </nav>

      {/* Hero Section - Simplified and More Powerful */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-anime-soft-purple via-white to-anime-pink/20">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 bg-anime-purple/10 text-anime-purple rounded-full text-sm font-medium mb-3">
              Limited Time Offer - 80% OFF
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight max-w-4xl mx-auto">
              <span className="bg-clip-text text-transparent bg-purple-gradient">1800+ Anime Reels</span> That Will 
              <span className="bg-clip-text text-transparent bg-orange-gradient"> 10x Your Following </span>
              In 30 Days
            </h1>
            
            <p className="text-lg md:text-xl mb-6 text-gray-700 max-w-2xl mx-auto">
              Ready-to-post anime reels that <span className="font-bold">trigger the algorithm</span> and make your content go viral across all platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <ul className="space-y-3 mb-6">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-anime-orange hover:bg-anime-orange/90 text-white px-8 py-6 text-lg w-full animate-pulse-light" onClick={redirectToPurchase}>
                    Get 80% OFF Now - Only ₹199
                  </Button>
                </div>
                
                <div className="mt-4 flex items-center justify-center">
                  <div className="flex -space-x-2">
                    {userImages.map((image, i) => <Avatar key={i} className="border-2 border-white w-8 h-8">
                        <AvatarImage src={image} alt={`User ${i + 1}`} />
                        <AvatarFallback>{i + 1}</AvatarFallback>
                      </Avatar>)}
                  </div>
                  <div className="ml-3 text-sm">
                    <span className="text-anime-purple font-semibold">4.9/5</span> 
                    <span className="text-gray-500 ml-1">from 2000+ creators</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="ghost" className="text-gray-500 flex items-center gap-1" onClick={scrollToReels}>
                  See examples <ArrowDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="bg-white p-3 rounded-3xl shadow-xl max-w-md mx-auto">
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <img alt="1800 Anime Reels Bundle" className="w-full h-full object-cover" onError={e => {
                  e.currentTarget.src = "https://via.placeholder.com/600x600?text=Anime+Reels+Bundle";
                }} src="/lovable-uploads/fa41fe4b-d394-4f8c-8d38-f559b2a7f759.png" />
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
          </div>
        </div>
      </section>

      {/* Social Proof Notifications */}
      <SocialProofNotifications />

      {/* Countdown Timer - Urgency */}
      <CountdownTimer />

      {/* Features Section - Benefits Focused */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why <span className="bg-clip-text text-transparent bg-purple-gradient">Creators Are Going Viral</span> With Our Reels</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands who transformed their social media presence overnight
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            icon: <TrendingUp className="h-8 w-8 text-anime-purple" />,
            title: "Trigger The Algorithm",
            description: "Our reels are specifically designed to hit all algorithm triggers that boost your content to explore pages and feeds."
          }, {
            icon: <Wand2 className="h-8 w-8 text-anime-purple" />,
            title: "Ready In 30 Seconds",
            description: "Simply download, add your caption, and watch the engagement roll in. No editing skills required."
          }, {
            icon: <Star className="h-8 w-8 text-anime-purple" fill="currentColor" />,
            title: "Monetize Immediately",
            description: "Content that attracts brand deals and sponsorships. Many creators land paid partnerships within weeks."
          }].map((feature, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-anime-purple/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Preview Section - Social Proof */}
      <section id="preview-section" className="py-16 px-4 bg-gradient-to-b from-white to-anime-soft-purple/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-purple-gradient">See The Content</span> That's Creating Viral Accounts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These examples are just <span className="font-bold">6 of the 1800+ reels</span> you'll get instant access to
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reelVideos.map((video, index) => <ReelVideo key={index} videoUrl={video.url} title={video.title} />)}
          </div>
          
          <div className="text-center mt-12">
            <div className="max-w-md mx-auto bg-white rounded-xl p-5 shadow-lg border border-anime-purple/10 mb-6">
              <p className="text-lg font-medium text-gray-700 mb-4">
                <span className="font-bold text-anime-purple">1794 more reels</span> waiting for you inside!
              </p>
              <Button className="bg-anime-orange hover:bg-anime-orange/90 text-white px-8 py-6 text-lg w-full" onClick={redirectToPurchase}>
                Get All 1800+ Reels - 80% OFF Today
              </Button>
              <p className="text-sm text-gray-500 mt-3">Secure payment • Instant delivery • 30-day guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Social Proof */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results From Real Creators</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how others are using these reels to transform their social media presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-8 rounded-xl shadow border border-gray-100 hover:border-anime-purple/30 hover:shadow-lg transition-all">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" />)}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>)}
          </div>
          
          <div className="text-center mt-10">
            <Button className="bg-anime-orange hover:bg-anime-orange/90 text-white px-8 py-6 text-lg" onClick={redirectToPurchase}>
              Join Them Now - 80% OFF Today
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section - Value & Scarcity */}
      <PricingSection />

      {/* FAQ Section - Objection Handling */}
      <FAQSection />

      {/* Final CTA - FOMO & Urgency */}
      <section className="py-20 px-4 bg-anime-purple text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't Miss This Limited-Time Opportunity</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            In just 30 seconds from now, you could be on your way to viral content and explosive growth!
          </p>
          <div className="max-w-md mx-auto">
            <Button className="bg-white text-anime-purple hover:bg-gray-100 px-8 py-6 text-lg font-bold w-full animate-pulse-light" onClick={redirectToPurchase}>
              Get 1800+ Reels Now - 80% OFF
            </Button>
            <p className="mt-4 text-sm opacity-80">Secure checkout • Instant access • 30-day money-back guarantee</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Widget */}
      <WhatsAppWidget phoneNumber="919103395556" />
    </div>;
};
export default Index;
