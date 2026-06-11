'use client'
import React, { useEffect } from "react";
import Link from "next/link";

function Masterplan() {
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
    <main data-screen-label="master-plan" className="block bg-[#fff]">
      {/* PAGE HERO */}
      <section className="relative bg-[#0c0c0c] text-white overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover opacity-50 z-[1]" src="/assets/mural-lounge.jpg" alt="Unipod Masterplan mural" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[rgba(12,12,12,0.5)] via-[rgba(12,12,12,0.35)_40%] to-[rgba(12,12,12,0.85)_100%]"></div>
        <div className="relative z-[3] max-w-[256rem] mx-auto pt-[14rem] md:pt-[20rem] px-[var(--content-padding)] pb-[6rem] md:pb-[8rem]">
          <div className="font-machina uppercase text-[1.4rem] tracking-[0.04em] text-[rgba(255,255,255,0.7)] mb-[2.4rem]">Master Plan</div>
          <h1 className="font-machina uppercase font-normal text-[4rem] md:text-[70px] leading-none tracking-[-0.01em] m-0 max-w-[90rem] [font-feature-settings:'ss12'_on]">Roadmap to a positive future powered by AI</h1>
          <p className="mt-[3rem] max-w-[60rem] text-[1.6rem] md:text-[18px] leading-[1.5] text-[rgba(255,255,255,0.85)]">AI isn't something that happens to us. It's something we build. Our master plan outlines the strategic bets we're making to ensure African talent leads the next decade of automation.</p>
        </div>
      </section>

      {/* RICH TEXT CONTENT */}
      <section className="py-[14rem] md:py-[22rem] px-[var(--content-padding)] pb-[8rem] md:pb-[12rem] bg-[#fff]">
        <div className="max-w-[92.5rem] mx-auto reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <h2 className="mt-[4rem] mb-[2rem] font-neue-haas font-medium text-[14px] uppercase tracking-[0.02em] text-[hsla(0,0%,5%,.5)]">1. The Infrastructure Gap</h2>
          <p className="font-neue-haas font-normal text-[17px] md:text-[19px] leading-[160%] tracking-[-0.01em] mb-[2.4rem] text-pretty text-[#0c0c0c]">
            Historically, the biggest barrier for hardware and AI innovation in West Africa hasn't been talent — it's been infrastructure. You cannot train frontier models without GPUs, and you cannot iterate on robotics without reliable access to CNC machines and rapid prototyping tools.
          </p>
          <p className="font-neue-haas font-normal text-[17px] md:text-[19px] leading-[160%] tracking-[-0.01em] mb-[2.4rem] text-pretty text-[#0c0c0c]">
            <strong>Phase 1</strong> of our master plan focuses on solving the hardware bottleneck. By installing enterprise-grade compute and manufacturing tools directly on the UNILAG campus, we are collapsing the distance between an idea and a prototype.
          </p>

          <h2 className="mt-[8rem] mb-[2rem] font-neue-haas font-medium text-[14px] uppercase tracking-[0.02em] text-[hsla(0,0%,5%,.5)]">2. Building the Network</h2>
          <p className="font-neue-haas font-normal text-[17px] md:text-[19px] leading-[160%] tracking-[-0.01em] mb-[2.4rem] text-pretty text-[#0c0c0c]">
            A single hub is a proof of concept. A network of hubs is an ecosystem. Working alongside the UNDP, our goal is to blueprint the operational, academic, and economic models necessary to franchise the Unipod concept across the continent.
          </p>
          <p className="font-neue-haas font-normal text-[17px] md:text-[19px] leading-[160%] tracking-[-0.01em] mb-[2.4rem] text-pretty text-[#0c0c0c]">
            By standardizing the tech stack (both software and hardware) across nodes in Nigeria, Rwanda, Kenya, and beyond, we enable cross-border collaboration. A mechanical engineer in Lagos should be able to design a chassis, share the CAD file, and have it printed for testing in Nairobi by the end of the day.
          </p>

          <h2 className="mt-[8rem] mb-[2rem] font-neue-haas font-medium text-[14px] uppercase tracking-[0.02em] text-[hsla(0,0%,5%,.5)]">3. From Prototype to Product</h2>
          <p className="font-neue-haas font-normal text-[17px] md:text-[19px] leading-[160%] tracking-[-0.01em] mb-[2.4rem] text-pretty text-[#0c0c0c]">
            Universities are incredible engines of invention, but they often struggle with commercialization. Too many brilliant projects end up sitting on a shelf after the final grade is submitted.
          </p>
          <p className="font-neue-haas font-normal text-[17px] md:text-[19px] leading-[160%] tracking-[-0.01em] mb-[2.4rem] text-pretty text-[#0c0c0c]">
            <strong>Phase 3</strong> is the venture transition. We are building direct pipelines from the Unipod to early-stage venture capital firms, manufacturing partners in Asia, and public-sector procurement. If you build something that works here, we will help you scale it to the world.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#f6f6ef] py-[14rem] px-[var(--content-padding)] border-t border-[hsla(0,0%,5%,.1)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] md:gap-[3rem] max-w-[256rem] mx-auto w-full reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div><h2 className="m-0 font-normal tracking-[-0.01em] font-neue-haas text-[2.6rem] md:text-[36px] leading-[1.1] text-pretty" style={{maxWidth: '57rem'}}>Contribute to the plan</h2></div>
          <div className="flex flex-col gap-[2rem] justify-end">
            <p className="m-0 text-[1.6rem] leading-[1.5] max-w-[46rem]">The master plan is a living document. We are actively seeking faculty, industry partners, and policy makers to help refine our execution.</p>
          </div>
          <div className="md:col-start-1 md:col-end-2 mt-[2rem] md:mt-0 flex flex-wrap gap-[1.6rem]">
            <Link href="/about-us" className="inline-flex justify-center items-center self-start px-[3rem] h-[4.8rem] text-[#0c0c0c] bg-[#797af2] border-none rounded-[2.4rem] cursor-pointer font-neue-haas text-[1.4rem] font-medium no-underline leading-[1.2] transition-colors duration-400 ease-[ease] hover:bg-[#c9c3de]">
              Contact Us
              <svg viewBox="0 0 11 11" fill="none" className="ml-[1rem] w-[1.3rem]"><path d="M1 5.5h9m0 0L5.5 1M10 5.5L5.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Masterplan;
