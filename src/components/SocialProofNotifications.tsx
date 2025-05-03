
import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Purchase {
  name: string;
  location: string;
  timeAgo: string;
  image: string;
}

export const SocialProofNotifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState<Purchase | null>(null);
  const [index, setIndex] = useState(0);
  
  // List of Indian names and cities for randomization
  const purchases: Purchase[] = [
    { 
      name: "Priya Sharma", 
      location: "Mumbai", 
      timeAgo: "2 minutes ago", 
      image: "/lovable-uploads/indian-testimonial-1.jpg" 
    },
    { 
      name: "Rajesh Kumar", 
      location: "Delhi", 
      timeAgo: "5 minutes ago", 
      image: "/lovable-uploads/indian-testimonial-2.jpg" 
    },
    { 
      name: "Ananya Patel", 
      location: "Bangalore", 
      timeAgo: "1 minute ago", 
      image: "/lovable-uploads/indian-testimonial-3.jpg" 
    },
    { 
      name: "Vikram Singh", 
      location: "Hyderabad", 
      timeAgo: "3 minutes ago", 
      image: "/lovable-uploads/indian-testimonial-1.jpg" 
    },
    { 
      name: "Divya Reddy", 
      location: "Chennai", 
      timeAgo: "Just now", 
      image: "/lovable-uploads/indian-testimonial-2.jpg" 
    },
    { 
      name: "Arjun Mehta", 
      location: "Kolkata", 
      timeAgo: "4 minutes ago", 
      image: "/lovable-uploads/indian-testimonial-3.jpg" 
    },
    { 
      name: "Pooja Gupta", 
      location: "Pune", 
      timeAgo: "7 minutes ago", 
      image: "/lovable-uploads/indian-testimonial-1.jpg" 
    },
    { 
      name: "Sanjay Verma", 
      location: "Jaipur", 
      timeAgo: "2 minutes ago", 
      image: "/lovable-uploads/indian-testimonial-2.jpg" 
    },
    { 
      name: "Meera Iyer", 
      location: "Ahmedabad", 
      timeAgo: "Just now", 
      image: "/lovable-uploads/indian-testimonial-3.jpg" 
    },
    { 
      name: "Ravi Kapoor", 
      location: "Lucknow", 
      timeAgo: "5 minutes ago", 
      image: "/lovable-uploads/indian-testimonial-1.jpg" 
    }
  ];
  
  useEffect(() => {
    // Show first notification after a delay
    const firstTimeout = setTimeout(() => {
      setCurrentPurchase(purchases[0]);
      setIsVisible(true);
    }, 3000);
    
    // Set up interval for showing notifications
    const interval = setInterval(() => {
      // Hide the current notification
      setIsVisible(false);
      
      // Wait for fade out animation to complete
      setTimeout(() => {
        // Update to next purchase
        const nextIndex = (index + 1) % purchases.length;
        setCurrentPurchase(purchases[nextIndex]);
        setIndex(nextIndex);
        
        // Show the new notification
        setIsVisible(true);
      }, 500);
      
    }, 7000); // Show a new notification every 7 seconds
    
    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, [index, purchases]);
  
  if (!currentPurchase) {
    return null;
  }
  
  return (
    <div 
      className={`fixed bottom-24 left-6 z-40 max-w-[280px] transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-100 flex items-start animate-float">
        <Avatar className="h-10 w-10 mr-3 border-2 border-anime-purple">
          <AvatarImage src={currentPurchase.image} alt={currentPurchase.name} />
          <AvatarFallback>{currentPurchase.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">
            <span className="font-bold text-anime-purple">{currentPurchase.name}</span> from <span className="text-gray-700">{currentPurchase.location}</span> purchased
          </p>
          <p className="text-sm font-medium mb-1">1800+ Anime Reels Bundle</p>
          <p className="text-xs text-gray-500">{currentPurchase.timeAgo}</p>
        </div>
      </div>
    </div>
  );
};
