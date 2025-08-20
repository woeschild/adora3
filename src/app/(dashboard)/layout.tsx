// import type { Metadata } from "next";
import { Poppins } from "@next/font/google";
import "../../globals.css" //important for tailwind

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700']
});


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex font-normal text-sm`}>
        <div className="text-[var(--accent)]">Sidebar</div>
        {children}
      </body>
    </html>
  );
}
