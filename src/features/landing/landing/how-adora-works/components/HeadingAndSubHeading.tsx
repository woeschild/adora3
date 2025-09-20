export default function HeadingAndSubHeading() {
  return (
    <div className="space-y-4 mb-12">
      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
        How Adora Works
      </h2>
      
      {/* Subheading */}
      <p className="text-lg md:text-xl text-accent leading-relaxed max-w-xl">
        An AI intelligent assistant for exceptional customer experiences.
      </p>
    </div>
  );
}