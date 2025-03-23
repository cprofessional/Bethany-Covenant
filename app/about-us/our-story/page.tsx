"use client";

import FadeInSection from "@/components/utilities/effects/fadein";
import Footer from "@/components/layout/footer";
import OurStoryBanner from "@/components/about-us/our-story/headbanner";
import HistorySection from "@/components/about-us/our-story/historysection";
import VisionSection from "@/components/about-us/our-story/visualsection";

export default function Page() {
  return (
    <div>
      <FadeInSection>
       <OurStoryBanner/>
      </FadeInSection>

      <FadeInSection>
        <HistorySection/>
      </FadeInSection> 

      <FadeInSection>
        <VisionSection/>
      </FadeInSection>

        <FadeInSection>
            <Footer />
        </FadeInSection>
      </div>
  );
}
