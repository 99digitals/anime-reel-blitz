
import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface ReelVideoProps {
  videoUrl: string;
  thumbnailUrl?: string;
  title: string;
}

export const ReelVideo = ({ videoUrl, thumbnailUrl, title }: ReelVideoProps) => {
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
        poster={thumbnailUrl || videoUrl}
        className="w-full h-full object-cover"
        loop
        playsInline
        muted
      />
      
      <div className="video-overlay-icon">
        {playing ? <Pause size={48} /> : <Play size={48} />}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-white font-medium text-lg">{title}</h3>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};
