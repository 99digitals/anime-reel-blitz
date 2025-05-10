
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
              <svg viewBox="0 0 32 32" className="w-4 h-4 mr-1 fill-current">
                <path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-.91-.73-1.91 0-.188-.1-.173-.343-.173-.1 0-.187-.04-.229-.143-.1-.172-.26-.454-.26-.632 0-.056-.03-.2-.03-.258-.16-.73-.6-1.4-1.23-1.86-.187-.145-.46.45-.6.1-.13.63-.04 1.33.156 1.963.228.716.644 1.363 1.175 1.92.13.143.202.215.26.215.1 0 .13.1.088.172 0 .013-.485 1.202-.557 1.376-.1.215-.16.516-.1.774.073.258.487.688 1.02 1.19.245.23.445.416.618.516.1.058.157.143.2.2.13.115.402.3.76.516.343.2.616.446.932.66.517.33 1.162.502 1.762.5.1 0 .515.015.515.1 0 .246-.143.557-.588 1.032-.400.43-1.403.958-2.307.959-.116 0-.516-.086-.736-.144-.585-.173-1.027-.332-1.527-.617-.43-.24-.558-.23-.675-.054-.1.174-.172.6-.172.716 0 .1.228.257.37.4.114.09.515.516 1.145.774.745.313 1.75.443 2.324.443.663 0 1.361-.143 2.064-.402a10.208 10.208 0 0 0 1.89-.903c.3-.2.673-.5.964-.8.74-.784 1.19-1.82 1.336-3.111.057-.504-.515-.934-1.19-1.107-.1-.03-.21-.043-.316-.043" fill-rule="evenodd"></path>
              </svg>
              Chat on WhatsApp
            </button>
          </div>
        </div>
      ) : (
        <div className="relative animate-float">
          <button 
            onClick={handleToggle}
            className="relative w-14 h-14 flex items-center justify-center bg-green-500 rounded-full shadow-lg shadow-green-300/50 overflow-hidden border-2 border-white"
            aria-label="Open chat"
          >
            {/* WhatsApp Logo */}
            <svg viewBox="0 0 32 32" className="w-8 h-8 text-white fill-current">
              <path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-.91-.73-1.91 0-.188-.1-.173-.343-.173-.1 0-.187-.04-.229-.143-.1-.172-.26-.454-.26-.632 0-.056-.03-.2-.03-.258-.16-.73-.6-1.4-1.23-1.86-.187-.145-.46.45-.6.1-.13.63-.04 1.33.156 1.963.228.716.644 1.363 1.175 1.92.13.143.202.215.26.215.1 0 .13.1.088.172 0 .013-.485 1.202-.557 1.376-.1.215-.16.516-.1.774.073.258.487.688 1.02 1.19.245.23.445.416.618.516.1.058.157.143.2.2.13.115.402.3.76.516.343.2.616.446.932.66.517.33 1.162.502 1.762.5.1 0 .515.015.515.1 0 .246-.143.557-.588 1.032-.400.43-1.403.958-2.307.959-.116 0-.516-.086-.736-.144-.585-.173-1.027-.332-1.527-.617-.43-.24-.558-.23-.675-.054-.1.174-.172.6-.172.716 0 .1.228.257.37.4.114.09.515.516 1.145.774.745.313 1.75.443 2.324.443.663 0 1.361-.143 2.064-.402a10.208 10.208 0 0 0 1.89-.903c.3-.2.673-.5.964-.8.74-.784 1.19-1.82 1.336-3.111.057-.504-.515-.934-1.19-1.107-.1-.03-.21-.043-.316-.043" fill-rule="evenodd"></path>
            </svg>
          </button>
          
          {/* Rin-inspired Anime Girl Animation */}
          <div className="absolute -bottom-10 -right-2 z-10 animation-container">
            <div className="rin-animation">
              <style>
                {`
                /* Base animations */
                @keyframes float {
                  0% { transform: translateY(0px); }
                  50% { transform: translateY(-5px); }
                  100% { transform: translateY(0px); }
                }
                
                @keyframes climbUp {
                  0% { 
                    transform: translateY(100%) rotate(5deg);
                    opacity: 1; 
                  }
                  20% { 
                    transform: translateY(60%) rotate(-5deg);
                    opacity: 1; 
                  }
                  40% { 
                    transform: translateY(30%) rotate(3deg); 
                    opacity: 1;
                  }
                  60% { 
                    transform: translateY(0%) rotate(0deg); 
                    opacity: 1;
                  }
                  65% { 
                    transform: translateY(-5%) rotate(-5deg); 
                    opacity: 1;
                  }
                  70% { 
                    transform: translateY(-5%) rotate(0deg); 
                    opacity: 1;
                  }
                  75% { 
                    transform: translateY(-5%) rotate(5deg);
                    opacity: 1; 
                  }
                  80% { 
                    transform: translateY(10%) rotate(10deg);
                    opacity: 1; 
                  }
                  85% { 
                    transform: translateY(30%) rotate(20deg); 
                    opacity: 0.9;
                  }
                  90% { 
                    transform: translateY(60%) rotate(30deg); 
                    opacity: 0.7;
                  }
                  100% { 
                    transform: translateY(100%) rotate(40deg); 
                    opacity: 0;
                  }
                }
                
                @keyframes wavingHand {
                  0% { transform: rotate(0deg); }
                  25% { transform: rotate(20deg); }
                  50% { transform: rotate(0deg); }
                  75% { transform: rotate(20deg); }
                  100% { transform: rotate(0deg); }
                }
                
                @keyframes sittingPhase {
                  0% { 
                    transform: translateY(100%) rotate(0deg); 
                    opacity: 0;
                  }
                  10% { 
                    transform: translateY(50%) rotate(-5deg); 
                    opacity: 0.5;
                  }
                  20% { 
                    transform: translateY(0%) rotate(-3deg); 
                    opacity: 1;
                  }
                  30% { 
                    transform: translateY(-10%) rotate(0deg); 
                    opacity: 1;
                  }
                  90% { 
                    transform: translateY(-10%) rotate(0deg); 
                    opacity: 1;
                  }
                  100% { 
                    transform: translateY(-10%) rotate(0deg); 
                    opacity: 0;
                  }
                }
                
                @keyframes sippingJuice {
                  0% { transform: rotate(0deg) translateY(0); }
                  25% { transform: rotate(-5deg) translateY(-2px); }
                  50% { transform: rotate(0deg) translateY(0); }
                  75% { transform: rotate(-5deg) translateY(-2px); }
                  100% { transform: rotate(0deg) translateY(0); }
                }
                
                @keyframes blink {
                  0% { opacity: 1; }
                  49% { opacity: 1; }
                  50% { opacity: 0; }
                  51% { opacity: 1; }
                  100% { opacity: 1; }
                }
                
                @keyframes eyesWide {
                  0% { transform: scale(1); }
                  50% { transform: scale(1.3); }
                  100% { transform: scale(1); }
                }
                
                @keyframes speechAppear {
                  0% { opacity: 0; transform: scale(0.8) translateY(5px); }
                  20% { opacity: 1; transform: scale(1) translateY(0); }
                  80% { opacity: 1; transform: scale(1) translateY(0); }
                  100% { opacity: 0; transform: scale(0.8) translateY(5px); }
                }
                
                @keyframes fullAnimation {
                  0% { opacity: 0; }
                  5% { opacity: 1; } /* Appear */
                  /* Climbing phase: 0-25% */
                  25% { opacity: 1; } /* Reached top */
                  
                  /* Waving phase: 25-30% */
                  30% { opacity: 1; } /* Done waving */
                  
                  /* Falling phase: 30-40% */
                  40% { opacity: 0; } /* Disappeared after falling */
                  
                  /* Sitting phase: 50-100% */
                  50% { opacity: 0; } /* Hidden before sitting */
                  55% { opacity: 1; } /* Start sitting sequence */
                  95% { opacity: 1; } /* End sitting sequence */
                  100% { opacity: 0; } /* Hidden to restart */
                }
                
                /* Main animation container */
                .rin-animation {
                  position: relative;
                  width: 100px;
                  height: 100px;
                }
                
                /* Climbing Rin */
                .rin-climbing {
                  position: absolute;
                  bottom: 10px;
                  right: 10px;
                  width: 60px;
                  height: 70px;
                  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><g><path d="M50,10 Q65,10 65,25 Q65,38 50,40 Q35,38 35,25 Q35,10 50,10 Z" fill="%23f3b89c"/><circle cx="43" cy="25" r="2" fill="%23333"/><circle cx="57" cy="25" r="2" fill="%23333"/><path d="M47,32 Q50,35 53,32" stroke="%23333" fill="none" stroke-width="1"/><path d="M35,20 Q32,15 35,10 Q40,5 45,10" stroke="%2370432c" fill="%2370432c" stroke-width="2"/><path d="M65,20 Q68,15 65,10 Q60,5 55,10" stroke="%2370432c" fill="%2370432c" stroke-width="2"/><rect x="40" y="40" width="20" height="25" fill="%23a3d1e3"/><path d="M40,40 Q50,45 60,40" fill="%23a3d1e3"/><path d="M38,50 L35,70 Q40,75 45,65" fill="%23f3b89c"/><path d="M62,50 L65,70 Q60,75 55,65" fill="%23f3b89c"/><path d="M45,65 Q50,70 55,65 L55,80 Q50,85 45,80 Z" fill="%23f3a89c"/></g></svg>') center/contain no-repeat;
                  transform: translateY(100%);
                  opacity: 0;
                  animation: climbUp 3s ease-in-out 0s 1 forwards, fullAnimation 15s linear infinite;
                  z-index: -1;
                }
                
                /* Waving hand */
                .rin-climbing::after {
                  content: "";
                  position: absolute;
                  top: 25px;
                  right: 3px;
                  width: 15px;
                  height: 15px;
                  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 40"><path d="M10,5 Q15,0 20,5 L20,20 Q15,25 10,20 Z" fill="%23f3b89c"/></svg>') center/contain no-repeat;
                  animation: wavingHand 0.5s ease-in-out 1.5s 3 forwards;
                  transform-origin: bottom center;
                }
                
                /* Speech bubble for climbing */
                .speech-climbing {
                  position: absolute;
                  top: -20px;
                  right: 15px;
                  background: white;
                  border-radius: 10px;
                  padding: 3px 8px;
                  font-size: 12px;
                  opacity: 0;
                  animation: speechAppear 2s ease-in-out 2s 1 forwards, fullAnimation 15s linear infinite;
                  white-space: nowrap;
                }
                
                /* Sitting Rin */
                .rin-sitting {
                  position: absolute;
                  bottom: 10px;
                  right: 10px;
                  width: 70px;
                  height: 80px;
                  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 140"><g><path d="M60,10 Q75,10 75,25 Q75,38 60,40 Q45,38 45,25 Q45,10 60,10 Z" fill="%23f3b89c"/><circle cx="53" cy="25" r="2" fill="%23333"/><circle cx="67" cy="25" r="2" fill="%23333"/><path d="M57,32 Q60,35 63,32" stroke="%23333" fill="none" stroke-width="1"/><path d="M45,20 Q42,15 45,10 Q50,5 55,10" stroke="%2370432c" fill="%2370432c" stroke-width="2"/><path d="M75,20 Q78,15 75,10 Q70,5 65,10" stroke="%2370432c" fill="%2370432c" stroke-width="2"/><rect x="50" y="40" width="20" height="30" fill="%23a3d1e3"/><path d="M50,40 Q60,45 70,40" fill="%23a3d1e3"/><path d="M50,50 L35,60 Q30,70 40,75" fill="%23f3b89c"/><path d="M70,50 L90,55 Q95,65 85,70" fill="%23f3b89c"/><path d="M40,75 Q60,85 85,70 L85,80 Q60,95 40,85 Z" fill="%23f3a89c"/><path d="M80,45 Q85,40 90,45 L95,60 Q90,65 85,60 Z" fill="%23f3b89c"/></g></svg>') center/contain no-repeat;
                  opacity: 0;
                  animation: sittingPhase 5s ease-in-out 7s 1 forwards, fullAnimation 15s linear infinite;
                  z-index: 5;
                }
                
                /* Juice box */
                .rin-sitting::after {
                  content: "";
                  position: absolute;
                  top: 35px;
                  right: 5px;
                  width: 20px;
                  height: 25px;
                  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 50"><path d="M5,5 L25,5 L25,35 L5,35 Z" fill="%23e91e63"/><path d="M25,5 L35,15 L35,45 L25,35 Z" fill="%23c2185b"/><path d="M5,35 L25,35 L35,45 L15,45 Z" fill="%23ad1457"/><path d="M10,0 L15,5 L15,0 Z" fill="%23f48fb1"/><path d="M12,0 L12,-10" stroke="%23f48fb1" stroke-width="1"/></svg>') center/contain no-repeat;
                  animation: sippingJuice 3s ease-in-out 9s 2 forwards;
                }
                
                /* Speech bubble for sitting */
                .speech-sitting {
                  position: absolute;
                  top: -25px;
                  right: 20px;
                  background: white;
                  border-radius: 10px;
                  padding: 3px 8px;
                  font-size: 12px;
                  opacity: 0;
                  animation: speechAppear 2s ease-in-out 8s 1 forwards, fullAnimation 15s linear infinite;
                  white-space: nowrap;
                }
                `}
              </style>
              <div className="rin-climbing"></div>
              <div className="speech-climbing">Hi there!</div>
              <div className="rin-sitting"></div>
              <div className="speech-sitting">Need help?</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
