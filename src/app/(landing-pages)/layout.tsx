import Header from "@/features/landing/header/Header";
import Footer from "@/features/landing/footer/Footer";
import TalkToAdora from "@/features/landing/shared-components/talk-to-adora/TalkToAdora";

export default function LandingPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-main">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      
      {/* Talk to Adora CTA - Fixed Position across all landing pages */}
      <TalkToAdora />
    </div>
  );
}