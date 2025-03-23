"use client";

import FadeInSection from "@/components/utilities/effects/fadein";
import Footer from "@/components/layout/footer";
import Banner from "@/components/about-us/who-we-are/headbanner";
import WelcomeBanner from "@/components/about-us/who-we-are/welcomebanner";
import TeamSection from "@/components/about-us/who-we-are/teamsection";
import ContactSection from "@/components/about-us/who-we-are/contactsection";

export default function Page() {
  return (
    <div>
        <FadeInSection>
          <Banner/>
        </FadeInSection>
        
        <FadeInSection>
          <WelcomeBanner/>
        </FadeInSection>

        <FadeInSection>
          <TeamSection/>
        </FadeInSection>

        <FadeInSection>
          <ContactSection/>
        </FadeInSection>

        <FadeInSection>
          <Footer />
        </FadeInSection>
      </div>
  );
}
