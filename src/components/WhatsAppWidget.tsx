
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WhatsAppWidgetProps {
  phoneNumber: string;
}

export const WhatsAppWidget = ({ phoneNumber }: WhatsAppWidgetProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hi!%20%F0%9F%91%8B%0A%0AI%20need%20help%20purchasing%201800%2B%20Anime%20Reels%20Bundle.`, '_blank');
  };

  return (
    <div className="whatsapp-widget">
      <div 
        className={cn(
          "flex items-center bg-white rounded-full shadow-lg transition-all duration-300 cursor-pointer",
          isHovered ? "pr-4" : ""
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleWhatsAppClick}
      >
        <div className="relative w-14 h-14 flex items-center justify-center bg-green-500 rounded-full animate-pulse-light overflow-hidden">
          <MessageCircle size={28} className="text-white" />
          <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-40"></div>
        </div>
        
        {isHovered && (
          <span className="ml-2 text-sm font-medium whitespace-nowrap animate-float">
            Need help? Chat with us!
          </span>
        )}
      </div>
    </div>
  );
};
