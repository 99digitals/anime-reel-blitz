
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-anime-purple shadow-md py-2' : 'bg-anime-dark-purple/90 py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white">Anime Reels Bundle</div>
        
        <Button 
          className="bg-anime-orange hover:bg-orange-600 text-white font-bold" 
          onClick={redirectToPurchase}
        >
          Get 80% OFF Today
        </Button>
      </div>
    </nav>
  );
};
