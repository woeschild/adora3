import Container from "../../shared-components/container/Container";
import GridBackground from "../../shared-components/grid-background/GridBackground";
import ContactHeroImage from "./components/ContactHeroImage";
import TextAndSubText from "./components/TextAndSubText";

export default function ContactHeroSection () {
    return (
         <section className="py-8 relative md:py-24 bg-surface">
          <GridBackground/>
              <Container>
                <div className="grid relative z-10 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Left Content - Text and CTA */}
                  <div>
                    <TextAndSubText />
                  </div>
                  
                  {/* Right Content - Image */}
                  <div className="lg:order-last">
                    <ContactHeroImage />
                  </div>
                </div>
              </Container>
            </section>
    )
}