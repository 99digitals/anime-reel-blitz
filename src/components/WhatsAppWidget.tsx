
import { useState } from 'react';
import { X } from 'lucide-react';

interface WhatsAppWidgetProps {
  phoneNumber: string;
}

export const WhatsAppWidget = ({ phoneNumber }: WhatsAppWidgetProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  
  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hi!%20%F0%9F%91%8B%0A%0AI%20need%20help%20purchasing%201800%2B%20Anime%20Reels%20Bundle.`, '_blank');
  };

  return (
    <div className="whatsapp-widget fixed right-4 bottom-4 z-40 flex flex-col items-end">
      {isExpanded ? (
        <div className="flex flex-col items-end animate-fade-in">
          <div 
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 mb-3 transform transition-all duration-300 max-w-[220px] border-2 border-green-400"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-700 text-sm">Need help?</span>
              <button 
                onClick={handleToggle}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            </div>
            <p className="text-gray-600 text-xs mb-3">We're here to assist with your purchase!</p>
            <button 
              onClick={handleWhatsAppClick} 
              className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded-xl flex items-center justify-center text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 mr-1 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <button 
            onClick={handleToggle}
            className="relative w-14 h-14 flex items-center justify-center bg-green-500 rounded-full shadow-lg shadow-green-300/50 overflow-hidden border-2 border-white"
            aria-label="Open chat"
          >
            {/* WhatsApp Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </button>
          
          {/* Anime Girl Animation */}
          <div className="absolute -bottom-2 -right-2 z-10 animation-container">
            <div className="anime-girl">
              <style>
                {`
                @keyframes climbUp {
                  0% { transform: translateY(100%) rotate(5deg); }
                  70% { transform: translateY(-5%) rotate(-2deg); }
                  80% { transform: translateY(-20%) rotate(0deg); }
                  90% { transform: translateY(-5%) rotate(-5deg); }
                  100% { transform: translateY(100%) rotate(10deg); }
                }
                
                @keyframes wavingHand {
                  0% { transform: rotate(0deg); }
                  25% { transform: rotate(20deg); }
                  50% { transform: rotate(0deg); }
                  75% { transform: rotate(20deg); }
                  100% { transform: rotate(0deg); }
                }
                
                @keyframes blinking {
                  0% { opacity: 1; }
                  49% { opacity: 1; }
                  50% { opacity: 0; }
                  100% { opacity: 0; }
                }
                
                .anime-girl {
                  position: absolute;
                  bottom: -10px;
                  right: -10px;
                  width: 45px;
                  height: 45px;
                  animation: climbUp 4s ease-in-out infinite;
                  z-index: -1;
                }
                
                .anime-girl::before {
                  content: '👧';
                  font-size: 36px;
                  position: absolute;
                  bottom: 0;
                  right: 0;
                }
                
                .anime-girl::after {
                  content: '👋';
                  font-size: 20px;
                  position: absolute;
                  top: -15px;
                  right: 10px;
                  animation: wavingHand 0.5s ease-in-out infinite;
                  transform-origin: bottom center;
                }
                
                .anime-girl-speech {
                  position: absolute;
                  top: -25px;
                  right: -5px;
                  background: white;
                  border-radius: 10px;
                  padding: 3px 6px;
                  font-size: 12px;
                  opacity: 0;
                  animation: blinking 4s infinite;
                }
                `}
              </style>
              <div className="anime-girl-speech">Hi!</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
