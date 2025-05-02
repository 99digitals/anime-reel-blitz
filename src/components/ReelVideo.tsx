
import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface ReelVideoProps {
  videoUrl: string;
  title: string;
}

export const ReelVideo = ({ videoUrl, title }: ReelVideoProps) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <div className="video-card group relative w-full h-[560px] md:h-[500px] bg-black rounded-xl overflow-hidden cursor-pointer" onClick={handlePlayToggle}>
      <video
        ref={videoRef}
        src={videoUrl}
        poster={videoUrl + '#t=0.5'} // Use the video itself as a thumbnail
        className="w-full h-full object-cover"
        loop
        playsInline
        muted
      />
      
      <div className="video-overlay-icon">
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
      
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-white font-medium text-lg">{title}</h3>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Anime-themed decorative elements */}
      <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-anime-pink opacity-40"></div>
      <div className="absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-anime-pink opacity-40"></div>
    </div>
  );
};
