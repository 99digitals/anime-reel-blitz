
import { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { X } from 'lucide-react';

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
  const [dismissed, setDismissed] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // List of Indian names and cities for randomization
  const purchases: Purchase[] = [
    { 
      name: "Priya Sharma", 
      location: "Mumbai", 
      timeAgo: "2 minutes ago", 
      image: "https://img.freepik.com/free-photo/close-up-portrait-woman-with-beautiful-hair-closed-eyes_23-2148286126.jpg?ga=GA1.1.854241204.1746212460&semt=ais_hybrid&w=740" 
    },
    { 
      name: "Rajesh Kumar", 
      location: "Delhi", 
      timeAgo: "5 minutes ago", 
      image: "https://img.freepik.com/free-photo/young-man-thinking-with-pensive-expression-ai-generated_1194-588529.jpg?t=st=1746212759~exp=1746216359~hmac=99b380c7a03f66e68f9a0952aaf53596cf5b4903386cc4fc24f2004235460fa8&w=826" 
    },
    { 
      name: "Ananya Patel", 
      location: "Bangalore", 
      timeAgo: "1 minute ago", 
      image: "https://img.freepik.com/free-photo/fashionable-young-woman-standing-front-blue-backdrop_23-2148204718.jpg?t=st=1746212760~exp=1746216360~hmac=b01d8d29b0ab2538a8adfa39c37a644b3f2d25a00b75f0ec89fcf97bd90b1795&w=826" 
    },
    { 
      name: "Vikram Singh", 
      location: "Hyderabad", 
      timeAgo: "3 minutes ago", 
      image: "https://img.freepik.com/free-photo/photorealistic-lawyer-day-celebration_23-2151053984.jpg?t=st=1746212763~exp=1746216363~hmac=27235254b1ad4b87df97dfa17407c944c873efebd5e991cf98daae0027952b58&w=826" 
    },
    { 
      name: "Divya Reddy", 
      location: "Chennai", 
      timeAgo: "Just now", 
      image: "https://img.freepik.com/free-photo/close-up-portrait-woman-with-beautiful-hair-closed-eyes_23-2148286126.jpg?ga=GA1.1.854241204.1746212460&semt=ais_hybrid&w=740" 
    },
    { 
      name: "Arjun Mehta", 
      location: "Kolkata", 
      timeAgo: "4 minutes ago", 
      image: "https://img.freepik.com/free-photo/young-man-thinking-with-pensive-expression-ai-generated_1194-588529.jpg?t=st=1746212759~exp=1746216359~hmac=99b380c7a03f66e68f9a0952aaf53596cf5b4903386cc4fc24f2004235460fa8&w=826" 
    },
    { 
      name: "Pooja Gupta", 
      location: "Pune", 
      timeAgo: "7 minutes ago", 
      image: "https://img.freepik.com/free-photo/fashionable-young-woman-standing-front-blue-backdrop_23-2148204718.jpg?t=st=1746212760~exp=1746216360~hmac=b01d8d29b0ab2538a8adfa39c37a644b3f2d25a00b75f0ec89fcf97bd90b1795&w=826" 
    },
    { 
      name: "Sanjay Verma", 
      location: "Jaipur", 
      timeAgo: "2 minutes ago", 
      image: "https://img.freepik.com/free-photo/photorealistic-lawyer-day-celebration_23-2151053984.jpg?t=st=1746212763~exp=1746216363~hmac=27235254b1ad4b87df97dfa17407c944c873efebd5e991cf98daae0027952b58&w=826" 
    },
    { 
      name: "Meera Iyer", 
      location: "Ahmedabad", 
      timeAgo: "Just now", 
      image: "https://img.freepik.com/free-photo/close-up-portrait-woman-with-beautiful-hair-closed-eyes_23-2148286126.jpg?ga=GA1.1.854241204.1746212460&semt=ais_hybrid&w=740" 
    },
    { 
      name: "Ravi Kapoor", 
      location: "Lucknow", 
      timeAgo: "5 minutes ago", 
      image: "https://img.freepik.com/free-photo/young-man-thinking-with-pensive-expression-ai-generated_1194-588529.jpg?t=st=1746212759~exp=1746216359~hmac=99b380c7a03f66e68f9a0952aaf53596cf5b4903386cc4fc24f2004235460fa8&w=826" 
    }
  ];
  
  const showNextNotification = () => {
    // If dismissed, don't show new notifications
    if (dismissed) return;
    
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
      
      // Auto hide after 3 seconds
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      
    }, 500);
  };
  
  useEffect(() => {
    // Show first notification after a delay
    const firstTimeout = setTimeout(() => {
      setCurrentPurchase(purchases[0]);
      setIsVisible(true);
      
      // Auto hide after 3 seconds
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }, 3000);
    
    // Set up interval for showing notifications
    const interval = setInterval(showNextNotification, 9000);
    
    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [index, dismissed]);
  
  const handleDismiss = () => {
    setIsVisible(false);
    setDismissed(true);
  };
  
  if (!currentPurchase || dismissed) {
    return null;
  }
  
  return (
    <div 
      className={`fixed bottom-24 left-6 z-40 max-w-[220px] transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-md p-3 border border-anime-purple/20 flex items-start">
        <Avatar className="h-8 w-8 mr-2 border border-anime-purple/30">
          <AvatarImage src={currentPurchase.image} alt={currentPurchase.name} />
          <AvatarFallback>{currentPurchase.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium truncate">
            <span className="font-semibold text-anime-purple">{currentPurchase.name}</span> from <span className="text-gray-700">{currentPurchase.location}</span>
          </p>
          <p className="text-xs font-medium truncate mb-0.5">purchased the bundle</p>
          <p className="text-[10px] text-gray-500">{currentPurchase.timeAgo}</p>
        </div>
        <button 
          onClick={handleDismiss}
          className="text-gray-400 hover:text-gray-600 -mt-1 -mr-1"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};
