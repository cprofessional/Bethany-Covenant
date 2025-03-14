import Image from "next/image";
import Banner from "@/public/assets/BannerBible.jpg";
import Header from "@/components/layout/header";

export default function HeadBanner() {
    return (
      <div>
        <div className="absolute inset-0 bg-blue-700 opacity-75 h-1/4"></div>
        <Header theme="dark" />

        <div className="relative flex items-center justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] xl:min-h-[400px] text-white text-3xl font-bold">
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src={Banner}
              alt="BannerBible" 
              layout="fill" 
              objectFit="cover"
              objectPosition="100% 40%"
              quality={100}
            />
            <div className="absolute inset-0 bg-blue-700 opacity-75"></div>
          </div>

          <span className="relative z-10 text-center font-bold text-3xl md:text-5xl">
  Our<br/>Story
</span>
          
        </div>
      </div>
    );
}
