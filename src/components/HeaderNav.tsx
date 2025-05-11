
import { useState, useEffect } from 'react';

interface HeaderNavProps {
  redirectToPurchase: () => void;
}

export const HeaderNav = ({ redirectToPurchase }: HeaderNavProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
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
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 py-3 text-center px-4">
        <p className="text-white font-extrabold text-sm md:text-base animate-pulse">
          <span className="bg-yellow-400 text-purple-900 px-2 py-0.5 rounded mr-2">LIMITED OFFER</span>
          <span>80% OFF ENDS TODAY! Only {Math.floor(Math.random() * 8) + 3} spots left</span>
        </p>
      </div>
    </>
  );
};
