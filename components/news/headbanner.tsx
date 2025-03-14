"use client"

import Image from 'next/image';
import PaperImage from "@/public/assets/BannerNewspaper.jpg";

export default function HeadBanner() {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 flex items-center justify-center">
      <Image
        src={PaperImage}
        alt="Book Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />

      <div className="absolute inset-0 bg-blue-900 opacity-80">

      </div>
      <h1 className="relative text-white text-3xl md:text-5xl font-semibold">
        Church News
      </h1>

    </div>
  )
}