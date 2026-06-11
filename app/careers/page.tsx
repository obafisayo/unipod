'use client'
import React, { useEffect, useState, useRef } from "react";

function Careers() {
  const [step, setStep] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);

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

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep(s => Math.min(2, s + 1));
    if (formRef.current) {
      window.scrollTo({ top: formRef.current.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep(s => Math.max(0, s - 1));
    if (formRef.current) {
      window.scrollTo({ top: formRef.current.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
    }
  };

  return (
    <main data-screen-label="careers" className="block bg-[#fff]">
      {/* PAGE HERO */}
      <section className="relative bg-[#0c0c0c] text-white overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover opacity-50 z-[1]" src="/assets/lounge-sunset.jpg" alt="Collaboration space inside Unipod" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[rgba(12,12,12,0.5)] via-[rgba(12,12,12,0.35)_40%] to-[rgba(12,12,12,0.85)_100%]"></div>
        <div className="relative z-[3] max-w-[256rem] mx-auto pt-[14rem] md:pt-[20rem] px-[var(--content-padding)] pb-[6rem] md:pb-[8rem]">
          <div className="font-machina uppercase text-[1.4rem] tracking-[0.04em] text-[rgba(255,255,255,0.7)] mb-[2.4rem]">Academic Portal</div>
          <h1 className="font-machina uppercase font-normal text-[4rem] md:text-[70px] leading-none tracking-[-0.01em] m-0 max-w-[90rem] [font-feature-settings:'ss12'_on]">Turn research into reality</h1>
          <p className="mt-[3rem] max-w-[60rem] text-[1.6rem] md:text-[18px] leading-[1.5] text-[rgba(255,255,255,0.85)]">Students and faculty from UNILAG and our partner institutions can apply for grants, lab access, and mentorship to scale hardware and AI projects.</p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#f6f6ef] py-[8rem] md:py-[12rem] px-[var(--content-padding)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] max-w-[256rem] mx-auto">
          <div className="bg-[#fff] rounded-[0.8rem] p-[3rem] flex flex-col gap-[1.4rem] min-h-[26rem] reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <div className="w-[4.4rem] h-[4.4rem] rounded-[0.8rem] bg-[#0c0c0c] text-white flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[2.2rem] h-[2.2rem]"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 className="m-0 font-medium text-[20px] leading-[1.15]">Seed Funding</h3>
            <p className="m-0 text-[15px] leading-[1.55] text-[hsla(0,0%,5%,.72)]">Access up to $50k in milestone-based grants for hardware prototyping, model training, and early-stage patent filings.</p>
          </div>
          <div className="bg-[#fff] rounded-[0.8rem] p-[3rem] flex flex-col gap-[1.4rem] min-h-[26rem] reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ transitionDelay: '100ms' }}>
            <div className="w-[4.4rem] h-[4.4rem] rounded-[0.8rem] bg-[#0c0c0c] text-white flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[2.2rem] h-[2.2rem]"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
            <h3 className="m-0 font-medium text-[20px] leading-[1.15]">Lab Access</h3>
            <p className="m-0 text-[15px] leading-[1.55] text-[hsla(0,0%,5%,.72)]">24/7 access to our 3D printing farm, NVIDIA H100 cluster, and mechanical design suite.</p>
          </div>
          <div className="bg-[#fff] rounded-[0.8rem] p-[3rem] flex flex-col gap-[1.4rem] min-h-[26rem] reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ transitionDelay: '200ms' }}>
            <div className="w-[4.4rem] h-[4.4rem] rounded-[0.8rem] bg-[#0c0c0c] text-white flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[2.2rem] h-[2.2rem]"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3 className="m-0 font-medium text-[20px] leading-[1.15]">UNDP Network</h3>
            <p className="m-0 text-[15px] leading-[1.55] text-[hsla(0,0%,5%,.72)]">Direct connections to public sector partners to pilot solutions at a national scale in healthcare, agriculture, and civic tech.</p>
          </div>
          <div className="bg-[#fff] rounded-[0.8rem] p-[3rem] flex flex-col gap-[1.4rem] min-h-[26rem] reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ transitionDelay: '300ms' }}>
            <div className="w-[4.4rem] h-[4.4rem] rounded-[0.8rem] bg-[#0c0c0c] text-white flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[2.2rem] h-[2.2rem]"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
            </div>
            <h3 className="m-0 font-medium text-[20px] leading-[1.15]">Academic Credit</h3>
            <p className="m-0 text-[15px] leading-[1.55] text-[hsla(0,0%,5%,.72)]">Approved proposals count towards final year project requirements for engineering and computer science students.</p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-[#fff] px-[var(--content-padding)] pb-[8rem] md:pb-[16rem]">
        <div className="max-w-[78rem] mx-auto" ref={formRef}>
          {/* steps nav */}
          <div className="flex flex-col md:flex-row gap-[1rem] mb-[4rem] reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ transitionDelay: '100ms' }}>
            <div className={`flex-1 flex items-center gap-[1.2rem] p-[1.6rem] rounded-[0.8rem] ${step === 0 ? 'opacity-100 bg-[#fff] shadow-[0_0.4rem_2rem_rgba(0,0,0,.08)]' : 'bg-[#f6f6ef] opacity-50'}`}>
              <div className={`w-[3rem] h-[3rem] rounded-full flex items-center justify-center font-medium shrink-0 ${step === 0 ? 'bg-[#797af2] text-[#0c0c0c]' : 'bg-[#0c0c0c] text-white'}`}>1</div>
              <div className="font-medium text-[14px]">Your Info</div>
            </div>
            <div className={`flex-1 flex items-center gap-[1.2rem] p-[1.6rem] rounded-[0.8rem] ${step === 1 ? 'opacity-100 bg-[#fff] shadow-[0_0.4rem_2rem_rgba(0,0,0,.08)]' : 'bg-[#f6f6ef] opacity-50'}`}>
              <div className={`w-[3rem] h-[3rem] rounded-full flex items-center justify-center font-medium shrink-0 ${step === 1 ? 'bg-[#797af2] text-[#0c0c0c]' : 'bg-[#0c0c0c] text-white'}`}>2</div>
              <div className="font-medium text-[14px]">Project Details</div>
            </div>
            <div className={`flex-1 flex items-center gap-[1.2rem] p-[1.6rem] rounded-[0.8rem] ${step === 2 ? 'opacity-100 bg-[#fff] shadow-[0_0.4rem_2rem_rgba(0,0,0,.08)]' : 'bg-[#f6f6ef] opacity-50'}`}>
              <div className={`w-[3rem] h-[3rem] rounded-full flex items-center justify-center font-medium shrink-0 ${step === 2 ? 'bg-[#797af2] text-[#0c0c0c]' : 'bg-[#0c0c0c] text-white'}`}>3</div>
              <div className="font-medium text-[14px]">Attachments</div>
            </div>
          </div>

          {/* panel 1 */}
          <div className={`${step === 0 ? 'block' : 'hidden'} reveal opacity-0 translate-y-[2.4rem] [&.in]:opacity-100 [&.in]:translate-y-0 transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]`} style={{ transitionDelay: '200ms' }}>
            <div className="font-machina uppercase text-[13px] tracking-[0.03em] text-[hsla(0,0%,5%,.55)] mb-[2.4rem]">Step 1 of 3 — Your Info</div>
            <div className="mb-[2.4rem]">
              <label className="block text-[14px] font-medium mb-[0.8rem]">Full Name</label>
              <input type="text" placeholder="e.g. Adebayo Ogunlesi" className="w-full font-inherit text-[16px] px-[1.6rem] py-[1.4rem] border border-[hsla(0,0%,5%,.2)] rounded-[0.6rem] bg-[#fff] text-[#0c0c0c] outline-none focus:border-[#797af2]" />
            </div>
            <div className="mb-[2.4rem]">
              <label className="block text-[14px] font-medium mb-[0.8rem]">University Email</label>
              <input type="email" placeholder="e.g. a.ogunlesi@unilag.edu.ng" className="w-full font-inherit text-[16px] px-[1.6rem] py-[1.4rem] border border-[hsla(0,0%,5%,.2)] rounded-[0.6rem] bg-[#fff] text-[#0c0c0c] outline-none focus:border-[#797af2]" />
              <div className="text-[13px] text-[hsla(0,0%,5%,.5)] mt-[0.6rem]">Must be a valid .edu or institutional address.</div>
            </div>
            <div className="mb-[2.4rem]">
              <label className="block text-[14px] font-medium mb-[0.8rem]">Department / Affiliation</label>
              <input type="text" placeholder="e.g. Systems Engineering" className="w-full font-inherit text-[16px] px-[1.6rem] py-[1.4rem] border border-[hsla(0,0%,5%,.2)] rounded-[0.6rem] bg-[#fff] text-[#0c0c0c] outline-none focus:border-[#797af2]" />
            </div>
            <button onClick={handleNext} className="inline-flex justify-center items-center self-start px-[3rem] h-[4.8rem] text-[#0c0c0c] bg-[#797af2] border-none rounded-[2.4rem] cursor-pointer font-neue-haas text-[14px] font-medium no-underline leading-[1.2] transition-colors duration-400 ease-[ease] hover:bg-[#c9c3de]">
              Continue
            </button>
          </div>

          {/* panel 2 */}
          <div className={`${step === 1 ? 'block' : 'hidden'}`}>
            <div className="font-machina uppercase text-[13px] tracking-[0.03em] text-[hsla(0,0%,5%,.55)] mb-[2.4rem]">Step 2 of 3 — Project Details</div>
            <div className="mb-[2.4rem]">
              <label className="block text-[14px] font-medium mb-[0.8rem]">Project Title</label>
              <input type="text" placeholder="e.g. AI-driven crop yield prediction" className="w-full font-inherit text-[16px] px-[1.6rem] py-[1.4rem] border border-[hsla(0,0%,5%,.2)] rounded-[0.6rem] bg-[#fff] text-[#0c0c0c] outline-none focus:border-[#797af2]" />
            </div>
            <div className="mb-[2.4rem]">
              <label className="block text-[14px] font-medium mb-[0.8rem]">Abstract / Description</label>
              <textarea placeholder="Describe the problem, your solution, and what resources you need from Unipod..." rows={5} className="w-full font-inherit text-[16px] px-[1.6rem] py-[1.4rem] border border-[hsla(0,0%,5%,.2)] rounded-[0.6rem] bg-[#fff] text-[#0c0c0c] outline-none focus:border-[#797af2] resize-y"></textarea>
            </div>
            <div className="flex gap-[1rem]">
              <button onClick={handlePrev} className="inline-flex justify-center items-center self-start px-[3rem] h-[4.8rem] text-[#0c0c0c] bg-transparent border border-[#0c0c0c] rounded-[2.4rem] cursor-pointer font-neue-haas text-[14px] font-medium no-underline leading-[1.2] transition-colors duration-400 ease-[ease] hover:bg-[#0c0c0c] hover:text-white">Back</button>
              <button onClick={handleNext} className="inline-flex justify-center items-center self-start px-[3rem] h-[4.8rem] text-[#0c0c0c] bg-[#797af2] border-none rounded-[2.4rem] cursor-pointer font-neue-haas text-[14px] font-medium no-underline leading-[1.2] transition-colors duration-400 ease-[ease] hover:bg-[#c9c3de]">Continue</button>
            </div>
          </div>

          {/* panel 3 */}
          <div className={`${step === 2 ? 'block' : 'hidden'}`}>
            <div className="font-machina uppercase text-[13px] tracking-[0.03em] text-[hsla(0,0%,5%,.55)] mb-[2.4rem]">Step 3 of 3 — Attachments</div>
            <div className="mb-[2.4rem]">
              <label className="block text-[14px] font-medium mb-[0.8rem]">Upload Pitch Deck or Paper (PDF)</label>
              <input type="file" accept=".pdf" className="w-full font-inherit text-[16px] px-[1.6rem] py-[1.4rem] border border-[hsla(0,0%,5%,.2)] rounded-[0.6rem] bg-[#fff] text-[#0c0c0c] outline-none focus:border-[#797af2]" />
            </div>
            <div className="mb-[2.4rem]">
              <label className="block text-[14px] font-medium mb-[0.8rem]">GitHub Repo or Demo Link (Optional)</label>
              <input type="url" placeholder="https://" className="w-full font-inherit text-[16px] px-[1.6rem] py-[1.4rem] border border-[hsla(0,0%,5%,.2)] rounded-[0.6rem] bg-[#fff] text-[#0c0c0c] outline-none focus:border-[#797af2]" />
            </div>
            <div className="flex gap-[1rem]">
              <button onClick={handlePrev} className="inline-flex justify-center items-center self-start px-[3rem] h-[4.8rem] text-[#0c0c0c] bg-transparent border border-[#0c0c0c] rounded-[2.4rem] cursor-pointer font-neue-haas text-[14px] font-medium no-underline leading-[1.2] transition-colors duration-400 ease-[ease] hover:bg-[#0c0c0c] hover:text-white">Back</button>
              <button className="inline-flex justify-center items-center self-start px-[3rem] h-[4.8rem] text-[#0c0c0c] bg-[#797af2] border-none rounded-[2.4rem] cursor-pointer font-neue-haas text-[14px] font-medium no-underline leading-[1.2] transition-colors duration-400 ease-[ease] hover:bg-[#c9c3de]">Submit Proposal</button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
export default Careers;
