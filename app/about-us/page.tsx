'use client'
import React from "react";
import ShortText from "../../components/ShortText";
import ImageComponent from "../../components/Image";
import StaffsModule from "../../components/StaffsModule";

const insideWide = '/assets/robotics-lab.jpg'
const insideTall = '/assets/robotics-lab.jpg'

function About() {
  return (
    <main className="block">
      <section className="section text-hero mt-[10.4rem] mb-[8rem] p-[2rem] md:mt-[20rem] md:mb-[12rem]">
        <div id="the-hub-for-african-innovators" className="section__anchor"></div>
        <div className="text-hero__content mx-auto w-full max-w-[256rem]">
          <h1 className="text-hero__heading font-machina text-[4.2rem] md:text-[8.5rem] font-normal leading-none tracking-[-0.01em] uppercase m-0 w-full max-w-[104.4rem]">
            THE HUB FOR AFRICAN INNOVATORS
          </h1>
          <p className="font-neue-haas text-[1.6rem] md:text-[1.9rem] leading-[1.5] mt-[3rem] max-w-[64rem]">
            AI Unipod provides students and researchers at the University of Lagos with world-class facilities, robotics labs, and a transparent platform to turn ideas into impact.
          </p>
        </div>
      </section>
      <ImageComponent img1={insideTall} img2={insideWide}/>
      <ShortText to={"/careers"} bt={"Submit a Proposal"}
        kicker={"Cutting-Edge Tools"} ppeff headerfsz={"4.2rem"}
        header={"Great ideas don't have a postcode."}
        paragraph={"At AI Unipod, we believe a student in Akoka should have the same access to 3D printers, AI hardware, and design software as a student at MIT."}
        paragraph2={"So we built the infrastructure to make that a reality — AI and robotics labs, a design suite, prototyping equipment, and the mentorship to use them well."}
      />
      <StaffsModule/>
      <ShortText bt={"Submit a Proposal"} to={"/careers"} bcc={"#f6f6ef"}
        header={"The people behind the hub"}
        paragraph={"A dedicated team of academics, researchers, and operators committed to making AI Unipod the best innovation space in West Africa."}
      />
    </main>
  )
}
export default About;
