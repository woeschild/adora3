import Header from "@/features/dashboard/header/Header";
import Sidebar from "@/features/dashboard/sidebar/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
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
  );
}
