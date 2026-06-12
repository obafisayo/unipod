'use client'
import React, { useState } from "react";
import Svg from "./Svg";
import leadershipData from "./leadershipData";
import StaffQuotesFigure from "./StaffQuotesFigure";

function StaffQuotes() {
  const [hover, setHover] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [active, setActive] = useState([true, false, false])

  const quoteData = [
    {
      person: leadershipData[0],
      quote: '"Unipod is an incredible initiative. I\'m grateful every day to have the opportunity to work with such a dedicated team on something that can change the university."'
    },
    {
      person: leadershipData[1],
      quote: '"For many years I have wondered when AI innovation will finally be integrated deeply. Our world class hub gives me great confidence that it is happening now."'
    },
    {
      person: leadershipData[2],
      quote: '"Working with the brilliant and passionate team at Unipod has already been an incredibly fulfilling experience and I can\'t wait to see what the future holds."'
    }
  ];

  function handleForwardClick() {
    if (active[0]) {
      setActive([false, true, false])
    } else if (active[1]) {
      setActive([false, false, true])
    } else if (active[2]) {
      setActive([true, false, false])
    }
  }

  function handleBackwardClick() {
    if (active[0]) {
      setActive([false, false, true])
    } else if (active[1]) {
      setActive([true, false, false])
    } else if (active[2]) {
      setActive([false, true, false])
    }
  }

  return (
    <section className="section section--large-margin">
      <section className="quote p-[0_var(--content-padding)]">
        <div id="quote-section" className="section__anchor"></div>
        <div className="quote__inner w-full max-w-[144rem] mx-auto grid grid-cols-1 gap-[4rem] lg:grid-cols-[33rem_1fr] lg:gap-[2.4rem]">
          <div className="quote__heading-description">
            <h1 className="quote__heading font-neue-haas text-[1.8rem] font-normal leading-normal tracking-[-0.01em] m-[0_0_1.3rem] md:text-[2.2rem] md:leading-[1.1]">Driven by impact</h1>
            <p className="quote__description font-neue-haas text-[1.4rem] font-medium leading-[1.2] tracking-normal m-0">Hear from Unipod team members.</p>
          </div>
          <div className="quote__content flex flex-col max-w-[92.5rem] xl:pr-[14rem]">
            <ul className="quote__quotes m-0 p-0 list-none grid w-full" style={{ gridTemplate: '"a"' }}>
              {quoteData.map((q, index) => (
                <li key={index} className={`quote__quote transition-[opacity,visibility] duration-150 ease-in-out m-0 opacity-0 invisible [grid-area:a] ${active[index] ? 'is-active opacity-100 visible delay-150' : ''}`}>
                  <StaffQuotesFigure name={q.person.name} title={q.person.title} src={q.person.src} imgsources={q.person.imgsources}
                    blockquote={q.quote}
                  />
                </li>
              ))}
            </ul>
            <nav className="quote__navigation flex gap-[1.2rem] mt-[4rem] md:mt-0 md:self-end md:-translate-y-full" aria-label="Quote Slider Navigation">
              <button className="quote__navigation-button quote__navigation-button--prev bg-transparent p-0 w-fit border-none appearance-none m-[0_0_0_-1.2rem] cursor-pointer" aria-label="Go to previous quote" onClick={handleBackwardClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <Svg arrowLeft hov={hover} />
              </button>
              <button className="quote__navigation-button quote__navigation-button--next bg-transparent p-0 w-fit border-none appearance-none m-[0_0_0_-1.2rem] cursor-pointer" aria-label="Go to next quote" onClick={handleForwardClick} onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                <Svg arrowRight hov={hover2} />
              </button>
            </nav>
          </div>
        </div>
      </section>
    </section>
  )
}
export default StaffQuotes;
