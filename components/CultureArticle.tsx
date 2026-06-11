'use client'
import React, { useState } from "react";
import Svg from "./Svg";

interface CultureArticleProps {
  header: string;
  subtext: string;
}

function CultureArticle({ header, subtext }: CultureArticleProps) {
  const [state, setState] = useState(false)
  const [hover, setHover] = useState(false)

  return (
    <article className="border-t border-solid border-[#cecece] last:border-b [counter-increment:inline-accordion-counter]">
      <h1 className="m-0" onClick={() => setState(p => !p)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <button className="cursor-pointer relative grid grid-cols-[2rem_1fr_4.4rem] items-center p-[1rem_0] gap-[2rem] w-full text-[#0c0c0c] text-left bg-transparent border-none min-h-[8.5rem] font-neue-haas text-[1.8rem] font-normal leading-[1.5] tracking-[-0.01em] md:text-[2.2rem] md:leading-[1.1] md:min-h-[10.5rem] group" aria-expanded={state ? "true" : "false"} aria-controls="inline-accordion-move-fast-be-technically-fearless">
          <span className="font-neue-haas text-[1.4rem] font-medium leading-[1.2] tracking-[0] block before:content-[counter(inline-accordion-counter,decimal-leading-zero)]"></span>
          <span className="relative">
            <span className="transition-[background-size] duration-300 ease-in-out group-hover:[background-size:100%_0.1rem,0_0.1rem] md:group-hover:[background-size:0_0.1rem,100%_0.1rem] bg-[linear-gradient(90deg,transparent,transparent),linear-gradient(90deg,#0c0c0c,#0c0c0c)] bg-[length:100%_0.1rem,0_0.1rem] bg-[position:100%_100%,0_100%] bg-no-repeat">{header}</span>
          </span>
          <span className="w-fit inherit right-[1.5rem]">
            {state ? <Svg width={'140%'} hov={hover} minus nohover /> : <Svg width={'140%'} hov={hover} plus nohover />}
          </span>
        </button>
      </h1>
      <div id="inline-accordion-move-fast-be-technically-fearless" className={`transition-[height] duration-300 ease-in-out overflow-hidden ${state ? "h-[112px]" : "h-0"}`}>
        <div className="pb-[4rem]">
          <p className="m-0">{subtext}</p>
        </div>
      </div>
    </article>
  )
}
export default CultureArticle;
