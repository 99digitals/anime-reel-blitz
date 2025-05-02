import { useState, useEffect } from 'react';
import { ReelVideo } from '@/components/ReelVideo';
import { PricingSection } from '@/components/PricingSection';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { Footer } from '@/components/Footer';
import { ArrowDown, Star, TrendingUp, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
const REEL_VIDEO_URL = "https://shop.worklinc.com/wp-content/uploads/2025/04/WorkLinc.in-1515.mp4";
const reelTitles = ["Kawaii Anime Dance", "Epic Battle Scene", "Emotional Moment", "Fantasy World Adventure", "Slice of Life Scene", "Action-Packed Sequence"];
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
  return <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-bold text-anime-purple">Anime Reels</div>
          
          <Button className="bg-anime-orange hover:bg-anime-orange/90 text-white" onClick={() => window.open("https://shop.worklinc.com/product/1800-anime-reels-bundle/", "_blank")}>
            Get Access Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-anime-soft-purple via-white to-anime-pink/20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-purple-gradient">1800 Anime Reels</span> to 
              <span className="bg-clip-text text-transparent bg-orange-gradient"> Supercharge </span>
              Your Social Media
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg mx-auto lg:mx-0">
              Instantly boost your engagement with premium anime reels that captivate your audience and make your profile stand out.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-anime-purple hover:bg-anime-purple/90 text-white px-8 py-6 text-lg" onClick={() => window.open("https://shop.worklinc.com/product/1800-anime-reels-bundle/", "_blank")}>
                Get The Bundle
              </Button>
              
              <Button variant="outline" className="border-anime-purple text-anime-purple hover:text-anime-purple/90 px-8 py-6 text-lg" onClick={scrollToReels}>
                See Previews <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-8 h-8 rounded-full bg-anime-purple flex items-center justify-center text-white text-xs border-2 border-white">
                    {i}
                  </div>)}
              </div>
              <div className="ml-3 text-sm">
                <span className="text-anime-purple font-semibold">4.9/5</span> 
                <span className="text-gray-500 ml-1">from 2000+ creators</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-3 rounded-3xl shadow-xl max-w-md mx-auto">
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <img alt="1800 Anime Reels Bundle" className="w-full h-full object-cover" onError={e => {
                e.currentTarget.src = "https://via.placeholder.com/600x600?text=Anime+Reels+Bundle";
              }} src="/lovable-uploads/f487024a-93a0-40af-b578-8e17c84b2fb9.jpg" />
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 bg-yellow-400 text-black font-bold py-2 px-4 rounded-full rotate-12 animate-pulse-light">
              67% OFF Today!
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

      {/* Preview Section */}
      <section id="preview-section" className="py-16 px-4 bg-gradient-to-b from-white to-anime-soft-purple/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-purple-gradient">Preview</span> Our Anime Reels
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some samples from our collection of 1800 high-quality anime reels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reelTitles.map((title, index) => <ReelVideo key={index} videoUrl={REEL_VIDEO_URL} title={title} />)}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg font-medium text-gray-700 mb-6">
              And 1794 more reels waiting for you in the complete bundle!
            </p>
            <Button className="bg-anime-purple hover:bg-anime-purple/90 text-white px-8 py-6 text-lg" onClick={() => window.open("https://shop.worklinc.com/product/1800-anime-reels-bundle/", "_blank")}>
              Get All 1800 Reels Now
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
            {[{
            text: "My engagement increased by 300% in just two weeks after I started posting these anime reels. Best investment for my account!",
            name: "Mika T.",
            position: "Beauty Influencer"
          }, {
            text: "I was struggling to grow my new account until I found this bundle. Now I'm gaining 500+ followers every day. The quality is amazing!",
            name: "James K.",
            position: "Gaming Creator"
          }, {
            text: "These reels helped me land my first brand deal! The anime aesthetic makes my content stand out and brands noticed immediately.",
            name: "Sarah L.",
            position: "Lifestyle Creator"
          }].map((testimonial, index) => <div key={index} className="bg-white p-8 rounded-xl shadow border border-gray-100">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" />)}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Got questions? We've got answers
            </p>
          </div>
          
          <div className="space-y-6">
            {[{
            question: "What exactly do I get in the bundle?",
            answer: "You'll receive instant access to 1800 premium anime reels in various styles and themes, ready to be posted on any social media platform. Each reel comes in MP4 format with commercial usage rights."
          }, {
            question: "Do I need any special software to use these reels?",
            answer: "No special software is required! The reels are ready to use and can be uploaded directly to Instagram, TikTok, Facebook or any other platform that supports video content."
          }, {
            question: "Can I edit the reels?",
            answer: "Absolutely! You can add your own text, captions, music, or any other customization using your preferred video editing app."
          }, {
            question: "Do I have to credit anyone when I post the reels?",
            answer: "No, the bundle comes with full commercial usage rights, so you don't need to provide any credit when posting the reels."
          }, {
            question: "How will I receive the reels after purchase?",
            answer: "Immediately after your purchase, you'll receive a download link where you can access all 1800 reels. The link will be active for 7 days, and you'll also receive it in your email."
          }].map((faq, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-medium text-anime-purple mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-anime-purple text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Social Media?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Don't miss out on this limited-time offer to get 1800 premium anime reels at a 67% discount!
          </p>
          <Button className="bg-white text-anime-purple hover:bg-gray-100 px-8 py-6 text-lg font-bold" onClick={() => window.open("https://shop.worklinc.com/product/1800-anime-reels-bundle/", "_blank")}>
            Get Instant Access Now
          </Button>
          <p className="mt-4 text-sm opacity-80">Secure checkout • Instant delivery • 30-day money-back guarantee</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Widget */}
      <WhatsAppWidget phoneNumber="1234567890" />
    </div>;
};
export default Index;