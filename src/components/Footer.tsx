
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-anime-purple/10 py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-anime-purple">1800 Anime Reels</h3>
            <p className="text-gray-600">
              Level up your social media game with our premium anime reels bundle.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-anime-purple">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-anime-purple transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-anime-purple transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-anime-purple transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-gray-600 hover:text-anime-purple transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-anime-purple">Connect With Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full hover:scale-110 transition-transform"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 text-white rounded-full hover:scale-110 transition-transform"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
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
          <p>© {currentYear} WorkLinc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
