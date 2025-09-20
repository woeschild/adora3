export default function UseOfServicesSection() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Use of Services</h2>
      <p className="text-muted text-md leading-relaxed mb-6">
        Adora is designed to streamline customer service processes through AI-powered tools. Users must adhere to the following:
      </p>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-primary mb-2">1. Eligibility</h3>
          <p className="text-muted text-md leading-relaxed">
            You must be a registered business entity or authorized representative to use Adora.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-primary mb-2">2. Account Responsibilities</h3>
          <p className="text-muted text-md leading-relaxed">
            Maintain the confidentiality of login credentials. Notify Adora immediately of unauthorized account use.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-primary mb-2">3. Permitted Use</h3>
          <p className="text-muted text-md leading-relaxed">
            You may use Adora only for lawful business purposes.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-primary mb-2">4. Prohibited Activities</h3>
          <ul className="list-disc list-inside space-y-2 text-muted text-md leading-relaxed">
            <li>Use of platform for fraudulent or illegal activities is highly prohibited.</li>
            <li>Modify, reverse-engineer, or decompile Adora's code.</li>
            <li>Introduce malware, spam, or other disruptive elements.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}