'use client'
import React from "react";

interface ValueListProps {
  paragraph: string;
  header: string;
}

function ValueList({ paragraph, header }: ValueListProps) {
  return (
    <li className="grid grid-cols-1 p-[3.2rem_0] border-solid border-t-[0.1rem] gap-[2.4rem] [counter-increment:values-module-counter] first:border-t-0 last:pb-0 md:p-[4.2rem_0] lg:grid-cols-[.04fr_.5fr_.46fr] lg:gap-8" style={{ borderImageSlice: 1, borderImageSource: 'linear-gradient(-90deg,rgba(35,183,202,0.5) 0%,rgba(253,171,59,0.5) 100%)' }}>
      <div>
        <span className="before:content-[counter(values-module-counter,decimal-leading-zero)] before:block before:font-machina before:text-[1.8rem] before:font-normal before:leading-[1.11] before:tracking-[-0.01em] before:uppercase before:whitespace-nowrap md:before:text-[2.4rem] md:before:relative md:before:top-[0.9rem] font-features-['ss12'_on]" ></span>
      </div>
      <div>
        <h1 className="font-machina text-[3.4rem] font-normal leading-[1.11] tracking-normal uppercase m-0 max-w-[60rem] md:text-[5.2rem] font-features-['ss12'_on]" >{header}</h1>
      </div>
      <div className="lg:justify-self-end">
        <p className="font-neue-haas w-full m-0 lg:max-w-[45.5rem]">{paragraph}</p>
      </div>
    </li>
  )
}
export default ValueList;
