import ContactFormSection from "@/features/landing/contact/form/ContactFormSection";
import ContactHeroSection from "@/features/landing/contact/hero/ContactHeroSection";
import CommonCTA from "@/features/landing/shared-components/common-CTA/CommonCTA";

export default function ContactPage () {
    return (
        <>
          <ContactHeroSection />
          <ContactFormSection/>
          <CommonCTA/>
        </>
    )
}