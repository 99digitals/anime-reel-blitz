import { useState, useEffect } from 'react';
import { ReelVideo } from '@/components/ReelVideo';
import { PricingSection } from '@/components/PricingSection';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { Footer } from '@/components/Footer';
import { FAQSection } from '@/components/FAQSection';
import { CountdownTimer } from '@/components/CountdownTimer';
import { SocialProofNotifications } from '@/components/SocialProofNotifications';
import { ArrowDown, Star, TrendingUp, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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

// Updated testimonials with Indian names
const testimonials = [{
  text: "My engagement increased by 300% in just two weeks after I started posting these anime reels. Best investment for my account!",
  name: "Priya Sharma",
  position: "Beauty Influencer",
  image: "/lovable-uploads/indian-testimonial-1.jpg"
}, {
  text: "I was struggling to grow my new account until I found this bundle. Now I'm gaining 500+ followers every day. The quality is amazing!",
  name: "Rajesh Kumar",
  position: "Gaming Creator",
  image: "/lovable-uploads/indian-testimonial-2.jpg"
}, {
  text: "These reels helped me land my first brand deal! The anime aesthetic makes my content stand out and brands noticed immediately.",
  name: "Sneha Patel",
  position: "Lifestyle Creator",
  image: "/lovable-uploads/indian-testimonial-3.jpg"
}];
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
          <div className="text-xl font-bold text-anime-purple">Anime Reels</div>
          
          <Button className="bg-anime-orange hover:bg-anime-orange/90 text-white" onClick={redirectToPurchase}>
            Get Access Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-anime-soft-purple via-white to-anime-pink/20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-purple-gradient">1800+ Anime Reels</span> to 
              <span className="bg-clip-text text-transparent bg-orange-gradient"> Supercharge </span>
              Your Social Media
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg mx-auto lg:mx-0">
              Instantly boost your engagement with premium anime reels that captivate your audience and make your profile stand out.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-anime-purple hover:bg-anime-purple/90 text-white px-8 py-6 text-lg" onClick={redirectToPurchase}>
                Get The Bundle
              </Button>
              
              <Button variant="outline" className="border-anime-purple text-anime-purple hover:text-anime-purple/90 px-8 py-6 text-lg" onClick={scrollToReels}>
                See Previews <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start">
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
          
          <div className="relative order-1 lg:order-2">
            <div className="bg-white p-3 rounded-3xl shadow-xl max-w-md mx-auto">
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <img alt="1800 Anime Reels Bundle" className="w-full h-full object-cover" onError={e => {
                e.currentTarget.src = "https://via.placeholder.com/600x600?text=Anime+Reels+Bundle";
              }} src="/lovable-uploads/fa41fe4b-d394-4f8c-8d38-f559b2a7f759.png" />
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 bg-yellow-400 text-black font-bold py-2 px-4 rounded-full rotate-12 animate-pulse-light">
              80% OFF Today!
            </div>
            
            <div className="absolute -bottom-5 -left-5 bg-anime-purple text-white text-sm font-medium py-2 px-4 rounded-full animate-float shadow-lg">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 text-yellow-300" fill="currentColor" />
                <span>Best Seller</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Creators <span className="bg-clip-text text-transparent bg-purple-gradient">Love Our Reels</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of content creators who are growing their social media presence with our anime reels bundle
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            icon: <TrendingUp className="h-8 w-8 text-anime-purple" />,
            title: "Boost Engagement",
            description: "Captivate your audience with eye-catching anime content that drives likes, comments, and shares."
          }, {
            icon: <Wand2 className="h-8 w-8 text-anime-purple" />,
            title: "Ready-to-Post",
            description: "No editing skills needed. Simply download, add your caption, and post to see immediate results."
          }, {
            icon: <Star className="h-8 w-8 text-anime-purple" fill="currentColor" />,
            title: "Stand Out",
            description: "Differentiate your profile with premium anime content that your competitors don't have access to."
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

      {/* Countdown Timer Section */}
      <CountdownTimer />

      {/* Preview Section */}
      <section id="preview-section" className="py-16 px-4 bg-gradient-to-b from-white to-anime-soft-purple/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-purple-gradient">Preview</span> Our Anime Reels
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some samples from our collection of 1800+ high-quality anime reels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reelVideos.map((video, index) => <ReelVideo key={index} videoUrl={video.url} title={video.title} />)}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg font-medium text-gray-700 mb-6">
              And 1794 more reels waiting for you in the complete bundle!
            </p>
            <Button className="bg-anime-purple hover:bg-anime-purple/90 text-white px-8 py-6 text-lg" onClick={redirectToPurchase}>
              Get All 1800+ Reels Now
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Content Creators Are Saying</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it—here's what other creators achieved with our anime reels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-8 rounded-xl shadow border border-gray-100">
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
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA */}
      <section className="py-20 px-4 bg-anime-purple text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Social Media?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Don't miss out on this limited-time offer to get 1800+ premium anime reels at a 80% discount!
          </p>
          <Button className="bg-white text-anime-purple hover:bg-gray-100 px-8 py-6 text-lg font-bold" onClick={redirectToPurchase}>
            Get Instant Access Now
          </Button>
          <p className="mt-4 text-sm opacity-80">Secure checkout • Instant delivery • 30-day money-back guarantee</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Widget */}
      <WhatsAppWidget phoneNumber="919103395556" />
      
      {/* Social Proof Notifications */}
      <SocialProofNotifications />
    </div>;
};
export default Index;