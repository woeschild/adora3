import SignupForm from '@/features/auth/signup/SignupForm';
import logo from './adora-logo.png'
import Image from 'next/image';

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-main flex">
      {/* Left Panel - Promotional Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-900 to-black text-white flex-col gap-8 p-8 xl:p-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Adora3 Logo" className="object-contain w-24" />
        </div>
        
        {/* Main Content */}
          <div>
            <div>
            <h1 className="text-4xl xl:text-5xl font-bold leading-tight">
              Sign up your<br />
              business on Adora
            </h1>
          </div>
          <p className="text-accent text-lg xl:text-xl font-medium">
            Revolutionize Your Customer's Experience
          </p> 
          </div>       

      </div>
      
      {/* Right Panel - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <SignupForm />
      </div>
    </main>
  );
}