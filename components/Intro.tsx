'use client'
import React from "react";
import Slider from "./Slider";
import Link from "next/link";
import Totop from "./Totop";

interface IntroProps {
  name: string;
  ntext: string;
  gtext: string;
  descriptionlink?: boolean;
}

function Intro({ name, ntext, gtext, descriptionlink }: IntroProps) {
  return (
    <div className="rich-text-page-content__intro w-full max-w-[256rem] mx-auto bg-[#0c0c0c] p-[9rem_var(--content-padding)_6rem] text-white md:p-[14rem_var(--content-padding)_9rem] lg:p-[14rem_var(--content-padding)_12rem]">
      <div className="rich-text-page-content__intro-inner w-full max-w-[92rem]">
        <div className="rich-text-page-content__kicker font-neue-haas text-[1.4rem] font-medium leading-[1.2] tracking-[0]">{name}</div>
        <h1 className="rich-text-page-content__heading font-machina text-[4.2rem] font-normal leading-[1] tracking-[-0.01em] uppercase m-[4rem_0] md:text-[6rem] xl:text-[8.5rem]" style={{ fontFeatureSettings: '"ss12" on' }}>
          <span className="gradient-rich-text__heading-text">{ntext}<strong className="gradient-rich-text__gradient-text font-normal text-transparent bg-clip-text [-webkit-background-clip:text]" style={{ background: 'linear-gradient(270deg,#ff38bb 4.25%,#ff8038 51.61%,#f5be66 80.43%,#f4dca8 93.03%)', backgroundClip: 'text', WebkitBackgroundClip: 'text' }}>{gtext}</strong></span>
        </h1>
        <div className="rich-text-page-content__meta-info font-neue-haas text-[1.4rem] font-medium leading-[1.2] tracking-[0] mb-[3rem]">
          <address className="rich-text-page-content__meta-info-author not-italic inline after:content-['•'] after:inline-block after:m-[0_1rem]">By: Brett Adcock, Founder & CEO</address>
          <time dateTime="2022-05-20T00:00:00.000Z" className="rich-text-page-content__meta-info-published">May 20, 2022</time>
        </div>
        {descriptionlink && <>
          <p className="rich-text-page-content__description font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">Background: I&apos;m 20 years into building technology companies, previously the Founder of Archer ($2.7B IPO) and Vettery ($100M exit). My sole focus is Unipod. My ambition is to build this company with a 30-year view, spending my time and resources on maximizing my utility impact to humanity.</p>
          <Link href="/about-us">
            <Totop component={<Slider arrowUpRight slide light bordercolor={'white'} icon text={'About Us'} />} />
          </Link>
        </>}
      </div>
    </div>
  )
}
export default Intro;
