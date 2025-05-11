
import { useState, useEffect } from 'react';
import { Clock, Star } from 'lucide-react';

export const CountdownTimer = () => {
  // Starting time in seconds (5 hours 36 minutes = 20160 seconds)
  const initialTime = 5 * 60 * 60 + 36 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  
  useEffect(() => {
    // Check if we have a stored end time
    const storedEndTime = localStorage.getItem('saleEndTime');
    let endTime: number;
    
    if (storedEndTime) {
      endTime = parseInt(storedEndTime, 10);
      
      // If the stored end time has already passed, set a new one
      if (endTime < Date.now()) {
        endTime = Date.now() + initialTime * 1000;
        localStorage.setItem('saleEndTime', endTime.toString());
      }
    } else {
      // Set end time to current time + initial time
      endTime = Date.now() + initialTime * 1000;
      localStorage.setItem('saleEndTime', endTime.toString());
    }
    
    const interval = setInterval(() => {
      const secondsLeft = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      
      if (secondsLeft <= 0) {
        // Reset the timer when it reaches zero
        const newEndTime = Date.now() + initialTime * 1000;
        localStorage.setItem('saleEndTime', newEndTime.toString());
        setTimeLeft(initialTime);
      } else {
        setTimeLeft(secondsLeft);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [initialTime]);
  
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  
  const formatTime = (time: number) => time.toString().padStart(2, '0');
  
  return (
    <section className="py-8 px-4 bg-gradient-to-r from-gray-900 via-purple-950 to-gray-900 border-t-2 border-purple-700/30">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-block px-4 py-1 bg-red-600 text-white rounded-full mb-4 shadow-lg animate-pulse-slow">
          <p className="text-sm font-bold">⏰ Limited Time Offer!</p>
        </div>
        
        <h2 className="text-xl md:text-3xl lg:text-4xl font-black mb-5 text-white">
          This <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">80% Discount</span> Expires Soon!
        </h2>
        
        <div className="flex flex-col items-center mb-5">
          <p className="text-base md:text-xl mb-3 text-gray-300">
            Price increases to <span className="line-through">₹999</span> in:
          </p>
          
          <div className="flex items-center justify-center space-x-3">
            <div className="relative">
              <Clock className="absolute -top-5 text-purple-400 animate-bounce opacity-70 hidden md:block" size={20} />
              <div className="flex items-center space-x-2">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-purple-800 text-white rounded-lg flex items-center justify-center shadow-lg border border-purple-600">
                  <span className="text-xl md:text-3xl font-bold">{formatTime(hours)}</span>
                </div>
                <span className="text-xl md:text-3xl font-bold text-white">:</span>
                <div className="w-14 h-14 md:w-20 md:h-20 bg-purple-800 text-white rounded-lg flex items-center justify-center shadow-lg border border-purple-600">
                  <span className="text-xl md:text-3xl font-bold">{formatTime(minutes)}</span>
                </div>
                <span className="text-xl md:text-3xl font-bold text-white">:</span>
                <div className="w-14 h-14 md:w-20 md:h-20 bg-purple-800 text-white rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden border border-purple-600">
                  <span className="text-xl md:text-3xl font-bold relative z-10">{formatTime(seconds)}</span>
                  <div className="absolute bottom-0 left-0 right-0 bg-white/20 h-[2px] animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button 
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 px-4 md:px-8 py-3 text-sm md:text-base font-black rounded-lg shadow-2xl transform transition-transform hover:scale-105 w-full md:w-auto md:min-w-[200px] border-2 border-white"
          onClick={() => window.open("https://rzp.io/rzp/L0POQliw", "_blank")}
        >
          LOCK IN 80% OFF NOW!
        </button>

        <div className="mt-4 text-white/70 text-sm flex items-center justify-center">
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 text-yellow-400" fill="currentColor" />
            <span>Trusted by 2000+ creators across India</span>
          </div>
        </div>
      </div>
    </section>
  );
};
