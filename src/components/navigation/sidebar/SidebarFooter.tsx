// app/components/sidebar/SidebarFooter.tsx
import { LogOut } from "lucide-react";

export default function SidebarFooter() {
  return (
    <div className="p-4 border-t border-white/20">
      <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-white/10 transition">
        <LogOut className="h-5 w-5" />
        <span className="text-sm font-medium">Logout</span>
      </button>
    </div>
  );
}
