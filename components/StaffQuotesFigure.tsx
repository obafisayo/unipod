'use client'
import React from "react";
import Image from "next/image";

interface StaffQuotesFigureProps {
  blockquote: string;
  name: string;
  title: string;
  imgsources: { src: string; width: number }[];
  src: string;
}

function StaffQuotesFigure({ blockquote, name, title, src }: StaffQuotesFigureProps) {
  return (
    <figure className="quote-item flex flex-col gap-[2rem] m-0 md:gap-[4rem]">
      <blockquote className="quote-item__quote font-machina text-[1.8rem] font-normal leading-[1.11] tracking-[-0.01em] uppercase m-0 md:text-[2.4rem]" style={{ fontFeatureSettings: '"ss12" on' }}>{blockquote}</blockquote>
      <div className="quote-item__author-info grid grid-cols-[8rem_1fr] gap-[2.3rem] items-center justify-center">
        <Image alt={name || ""} sizes="160vw"
          src={src}
          width={160} height={160} decoding="async" className="quote-item__author-image w-[8rem] h-[8rem] rounded-full" loading="lazy" style={{ color: 'transparent' }}
        />
        <figcaption className="quote-item__author-title font-neue-haas text-[1.4rem] leading-[1.5] tracking-[-0.01em]">
          <span className="quote-item__author font-medium block mb-[0.5rem] md:text-[1.6rem]">{name}</span>
          <span className="quote-item__author-title font-neue-haas text-[1.4rem] leading-[1.5] tracking-[-0.01em]">{title}</span>
        </figcaption>
      </div>
    </figure>
  )
}
export default StaffQuotesFigure;
