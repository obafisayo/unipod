'use client'
import React from "react";
import Image from "next/image";

const office2_600 = '/assets/lounge-blue.jpg'
const office2_1200 = '/assets/lounge-blue.jpg'
const office2_1800 = '/assets/lounge-blue.jpg'
const office3_400 = '/assets/cafe-bar.jpg'
const office3_800 = '/assets/cafe-bar.jpg'
const office3_1200 = '/assets/cafe-bar.jpg'

function CareerDoubleImg() {
  return (
    <section className="relative my-[4rem] md:my-[8rem]">
      <style dangerouslySetInnerHTML={{ __html: `
        .di-grid { grid-template: "a a" "c b" .5fr; }
        .di-heading { grid-area: a; }
        .di-primary { grid-area: b; }
        .di-secondary { grid-area: c; }
        @media (min-width: 768px) {
          .di-grid { grid-template: "a b" "c b"; grid-template-columns: minmax(0,.5fr) minmax(0,.5fr); }
        }
      `}} />
      <section className="px-[var(--content-padding)]">
        <div id="candidates-section" className="absolute top-[-7.2rem] md:top-[-12.8rem]"></div>
        <div className="di-grid w-full max-w-[256rem] mx-auto grid gap-x-[2rem] md:gap-x-[10rem]">
          <h1 className="di-heading w-full m-0 mb-[6rem] font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] md:text-[3.6rem] md:m-[6rem_0_10rem] lg:m-[6rem_0_18rem]">We&apos;re hiring candidates who are hungry to make their impact across AI, engineering, and design, at our headquarters in Sunnyvale, CA.</h1>
          <div className="di-primary relative w-full h-auto">
            <Image src={office2_600} width={1800} height={2025} alt="" sizes="(min-width: 1440px) 1800px, (min-width: 768px) 1200px, 600px" className="max-w-full h-auto w-full" />
          </div>
          <div className="di-secondary relative w-full h-auto">
            <Image src={office3_400} width={1800} height={1800} alt="" sizes="(min-width: 1440px) 1200px, (min-width: 768px) 800px, 400px" className="max-w-full h-auto w-full mt-[12rem] md:mt-0" loading="lazy" />
          </div>>
        </div>
      </section>
    </section>
  )
}
export default CareerDoubleImg;
