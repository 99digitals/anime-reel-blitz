
import { MessageCircle, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 py-12 border-t border-purple-900/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">1800+ Anime Reels by 99 Digitals</h3>
            <p className="text-gray-300">
              Premium anime reels bundle for all social media platforms.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Connect With Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://api.whatsapp.com/send?phone=919103395556" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-green-600 text-white rounded-full hover:scale-110 transition-transform border-2 border-white/10"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="https://www.instagram.com/99digitalsindia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 text-white rounded-full hover:scale-110 transition-transform border-2 border-white/10"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/99digitalsindia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full hover:scale-110 transition-transform border-2 border-white/10"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-800 text-center">
          <p className="text-gray-400">© {currentYear} 99 Digitals. All rights reserved.</p>
          <div className="flex justify-center mt-2 space-x-4 text-sm">
            <Link to="/terms" className="text-gray-500 hover:text-purple-400">Terms</Link>
            <Link to="/privacy" className="text-gray-500 hover:text-purple-400">Privacy</Link>
            <Link to="/refund" className="text-gray-500 hover:text-purple-400">Refunds</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
