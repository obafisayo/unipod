'use client'
import React from "react";

interface HumanFormTextProps {
  value: string;
  title: string;
  blackText?: boolean;
}

function HumanFormText({ value, title, blackText }: HumanFormTextProps) {
  return (
    <div className="text-right flex flex-col justify-end items-end gap-[1rem] md:gap-[2rem] pt-[1rem] md:pt-[2rem] border-t-[0.1rem] border-solid border-[hsla(0,0%,5%,.1)] md:first:border-t-0">
      <dt className={`leading-[1.2] font-neue-haas text-[1.4rem] font-medium tracking-[0] ${blackText ? 'text-[#0c0c0c]' : 'text-white'}`}>
        {title}
      </dt>
      <dd className="leading-[1] font-machina text-[4.2rem] md:text-[10rem] lg:text-[14.5rem] lg:leading-[14.5rem] font-normal tracking-[-0.01em] uppercase text-transparent whitespace-nowrap bg-clip-text" style={{ backgroundImage: "linear-gradient(-90deg,#ff38bb 4.25%,#ff8038 51.61%,#f5be66 80.43%,#f4dca8 93.03%)", WebkitBackgroundClip: "text", fontFeatureSettings: '"ss12" on' }}>
        <span className="stats-module__number-shuffler">{value}</span>
      </dd>
    </div>
  )
}
export default HumanFormText;
