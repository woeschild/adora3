export default function HeroTextAndSubTexts() {
  return (
    <div className="space-y-6">
      {/* Badge */}
      <div className="inline-block">
        <span className="bg-gradient-to-r from-gray-200 to-orange-200 text-accent px-4 py-2 rounded-sm text-xs sm:text-base font-medium">
          With Adora: Your Customer Service AI Agent
        </span>
      </div>
      
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
        Revolutionize Your <br />
        Customer Experience
      </h1>
      
      {/* Subtext */}
      <p className="text-lg md:text-xl text-accent leading-relaxed max-w-lg">
        Enhance your service with AI-powered, real-time, human-like conversations
      </p>
    </div>
  );
}