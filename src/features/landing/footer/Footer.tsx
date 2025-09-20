import Container from '@/features/landing/shared-components/container/Container';
import CompanyInfo from './components/company-info/CompanyInfo';
import FooterLinks from './components/footer-links/FooterLinks';
import BackToTopComponent from './components/back-to-top/BackToTopComponent';

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info - Takes 1 column */}
            <div className="lg:col-span-1">
              <CompanyInfo />
            </div>
            
            {/* Footer Links - Takes 2 columns */}
            <div className="lg:col-span-2">
              <FooterLinks />
            </div>
            
            {/* Back to Top - Takes 1 column, right aligned */}
            <div className="lg:col-span-1 flex justify-end">
              <BackToTopComponent/>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}