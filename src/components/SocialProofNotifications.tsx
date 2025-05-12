
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
  
  // List of 100 Indian names for randomization
  const indianNames: string[] = [
    "Aanya Sharma", "Aarav Patel", "Aditi Singh", "Advait Kumar", "Aisha Khan", 
    "Akshay Reddy", "Alisha Gupta", "Ananya Desai", "Aniket Joshi", "Anushka Malhotra",
    "Arjun Mehta", "Avani Iyer", "Ayush Verma", "Chaaya Roy", "Darsh Shah",
    "Devansh Kapoor", "Diya Mishra", "Divya Agarwal", "Ehsaan Ahmed", "Eshana Nair",
    "Farhan Qureshi", "Gagan Choudhary", "Gaurav Bansal", "Gitanjali Das", "Harini Venkatesh",
    "Harsh Saxena", "Ishita Bhatia", "Ishaan Sharma", "Janhvi Pandit", "Jai Mehra",
    "Kabir Khanna", "Kavya Rao", "Kiara Bose", "Kunal Tiwari", "Lakshya Narang",
    "Mahika Chawla", "Manav Malhotra", "Medha Kulkarni", "Mira Singh", "Naksh Arora",
    "Navya Chopra", "Neelam Yadav", "Niharika Menon", "Ojas Bhatt", "Pari Chatterjee",
    "Pranav Sood", "Prisha Sen", "Rahul Chhabra", "Rajat Malik", "Riya Garg",
    "Rohan Bajaj", "Saanvi Khurana", "Sahil Thakur", "Saisha Chauhan", "Sameer Oberoi",
    "Sanvi Gupta", "Sarthak Trivedi", "Shanaya Kapur", "Shaurya Krishnan", "Shreya Goyal",
    "Siddharth Nair", "Siya Jain", "Soham Mehta", "Suhana Bajpai", "Tanish Sen",
    "Tanvi Verma", "Tara Khatri", "Udayan Chandra", "Unnati Gill", "Veer Sharma", 
    "Vihaan Kapoor", "Vivaan Ahuja", "Yashvi Agrawal", "Yuvan Singhania", "Zara Khan",
    "Aahana Chakraborty", "Aakash Deshmukh", "Aanya Chowdhury", "Adarsh Mathur", "Anisha Menon",
    "Arnav Ganguly", "Arya Mukherjee", "Avni Goel", "Dhruv Sharma", "Dia Hegde",
    "Ishan Rathore", "Ishani Khosla", "Kabir Sinha", "Kavya Pillai", "Krish Reddy",
    "Kyra Malhotra", "Mannat Singh", "Myra Basu", "Navya Rao", "Neel Puri",
    "Nysa Tandon", "Parth Sethi", "Preeti Bhat", "Reyansh Kumar", "Rithvik Thapar"
  ];
  
  // List of 100 Indian locations for randomization
  const indianLocations: string[] = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", 
    "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
    "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal",
    "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad", "Ludhiana",
    "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot",
    "Kalyan", "Vasai", "Varanasi", "Srinagar", "Aurangabad",
    "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad", "Ranchi",
    "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada",
    "Jodhpur", "Madurai", "Raipur", "Kota", "Chandigarh",
    "Guwahati", "Solapur", "Hubli", "Mysore", "Tiruchirappalli",
    "Salem", "Bhubaneswar", "Kochi", "Jamshedpur", "Bhilai",
    "Amravati", "Cuttak", "Bikaner", "Warangal", "Guntur",
    "Bhavnagar", "Durgapur", "Asansol", "Nanded", "Kolhapur",
    "Ajmer", "Akola", "Gulbarga", "Jamnagar", "Ujjain",
    "Loni", "Siliguri", "Jhansi", "Ulhasnagar", "Nellore",
    "Jammu", "Sangli", "Mangalore", "Erode", "Belgaum",
    "Ambattur", "Tirunelveli", "Malegaon", "Gaya", "Jalgaon",
    "Udaipur", "Maheshtala", "Davanagere", "Kozhikode", "Kurnool",
    "Rajpur", "Bokaro", "South Dumdum", "Bellary", "Patiala",
    "Gopalpur", "Agartala", "Bhagalpur", "Muzaffarnagar", "Bhatpara"
  ];
  
  // Generate a random time ago
  const generateTimeAgo = (): string => {
    // Random time between 2 minutes and 3 hours
    const minMinutes = 2;
    const maxMinutes = 180; // 3 hours in minutes
    const minutes = Math.floor(Math.random() * (maxMinutes - minMinutes + 1)) + minMinutes;
    
    if (minutes < 60) {
      return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      if (remainingMinutes === 0) {
        return `${hours} hour${hours === 1 ? '' : 's'} ago`;
      } else {
        return `${hours}h ${remainingMinutes}m ago`;
      }
    }
  };
  
  const showNextNotification = () => {
    // If dismissed, don't show new notifications
    if (dismissed) return;
    
    // Hide the current notification
    setIsVisible(false);
    
    // Wait for fade out animation to complete
    setTimeout(() => {
      // Update to next purchase with randomized name, location, and time
      const nextIndex = (index + 1) % indianNames.length;
      setCurrentPurchase({
        name: indianNames[nextIndex],
        location: indianLocations[Math.floor(Math.random() * indianLocations.length)],
        timeAgo: generateTimeAgo()
      });
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
      setCurrentPurchase({
        name: indianNames[0],
        location: indianLocations[Math.floor(Math.random() * indianLocations.length)],
        timeAgo: generateTimeAgo()
      });
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
      <div className="bg-black/90 backdrop-blur-sm rounded-lg shadow-md p-3 border border-purple-800/50 flex flex-col">
        <button 
          onClick={handleDismiss}
          className="text-gray-400 hover:text-gray-200 self-end -mt-1 -mr-1 mb-1"
        >
          ✕
        </button>
        
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium truncate">
            <span className="font-semibold text-purple-300">{currentPurchase.name}</span> from <span className="text-gray-300">{currentPurchase.location}</span>
          </p>
          <p className="text-xs font-medium truncate text-white mb-0.5">purchased the bundle</p>
          <p className="text-[10px] text-gray-400">{currentPurchase.timeAgo}</p>
          
          <div className="mt-2 pt-1 border-t border-purple-800/30 flex items-center justify-center">
            <ShieldCheck size={12} className="text-green-500 mr-1" />
            <span className="text-[10px] text-green-400 font-medium">Verified by Proof</span>
          </div>
        </div>
      </div>
    </div>
  );
};
