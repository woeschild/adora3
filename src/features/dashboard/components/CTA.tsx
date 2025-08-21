// components/CTA.tsx
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="bg-[var(--accent)] max-w-[602px] text-white rounded-lg px-6 py-5 sm:px-8 sm:py-6 flex flex-col items-start gap-6 md:justify-between shadow-md">
      <p className="text-sm sm:text-base md:text-lg font-medium mb-4 md:mb-0 max-w-xl">
        Complete your account information by personalizing your AI agent!
      </p>
      <Link href="/">
        <div className="inline-block bg-[var(--accent-light)] font-semibold text-sm sm:text-base px-5 py-2 rounded-md hover:bg-orange-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-600">
          Complete now
        </div>
      </Link>
    </section>
  );
};

export default CTA;
