"use client";

import FadeInSection from "@/components/utilities/effects/fadein";
import Footer from "@/components/layout/footer";
import ChurchPlantingBanner from "@/components/about-us/church-planting/headbanner";

export default function Page() {
  return (
    <div>
        <ChurchPlantingBanner/>
          
        <FadeInSection>
            <Footer />
        </FadeInSection>
      </div>
  );
}
