"use client";

import FadeInSection from "@/components/miscellaneous/effects/fade-in/FadeIn";
import ContactUs from "@/components/main-page/contact/Contact";
import ExploreGod from "@/components/main-page/explore-god/ExploreGod";
import Header from "@/components/globals/header/Header";
import HelpOthers from "@/components/main-page/help-others/HelpOthers";
import JoinUs from "@/components/main-page/join-us/JoinUs";
import LatestNews from "@/components/main-page/news/News";
import Welcome from "@/components/main-page/welcome/Welcome";
import Footer from "@/components/globals/footer/Footer";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.init}>
      <Header />

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
