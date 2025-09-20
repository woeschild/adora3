import Image from 'next/image';
import logo from './assets/adora-logo.png';

interface LogoAndTitleProps {
  title: string;
}

export default function LogoAndTitle({ title }: LogoAndTitleProps) {
  return (
    <div className="text-center space-y-4 mb-8">
      <div className="relative mx-auto w-fit">
        <Image src={logo} alt="Adora3 Logo" className="object-contain w-24" />
      </div>
      <h1 className="text-2xl font-bold text-primary">{title}</h1>
    </div>
  );
}