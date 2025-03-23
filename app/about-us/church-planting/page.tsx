"use client";

import FadeInSection from "@/components/utilities/effects/fadein";
import Footer from "@/components/layout/footer";
import HeadBanner from "@/components/about-us/church-planting/headbanner";
import ReviveCommunity from "@/components/about-us/church-planting/revivecommunity";
import ContactUs from "@/components/home/contact";

export default function Page() {
  return (
    <div>
        <HeadBanner/>

        <FadeInSection>
          <ReviveCommunity/>  
        </FadeInSection>

        <FadeInSection> 
          <ContactUs/>
        </FadeInSection>
          
        <FadeInSection>
          <Footer />
        </FadeInSection>
      </div>
  );
}
