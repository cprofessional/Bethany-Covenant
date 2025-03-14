"use client";

import FadeInSection from "@/components/utilities/effects/fadein";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import LetsChat from '@/components/contact-page/letschat';
import LocationBanner from '@/components/contact-page/locationbanner';
import HeadBanner from '@/components/contact-page/headbanner';

export default function Page() {
  return (
    <div>
      <FadeInSection>
        <HeadBanner />
      </FadeInSection>

      <FadeInSection>
        <LetsChat />
      </FadeInSection>

      <FadeInSection>
        <LocationBanner />
      </FadeInSection>

      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
}
