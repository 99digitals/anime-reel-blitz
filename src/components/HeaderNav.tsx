
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ShieldCheck } from 'lucide-react';

interface HeaderNavProps {
  redirectToPurchase: () => void;
}

export const HeaderNav = ({ redirectToPurchase }: HeaderNavProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(() => {
    // Use local storage to ensure count starts at 16 for new users
    // and persists for returning users
    const storedSpots = localStorage.getItem('spotsLeft');
    return storedSpots ? parseInt(storedSpots) : 16;
  });
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Decrease spots over time but never increase or go below 2
    const spotsTimer = setInterval(() => {
      setSpotsLeft(prev => {
        const newValue = Math.max(2, prev - 1);
        localStorage.setItem('spotsLeft', newValue.toString());
        return newValue;
      });
    }, 70000); // Every ~1.2 minutes decrease by 1
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(spotsTimer);
    };
  }, []);
  
  return (
    <>
      {/* Bold FOMO strip */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 py-2 text-center px-4">
        <p className="text-white font-extrabold text-sm md:text-base animate-pulse">
          <span className="bg-yellow-500 text-gray-900 px-2 py-0.5 rounded mr-2">LIMITED OFFER</span>
          <span>80% OFF ENDS TODAY! Only {spotsLeft} spots left</span>
        </p>
      </div>
      
      {/* Add spacer div to prevent content from being hidden under the fixed header */}
      <div className="h-10 bg-transparent"></div>
    </>
  );
};
