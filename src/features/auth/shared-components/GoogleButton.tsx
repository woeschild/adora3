import Image from 'next/image';
import Button from './Button';
import googleLogo from './assets/google-logo.webp'

interface GoogleButtonProps {
  onClick?: () => void;
  text?: string;
}

export default function GoogleButton({ onClick, text = "Sign in with Google" }: GoogleButtonProps) {
  return (
    <Button variant="secondary" onClick={onClick} className="w-full justify-center gap-2">
      <Image src={googleLogo} alt="Google logo" width={20} height={20} className="w-5 h-5" />
      {text}
    </Button>
  );
}