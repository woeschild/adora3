export default function BackgroundWavePattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Wave Pattern SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full opacity-50"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(25, 100%, 52%)" stopOpacity="0.5" />
            <stop offset="50%" stopColor="hsl(25, 100%, 44%)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(25, 100%, 40%)" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        
        {/* Multiple wave paths for the flowing effect */}
        <path
          d="M0,400 C150,350 300,450 450,400 C600,350 750,450 900,400 C1050,350 1200,450 1200,400 L1200,800 L0,800 Z"
          fill="url(#waveGradient)"
          opacity="0.6"
        />
        <path
          d="M0,450 C200,400 400,500 600,450 C800,400 1000,500 1200,450 L1200,800 L0,800 Z"
          fill="url(#waveGradient)"
          opacity="0.5"
        />
        <path
          d="M0,500 C300,450 600,550 900,500 C1050,475 1150,525 1200,500 L1200,800 L0,800 Z"
          fill="url(#waveGradient)"
          opacity="0.4"
        />
      </svg>
      
      {/* Additional flowing lines using Tailwind classes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-light to-transparent opacity-50 transform -rotate-2"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-60 transform rotate-1"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-dark to-transparent opacity-50 transform -rotate-1"></div>
      </div>
    </div>
  );
}