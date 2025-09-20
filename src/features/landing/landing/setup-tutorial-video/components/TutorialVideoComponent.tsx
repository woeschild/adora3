import Image from 'next/image';
import adoraLogo from '../assets/adora-logo-small.png';
import youtubeRedLogo from '../assets/youtube-logo.png';
import youtubeWhiteLogo from '../assets/youtube-white-logo.png';

export default function TutorialVideoComponent() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Video Container */}
      <div className="relative bg-gray-300 rounded-lg overflow-hidden aspect-video">
        {/* Video Header */}
        <div className="absolute top-4 left-4 flex items-center space-x-2 z-10">
          <Image
            src={adoraLogo}
            alt="Adora3 Logo"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span className="text-gray-600 text-sm font-medium">
            How to setup an account
          </span>
        </div>
        
        {/* YouTube Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="hover:scale-105 transition-transform duration-200">
            <Image
              src={youtubeRedLogo}
              alt="Play video"
              className="w-16"
            />
          </button>
        </div>
        
        {/* YouTube Branding */}
        <div className="absolute bottom-1 left-1 flex items-center bg-[#000000c5] px-2 rounded">
          <span className="text-white text-sm">
            Watch on
          </span>
          <Image
            src={youtubeWhiteLogo}
            alt="YouTube"
            className="w-20 object-contain"
          />
        </div>
      </div>
    </div>
  );
}