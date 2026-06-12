'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import StaffsModule from "@/components/StaffsModule";
import ShortText from "@/components/ShortText";
function About() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main data-screen-label="about" className="block">
      {/* PAGE HERO */}
      <section className="relative bg-brand-dark text-white overflow-hidden">
        <Image className="absolute inset-0 w-full h-full object-cover opacity-50 z-1" src="/assets/entrance-mural.jpg" alt="Unipod entrance with African heritage mural" fill />
        <div className="absolute inset-0 z-2 bg-gradient-to-b from-[rgba(12,12,12,0.5)] via-[rgba(12,12,12,0.35)_40%] to-[rgba(12,12,12,0.85)_100%]"></div>
        <div className="relative z-3 max-w-1024 mx-auto pt-[14rem] md:pt-[20rem] px-(--content-padding) pb-[6rem] md:pb-[8rem]">
          <div className="font-machina uppercase text-[1.4rem] tracking-[0.04em] text-[rgba(255,255,255,0.7)] mb-[2.4rem]">UNDP · University of Lagos</div>
          <h1 className="font-machina uppercase font-normal text-[4rem] md:text-[70px] leading-none tracking-[-0.01em] m-0 max-w-[90rem] font-features-['ss12'_on]">The hub for African innovators</h1>
          <p className="mt-12 max-w-[60rem] text-[1.6rem] md:text-[18px] leading-normal text-[rgba(255,255,255,0.85)]">AI Unipod provides students and researchers at the University of Lagos with world-class facilities, robotics labs, and a transparent platform to turn ideas into impact.</p>
          <div className="flex flex-wrap gap-4 mt-[3.4rem]">
            <span className="inline-flex items-center gap-[0.7rem] px-[1.4rem] py-[0.7rem] rounded-[3rem] border border-[rgba(255,255,255,0.3)] text-[13px] text-white before:content-[''] before:w-[0.7rem] before:h-[0.7rem] before:rounded-full before:bg-brand-purple">UNDP Affiliated</span>
            <span className="inline-flex items-center gap-[0.7rem] px-[1.4rem] py-[0.7rem] rounded-[3rem] border border-[rgba(255,255,255,0.3)] text-[13px] text-white before:content-[''] before:w-[0.7rem] before:h-[0.7rem] before:rounded-full before:bg-brand-purple">UNILAG Accredited</span>
            <span className="inline-flex items-center gap-[0.7rem] px-[1.4rem] py-[0.7rem] rounded-[3rem] border border-[rgba(255,255,255,0.3)] text-[13px] text-white before:content-[''] before:w-[0.7rem] before:h-[0.7rem] before:rounded-full before:bg-brand-purple">Remote-Friendly</span>
          </div>
        </div>
      </section>

      {/* CUTTING-EDGE TOOLS / ETHOS */}
      <section className="bg-[#fff] py-[8rem] md:py-[14rem] px-(--content-padding)">
        <div className="max-w-[110rem] mx-auto reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="font-machina text-[1.4rem] font-medium tracking-0 uppercase mb-[3rem] text-[hsla(0,0%,5%,.5)]">Cutting-Edge Tools</div>
          <p className="font-neue-haas font-normal text-[2.2rem] md:text-[32px] leading-[1.25] tracking-[-0.01em] m-0 text-pretty">At AI Unipod, we believe great ideas don't have a postcode. A student in Akoka should have the same access to 3D printers, AI hardware, and design software as a student at MIT — so we built the infrastructure to make that a reality.</p>
        </div>
      </section>

      {/* FULL IMAGE */}
      <div className="relative reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">
        <Image className="w-full h-auto aspect-[3/4] md:aspect-auto md:h-[50vw] md:min-h-240 md:max-h-[90rem] object-cover" src="/assets/robotics-lab.jpg" alt="AI and robotics lab inside Unipod" width={1920} height={1080} />
      </div>

      {/* LEADERSHIP */}
      <div className="py-[8rem] md:py-[14rem]">
        <StaffsModule />
      </div>

      {/* CTA */}
      <ShortText 
        bcc="#f6f6ef"
        header="Have an idea worth building?"
        paragraph="Submit your innovation proposal from anywhere — whether you're on campus or researching remotely from Abuja. Unipod connects you with the people and tools to take your idea further."
        to="/proposals"
        bt="Submit a Proposal"
      />
    </main>
  );
}
export default About;
