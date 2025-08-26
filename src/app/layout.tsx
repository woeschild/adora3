// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/navigation/sidebar/Sidebar";
import Header from "@/components/navigation/header/Header";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "My App",
  description: "A modern Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="bg-[var(--color-primary)] text-[var(--color-secondary)]"
    >
      <body
        className={`${poppins.variable} font-sans antialiased min-h-screen text-xs`}
      >
        <div className="flex h-screen">
          {/* Sidebar - desktop only */}
            <Sidebar />

          <div className="flex-1 flex flex-col">
            {/* Header - desktop only */}
              <Header />

            {/* Scrollable content */}
            <main className="flex-1 overflow-y-auto p-2">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
