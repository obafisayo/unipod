'use client'
import React from "react";

interface MasterplanTimelineLiProps {
  heading: string;
  highlight: string;
  highlight1?: string;
}

function MasterplanTimelineLi({ heading, highlight, highlight1 }: MasterplanTimelineLiProps) {
  return (
    <li className="inline-static-timeline__item flex flex-col">
      <article className="inline-static-timeline__inner-wrapper h-full flex flex-col">
        <div className="inline-static-timeline__item-inner relative rounded-[0.5rem] p-[2.6rem_3.2rem] h-full" style={{ background: 'linear-gradient(180deg,#ff38bb 5%,#ff8038 55%,#f5be66 65%,#f1fff7 93%)' }}>
          <div className="inline-static-timeline__item-black-bg z-[1] absolute rounded-[0.5rem] top-[0.1rem] left-[0.1rem] w-[calc(100%-0.2rem)] h-[calc(100%-0.2rem)] bg-[#0c0c0c]"></div>
          <div className="inline-static-timeline__item-text-content relative z-[2]">
            <h1 className="inline-static-timeline__item-heading font-neue-haas text-[1.8rem] font-normal leading-[1.5] tracking-[-0.01em] m-0 md:text-[2.2rem] md:leading-[1.1]">{heading}</h1>
            <ul className="inline-static-timeline__item-highlights p-0 m-0 list-none">
              <li className="inline-static-timeline__item-highlight font-neue-haas text-[1.4rem] leading-[1.5] tracking-[-0.01em] mt-[2.4rem]">{highlight}</li>
              {highlight1 && <li className="inline-static-timeline__item-highlight font-neue-haas text-[1.4rem] leading-[1.5] tracking-[-0.01em] mt-[2.4rem]">{highlight1}</li>}
            </ul>
          </div>
        </div>
      </article>
    </li>
  )
}
export default MasterplanTimelineLi;
