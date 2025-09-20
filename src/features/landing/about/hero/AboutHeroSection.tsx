import Image from "next/image";
import teamImage from './assets/empowerment.jpg'
import GridBackground from "../../shared-components/grid-background/GridBackground";

export default function AboutHeroSection () {
    return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <GridBackground/>
    <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
      <div className="flex flex-col max-md:flex-col-reverse gap-8">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <div className="mb-6">
            <span className="text-accent font-medium text-lg">About us</span>
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Empowering<br/> businesses to thrive
          </h1>
        </div>
        
        {/* Image Section */}
        <div className="order-1 lg:order-2">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image 
              src={teamImage}
              alt="Team collaboration - diverse group of professionals working together in a modern office"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
      </div>
    </div>
  </div>
    )
}