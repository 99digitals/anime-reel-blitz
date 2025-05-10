
import { ReelVideo } from '@/components/ReelVideo';
import { Button } from '@/components/ui/button';

interface PreviewSectionProps {
  redirectToPurchase: () => void;
}

export const PreviewSection = ({ redirectToPurchase }: PreviewSectionProps) => {
  const reelVideos = [
    {
      url: "https://shop.worklinc.com/wp-content/uploads/2025/04/WorkLinc.in-1515.mp4",
      title: "Kawaii Anime Dance"
    }, 
    {
      url: "https://shop.worklinc.com/wp-content/uploads/2025/04/WorkLinc.in-1324.mp4",
      title: "Epic Battle Scene"
    }, 
    {
      url: "https://shop.worklinc.com/wp-content/uploads/2025/04/WorkLinc.in-1272.mp4",
      title: "Emotional Moment"
    }, 
    {
      url: "https://shop.worklinc.com/wp-content/uploads/2025/04/WorkLinc.in-2821.mp4",
      title: "Fantasy World Adventure"
    }, 
    {
      url: "https://shop.worklinc.com/wp-content/uploads/2025/04/WorkLinc.in-2161.mp4",
      title: "Slice of Life Scene"
    }, 
    {
      url: "https://shop.worklinc.com/wp-content/uploads/2025/04/WorkLinc.in-1046.mp4",
      title: "Action-Packed Sequence"
    }
  ];

  return (
    <section id="preview-section" className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-purple-gradient">Preview The Content</span> Creating Viral Accounts
          </h2>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Just <span className="font-bold">6 of 1800+ reels</span> you'll get instant access to
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reelVideos.map((video, index) => (
            <ReelVideo key={index} videoUrl={video.url} title={video.title} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <div className="max-w-md mx-auto bg-white rounded-xl p-5 shadow-lg border border-anime-purple/10 mb-6">
            <p className="text-lg font-medium text-gray-700 mb-4">
              <span className="font-bold text-anime-purple">1794 more reels</span> waiting for you inside!
            </p>
            <Button 
              className="bg-anime-orange hover:bg-anime-orange/90 text-white px-8 py-6 text-lg font-bold w-full shadow-lg tracking-wide"
              onClick={redirectToPurchase}
            >
              GET ALL REELS - 80% OFF TODAY
            </Button>
            <p className="text-sm text-gray-500 mt-3">Secure payment • Instant delivery • 30-day guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};
