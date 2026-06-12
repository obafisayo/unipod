'use client'
import React from "react";

function MetricsModule() {
  return (
    <section className="section section--with-background section--dark p-[8rem_var(--content-padding)] md:p-[16rem_var(--content-padding)]">
      <section className="metrics-module section--metrics-module text-white">
        <div id="metrics" className="section__anchor"></div>
        <div className="metrics-module__inner w-full max-w-[144rem] mx-auto relative">
          <div className="metrics-module__divider-line absolute top-0 left-[var(--content-padding)] w-[calc(100%-var(--content-padding)*2)] h-[0.1rem] bg-[hsla(0,0%,100%,.2)]"></div>
          <h1 className="metrics-module__kicker font-neue-haas text-[1.4rem] font-medium leading-[1.2] tracking-normal m-[0_0_4rem] md:m-[0_0_5.5rem]">Unipod by numbers</h1>
          <dl className="metrics-module__list m-0 p-0 list-none grid grid-cols-1 flex-col gap-[4rem] md:grid-cols-3 md:flex-row md:gap-8 md:items-center md:justify-center">
            <div className="metrics-module__item m-0 text-left">
              <dt className="metrics-module__item-title inline-block font-machina text-[7rem] font-normal leading-none tracking-[-0.01em] text-transparent bg-clip-text [-webkit-background-clip:text] md:text-[15rem] bg-[linear-gradient(270deg,#ff38bb_5%,#ff8038_55%,#f5be66_65%,#f1fff7_93%)] font-features-['ss12'_on]" >40</dt>
              <dd className="metrics-module__item-description font-neue-haas text-[1.4rem] leading-normal tracking-[-0.01em] m-0 md:text-[1.6rem]">employees</dd>
            </div>
            <div className="metrics-module__item m-0 text-left md:text-center">
              <dt className="metrics-module__item-title inline-block font-machina text-[7rem] font-normal leading-none tracking-[-0.01em] text-transparent bg-clip-text [-webkit-background-clip:text] md:text-[15rem] bg-[linear-gradient(270deg,#ff38bb_5%,#ff8038_55%,#f5be66_65%,#f1fff7_93%)] font-features-['ss12'_on]" >100+</dt>
              <dd className="metrics-module__item-description font-neue-haas text-[1.4rem] leading-normal tracking-[-0.01em] m-0 md:text-[1.6rem]">years of combined AI & humanoid experience</dd>
            </div>
            <div className="metrics-module__item m-0 text-left md:text-right">
              <dt className="metrics-module__item-title inline-block font-machina text-[7rem] font-normal leading-none tracking-[-0.01em] text-transparent bg-clip-text [-webkit-background-clip:text] md:text-[15rem] bg-[linear-gradient(270deg,#ff38bb_5%,#ff8038_55%,#f5be66_65%,#f1fff7_93%)] font-features-['ss12'_on]" >&lt;2</dt>
              <dd className="metrics-module__item-description font-neue-haas text-[1.4rem] leading-normal tracking-[-0.01em] m-0 md:text-[1.6rem]">years until go to market</dd>
            </div>
          </dl>
        </div>
      </section>
    </section>
  )
}
export default MetricsModule;
