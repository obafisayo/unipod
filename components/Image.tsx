'use client'
import React from "react";

interface ImageProps {
  img1: string;
  img2: string;
  marginTop?: boolean;
}

function ImageComponent({ img1, img2, marginTop }: ImageProps) {
  return (
    <div className={`relative ${marginTop ? 'mt-[4rem] md:mt-[8rem]' : 'mt-0'}`}>
      <picture>
        <source srcSet={img2} media="(min-width: 768px)" />
        <img
          src={img1}
          width="750" height="950"
          alt=""
          className="w-full object-cover"
          style={{ height: '50vw', minHeight: '60rem', maxHeight: '90rem' }}
          loading="lazy"
        />
      </picture>
    </div>
  )
}
export default ImageComponent;
