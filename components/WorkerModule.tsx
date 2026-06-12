'use client'
import React from "react";
import Image from "next/image";

const F8 = '/assets/steps-seating.jpg'

function WorkerModule() {
  return (
    <section className="relative">
      <section className="section--with-background section--dark p-[16rem_var(--content-padding)] text-white relative overflow-hidden bg-brand-dark lg:p-[20rem_var(--content-padding)]">
        <div id="enter-a-worker-to-fill-the-gaps" className="absolute top-[-7.2rem] md:top-[-12.8rem]"></div>
        <div className="w-full max-w-[32.5rem] mx-auto relative after:content-[''] after:block after:absolute after:z-2 after:bottom-0 after:left-0 after:w-full after:h-[22rem] md:max-w-[119rem] after:[background:linear-gradient(0deg,#0c0c0c_22.81%,hsla(0,0%,5%,0)_70.16%)]">
          <Image alt="" sizes="2016vw"
            src={F8} width={2016} height={1724} decoding="async" className="absolute bottom-0 left-0 h-[calc(100%-6rem)] w-full z-1 object-cover md:object-contain text-transparent" loading="lazy" 
          />
          <div className="relative z-3">
            <div className="font-neue-haas text-[1.5rem] font-medium leading-[1.2] tracking-normal text-center mb-[2.6rem] md:mb-[4rem]">Enter: a worker to fill the gaps</div>
            <h1 className="hidden md:block font-machina text-[4.2rem] font-normal leading-none tracking-[-0.01em] uppercase w-full m-0 md:text-[6rem] lg:text-[8.5rem] font-features-['ss12'_on]" >
              <span className="block text-left">Our goal is to</span>
              <span className="block text-right">deploy autonomous</span>
              <span className="block text-left">humanoid workers</span>
              <span className="block text-right">To support us</span>
              <span className="block text-left">on a <span className="text-transparent bg-clip-text [-webkit-background-clip:text] bg-[linear-gradient(270deg,#23B7CA_0%,#FDAB3B_100%)]" >global scale.</span></span>
            </h1>
            <h1 className="block md:hidden font-machina text-[4.2rem] font-normal leading-none tracking-[-0.01em] uppercase w-full m-0 font-features-['ss12'_on]" >
              <span className="block text-left">Our goal is</span>
              <span className="block text-right">to deploy</span>
              <span className="block text-left">autonomous</span>
              <span className="block text-left">humanoid</span>
              <span className="block text-right">workers to</span>
              <span className="block text-left">support us</span>
              <span className="block text-left">on a <span className="text-transparent bg-clip-text [-webkit-background-clip:text] bg-[linear-gradient(270deg,#23B7CA_0%,#FDAB3B_100%)]" >global</span></span>
              <span className="block text-right">
                <span className="text-transparent bg-clip-text [-webkit-background-clip:text] bg-[linear-gradient(270deg,#23B7CA_0%,#FDAB3B_100%)]" >scale.</span>
              </span>
            </h1>
          </div>
        </div>
      </section>
    </section>
  )
}
export default WorkerModule;
