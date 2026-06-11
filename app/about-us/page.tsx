'use client'
import React, { useEffect } from "react";
import Link from "next/link";

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
      <section className="relative bg-[#0c0c0c] text-white overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover opacity-50 z-[1]" src="/assets/entrance-mural.jpg" alt="Unipod entrance with African heritage mural" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[rgba(12,12,12,0.5)] via-[rgba(12,12,12,0.35)_40%] to-[rgba(12,12,12,0.85)_100%]"></div>
        <div className="relative z-3 max-w-1024 mx-auto pt-[14rem] md:pt-[20rem] px-[var(--content-padding)] pb-[6rem] md:pb-[8rem]">
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
      <section className="bg-[#fff] py-[8rem] md:py-[14rem] px-[var(--content-padding)]">
        <div className="max-w-[110rem] mx-auto reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="font-machina text-[1.4rem] font-medium tracking-0 uppercase mb-[3rem] text-[hsla(0,0%,5%,.5)]">Cutting-Edge Tools</div>
          <p className="font-neue-haas font-normal text-[2.2rem] md:text-[32px] leading-[1.25] tracking-[-0.01em] m-0 text-pretty">At AI Unipod, we believe great ideas don't have a postcode. A student in Akoka should have the same access to 3D printers, AI hardware, and design software as a student at MIT — so we built the infrastructure to make that a reality.</p>
        </div>
      </section>

      {/* FULL IMAGE */}
      <div className="relative reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">
        <img className="w-full h-auto aspect-[3/4] md:aspect-auto md:h-[50vw] md:min-h-[60rem] md:max-h-[90rem] object-cover" src="/assets/robotics-lab.jpg" alt="AI and robotics lab inside Unipod" />
      </div>

      {/* LEADERSHIP */}
      <section className="bg-[#fff] py-[12rem] px-[var(--content-padding)] pb-[8rem]" data-screen-label="leadership">
        <div className="max-w-1024 mx-auto mb-[6rem] reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="font-machina uppercase text-[1.4rem] tracking-[0.04em] text-[hsla(0,0%,5%,.55)] mb-8">Leadership</div>
          <h2 className="font-neue-haas font-normal text-[2.6rem] md:text-[36px] leading-[1.1] tracking-[-0.01em] m-0 max-w-[60rem]">The people behind the hub</h2>
          <p className="mt-[2rem] max-w-[60rem] text-[1.6rem] text-[hsla(0,0%,5%,.7)] m-0">A dedicated team of academics, researchers, and operators committed to making AI Unipod the best innovation space in West Africa.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-1024 mx-auto">
          {/* Person 1 */}
          <div className="bg-brand-cream rounded-[0.8rem] p-[3rem] flex flex-col gap-[1.6rem] transition-transform duration-300 ease-in-out hover:-translate-y-[0.5rem] reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ transitionDelay: '0ms' }}>
            <div className="w-[7rem] h-[7rem] rounded-full flex items-center justify-center font-machina text-[2.2rem] text-white bg-[#0c0c0c] tracking-[0.02em]">FO</div>
            <div>
              <h3 className="text-[2.2rem] font-medium m-0 leading-[1.15]">Prof. Folasade T. Ogunsola</h3>
              <p className="font-machina uppercase text-[1.2rem] tracking-[0.03em] text-[hsla(0,0%,5%,.55)] m-0">Vice-Chancellor, UNILAG (OON, FAS)</p>
            </div>
            <p className="text-[1.5rem] leading-[1.55] m-0 text-[hsla(0,0%,5%,.78)]">Professor Ogunsola championed the Unipod from the very first conversation, committing UNILAG as Nigeria's pioneer AI innovation university.</p>
          </div>
          {/* Person 2 */}
          <div className="bg-brand-cream rounded-[0.8rem] p-[3rem] flex flex-col gap-[1.6rem] transition-transform duration-300 ease-in-out hover:-translate-y-[0.5rem] reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ transitionDelay: '150ms' }}>
            <div className="w-[7rem] h-[7rem] rounded-full flex items-center justify-center font-machina text-[2.2rem] text-brand-dark bg-brand-purple tracking-[0.02em]">EA</div>
            <div>
              <h3 className="text-[2.2rem] font-medium m-0 leading-[1.15]">Elsie G. Attafuah</h3>
              <p className="font-machina uppercase text-[1.2rem] tracking-[0.03em] text-[hsla(0,0%,5%,.55)] m-0">Resident Representative, UNDP Nigeria</p>
            </div>
            <p className="text-[1.5rem] leading-[1.55] m-0 text-[hsla(0,0%,5%,.78)]">Ms. Attafuah has been the driving force of UNDP Nigeria's partnership with UNILAG, signing the MOU and co-leading the national Unipod activation strategy.</p>
          </div>
          {/* Person 3 */}
          <div className="bg-brand-cream rounded-[0.8rem] p-[3rem] flex flex-col gap-[1.6rem] transition-transform duration-300 ease-in-out hover:-translate-y-[0.5rem] reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ transitionDelay: '300ms' }}>
            <div className="w-[7rem] h-[7rem] rounded-full flex items-center justify-center font-machina text-[2.2rem] text-[#fff] bg-[#e8622a] tracking-[0.02em]">CY</div>
            <div>
              <h3 className="text-[2.2rem] font-medium m-0 leading-[1.15]">Prof. Chika Yinka-Banjo</h3>
              <p className="font-machina uppercase text-[1.2rem] tracking-[0.03em] text-[hsla(0,0%,5%,.55)] m-0">Pioneer Director, AI Unipod</p>
            </div>
            <p className="text-[1.5rem] leading-[1.55] m-0 text-[hsla(0,0%,5%,.78)]">Head of Department and Professor/Researcher in the Department of Computer Sciences, UNILAG — leading the hub's academic and research direction.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-brand-cream py-[14rem] px-[var(--content-padding)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[3rem] max-w-1024 mx-auto w-full reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div><h2 className="m-0 font-normal tracking-[-0.01em] font-neue-haas text-[2.6rem] md:text-[36px] leading-[1.1] text-pretty" style={{maxWidth: '57rem'}}>Have an idea worth building?</h2></div>
          <div className="flex flex-col gap-8 justify-end">
            <p className="m-0 text-[1.6rem] leading-normal max-w-184">Submit your innovation proposal from anywhere — whether you're on campus or researching remotely from Abuja. Unipod connects you with the people and tools to take your idea further.</p>
          </div>
          <div className="md:col-start-1 md:col-end-2 mt-[2rem] md:mt-0">
            <Link href="/careers" className="inline-flex justify-center items-center self-start px-[3rem] h-[4.8rem] text-brand-dark bg-brand-purple border-none rounded-[2.4rem] cursor-pointer font-neue-haas text-[1.4rem] font-medium no-underline leading-[1.2] transition-colors duration-400 ease-[ease] hover:bg-[#c9c3de]">
              Submit a Proposal
              <svg viewBox="0 0 11 11" fill="none" className="ml-[1rem] w-[1.3rem]"><path d="M1 5.5h9m0 0L5.5 1M10 5.5L5.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
export default About;
