
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "My engagement EXPLODED by 300% in just 2 weeks after using these anime reels. Brand deals started coming in immediately!",
      name: "Priya Sharma",
      position: "Beauty Influencer",
      image: "/lovable-uploads/indian-testimonial-1.jpg"
    }, 
    {
      text: "I went from 500 to 20,000 followers in one month with these reels. The algorithm absolutely loves this content!",
      name: "Rajesh Kumar",
      position: "Gaming Creator",
      image: "/lovable-uploads/indian-testimonial-2.jpg"
    }, 
    {
      text: "These reels helped me land THREE brand deals worth ₹50,000 each! The ROI is insane - best purchase I've made for my account.",
      name: "Sneha Patel",
      position: "Lifestyle Creator",
      image: "/lovable-uploads/indian-testimonial-3.jpg"
    }
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-white to-anime-soft-purple/20">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Real Results From Real Creators</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow border border-gray-100 hover:border-anime-purple/30 hover:shadow-lg transition-all"
            >
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                ))}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
