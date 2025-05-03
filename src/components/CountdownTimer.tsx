
import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

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
    } else {
      // Set end time to current time + initial time
      endTime = Date.now() + initialTime * 1000;
      localStorage.setItem('saleEndTime', endTime.toString());
    }
    
    const interval = setInterval(() => {
      const secondsLeft = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      setTimeLeft(secondsLeft);
      
      if (secondsLeft === 0) {
        clearInterval(interval);
        // Reset end time for the evergreen timer
        const newEndTime = Date.now() + initialTime * 1000;
        localStorage.setItem('saleEndTime', newEndTime.toString());
        setTimeLeft(initialTime);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [initialTime]);
  
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  
  const formatTime = (time: number) => time.toString().padStart(2, '0');
  
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-anime-purple/20 to-anime-pink/20">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-pulse-light inline-block px-4 py-2 bg-red-500 text-white rounded-full mb-4">
          <p className="text-sm md:text-base font-medium">Limited Time Offer!</p>
        </div>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Hurry! This <span className="bg-clip-text text-transparent bg-orange-gradient">80% Discount</span> Ends Soon!
        </h2>
        
        <div className="flex flex-col items-center mb-8">
          <p className="text-lg md:text-xl mb-4 text-gray-700">
            Price will go back to <span className="line-through">₹999</span> after:
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="group relative">
              <Clock className="absolute -top-6 text-anime-purple animate-bounce opacity-70" size={24} />
              <div className="flex items-center space-x-2">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-anime-purple text-white rounded-lg flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-105">
                  <span className="text-2xl md:text-3xl font-bold">{formatTime(hours)}</span>
                </div>
                <span className="text-2xl md:text-3xl font-bold text-gray-700">:</span>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-anime-purple text-white rounded-lg flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-105">
                  <span className="text-2xl md:text-3xl font-bold">{formatTime(minutes)}</span>
                </div>
                <span className="text-2xl md:text-3xl font-bold text-gray-700">:</span>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-anime-purple text-white rounded-lg flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-105 relative overflow-hidden">
                  <span className="text-2xl md:text-3xl font-bold relative z-10">{formatTime(seconds)}</span>
                  <div className="absolute bottom-0 left-0 right-0 bg-white/20 h-[2px] animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button 
          className="bg-anime-orange hover:bg-anime-orange/90 text-white px-8 py-4 rounded-lg text-lg font-bold animate-pulse-light shadow-lg transform transition-transform hover:scale-105"
          onClick={() => window.open("https://rzp.io/rzp/L0POQliw", "_blank")}
        >
          Get 80% Off Now!
        </button>
      </div>
    </section>
  );
};
