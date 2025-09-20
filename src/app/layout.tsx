// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { ToastProvider } from "@/features/shared/toast";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Adora3",
  description: "A modern Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}