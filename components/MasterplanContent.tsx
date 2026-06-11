'use client'
import React, { useState, useEffect, useRef } from "react";
import Author from "./Author";
import MasterplanTimeline from "./MasterplanTimeline";
import MasterplanInline from "./MasterplanInline";
import MasterplanNavItem from "./MasterplanNavItem";

function MasterplanContent() {
  const customselectel = useRef<HTMLSelectElement>(null)
  const [divStates, setDivState] = useState([true, false, false, false, false, false, false])

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
        setDivState([true, false, false, false, false, false, false])
        if (customselectelref) customselectelref.value = "our-mission"
      } else if (index === 1) {
        setDivState([false, true, false, false, false, false, false])
        if (customselectelref) customselectelref.value = "the-company"
      } else if (index === 2) {
        setDivState([false, false, true, false, false, false, false])
        if (customselectelref) customselectelref.value = "the-present"
      } else if (index === 3) {
        setDivState([false, false, false, true, false, false, false])
        if (customselectelref) customselectelref.value = "the-possibility"
      } else if (index === 4) {
        setDivState([false, false, false, false, true, false, false])
        if (customselectelref) customselectelref.value = "the-solution"
      } else if (index === 5) {
        setDivState([false, false, false, false, false, true, false])
        if (customselectelref) customselectelref.value = "how-we-can-do-it"
      } else if (index === 6) {
        setDivState([false, false, false, false, false, false, true])
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
              <span id="our-mission" className="rich-text-heading-anchor absolute top-[-15rem] left-0"></span>
              Our Mission
            </h2>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">Expand human capabilities through advanced AI.</p>
            
            <h2 className="rich-text-heading rich-text-heading--h2 relative font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] m-[6rem_0_2rem] md:text-[3.6rem] md:m-[12rem_0_3rem]">
              <span id="the-company" className="rich-text-heading-anchor absolute top-[-15rem] left-0"></span>
              The Company
            </h2>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">I believe that positively affecting the future of humanity is the moral priority of our time. The most meaningful impact can come from dedicating our resources to developing technologies. In the coming age we will see great advancements in Artificial Intelligence (AI) and Robotics, and by contributing in the early stages, we can set the course for a positive AI future for humanity.</p>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">Hence the goal of Unipod: to develop general purpose humanoids that make a positive impact on humanity and create a better life for future generations. These robots can eliminate the need for unsafe and undesirable jobs — ultimately allowing us to live happier, more purposeful lives.</p>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">Our company journey will take decades — and require a championship team dedicated to the mission, billions of dollars invested, and engineering innovation in order to achieve a mass-market impact. We face high risk and extremely low chances of success. However, if we are successful, we have the potential to positively impact humanity and to build the largest company on the planet.</p>
            
            <h2 className="rich-text-heading rich-text-heading--h2 relative font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] m-[6rem_0_2rem] md:text-[3.6rem] md:m-[12rem_0_3rem]">
              <span id="the-present" className="rich-text-heading-anchor absolute top-[-15rem] left-0"></span>
              The Present
            </h2>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">Today, we are seeing unprecedented labor shortages. There are over 10 million unsafe or undesirable jobs in the U.S. alone, and an aging population will only make it increasingly difficult for companies to scale their workforces. As a result, the labor supply growth is set to flatline this century. If we want continued growth, we need more productivity — and this means more automation.</p>
            
            <h2 className="rich-text-heading rich-text-heading--h2 relative font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] m-[6rem_0_2rem] md:text-[3.6rem] md:m-[12rem_0_3rem]">
              <span id="the-possibility" className="rich-text-heading-anchor absolute top-[-15rem] left-0"></span>
              The Possibility
            </h2>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">Thankfully, we are in the early stages of an AI and Robotics revolution. This presents the unique opportunity to substantially increase our production and standard of living.</p>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">As automation continues to integrate with human life at scale, we can predict that the labor-based economy as we know it will transform. Robots that can think, learn, reason, and interact with their environments will eventually be capable of performing tasks better than humans. Today, manual labor compensation is the primary driver of goods and services prices, accounting for ~50% of global GDP (~$42 trillion/yr), but as these robots &quot;join the workforce,&quot; everywhere from factories to farmland, the cost of labor will decrease until it becomes equivalent to the price of renting a robot, facilitating a long-term, holistic reduction in costs. Over time, humans could leave the loop altogether as robots become capable of building other robots — driving prices down even more. This will change our productivity in exciting ways. Manual labor could become optional and higher production could bring an abundance of affordable goods and services, creating the potential for more wealth for everyone.</p>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">We will have the chance to create a future with a significantly higher standard of living, where people can pursue the lives they want.</p>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">We believe humanoids will revolutionize a variety of industries, from corporate labor roles (3+ billion humans), to assisting individuals in the home (2+ billion), to caring for the elderly (~1 billion), and to building new worlds on other planets. However, our first applications will be in industries such as manufacturing, shipping and logistics, warehousing, and retail, where labor shortages are the most severe. In early development, the tasks humanoids complete will be structured and repetitive, but over time, and with advancements in robot learning and software, humanoids will expand in capability and be able to tackle more complex job functions. We will not place humanoids in military or defense applications, nor any roles that require inflicting harm on humans. Our focus is on providing resources for jobs that humans don&apos;t want to perform.</p>
            
            <div className="rich-text-inline-static-timeline m-[3rem_0]">
              <MasterplanTimeline />
            </div>
            
            <h2 className="rich-text-heading rich-text-heading--h2 relative font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] m-[6rem_0_2rem] md:text-[3.6rem] md:m-[12rem_0_3rem]">
              <span id="the-solution" className="rich-text-heading-anchor absolute top-[-15rem] left-0"></span>
              The Solution
            </h2>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">There are two schools of thought on how to solve real-world robotics: build an environment specifically for robots, or reverse it and build robots for our human environment. We could have either millions of different types of robots serving unique tasks or one humanoid robot with a general interface, serving millions of tasks. At Unipod, we believe general purpose humanoid robots built for a human environment is the desired route to have the largest overall impact. For that reason, our humanoid robots resemble the human body in shape — two legs, two arms, hands, and screen for a face. With one product we can meet the complex human environment with human-like capabilities, and provide endless types of support across a variety of circumstances.</p>
            
            <h2 className="rich-text-heading rich-text-heading--h2 relative font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] m-[6rem_0_2rem] md:text-[3.6rem] md:m-[12rem_0_3rem]">
              <span id="how-we-can-do-it" className="rich-text-heading-anchor absolute top-[-15rem] left-0"></span>
              How We Can Do It
            </h2>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">In 20 years of studying and building companies, I&apos;ve never seen a potential market size similar to what general purpose humanoids can bring. Arriving there will require significant advancements in technology. Today, even everyday tasks, such as unloading the dishwasher, are still incredibly challenging for robots. We&apos;re heads-down and focused on making substantive leaps in those areas of advancement. They include:</p>
            
            <ul className="rich-text-ul pl-[2.4rem]">
              <li className="m-[3rem_0]">
                <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">
                  <b className="rich-text-bold font-bold">System Hardware:</b> Our team is designing a fully electromechanical humanoid, including hands. The goal is to develop hardware with the physical capabilities of a non-expert human. We are measuring this in terms of range of motion, payload, torque, cost of transport and speed, and will continue to improve through rapid cycles of development, each cycle as part of a continuum.
                </p>
              </li>
              <li className="m-[3rem_0]">
                <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">
                  <b className="rich-text-bold font-bold">Unit Cost:</b> We&apos;re aiming to reduce individual humanoid unit costs through high-rate volume manufacturing, working towards a sustainable economy of scale. We are measuring our costs through the fully burdened operating cost/hour. At high rates of volume manufacturing, I am optimistic unit cost will come down to affordable levels.
                </p>
              </li>
              <li className="m-[3rem_0]">
                <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">
                  <b className="rich-text-bold font-bold">Safety:</b> It&apos;s essential that our humanoids will be able to interact with humans in the workplace safely. We will design them to be able to adhere to industry standards and corporate requirements.
                </p>
              </li>
              <li className="m-[3rem_0]">
                <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">
                  <b className="rich-text-bold font-bold">Volume Manufacturing:</b> We foresee not only needing to deliver a high quality product, but also needing to deliver it at an exceptionally high volume. We anticipate a steep learning curve as we exit prototyping and enter volume manufacturing. We are preparing for this by being thoughtful about design for manufacturing, system safety, reliability, quality, and other production planning.
                </p>
              </li>
              <li className="m-[3rem_0]">
                <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">
                  <b className="rich-text-bold font-bold">Artificial Intelligence:</b> Building an AI system that enables our humanoids to perform everyday tasks autonomously is arguably one of the hardest problems we face long-term. We are tackling this by building intelligent embodied agents that can interact with complex and unstructured real-world environments.
                </p>
              </li>
            </ul>
            
            <h2 className="rich-text-heading rich-text-heading--h2 relative font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] m-[6rem_0_2rem] md:text-[3.6rem] md:m-[12rem_0_3rem]">
              <span id="conclusion" className="rich-text-heading-anchor absolute top-[-15rem] left-0"></span>
              Conclusion
            </h2>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">In summary here is the first phase of our Master Plan:</p>
            
            <div className="rich-text-inline-accordion m-[5rem_0]">
              <div className="inline-accordion [counter-reset:inline-accordion-counter]">
                <div className="inline-accordion__items">
                  <MasterplanInline text={'Build a feature-complete electromechanical humanoid.'} />
                  <MasterplanInline text={'Perform human-like manipulation.'} />
                  <MasterplanInline text={'Integrate humanoids into the labor force.'} />
                </div>
              </div>
            </div>
            
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">We have the potential to alter the course of history and fundamentally improve millions of lives. </p>
            <p className="rich-text-paragraph font-neue-haas text-[1.7rem] font-normal leading-[160%] tracking-[-0.01em] md:text-[1.9rem]">It&apos;s time to build.</p>
          </article>
          <Author />
        </div>
        <div className="rich-text-page-content__side-nav-container transition-opacity duration-300 ease-in-out z-[250] fixed top-[1.5rem] w-[calc(100%-14rem)] left-[7rem] md:w-[28rem] md:top-[4rem] md:left-auto md:right-[4rem] lg:w-full lg:sticky lg:h-max lg:right-auto lg:top-[2.5rem] lg:mt-[10rem]">
          <nav className="side-navigation rich-text-page-content__side-nav hidden lg:block">
            <MasterplanNavItem no={'01'} activeness={divStates[0]} text={'Our Mission'} href={'/master-plan#our-mission'} title={'Our Mission'} />
            <MasterplanNavItem no={'02'} activeness={divStates[1]} text={'The Company'} href={'/master-plan#the-company'} title={'The Company'} />
            <MasterplanNavItem no={'03'} activeness={divStates[2]} text={'The Present'} href={'/master-plan#the-present'} title={'The Present'} />
            <MasterplanNavItem no={'04'} activeness={divStates[3]} text={'The Possibility'} href={'/master-plan#the-possibility'} title={'The Possibility'} />
            <MasterplanNavItem no={'05'} activeness={divStates[4]} text={'The Solution'} href={'/master-plan#the-solution'} title={'The Solution'} />
            <MasterplanNavItem no={'06'} activeness={divStates[5]} text={'How We Can Do It'} href={'/master-plan#how-we-can-do-it'} title={'How We Can Do It'} />
            <MasterplanNavItem no={'07'} activeness={divStates[6]} text={'Conclusion'} href={'/master-plan#conclusion'} title={'Conclusion'} />
          </nav>
          <div className="custom-select side-navigation__select relative bg-white shadow-[0_0.4rem_2rem_hsla(0,0%,5%,.08)] rounded-[0.3rem] overflow-hidden block lg:hidden">
            <select className="custom-select__el font-machina text-[1.4rem] font-medium leading-[4.2rem] tracking-[0] uppercase bg-white h-[4.2rem] w-full border-none p-[0_5rem_0_1rem] appearance-none text-[#0c0c0c] md:h-[3.6rem] md:leading-[3.6rem]" ref={customselectel}>
              <option value="our-mission">01 Our Mission</option>
              <option value="the-company">02 The Company</option>
              <option value="the-present">03 The Present</option>
              <option value="the-possibility">04 The Possibility</option>
              <option value="the-solution">05 The Solution</option>
              <option value="how-we-can-do-it">06 How We Can Do It</option>
              <option value="conclusion">07 Conclusion</option>
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
export default MasterplanContent;
