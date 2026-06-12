'use client'
import React from "react";
import Image from "next/image";

function Author() {
  return (
    <div className="author grid grid-cols-[minmax(0,11.5rem)_1fr] gap-8 items-center mt-12">
      <div className="author__image-container w-full">
        <Image 
          alt="" 
          sizes="230vw"
          src="https://images.ctfassets.net/qx5k8y1u9drj/1IoF22EjstGpW791ynMrkI/b62bcf99af4a2513ead48b0f1c3de486/author_image.png?fm=webp&w=3840&q=70"
          width={230} height={230} decoding="async" className="author__image w-full h-auto text-transparent" loading="lazy" 
        />
      </div>
      <div className="author__about-content -mt-[0.5rem]">
        <Image 
          alt="" 
          sizes="240vw"
          src="https://images.ctfassets.net/qx5k8y1u9drj/6R2duzNEwr83kefvU7O96O/c2f3cd94cb01da47ba852378325ad72f/author-sig.png?fm=webp&w=3840&q=70"
          width={240} height={53} decoding="async" className="author__signature w-[17rem] h-auto text-transparent" loading="lazy" 
        />
        <address className="author__name-title font-neue-haas text-[1.4rem] font-medium leading-[1.2] tracking-normal not-italic mt-[0.5rem]">
          <span className="author__name block">Brett Adcock</span>
          <span className="author__title block font-normal text-[hsla(0,0%,5%,.6)]">Founder & CEO</span>
        </address>
      </div>
    </div>
  )
}
export default Author;
