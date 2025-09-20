export default function SubscriptionBillingSection() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Subscription and Billing</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-primary mb-2">1. Payment Terms</h3>
          <ul className="list-disc list-inside space-y-2 text-muted text-md leading-relaxed">
            <li>Subscription fees are billed monthly or annually, depending on your plan.</li>
            <li>Payments are non-refundable unless explicitly stated otherwise.</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-primary mb-2">2. Cancellation</h3>
          <p className="text-muted text-md leading-relaxed">
            You may cancel your subscription at any time. Cancellation will take effect at the end of the billing cycle.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-primary mb-2">3. Changes to Fees</h3>
          <p className="text-muted text-md leading-relaxed">
            Adora reserves the right to adjust subscription fees with prior notice.
          </p>
        </div>
      </div>
    </div>
  );
}