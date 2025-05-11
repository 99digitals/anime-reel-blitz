
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface ReelVideoProps {
  videoUrl: string;
  title: string;
}

export const ReelVideo = ({ videoUrl, title }: ReelVideoProps) => {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false); // Unmuted by default
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Create a poster image by loading the first frame
    if (videoRef.current) {
      const video = videoRef.current;
      
      video.addEventListener('loadeddata', () => {
        // Pause at 0.5 seconds to show a good thumbnail frame
        video.currentTime = 0.5;
        setLoaded(true);
      });
      
      // Pause once we've seeked to the right timestamp
      video.addEventListener('seeked', () => {
        if (!playing) {
          video.pause();
        }
      });
    }

    return () => {
      if (videoRef.current) {
        const video = videoRef.current;
        video.removeEventListener('loadeddata', () => {});
        video.removeEventListener('seeked', () => {});
      }
    };
  }, [playing]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <div className="video-card group relative w-full h-[500px] md:h-[650px] bg-black rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300" onClick={togglePlay}>
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full object-cover"
        loop
        playsInline
        muted={muted}
        preload="metadata"
        poster={loaded ? undefined : `${videoUrl}#t=0.5`}
      />
      
      <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity z-10">
        {playing ? (
          <div className="bg-gray-900/80 rounded-full p-3 backdrop-blur-md transform transition-all duration-300 hover:scale-110 shadow-lg">
            <Pause className="text-white" size={32} />
          </div>
        ) : (
          <div className="bg-gray-900/80 rounded-full p-3 backdrop-blur-md transform transition-all duration-300 hover:scale-110 shadow-lg">
            <Play className="text-white ml-1" size={32} />
          </div>
        )}
      </div>
      
      <button 
        className="absolute bottom-4 right-4 z-20 bg-gray-900/80 rounded-full p-2 backdrop-blur-md text-white shadow-md"
        onClick={toggleMute}
      >
        {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-white font-medium text-lg truncate">{title}</h3>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-2 right-2 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-orange-500 opacity-40"></div>
      <div className="absolute bottom-2 left-2 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-orange-500 opacity-40"></div>
    </div>
  );
};
