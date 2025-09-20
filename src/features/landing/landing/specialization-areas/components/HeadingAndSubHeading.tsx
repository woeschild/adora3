export default function HeadingAndSubHeading() {
  return (
    <div className="text-center space-y-4 mb-16">
      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
        We specialize in these customer support areas
      </h2>
      
      {/* Subheading */}
      <p className="text-lg md:text-xl text-accent leading-relaxed max-w-2xl mx-auto">
        We provide expert support tailored to your customers
      </p>
    </div>
  );
}