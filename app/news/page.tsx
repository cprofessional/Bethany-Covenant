"use client";

import FadeInSection from "@/components/utilities/effects/fadein";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeadBanner from "@/components/news/headbanner";
import ChurchNews from "@/components/news/chruchnews";



export default function Page() {
  return (
    <div>
      <div className="absolute inset-0 bg-blue-900 opacity-85 h-1/2" />
      <Header theme='dark' />

      <FadeInSection>
        <HeadBanner />
      </FadeInSection>

      <FadeInSection>
        <ChurchNews />
      </FadeInSection>

      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
}
