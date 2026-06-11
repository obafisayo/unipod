'use client'
import React, { useEffect } from "react";
import Link from "next/link";

function Culture() {
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
    <main data-screen-label="culture" className="block bg-[#fff]">
      {/* PAGE HERO */}
      <section className="relative bg-[#0c0c0c] text-white overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover opacity-50 z-[1]" src="/assets/makerspace-1.jpg" alt="Students collaborating in the makerspace" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[rgba(12,12,12,0.5)] via-[rgba(12,12,12,0.35)_40%] to-[rgba(12,12,12,0.85)_100%]"></div>
        <div className="relative z-[3] max-w-[256rem] mx-auto pt-[14rem] md:pt-[20rem] px-[var(--content-padding)] pb-[6rem] md:pb-[8rem]">
          <div className="font-machina uppercase text-[1.4rem] tracking-[0.04em] text-[rgba(255,255,255,0.7)] mb-[2.4rem]">Our Culture</div>
          <h1 className="font-machina uppercase font-normal text-[4rem] md:text-[70px] leading-none tracking-[-0.01em] m-0 max-w-[90rem] [font-feature-settings:'ss12'_on]">Built by builders</h1>
          <p className="mt-[3rem] max-w-[60rem] text-[1.6rem] md:text-[18px] leading-[1.5] text-[rgba(255,255,255,0.85)]">Unipod isn't just a facility. It's a community of relentlessly curious engineers, designers, and researchers who believe the best way to predict the future is to prototype it.</p>
        </div>
      </section>

      {/* VALUES INTRO */}
      <section className="bg-[#fff] py-[8rem] md:py-[14rem] px-[var(--content-padding)]">
        <div className="max-w-[110rem] mx-auto reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="font-machina text-[1.4rem] font-medium tracking-0 uppercase mb-[3rem] text-[hsla(0,0%,5%,.5)]">The Unipod Way</div>
          <p className="font-neue-haas font-normal text-[2.2rem] md:text-[32px] leading-[1.25] tracking-[-0.01em] m-0 text-pretty">We prize execution over theory. We believe that a messy workbench is better than a perfect presentation. Here, titles matter less than what you can build.</p>
        </div>
      </section>

      {/* VALUES LIST */}
      <section className="bg-[#f6f6ef] py-[8rem] md:py-[12rem] px-[var(--content-padding)]">
        <ol className="list-none m-0 p-0 max-w-[256rem] mx-auto [counter-reset:vc]">
          <li className="grid grid-cols-1 md:grid-cols-[8rem_1fr_1.2fr] gap-[1.2rem] md:gap-[3rem] py-[3rem] md:py-[4rem] border-t border-[hsla(0,0%,5%,.2)] items-start [counter-increment:vc] before:content-[counter(vc,decimal-leading-zero)] before:font-machina before:text-[18px] before:text-[hsla(0,0%,5%,.5)] reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <h3 className="m-0 text-[22px] md:text-[28px] font-normal leading-[1.1] tracking-[-0.01em]">Move fast and iterate</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-[hsla(0,0%,5%,.78)]">Your first prototype will be bad. That's the point. We get ideas out of our heads and into the physical world as quickly as possible so we can find the flaws and fix them.</p>
          </li>
          <li className="grid grid-cols-1 md:grid-cols-[8rem_1fr_1.2fr] gap-[1.2rem] md:gap-[3rem] py-[3rem] md:py-[4rem] border-t border-[hsla(0,0%,5%,.2)] items-start [counter-increment:vc] before:content-[counter(vc,decimal-leading-zero)] before:font-machina before:text-[18px] before:text-[hsla(0,0%,5%,.5)] reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <h3 className="m-0 text-[22px] md:text-[28px] font-normal leading-[1.1] tracking-[-0.01em]">Hardware is hard (do it anyway)</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-[hsla(0,0%,5%,.78)]">Software scales infinitely, but the physical world is where humans live. We tackle the messy, difficult problems of supply chains, manufacturing, and hardware integration.</p>
          </li>
          <li className="grid grid-cols-1 md:grid-cols-[8rem_1fr_1.2fr] gap-[1.2rem] md:gap-[3rem] py-[3rem] md:py-[4rem] border-t border-[hsla(0,0%,5%,.2)] items-start [counter-increment:vc] before:content-[counter(vc,decimal-leading-zero)] before:font-machina before:text-[18px] before:text-[hsla(0,0%,5%,.5)] reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <h3 className="m-0 text-[22px] md:text-[28px] font-normal leading-[1.1] tracking-[-0.01em]">Open doors, open minds</h3>
            <p className="m-0 text-[16px] leading-[1.55] text-[hsla(0,0%,5%,.78)]">Innovation happens at intersections. An architecture student might have the perfect insight for a robotics problem. We share knowledge freely and collaborate across disciplines.</p>
          </li>
        </ol>
      </section>

      {/* GALLERY */}
      <section className="bg-[#0c0c0c] py-[8rem] md:py-[12rem] px-[var(--content-padding)]">
        <h2 className="text-[#fff] font-neue-haas text-[26px] md:text-[36px] font-normal leading-[1.1] m-0 mb-[4.2rem] md:mb-[6rem] max-w-[256rem] mx-auto reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">Inside the hub</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.4rem] max-w-[256rem] mx-auto">
          <div className="relative overflow-hidden rounded-[0.6rem] group md:row-span-2 reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <img src="/assets/robotics-lab.jpg" alt="Robotics lab" className="w-full h-[24rem] md:h-[61.4rem] object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
            <div className="absolute left-0 right-0 bottom-0 p-[2rem] text-[#fff] text-[14px] bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent">Robotics & AI Lab</div>
          </div>
          <div className="relative overflow-hidden rounded-[0.6rem] group reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <img src="/assets/makerspace-1.jpg" alt="Makerspace" className="w-full h-[24rem] md:h-[30rem] object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
            <div className="absolute left-0 right-0 bottom-0 p-[2rem] text-[#fff] text-[14px] bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent">Hardware Prototyping</div>
          </div>
          <div className="relative overflow-hidden rounded-[0.6rem] group reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <img src="/assets/staircase-mural.jpg" alt="Mural" className="w-full h-[24rem] md:h-[30rem] object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
            <div className="absolute left-0 right-0 bottom-0 p-[2rem] text-[#fff] text-[14px] bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent">Creative Corners</div>
          </div>
          <div className="relative overflow-hidden rounded-[0.6rem] group reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <img src="/assets/entrance-mural.jpg" alt="Entrance mural" className="w-full h-[24rem] md:h-[30rem] object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
            <div className="absolute left-0 right-0 bottom-0 p-[2rem] text-[#fff] text-[14px] bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent">Exhibition Space</div>
          </div>
          <div className="relative overflow-hidden rounded-[0.6rem] group reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <img src="/assets/lounge-sunset.jpg" alt="Lounge area" className="w-full h-[24rem] md:h-[30rem] object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
            <div className="absolute left-0 right-0 bottom-0 p-[2rem] text-[#fff] text-[14px] bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent">Collab Lounges</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#fff] py-[8rem] md:py-[14rem] px-[var(--content-padding)] border-t border-[hsla(0,0%,5%,.1)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] md:gap-[3rem] max-w-[256rem] mx-auto w-full reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div><h2 className="m-0 font-normal tracking-[-0.01em] font-neue-haas text-[2.6rem] md:text-[36px] leading-[1.1] text-pretty" style={{maxWidth: '57rem'}}>Ready to join the community?</h2></div>
          <div className="flex flex-col gap-[2rem] justify-end">
            <p className="m-0 text-[1.6rem] leading-[1.5] max-w-[46rem]">If you have the drive to build the future, there's a place for you here. View our current openings or submit a proposal.</p>
          </div>
          <div className="md:col-start-1 md:col-end-2 mt-[2rem] md:mt-0 flex flex-wrap gap-[1.6rem]">
            <Link href="/careers" className="inline-flex justify-center items-center self-start px-[3rem] h-[4.8rem] text-[#0c0c0c] bg-[#797af2] border-none rounded-[2.4rem] cursor-pointer font-neue-haas text-[1.4rem] font-medium no-underline leading-[1.2] transition-colors duration-400 ease-[ease] hover:bg-[#c9c3de]">
              Submit a Proposal
              <svg viewBox="0 0 11 11" fill="none" className="ml-[1rem] w-[1.3rem]"><path d="M1 5.5h9m0 0L5.5 1M10 5.5L5.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link href="/careers" className="inline-flex justify-center items-center self-start px-[3rem] h-[4.8rem] text-[#0c0c0c] bg-transparent border border-[#0c0c0c] rounded-[2.4rem] cursor-pointer font-neue-haas text-[1.4rem] font-medium no-underline leading-[1.2] transition-colors duration-400 ease-[ease] hover:bg-[#0c0c0c] hover:text-[#fff]">
              View Open Roles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Culture;
