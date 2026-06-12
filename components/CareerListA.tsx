'use client'
import React, { useState } from "react";
import Slider from "./Slider";

interface CareerListAProps {
  text: string;
  href: string;
}

function CareerListA({ text, href }: CareerListAProps) {
  const [hover, setHover] = useState(false)
  return (
    <a
      className="transition-colors duration-300 ease-in-out flex flex-col items-start justify-start gap-6 w-full no-underline border-t border-solid border-[hsla(0,0%,100%,.2)] p-[2rem_0] min-h-[8.5rem] md:p-[1rem_0] md:justify-between md:items-center md:grid md:grid-cols-[10rem_1fr_13rem] md:gap-[4rem] hover:md:bg-[hsla(0,0%,100%,.05)] group"
      title="Apply Now"
      rel="noreferrer noopener"
      target="_blank"
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <address className="transition-opacity duration-300 ease-in-out font-neue-haas text-[1.4rem] font-medium leading-[1.2] tracking-normal text-white opacity-60 not-italic block">Lagos, Nigeria</address>
      <h1 className="transition-[background-size] duration-300 ease-in-out font-neue-haas text-[1.8rem] font-normal leading-normal tracking-[-0.01em] m-0 text-white md:leading-[1.1] md:text-[2.2rem]">
        <span
          className="transition-[background-size] duration-300 ease-in-out inline-block group-hover:[background-size:0_0.1rem,100%_0.1rem] bg-[linear-gradient(90deg,transparent,transparent),linear-gradient(90deg,#fff,#fff)] bg-[length:100%_0.1rem,0_0.1rem] bg-[position:100%_100%,0_100%] bg-no-repeat"
        >{text}</span>
      </h1>
      <div className="flex justify-end w-full">
        <Slider asDiv hovered={hover} fw={'500'} fsz={'1.4rem'} slide text={'Apply Now'} icon arrowUpRight ff={"neue-haas-grot-text"} light bordercolor={'white'} />
      </div>
    </a>
  )
}
export default CareerListA;
