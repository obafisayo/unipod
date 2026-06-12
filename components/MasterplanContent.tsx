'use client'
import React, { useState, useEffect, useRef } from "react";
import MasterplanNavItem from "./MasterplanNavItem";

function MasterplanContent() {
  const customselectel = useRef<HTMLSelectElement>(null)
  const [divStates, setDivState] = useState([true, false, false])

  useEffect(() => {
    const customselectelref = customselectel.current

    function handleScroll() {
      const divs = document.querySelectorAll('.rich-text-heading--h2');

      divs.forEach((div, index) => {
        const rect = div.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.3) {
          handleDivScroll(index);
        }
      });
    }

    function handleDivScroll(index: number) {
      if (index === 0) {
        setDivState([true, false, false])
        if (customselectelref) customselectelref.value = "phase-1"
      } else if (index === 1) {
        setDivState([false, true, false])
        if (customselectelref) customselectelref.value = "phase-2"
      } else if (index === 2) {
        setDivState([false, false, true])
        if (customselectelref) customselectelref.value = "phase-3"
      }
    }
    
    function handleChange() {
      if (customselectelref) {
        const newValue = customselectelref.value;
        window.location.hash = newValue;
      }
    }

    if (customselectelref) {
      customselectelref.addEventListener('change', handleChange);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (customselectelref) {
        customselectelref.removeEventListener('change', handleChange);
      }
    };
  }, []);

  return (
    <div className="rich-text-page-content__content p-[0_var(--content-padding)_6rem] md:p-[0_var(--content-padding)_12rem] bg-[#fff]">
      <div className="rich-text-page-content__content-inner w-full max-w-[256rem] mx-auto lg:grid lg:gap-24 lg:grid-cols-[minmax(50rem,1fr)_minmax(0,45rem)] xl:gap-56">
        <div className="rich-text-page-content__article-author-container">
          <article className="rich-text-page-content__rich-text-area whitespace-break-spaces [&>*:first-child]:mt-24 md:[&>*:first-child]:mt-36 lg:[&>*:first-child]:mt-48">
            <h2 className="rich-text-heading rich-text-heading--h2 relative font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] m-[6rem_0_2rem] md:text-[3.6rem] md:m-[12rem_0_3rem]">
              <span id="phase-1" className="rich-text-heading-anchor absolute -top-60 left-0"></span>
              The Infrastructure Gap
            </h2>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">Historically, the biggest barrier for hardware and AI innovation in West Africa hasn't been talent — it's been infrastructure. You cannot train frontier models without GPUs, and you cannot iterate on robotics without reliable access to CNC machines and rapid prototyping tools.</p>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]"><strong>Phase 1</strong> of our master plan focuses on solving the hardware bottleneck. By installing enterprise-grade compute and manufacturing tools directly on the UNILAG campus, we are collapsing the distance between an idea and a prototype.</p>
            
            <h2 className="rich-text-heading rich-text-heading--h2 relative font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] m-[6rem_0_2rem] md:text-[3.6rem] md:m-[12rem_0_3rem]">
              <span id="phase-2" className="rich-text-heading-anchor absolute -top-60 left-0"></span>
              Building the Network
            </h2>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">A single hub is a proof of concept. A network of hubs is an ecosystem. Working alongside the UNDP, our goal is to blueprint the operational, academic, and economic models necessary to franchise the Unipod concept across the continent.</p>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">By standardizing the tech stack (both software and hardware) across nodes in Nigeria, Rwanda, Kenya, and beyond, we enable cross-border collaboration. A mechanical engineer in Lagos should be able to design a chassis, share the CAD file, and have it printed for testing in Nairobi by the end of the day.</p>
            
            <h2 className="rich-text-heading rich-text-heading--h2 relative font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] m-[6rem_0_2rem] md:text-[3.6rem] md:m-[12rem_0_3rem]">
              <span id="phase-3" className="rich-text-heading-anchor absolute -top-60 left-0"></span>
              From Prototype to Product
            </h2>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">Universities are incredible engines of invention, but they often struggle with commercialization. Too many brilliant projects end up sitting on a shelf after the final grade is submitted.</p>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]"><strong>Phase 3</strong> is the venture transition. We are building direct pipelines from the Unipod to early-stage venture capital firms, manufacturing partners in Asia, and public-sector procurement. If you build something that works here, we will help you scale it to the world.</p>
          </article>
        </div>
        <div className="rich-text-page-content__side-nav-container transition-opacity duration-300 ease-in-out z-[250] fixed top-6 w-[calc(100%-14rem)] left-28 md:w-[28rem] md:top-16 md:left-auto md:right-16 lg:w-full lg:sticky lg:h-max lg:right-auto lg:top-10 lg:mt-40">
          <nav className="side-navigation rich-text-page-content__side-nav hidden lg:block">
            <MasterplanNavItem no={'01'} activeness={divStates[0]} text={'Phase 1'} href={'/master-plan#phase-1'} title={'Phase 1: The Infrastructure Gap'} />
            <MasterplanNavItem no={'02'} activeness={divStates[1]} text={'Phase 2'} href={'/master-plan#phase-2'} title={'Phase 2: Building the Network'} />
            <MasterplanNavItem no={'03'} activeness={divStates[2]} text={'Phase 3'} href={'/master-plan#phase-3'} title={'Phase 3: From Prototype to Product'} />
          </nav>
          <div className="custom-select side-navigation__select relative bg-white shadow-[0_0.4rem_2rem_hsla(0,0%,5%,.08)] rounded-[0.3rem] overflow-hidden block lg:hidden">
            <select title="Section navigation" aria-label="Section navigation" className="custom-select__el font-machina text-[1.4rem] font-medium leading-[4.2rem] tracking-normal uppercase bg-white h-[4.2rem] w-full border-none p-[0_5rem_0_1rem] appearance-none text-brand-dark md:h-[3.6rem] md:leading-[3.6rem]" ref={customselectel} style={{fontFamily: 'var(--font-machina)'}}>
              <option value="phase-1">01 Phase 1</option>
              <option value="phase-2">02 Phase 2</option>
              <option value="phase-3">03 Phase 3</option>
            </select>
            <svg viewBox="0 0 14 8" width="12" height="6" fill="none" xmlns="http://www.w3.org/2000/svg" className="custom-select__caret absolute top-1/2 right-8 -translate-y-1/2 pointer-events-none w-[1.2rem]">
              <path d="M1 0.5L7 6.5L13 0.5" stroke="currentColor"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MasterplanContent;
