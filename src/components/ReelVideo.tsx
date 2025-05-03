
import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface ReelVideoProps {
  videoUrl: string;
  title: string;
}

export const ReelVideo = ({ videoUrl, title }: ReelVideoProps) => {
  const [playing, setPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Generate thumbnail from the video
    if (videoRef.current) {
      const video = videoRef.current;
      
      // When metadata is loaded, capture a frame for the thumbnail
      const handleMetadataLoaded = () => {
        video.currentTime = 0.5; // Set to 0.5 seconds to capture a good frame
      };

      // When time updates after setting currentTime, capture the frame
      const handleTimeUpdate = () => {
        if (!playing && !thumbnail) {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          canvas.getContext('2d')?.drawImage(video, 0, 0, canvas.width, canvas.height);
          setThumbnail(canvas.toDataURL('image/jpeg'));
          
          // Reset to beginning
          video.currentTime = 0;
          
          // Remove listeners after thumbnail is created
          video.removeEventListener('loadedmetadata', handleMetadataLoaded);
          video.removeEventListener('timeupdate', handleTimeUpdate);
        }
      };

      video.addEventListener('loadedmetadata', handleMetadataLoaded);
      video.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        video.removeEventListener('loadedmetadata', handleMetadataLoaded);
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [videoRef, thumbnail, playing]);

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
        className="w-full h-full object-cover"
        loop
        playsInline
        muted
        preload="metadata"
      />
      
      {thumbnail && !playing && (
        <div className="absolute inset-0 z-10">
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
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
