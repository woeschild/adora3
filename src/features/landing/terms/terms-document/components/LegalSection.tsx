export default function LegalSection() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Intellectual Property */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Intellectual Property</h2>
        <p className="text-muted text-md leading-relaxed">
          Adora and all related materials are the intellectual property of Poulina Inc. Users are granted a non-exclusive, non-transferable license to use the platform for their business operations.
        </p>
      </div>

      {/* Limitation of Liability */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Limitation of Liability</h2>
        <p className="text-muted text-md leading-relaxed mb-4">
          Adora is provided "as-is" without warranties of any kind. Poulina Inc. is not liable for:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">Losses</h3>
            <p className="text-muted text-md leading-relaxed">
              Caused by user error, third-party service failures, or interruptions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">Indirect or Consequential Damages</h3>
            <p className="text-muted text-md leading-relaxed">
              Not covered under liability.
            </p>
          </div>
        </div>
      </div>

      {/* Termination */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Termination</h2>
        <p className="text-muted text-md leading-relaxed">
          Adora may suspend or terminate your account if you violate these Terms. Upon termination, access to all platform features will cease immediately.
        </p>
      </div>

      {/* Governing Law */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Governing Law</h2>
        <p className="text-muted text-md leading-relaxed">
          These Terms are governed by the laws of Ontario, Canada.
        </p>
      </div>

      {/* Changes to Terms */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Changes to Terms</h2>
        <p className="text-muted text-md leading-relaxed">
          We may update these Terms periodically. Continued use of the Services constitutes acceptance of any modifications.
        </p>
      </div>
    </div>
  );
}