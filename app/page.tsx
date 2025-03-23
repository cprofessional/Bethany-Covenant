"use client";

import FadeInSection from "@/components/utilities/effects/fadein";
import ContactUs from "@/components/home/contact";
import ExploreGod from "@/components/home/exploregod";
import Header from "@/components/layout/header";
import HelpOthers from "@/components/home/helpothers";
import JoinUs from "@/components/home/joinus";
import LatestNews from "@/components/home/news-banner";
import Welcome from "@/components/home/welcome-banner";
import Footer from "@/components/layout/footer";

export default function Page() {
  return (
    <div style={{ backgroundColor: '#d4ec8e' }}>

      <Header theme="light" />

      <FadeInSection>
        <Welcome />
      </FadeInSection>

      <FadeInSection>
        <JoinUs />
      </FadeInSection>

      <FadeInSection>
        <ExploreGod />
      </FadeInSection>

      <FadeInSection>
        <LatestNews />
      </FadeInSection>

      <FadeInSection>
        <HelpOthers />
        <ContactUs />
      </FadeInSection>

      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
}
