import Image from 'next/image'
import contactHeroImage from '../assets/contact-hero.png'

export default function ContactHeroImage () {
    return (
        <div className="flex justify-center lg:justify-end">
      <div className="relative max-w-md">
        <Image
          src={contactHeroImage}
          alt="Customer support visualization with phone icon and team avatars showing 'We're Here to Help' message"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
    )
}