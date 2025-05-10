
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

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
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 mb-3 transform transition-all duration-300 max-w-[220px] border border-green-500"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-700">Need help?</span>
              <button 
                onClick={handleToggle}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close chat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            <p className="text-gray-600 text-sm mb-3">We're here to assist with your purchase!</p>
            <button 
              onClick={handleWhatsAppClick} 
              className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded-lg flex items-center justify-center text-sm transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M5 1a4 4 0 0 0-4 4v4c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H5z"/>
                <path d="M22.541 6.092c-.333-1.736-1.070-3.354-2.303-4.704l-.697.697c1.049 1.15 1.67 2.545 1.961 4.007zm-1.401 0a12.784 12.784 0 0 0-1.733-3.644l-.692.699c.65.873 1.134 1.798 1.432 2.945z" fillRule="evenodd" clipRule="evenodd"/>
                <path d="M12.716 3.55a9.232 9.232 0 0 1 5.034 4.255l.723-.664a10.236 10.236 0 0 0-5.572-4.734z"/>
                <path d="M12 1C5.925 1 1 5.925 1 12c0 2.144.612 4.142 1.67 5.833L1.5 23l5.333-1.167A10.911 10.911 0 0 0 12 23c6.075 0 11-4.925 11-11S18.075 1 12 1zm0 20c-1.721 0-3.329-.447-4.724-1.227L3 21l1.233-4.223A9.903 9.903 0 0 1 2.056 12C2.056 6.497 6.497 2.056 12 2.056c5.503 0 9.944 4.441 9.944 9.944 0 5.503-4.441 9.944-9.944 9.944z" fillRule="evenodd" clipRule="evenodd"/>
              </svg>
              Chat on WhatsApp
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={handleToggle}
          className="w-14 h-14 flex items-center justify-center bg-green-500 hover:bg-green-600 rounded-full shadow-lg shadow-green-300/30 text-white transition-transform hover:scale-105 animate-pulse-slow"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </button>
      )}
    </div>
  );
};
