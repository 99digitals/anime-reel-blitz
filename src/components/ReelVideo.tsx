
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface ReelVideoProps {
  videoUrl: string;
  title: string;
}

export const ReelVideo = ({ videoUrl, title }: ReelVideoProps) => {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Ensure thumbnail is loaded
    if (videoRef.current) {
      const video = videoRef.current;
      
      // Once metadata is loaded, pause the video to show the first frame as thumbnail
      video.addEventListener('loadedmetadata', () => {
        video.currentTime = 0.5; // Set to a frame that shows good thumbnail
        setThumbnailLoaded(true);
      });
    }
  }, []);

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
    <div className="video-card group relative w-full h-[560px] md:h-[500px] bg-black rounded-xl overflow-hidden cursor-pointer" onClick={togglePlay}>
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full object-cover"
        loop
        playsInline
        muted={muted}
        poster={`${videoUrl}#t=0.5`}
        preload="metadata"
      />
      
      <div className="video-overlay-icon opacity-100 group-hover:opacity-100">
        {playing ? (
          <div className="bg-anime-purple/80 rounded-full p-3 backdrop-blur-md transform transition-all duration-300 hover:scale-110">
            <Pause className="text-white" size={40} />
          </div>
        ) : (
          <div className="bg-anime-purple/80 rounded-full p-3 backdrop-blur-md transform transition-all duration-300 hover:scale-110">
            <Play className="text-white ml-1" size={40} />
          </div>
        )}
      </div>
      
      <button 
        className="absolute bottom-4 right-4 z-20 bg-anime-purple/80 rounded-full p-2 backdrop-blur-md text-white"
        onClick={toggleMute}
      >
        {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-white font-medium text-lg">{title}</h3>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Anime-themed decorative elements */}
      <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-anime-pink opacity-40"></div>
      <div className="absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-anime-pink opacity-40"></div>
    </div>
  );
};
