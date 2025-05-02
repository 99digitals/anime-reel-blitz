
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-anime-purple/10 py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-anime-purple">1800+ Anime Reels by 99 Digitals</h3>
            <p className="text-gray-600">
              Level up your social media game with our premium anime reels bundle.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-anime-purple">Connect With Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://api.whatsapp.com/send?phone=919103395556" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full hover:scale-110 transition-transform"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="https://www.instagram.com/99digitalsindia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 text-white rounded-full hover:scale-110 transition-transform"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/99digitalsindia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:scale-110 transition-transform"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-500">
          <p>© {currentYear} 99 Digitals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
