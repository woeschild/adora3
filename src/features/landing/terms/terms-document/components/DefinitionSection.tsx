export default function DefinitionSection() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Definition</h2>
      <p className="text-muted text-md leading-relaxed mb-4">
        Adora is a B2B AI-powered customer service platform provided by Poulina Inc
      </p>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-primary mb-2">User</h3>
          <p className="text-muted text-md leading-relaxed">
            Refers to businesses and authorized individuals accessing the platform.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-primary mb-2">Content</h3>
          <p className="text-muted text-md leading-relaxed">
            Includes any data, text, or media uploaded, processed, or generated using the Services.
          </p>
        </div>
      </div>
    </div>
  );
}