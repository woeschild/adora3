import Logo from './components/Logo';
import AddressAndOtherInfo from './components/AddressAndOtherInfo';
import CopyrightInfo from './components/CopyrightInfo';

export default function CompanyInfo() {
  return (
    <div className="space-y-0">
      <Logo />
      <AddressAndOtherInfo />
      <CopyrightInfo />
    </div>
  );
}