'use client'
import React from "react";

interface TextGradientProps {
  text?: string;
  ntext?: string;
  gtext?: string;
  activeness?: boolean;
  modifiedAt?: string;
}

function TextGradient({ text, ntext, gtext, activeness, modifiedAt }: TextGradientProps) {
  return (
    <div className="w-full grid [grid-template-areas:'a']">
      {activeness && (
        <h1 className="[grid-area:a] leading-none font-machina text-[4.2rem] md:text-[8.5rem] font-normal tracking-[-0.01em] uppercase m-0 max-w-[111rem] font-features-['ss12'_on]" >
          <span className="rotating-text-module__text-prefix">{text}</span>
          <span className="inline transition-opacity duration-300 ease-in-out opacity-100">
            <span>
              <strong className="bg-clip-text text-transparent font-normal" style={{ backgroundImage: "linear-gradient(270deg,#23B7CA 0%,#FDAB3B 100%)", WebkitBackgroundClip: "text" }}>
                {gtext}
              </strong> {ntext}
            </span>
          </span>
        </h1>
      )}
      <div className="leading-[1.2] font-neue-haas text-[1.4rem] font-medium tracking-normal my-[3rem] md:my-[4rem] mb-[6rem]">{modifiedAt}</div>
    </div>
  )
}
export default TextGradient;
