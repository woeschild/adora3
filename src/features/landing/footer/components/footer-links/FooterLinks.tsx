import FooterLinkComponent from './components/FooterLinkComponent';

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Navigation Links */}
      <div>
        <div className="space-y-3">
          <FooterLinkComponent href="/about">About</FooterLinkComponent>
          <FooterLinkComponent href="/pricing">Pricing</FooterLinkComponent>
          <FooterLinkComponent href="/terms">Terms</FooterLinkComponent>
          <FooterLinkComponent href="/contact">Contact</FooterLinkComponent>
          <FooterLinkComponent href="/get-started">Get Started</FooterLinkComponent>
        </div>
      </div>

      {/* Social Media Links */}
      <div>
        <div className="space-y-3">
          <FooterLinkComponent href="https://facebook.com">Facebook</FooterLinkComponent>
          <FooterLinkComponent href="https://twitter.com">Twitter</FooterLinkComponent>
          <FooterLinkComponent href="https://linkedin.com">LinkedIn</FooterLinkComponent>
          <FooterLinkComponent href="https://instagram.com">Instagram</FooterLinkComponent>
        </div>
      </div>

      {/* Empty third column for spacing */}
      <div></div>
    </div>
  );
}