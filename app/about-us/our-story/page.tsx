"use client";

import FadeInSection from "@/components/utilities/effects/fadein";
import Footer from "@/components/layout/footer";
import OurStoryBanner from "@/components/about-us/our-story/headbanner";
import HistorySection from "@/components/about-us/our-story/historysection";
import VisionSection from "@/components/about-us/our-story/visualsection";
import Header from "@/components/layout/header";

export default function Page() {
  return (
    <div>
      <div className="absolute inset-0 bg-blue-700 opacity-75 h-1/4"></div>
      <Header theme="dark" />

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
