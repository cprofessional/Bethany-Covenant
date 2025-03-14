"use client"

import Image from 'next/image';
import BookImage from "@/public/assets/BannerBook.jpg";
import Header from '../layout/header';

export default function HeadBanner() {
  return (
    <div> 
        <div className="absolute inset-0 bg-blue-900 opacity-85 h-1/3"></div>
        <Header theme='dark' />
      <div className="relative w-full h-64 md:h-80 lg:h-96 flex items-center justify-center">
        <Image
          src={BookImage}
          alt="Book Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />

        <div className="absolute inset-0 bg-blue-900 opacity-80">

        </div>
        <h1 className="relative text-white text-3xl md:text-5xl font-semibold">
          Contact
        </h1>
      </div>
    </div>
  )
}