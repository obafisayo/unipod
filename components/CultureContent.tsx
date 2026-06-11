'use client'
import React, { useState, useEffect, useRef } from "react";
import Author from "./Author";
import MasterplanNavItem from "./MasterplanNavItem";
import CultureArticle from "./CultureArticle";

function CultureContent() {
  const customselectel = useRef<HTMLSelectElement>(null)
  const [divStates, setDivState] = useState([true, false, false, false, false])

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
        setDivState([true, false, false, false, false])
        if (customselectelref) customselectelref.value = "origin"
      } else if (index === 1) {
        setDivState([false, true, false, false, false])
        if (customselectelref) customselectelref.value = "mission"
      } else if (index === 2) {
        setDivState([false, false, true, false, false])
        if (customselectelref) customselectelref.value = "vision"
      } else if (index === 3) {
        setDivState([false, false, false, true, false])
        if (customselectelref) customselectelref.value = "values"
      } else if (index === 4) {
        setDivState([false, false, false, false, true])
        if (customselectelref) customselectelref.value = "conclusion"
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
    <div className="rich-text-page-content__content p-[0_var(--content-padding)_6rem] md:p-[0_var(--content-padding)_12rem]">
      <div className="rich-text-page-content__content-inner w-full max-w-[256rem] mx-auto lg:grid lg:gap-[6rem] lg:grid-cols-[minmax(50rem,1fr)_minmax(0,45rem)] xl:gap-[14rem]">
        <div className="rich-text-page-content__article-author-container">
          <article className="rich-text-page-content__rich-text-area whitespace-break-spaces [&>*:first-child]:mt-[6rem] md:[&>*:first-child]:mt-[9rem] lg:[&>*:first-child]:mt-[12rem]">
            <h2 className="rich-text-heading rich-text-heading--h2 relative font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] m-[6rem_0_2rem] md:text-[3.6rem] md:m-[12rem_0_3rem]">
              <span id="origin" className="rich-text-heading-anchor absolute top-[-15rem] left-0"></span>
              Origin
            </h2>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">Through the intersection of AI and Robotics, we are building general purpose humanoid robots. These robots will eliminate the need for unsafe and undesirable jobs, allowing future generations to live happier, more purposeful lives.</p>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">However, this is no easy feat — in the entirety of human history, we have not yet seen the successful commercialization of humanoid robots. The journey to build Unipod at a global scale will take decades, but if successful, our team has the opportunity to make an unprecedented impact on humankind.</p>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">Here, you will find Unipod&apos;s culture, as laid out in our Mission, Vision, and Values. The culture we build will make or break our future. The following values and beliefs define our identity as a company - how we work, make decisions, treat each other, and operate every day. We will hire, recognize, reward, and fire based on these cultural values. It&apos;s important for me to disclose that our culture is not for everyone. If you believe in what you read below, then you are likely to thrive here. If you do not, Unipod is not for you.</p>
            
            <h2 className="rich-text-heading rich-text-heading--h2 relative font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] m-[6rem_0_2rem] md:text-[3.6rem] md:m-[12rem_0_3rem]">
              <span id="mission" className="rich-text-heading-anchor absolute top-[-15rem] left-0"></span>
              Mission
            </h2>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">Unipod&apos;s mission is to expand human capabilities through advanced AI.</p>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">Unipod is a mission-focused company. We aspire to create a better life for future generations and will dedicate our time and resources to this pursuit.</p>
            
            <h2 className="rich-text-heading rich-text-heading--h2 relative font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] m-[6rem_0_2rem] md:text-[3.6rem] md:m-[12rem_0_3rem]">
              <span id="vision" className="rich-text-heading-anchor absolute top-[-15rem] left-0"></span>
              Vision
            </h2>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">Unipod&apos;s vision is to deploy autonomous humanoid robots on a global scale to solve challenges within the labor economy.</p>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">We envision a future where humanoid robots are the universal interface in the physical world. In the early days, our humanoid will be deployed into the workforce to perform corporate tasks in areas with significant labor shortages and jobs that are undesirable or unsafe. Longer term, humanoids will play an important role in many areas such as assisting individuals in the home, caring for the elderly, and building new worlds on other planets.</p>
            
            <h2 className="rich-text-heading rich-text-heading--h2 relative font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] m-[6rem_0_2rem] md:text-[3.6rem] md:m-[12rem_0_3rem]">
              <span id="values" className="rich-text-heading-anchor absolute top-[-15rem] left-0"></span>
              Values
            </h2>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">We are looking for the overachievers — the special few who want to put a dent in this world. We are not looking for candidates seeking to minimize their workload or maximize compensation. There are plenty of high paying, cushy jobs out there — that&apos;s not what we stand for. Our culture is deliberately cultivated to amplify high performance and to push ourselves to operate at the best of our ability every day.</p>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">In parallel, we will constantly fight to prevent corporate bloat — if we become bureaucratic, morale will die and so will the business. In order to achieve our mission, it is critical to stay focused. The company will always act in the best interest of humanity, behave ethically, and treat others fairly. We will not support social activism, assume negative intent, treat others unfairly, or take on causes outside of our core mission. We are all here to do one job and that is to bring an impactful, useful product to market. </p>
            
            <div className="rich-text-inline-accordion m-[5rem_0]">
              <div className="inline-accordion [counter-reset:inline-accordion-counter]">
                <div className="inline-accordion__kicker font-neue-haas text-[1.7rem] font-medium leading-[160%] tracking-[-0.01em] m-[0_0_3rem] md:text-[1.9rem]">Here are our 5 core values that we live by every day:</div>
                <div className="inline-accordion__items">
                  <CultureArticle header={'Move Fast & Be Technically Fearless'} subtext={"Hesitation is the enemy of momentum. We are tackling today's most complex technological challenges by testing, experimenting, and taking calculated risks to embrace the unknown without fear of failure. "} />
                  <CultureArticle header={'Product First, Mission Focused'} subtext={'Our product and our mission are one in the same: to bring a commercially viable humanoid to the market. We are builders, designers, and engineers united by a commitment to that mission, avoiding distraction and unrelated activities to remain laser-focused on shipping a safe, high quality product.'} />
                  <CultureArticle header={'Aggressively Optimistic'} subtext={"Building Unipod won't be an easy win; it will require decades of commitment and ingenuity. We're humbled by our mission, and aspire to remain optimistic even in the face of enormous hurdles."} />
                  <CultureArticle header={'Maximize Future Impact'} subtext={'We have what it takes to build the most groundbreaking company on the planet—to create an inspiring future for generations to come, with improved access to goods and services, safer working conditions, and more opportunity for fulfilling work. Our focus is on what we can achieve 5, 10, 20+ years from now, not the near-term wins.'} />
                  <CultureArticle header={'Championship Mindset'} subtext={'To address the extraordinary demands of our work, we believe in operating as a winning team. We are in the trenches together, collaborating in-person, and pushing each other to the highest levels of performance.'} />
                </div>
              </div>
            </div>
            
            <h2 className="rich-text-heading rich-text-heading--h2 relative font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] m-[6rem_0_2rem] md:text-[3.6rem] md:m-[12rem_0_3rem]">
              <span id="conclusion" className="rich-text-heading-anchor absolute top-[-15rem] left-0"></span>
              Conclusion
            </h2>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">I am hopeful that this document will instill the importance of our culture to our current employees, as well as attract new team members with similar beliefs. Unipod is a mission-focused company, and clarity around our culture will empower the team to make the highest-impact decisions for the benefit of our long-term success.</p>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">If you share our commitment to building a better future, please apply on our <a className="rich-text-link" href="/careers">careers page.</a></p>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">With a strong, undivided culture, there is a potential to change the world.</p>
          </article>
          <Author />
        </div>
        <div className="rich-text-page-content__side-nav-container transition-opacity duration-300 ease-in-out z-[250] fixed top-[1.5rem] w-[calc(100%-14rem)] left-[7rem] md:w-[28rem] md:top-[4rem] md:left-auto md:right-[4rem] lg:w-full lg:sticky lg:h-max lg:right-auto lg:top-[2.5rem] lg:mt-[10rem]">
          <nav className="side-navigation rich-text-page-content__side-nav hidden lg:block">
            <MasterplanNavItem no={'01'} activeness={divStates[0]} text={'Origin'} href={'/culture#origin'} title={'Origin'} />
            <MasterplanNavItem no={'02'} activeness={divStates[1]} text={'Mission'} href={'/culture#mission'} title={'Mission'} />
            <MasterplanNavItem no={'03'} activeness={divStates[2]} text={'Vision'} href={'/culture#vision'} title={'Vision'} />
            <MasterplanNavItem no={'04'} activeness={divStates[3]} text={'Values'} href={'/culture#values'} title={'Values'} />
            <MasterplanNavItem no={'05'} activeness={divStates[4]} text={'Conclusion'} href={'/culture#conclusion'} title={'Conclusion'} />
          </nav>
          <div className="custom-select side-navigation__select relative bg-white shadow-[0_0.4rem_2rem_hsla(0,0%,5%,.08)] rounded-[0.3rem] overflow-hidden block lg:hidden">
            <select className="custom-select__el font-machina text-[1.4rem] font-medium leading-[4.2rem] tracking-[0] uppercase bg-white h-[4.2rem] w-full border-none p-[0_5rem_0_1rem] appearance-none text-[#0c0c0c] md:h-[3.6rem] md:leading-[3.6rem]" ref={customselectel}>
              <option value="origin">01 Origin</option>
              <option value="mission">02 Mission</option>
              <option value="vision">03 Vision</option>
              <option value="values">04 Values</option>
              <option value="conclusion">05 Conclusion</option>
            </select>
            <svg viewBox="0 0 14 8" width="12" height="6" fill="none" xmlns="http://www.w3.org/2000/svg" className="custom-select__caret absolute top-1/2 right-[2rem] -translate-y-1/2 pointer-events-none w-[1.2rem]">
              <path d="M1 0.5L7 6.5L13 0.5" stroke="currentColor"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CultureContent;
