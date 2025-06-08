import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
export const TestimonialsSection = () => {
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
  return <section className="py-12 px-4 bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-purple-900/50 text-purple-300 rounded-full mb-4 border border-purple-700/30 text-sm font-medium">SOCIAL PROOF</span>
          <h2 className="text-2xl md:text-4xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-100">See How Creators Like You Got Results</h2>
          <p className="text-purple-300 max-w-2xl mx-auto">Join thousands of satisfied creators who transformed their social media presence</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-gradient-to-b from-purple-900/60 to-purple-900/30 p-6 rounded-xl shadow-2xl border border-purple-700/30 hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all transform hover:-translate-y-1">
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" />)}
              </div>
              <p className="text-purple-200 mb-6 italic font-medium">"{testimonial.text}"</p>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-3 border-2 border-purple-500/30">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-purple-300">{testimonial.position}</p>
                </div>
              </div>
            </div>)}
        </div>
        
        <div className="mt-10 text-center">
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 px-8 py-4 text-lg font-black rounded-lg shadow-xl transform transition-transform hover:scale-105 border-2 border-white" onClick={() => window.open("https://rzp.io/rzp/L0POQliw", "_blank")}>GET 90% OFF NOW - ONLY ₹99</button>
        </div>
      </div>
    </section>;
};