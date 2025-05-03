
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    <div className="whatsapp-widget">
      {isExpanded ? (
        <div className="flex flex-col items-end">
          <div 
            className="bg-white rounded-lg shadow-lg p-4 mb-3 transform transition-all duration-300 animate-fade-in max-w-[260px]"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold text-gray-700">Chat with us</span>
              <button 
                onClick={handleToggle}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-gray-600 text-sm mb-3">Need help with your purchase? We're here to assist you!</p>
            <button 
              onClick={handleWhatsAppClick} 
              className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded flex items-center justify-center"
            >
              <svg viewBox="0 0 32 32" className="w-5 h-5 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.004 0h-0.008c-8.837 0-16 7.163-16 16 0 3.497 1.123 6.741 3.029 9.377l-1.988 5.901 6.091-1.947c2.529 1.668 5.537 2.638 8.77 2.669 0.030 0 0.061 0 0.093 0 8.835 0 16.004-7.163 16.004-16s-7.169-16-16.004-16zM25.315 22.647c-0.481 1.359-2.393 2.483-3.912 2.813-1.041 0.224-2.402 0.405-6.982-1.497-5.86-2.433-9.646-8.376-9.941-8.764-0.283-0.387-2.371-3.15-2.371-6.011 0-2.863 1.458-4.258 2.026-4.839 0.452-0.495 1.2-0.723 1.916-0.723 0.232 0 0.439 0.011 0.627 0.019 0.549 0.023 0.825 0.056 1.188 0.923 0.452 1.092 1.551 3.792 1.681 4.072 0.133 0.28 0.267 0.659 0.076 1.026-0.177 0.387-0.325 0.561-0.603 0.893-0.277 0.332-0.541 0.585-0.819 0.941-0.253 0.309-0.54 0.642-0.221 1.216 0.32 0.573 1.423 2.448 3.055 3.961 2.105 1.948 3.883 2.553 4.441 2.837 0.407 0.204 0.892 0.157 1.196-0.187 0.381-0.435 0.852-1.156 1.328-1.861 0.336-0.499 0.76-0.557 1.208-0.385 0.452 0.165 2.849 1.341 3.339 1.587 0.491 0.243 0.815 0.368 0.932 0.574 0.121 0.206 0.121 1.176-0.361 2.537z"/>
              </svg>
              Chat on WhatsApp
            </button>
          </div>
          <button 
            onClick={handleToggle}
            className="relative w-14 h-14 flex items-center justify-center bg-green-500 rounded-full animate-pulse-light"
          >
            <X size={28} className="text-white" />
          </button>
        </div>
      ) : (
        <button 
          onClick={handleToggle}
          className="relative w-14 h-14 flex items-center justify-center bg-green-500 rounded-full animate-pulse-light overflow-hidden"
          aria-label="Open chat"
        >
          <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-40"></div>
          <svg viewBox="0 0 32 32" className="w-7 h-7 text-white fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.004 0h-0.008c-8.837 0-16 7.163-16 16 0 3.497 1.123 6.741 3.029 9.377l-1.988 5.901 6.091-1.947c2.529 1.668 5.537 2.638 8.77 2.669 0.030 0 0.061 0 0.093 0 8.835 0 16.004-7.163 16.004-16s-7.169-16-16.004-16zM25.315 22.647c-0.481 1.359-2.393 2.483-3.912 2.813-1.041 0.224-2.402 0.405-6.982-1.497-5.86-2.433-9.646-8.376-9.941-8.764-0.283-0.387-2.371-3.15-2.371-6.011 0-2.863 1.458-4.258 2.026-4.839 0.452-0.495 1.2-0.723 1.916-0.723 0.232 0 0.439 0.011 0.627 0.019 0.549 0.023 0.825 0.056 1.188 0.923 0.452 1.092 1.551 3.792 1.681 4.072 0.133 0.28 0.267 0.659 0.076 1.026-0.177 0.387-0.325 0.561-0.603 0.893-0.277 0.332-0.541 0.585-0.819 0.941-0.253 0.309-0.54 0.642-0.221 1.216 0.32 0.573 1.423 2.448 3.055 3.961 2.105 1.948 3.883 2.553 4.441 2.837 0.407 0.204 0.892 0.157 1.196-0.187 0.381-0.435 0.852-1.156 1.328-1.861 0.336-0.499 0.76-0.557 1.208-0.385 0.452 0.165 2.849 1.341 3.339 1.587 0.491 0.243 0.815 0.368 0.932 0.574 0.121 0.206 0.121 1.176-0.361 2.537z"/>
          </svg>
        </button>
      )}
    </div>
  );
};
