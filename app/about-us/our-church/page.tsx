"use client";

import FadeInSection from "@/components/utilities/effects/fadein";
import Footer from "@/components/layout/footer";
import OurChurchBanner from "@/components/about-us/our-church/headbanner";
import AboutSection from "@/components/about-us/our-church/aboutsection";
import LearnAboutGod from "@/components/about-us/our-church/learnaboutgod";
import InfoCircles from "@/components/about-us/church-planting/infocircles";

export default function Page() {
  return (
    <div>
      <OurChurchBanner/>

      <AboutSection/>

      <LearnAboutGod/>

      <InfoCircles/>
          
        <FadeInSection>
            <Footer />
        </FadeInSection>
      </div>
  );
}
