"use client";

import FadeInSection from "@/components/utilities/effects/fadein";
import Footer from "@/components/layout/footer";
import Banner from "@/components/about-us/what-we-believe/headbanner";
import ECCSection from "@/components/about-us/what-we-believe/eccsection";
import AffirmationsSection from "@/components/about-us/what-we-believe/affirmationssection";
import FreedomSection from "@/components/about-us/what-we-believe/freedomsection";

export default function Page() {
  return (
    <div>
        <Banner/>

        <ECCSection/>

        <AffirmationsSection/>

        <FreedomSection/>
          
        <FadeInSection>
            <Footer />
        </FadeInSection>
      </div>
  );
}
