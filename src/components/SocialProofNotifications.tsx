
import { useState, useEffect, useRef } from 'react';
import { ShieldCheck } from 'lucide-react';

interface Purchase {
  name: string;
  location: string;
  timeAgo: string;
}

export const SocialProofNotifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState<Purchase | null>(null);
  const [index, setIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // List of 100 Indian first names for randomization
  const indianNames: string[] = [
    "Aarav", "Aditi", "Arjun", "Ananya", "Advait", "Aisha", "Arnav", "Avni", "Ayush", "Chaaya",
    "Darsh", "Diya", "Dhruv", "Eshana", "Farhan", "Gagan", "Gitanjali", "Harini", "Ishaan", "Isha",
    "Jai", "Jhanvi", "Kabir", "Kavya", "Kiara", "Lakshya", "Manav", "Meera", "Naksh", "Navya",
    "Nihal", "Neha", "Ojas", "Pari", "Pranav", "Prisha", "Rahul", "Riya", "Rohan", "Saanvi",
    "Sahil", "Sanvi", "Shaurya", "Shreya", "Siddharth", "Tanvi", "Tara", "Udayan", "Veer", "Vivaan",
    "Yash", "Zara", "Aditya", "Anvi", "Aryan", "Avantika", "Bhavesh", "Chitra", "Dev", "Devika",
    "Gaurav", "Gauri", "Harsh", "Ishan", "Jasmine", "Karan", "Kritika", "Kunal", "Lavanya", "Manan",
    "Mira", "Neel", "Nisha", "Om", "Pallavi", "Parth", "Pooja", "Reyansh", "Ritu", "Samarth", "Sanya",
    "Shaan", "Shanaya", "Shlok", "Sneha", "Tanish", "Trisha", "Vansh", "Vanya", "Vedant", "Vidhi",
    "Virat", "Zoya", "Akshay", "Amaira", "Akhil", "Bhumika", "Chirag", "Divya", "Eesha", "Krishna"
  ];
  
  // List of 100 Indian locations for randomization
  const indianLocations: string[] = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
    "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad", "Ludhiana",
    "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan", "Vasai", "Varanasi", "Srinagar", "Aurangabad",
    "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad", "Ranchi", "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada",
    "Jodhpur", "Madurai", "Raipur", "Kota", "Chandigarh", "Guwahati", "Solapur", "Hubli", "Mysore", "Tiruchirappalli",
    "Salem", "Bhubaneswar", "Kochi", "Jamshedpur", "Bhilai", "Amravati", "Cuttack", "Bikaner", "Warangal", "Guntur",
    "Bhavnagar", "Durgapur", "Asansol", "Nanded", "Kolhapur", "Ajmer", "Akola", "Gulbarga", "Jamnagar", "Ujjain",
    "Loni", "Siliguri", "Jhansi", "Ulhasnagar", "Nellore", "Jammu", "Sangli", "Mangalore", "Erode", "Belgaum",
    "Ambattur", "Tirunelveli", "Malegaon", "Gaya", "Jalgaon", "Udaipur", "Maheshtala", "Davanagere", "Kozhikode", "Kurnool",
    "Rajpur", "Bokaro", "South Dumdum", "Bellary", "Patiala", "Gopalpur", "Agartala", "Bhagalpur", "Muzaffarnagar", "Bhatpara"
  ];
  
  // Track indices to avoid repeating names
  const [usedIndices, setUsedIndices] = useState<Set<number>>(new Set());
  
  // Generate a random time ago
  const generateTimeAgo = (): string => {
    const minMinutes = 2;
    const maxMinutes = 180; // 3 hours in minutes
    const minutes = Math.floor(Math.random() * (maxMinutes - minMinutes + 1)) + minMinutes;
    
    if (minutes < 60) {
      return `${minutes} min ago`;
    } else {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      if (remainingMinutes === 0) {
        return `${hours}h ago`;
      } else {
        return `${hours}h ${remainingMinutes}m ago`;
      }
    }
  };
  
  // Get a new unique random index
  const getUniqueRandomIndex = (max: number) => {
    if (usedIndices.size >= max - 1) {
      // Reset when we've used most indices to avoid infinite loop
      setUsedIndices(new Set());
    }
    
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * max);
    } while (usedIndices.has(randomIndex));
    
    setUsedIndices(prev => new Set(prev).add(randomIndex));
    return randomIndex;
  };
  
  const showNextNotification = () => {
    // If dismissed, don't show new notifications
    if (dismissed) return;
    
    // Hide the current notification
    setIsVisible(false);
    
    // Wait for fade out animation to complete
    setTimeout(() => {
      // Update to next purchase with randomized name, location, and time
      const nextNameIndex = getUniqueRandomIndex(indianNames.length);
      const nextLocationIndex = Math.floor(Math.random() * indianLocations.length);
      
      setCurrentPurchase({
        name: indianNames[nextNameIndex],
        location: indianLocations[nextLocationIndex],
        timeAgo: generateTimeAgo()
      });
      setIndex(prevIndex => prevIndex + 1);
      
      // Show the new notification
      setIsVisible(true);
      
      // Auto hide after 5 seconds
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      
    }, 500);
  };
  
  useEffect(() => {
    // Show first notification after a delay
    const initialNameIndex = getUniqueRandomIndex(indianNames.length);
    const initialLocationIndex = Math.floor(Math.random() * indianLocations.length);
    
    const firstTimeout = setTimeout(() => {
      setCurrentPurchase({
        name: indianNames[initialNameIndex],
        location: indianLocations[initialLocationIndex],
        timeAgo: generateTimeAgo()
      });
      setIsVisible(true);
      
      // Auto hide after 5 seconds
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }, 3000);
    
    // Set up interval for showing notifications
    const interval = setInterval(showNextNotification, 12000);
    
    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [dismissed]);
  
  const handleDismiss = () => {
    setIsVisible(false);
    setDismissed(true);
  };
  
  if (!currentPurchase || dismissed) {
    return null;
  }
  
  return (
    <div 
      className={`fixed bottom-4 left-4 z-40 max-w-[260px] transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="bg-gradient-to-r from-purple-900/80 to-purple-800/80 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-purple-700/50">
        <div className="flex items-start">
          <div className="h-8 w-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
            <span className="text-white text-xs font-bold">{currentPurchase.name.charAt(0)}</span>
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-white">
              {currentPurchase.name} from {currentPurchase.location}
            </p>
            <p className="text-[10px] text-purple-200">
              purchased the anime reels bundle
            </p>
            <p className="text-[10px] text-purple-300">{currentPurchase.timeAgo}</p>
            
            <div className="mt-1 flex items-center">
              <ShieldCheck size={12} className="text-green-400 mr-1" />
              <span className="text-[9px] text-green-400 font-medium">verified by Proof</span>
            </div>
          </div>
          
          <button 
            onClick={handleDismiss}
            className="text-purple-300 hover:text-white -mt-1 -mr-1 h-5 w-5 flex items-center justify-center"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};
