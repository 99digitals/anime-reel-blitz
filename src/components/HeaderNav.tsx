
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderNavProps {
  redirectToPurchase: () => void;
}

export const HeaderNav = ({ redirectToPurchase }: HeaderNavProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [spotsLeft] = useState(Math.floor(Math.random() * 5) + 3); // Generate once and never increase
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      {/* Bold FOMO strip */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 py-3 text-center px-4">
        <p className="text-white font-extrabold text-sm md:text-base animate-pulse">
          <span className="bg-yellow-500 text-gray-900 px-2 py-0.5 rounded mr-2">LIMITED OFFER</span>
          <span>80% OFF ENDS TODAY! Only {spotsLeft} spots left</span>
        </p>
      </div>
      
      {/* Add spacer div to prevent content from being hidden under the fixed header */}
      <div className={`w-full ${isMobile ? 'h-14' : 'h-12'}`}></div>
    </>
  );
};
