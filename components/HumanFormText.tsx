'use client'
import React from "react";

interface HumanFormTextProps {
  value: string;
  title: string;
  blackText?: boolean;
}

function HumanFormText({ value, title, blackText }: HumanFormTextProps) {
  return (
    <div className="text-right flex flex-col justify-end items-end gap-[1rem] md:gap-8 pt-[1rem] md:pt-8 border-t-[0.1rem] border-solid border-[hsla(0,0%,5%,.1)] md:first:border-t-0">
      <dt className={`leading-[1.2] font-neue-haas text-[1.4rem] font-medium tracking-normal ${blackText ? 'text-brand-dark' : 'text-white'}`}>
        {title}
      </dt>
      <dd className="leading-none font-machina text-[4.2rem] md:text-[10rem] lg:text-[14.5rem] lg:leading-[14.5rem] font-normal tracking-[-0.01em] uppercase text-transparent whitespace-nowrap bg-clip-text bg-[linear-gradient(-90deg,#23B7CA_0%,#FDAB3B_100%)] font-features-['ss12'_on]">
        <span className="stats-module__number-shuffler">{value}</span>
      </dd>
    </div>
  )
}
export default HumanFormText;
