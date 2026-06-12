'use client'
import React, { useState } from "react";
import Slider from "./Slider";

interface NewsBoxesProps {
  href: string;
  text: string;
  text2: string;
}

function NewsBoxes({ href, text, text2 }: NewsBoxesProps) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={href}
      title="Read Now"
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative block text-white p-[2.6rem_3.2rem] min-h-[22.2rem] h-full no-underline md:min-h-[31.4rem]"
    >
      {/* Background elements */}
      <div 
        className="absolute top-0 left-0 w-full h-full rounded-lg z-2 bg-[linear-gradient(180deg,#23B7CA_0%,#FDAB3B_100%)]"
         
      />
      
      <div 
        className="absolute top-0 left-0 w-full h-full rounded-lg z-3 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 border-[0.2rem] border-solid [border-image-source:linear-gradient(180deg,#23B7CA_0%,#FDAB3B_100%)] [border-image-slice:1] blur-[0.6rem] [transform:translateZ(0)]"
      />
      
      <div className="absolute top-[0.1rem] left-[0.1rem] w-[calc(100%-0.2rem)] h-[calc(100%-0.2rem)] bg-brand-dark rounded-lg z-2" />

      <article className="relative h-full flex flex-col items-start justify-start text-left z-4">
        <div className="relative mb-28">
          <span className="block text-white font-neue-haas text-[1.4rem] font-medium leading-[1.2] tracking-0 mb-[2.3rem] md:mb-[3.2rem]">
            {text2}
          </span>
          <h1 
            className="inline text-white font-neue-haas text-[1.8rem] font-normal leading-normal tracking-[-0.01em] normal-case transition-[background-size] duration-300 ease-in-out md:text-[2.2rem] md:leading-[1.1] [background-image:var(--heading-bg)] [background-position:100%_100%,0_100%] bg-no-repeat [background-size:var(--heading-bg-size)]"
            style={{
              '--heading-bg': 'linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,0)),linear-gradient(90deg,#fff,#fff)',
              '--heading-bg-size': hover ? '0 0.1rem,100% 0.1rem' : '100% 0.1rem,0 0.1rem'
            } as React.CSSProperties}
          >
            {text}
          </h1>
        </div>
        <div className="relative mt-auto w-full flex items-center justify-end">
          <Slider asDiv news={hover} icon arrowUpRight text={"Read Now"} light hovered={hover} slide bordercolor={'white'} fw={"600"} />
        </div>
      </article>
    </a>
  );
}

export default NewsBoxes;
