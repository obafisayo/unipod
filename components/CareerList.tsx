'use client'
import React from "react";
import Slider from "./Slider";

function CareerList() {
  return (
    <section className="p-[8rem_var(--content-padding)] md:p-[16rem_var(--content-padding)] bg-brand-dark">
      <section className="relative overflow-hidden text-white">
        <div id="careers-listing"></div>
        <div className="w-full max-w-1024 mx-auto grid grid-cols-1 gap-[6rem] lg:gap-36 lg:grid-cols-[22rem_1fr]">
          <div className="flex flex-col items-start gap-8 w-full sm:max-w-[30rem]">
            <h1 className="font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] m-0 md:text-[3.6rem]">Open roles</h1>
            <p className="font-neue-haas text-[1.4rem] leading-normal tracking-[-0.01em] m-0">Have another role in mind? Let us know what you could bring to the team.</p>
            <Slider fw={'500'} fsz={'1.4rem'} slide text={'Contact Us'} icon arrowUpRight ff={"neue-haas-grot-text"} light bordercolor={'white'} />
          </div>
          <div>
            <p className="font-neue-haas text-[1.4rem] leading-normal tracking-[-0.01em] text-[hsla(0,0%,100%,.6)] m-0 md:text-[1.6rem]">No open roles at this time. Check back soon.</p>
          </div>
        </div>
      </section>
    </section>
  )
}
export default CareerList;
