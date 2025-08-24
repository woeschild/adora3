import { Upload } from "lucide-react";
import Link from "next/link";

export  const AccountCard = ({onLinkClick}:{onLinkClick: ()=> void}) => {
    const menuItems = [
      { text: 'Profile', path:"/profile" },
      { text: 'Account Settings', path:"/account-settings" },
      { text: 'Help', path:"#" },
      { text: 'Logout', path:"#" },
    ];
  
    return (
      <div className="w-fit bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
        <h2 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4">Account</h2>
        
        <div className="flex items-center mb-4">
          <img 
            src="https://placehold.co/48x48/E2E8F0/4A5568?text=A" 
            alt="Alex Meian" 
            className="w-12 h-12 rounded-full mr-4"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48/E2E8F0/4A5568?text=A'; }}
          />
          <div className="flex-grow flex gap-2">
            <div>
                <p className="font-semibold text-gray-800">Alex Meian</p>
            <p className="text-sm text-gray-500">alex@gmail.com</p>
            </div>
          <span className="bg-blue-400 text-white h-fit text-xs px-3 py-1 rounded-md">Pro plan</span>
          </div>
        </div>
  
        <a href="#" className="flex items-center justify-between text-orange-500 font-semibold py-3 hover:text-orange-600 transition-colors duration-200">
          <span>Upgrade plan</span>
          <Upload size={20} />
        </a>
  
        <hr className="my-2 border-gray-200" />
  
        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={onLinkClick}
              className="block text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-md px-3 py-3 transition-colors duration-200"
            >
              <span>{item.text}</span>
            </Link>
          ))}
        </nav>
      </div>
    );
  };