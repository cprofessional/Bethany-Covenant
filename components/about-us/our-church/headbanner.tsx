import Image from "next/image";
import Banner from "@/public/assets/BannerGathering.png";
import Header from "@/components/layout/header";

export default function HeadBanner() {
    return (
      <div>
        <div className="absolute inset-0 bg-blue-700 opacity-75 h-1/4"></div>

        <div className="relative flex items-center justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] xl:min-h-[400px] text-white text-3xl font-bold">
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src={Banner}
              alt="Our Church Gathering Banner" 
              layout="fill" 
              objectFit="cover"
              objectPosition="100% 40%"
              quality={100}
            />
            <div className="absolute inset-0 bg-blue-700 opacity-75"></div>
          </div>

          <span className="relative z-10 text-center font-bold">
            About<br/>Bethany Covenant
          </span>
          
        </div>
      </div>
    );
}
