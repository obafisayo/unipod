'use client'
import React from "react";

interface MasterplanInlineProps {
  text: string;
}

function MasterplanInline({ text }: MasterplanInlineProps) {
  return (
    <article className="border-t border-solid border-[#cecece] [counter-increment:inline-accordion-counter] last:border-b">
      <h1 className="m-0">
        <div className="relative grid grid-cols-[2rem_1fr] items-center p-[1rem_0] gap-8 w-full text-brand-dark text-left bg-transparent border-none min-h-[8.5rem] font-neue-haas text-[1.8rem] font-normal leading-normal tracking-[-0.01em] md:leading-[1.1] md:text-[2.2rem] md:min-h-[10.5rem] group">
          <span className="font-neue-haas text-[1.4rem] font-medium leading-[1.2] tracking-normal block before:content-[counter(inline-accordion-counter,decimal-leading-zero)]"></span>
          <span className="relative">
            <span className="transition-[background-size] duration-300 ease-in-out group-hover:[background-size:100%_0.1rem,0_0.1rem] md:group-hover:[background-size:0_0.1rem,100%_0.1rem] bg-[linear-gradient(90deg,hsla(0,0%,5%,0),hsla(0,0%,5%,0)),linear-gradient(90deg,#0c0c0c,#0c0c0c)] bg-[length:100%_0.1rem,0_0.1rem] bg-[position:100%_100%,0_100%] bg-no-repeat" >{text}</span>
          </span>
        </div>
      </h1>
    </article>
  )
}
export default MasterplanInline;
