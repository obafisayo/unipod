'use client'
import React from "react";
import MasterplanTimelineLi from "./MasterplanTimelineLi";

function MasterplanTimeline() {
  return (
    <section className="inline-static-timeline bg-[#0c0c0c] text-white p-[4rem_var(--content-padding)] w-[calc(100%+var(--content-padding)*2)] ml-[calc(var(--content-padding)*-1)] md:ml-0 md:w-full md:p-[8rem_4rem]">
      <h1 className="inline-static-timeline__heading font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] normal-case m-[0_0_2.4rem] max-w-[51rem] md:text-[3.6rem] md:mb-[4rem]">We see three major business opportunities in the long term</h1>
      <div className="inline-static-timeline__sub-text w-full flex items-center justify-between mb-[2.4rem]">
        <p className="inline-static-timeline__sub-text-left font-neue-haas text-[1.4rem] leading-[1.5] tracking-[-0.01em]">
          More Structured <br />
          Less Variability
        </p>
        <p className="inline-static-timeline__sub-text-right hidden font-neue-haas text-[1.4rem] leading-[1.5] tracking-[-0.01em] md:block lg:hidden">
          Less Structured <br />
          More Variability
        </p>
      </div>
      <ul className="inline-static-timeline__items p-0 m-0 list-none grid grid-cols-1 gap-[3rem] md:grid-cols-3 md:gap-x-[2rem] md:gap-y-[3rem] lg:grid-cols-1 lg:gap-[3rem] xl:gap-x-[2rem] xl:gap-y-[3rem]">
        <MasterplanTimelineLi heading={'Physical Labor'} highlight={'50% of global GDP is human labor ($42T)'} />
        <MasterplanTimelineLi heading={'Consumer Household'} highlight={'2.3 billion households worldwide'} highlight1={'700M aging population in need of at-home care'} />
        <MasterplanTimelineLi heading={'Off-World'} highlight={'Space exploration to build new worlds'} />
      </ul>
      <p className="inline-static-timeline__sub-text-right-mobile block mt-[3.4rem] font-neue-haas text-[1.4rem] leading-[1.5] tracking-[-0.01em] md:hidden lg:block">
        Less Structured <br />
        More Variability
      </p>
    </section>
  )
}
export default MasterplanTimeline;
