import Image from "next/image";
import BannerChurchPlanting from "@/public/assets/BannerChurchPlanting.png";
import Header from "@/components/layout/header";

export default function HeadBanner() {
  return (
    <div>
      <div className="absolute inset-0 bg-blue-700 opacity-75 h-1/4"></div>
      <Header theme="dark" />

      <div className="relative flex items-center justify-center min-h-[100px] md:min-h-[200px] lg:min-h-[300px] xl:min-h-[300px] text-white text-3xl font-bold">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={BannerChurchPlanting}
            alt="Church Planting Background"
            layout="fill"
            objectFit="cover"
            objectPosition="100% 40%"
            quality={100}
          />
          <div className="absolute inset-0 bg-blue-700 opacity-75"></div>
        </div>

        <span className="relative z-10">Church Planting</span>
      </div>
    </div>
  );
}
