import AboutHeroSection from "@/features/landing/about/hero/AboutHeroSection";
import HowWeMakeDifferenceSection from "@/features/landing/about/how-we-make-a-difference/HowWeMakeADifferenceSection";
import MeetOurPeopleSection from "@/features/landing/about/meet-our-people/MeetOurPeopleSection";
import CommonCTA from "@/features/landing/shared-components/common-CTA/CommonCTA";

export default function AboutPage () {
    return (
        <>
        <AboutHeroSection/>
        <HowWeMakeDifferenceSection/>
        <MeetOurPeopleSection/>
        <CommonCTA/>
        </>
    )
}