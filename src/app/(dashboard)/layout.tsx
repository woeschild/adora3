import { Poppins } from "next/font/google";
import "../../globals.css";
import Menu from "@/components/menu/menu";
import { Navbar } from "@/components/navbar/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} font-normal text-sm h-screen flex overflow-hidden bg-[var(--background)]`}
      >
        {/* Sidebar (desktop) / Overlay (mobile) */}
        <Menu />

        {/* Right section */}
        <div className="flex-1 flex flex-col h-screen">
          <div className="shrink-0">
            <Navbar />
          </div>

          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
