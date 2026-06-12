import React from "react";
import Image from "next/image";

interface ImageProps {
  img1: string;
  img2: string;
  marginTop?: boolean;
}

function ImageComponent({ img1, img2, marginTop }: ImageProps) {
  return (
    <div className={`relative ${marginTop ? 'mt-[4rem] md:mt-[8rem]' : 'mt-0'}`}>
      <div className="block md:hidden">
        <Image
          src={img1}
          width={750} height={950}
          alt=""
          className="w-full object-cover"
          style={{ height: '50vw', minHeight: '60rem', maxHeight: '90rem' }}
          loading="lazy"
        />
      </div>
      <div className="hidden md:block">
        <Image
          src={img2}
          width={1920} height={1080}
          alt=""
          className="w-full object-cover"
          style={{ height: '50vw', minHeight: '60rem', maxHeight: '90rem' }}
          loading="lazy"
        />
      </div>
    </div>
  )
}
export default ImageComponent;
