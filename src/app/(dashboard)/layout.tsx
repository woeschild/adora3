// import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../../globals.css" //important for tailwind
import Menu from "@/components/menu/menu";

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
        <Menu/>
        <div className="flex-grow">
          <div className="sticky">header</div>
          <div className="">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
