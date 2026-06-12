'use client'
import React, { useEffect, useState } from "react";
import TextGradient from "./TextGradient"

function TextLoader() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const startTimer = setTimeout(() => setIsAnimating(true), 90);

    const cycleTimer = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setActiveIndex(prev => (prev + 1) % 3);
        setTimeout(() => setIsAnimating(true), 90);
      }, 50);
    }, 5000);

    return () => {
      clearTimeout(startTimer);
      clearInterval(cycleTimer);
    };
  }, []);

  return (
    <section className="relative my-[8rem] mx-0 px-(--content-padding) md:my-[15rem]">
      <div id="rotating-title-component" className="absolute top-[-7.2rem] md:top-[-7.2rem]"></div>
      <div aria-live="polite" className="flex flex-col gap-[4rem] max-w-1024 mx-auto w-full">
        <div className="h-[0.1rem] w-[21.5rem] relative bg-[linear-gradient(270deg,#23B7CA_0%,#FDAB3B_100%)]" >
          <div
            className="bg-[#cecece] absolute top-0 right-0 w-full h-full z-2 origin-right"
            style={{
              transform: isAnimating ? 'scaleX(0)' : 'scaleX(1)',
              transition: isAnimating ? 'transform 5s linear' : 'none',
            }}
          />
        </div>
        {activeIndex === 0 && <TextGradient activeness={true} text={"What if we were capable of "} gtext={"building"} ntext={"the solutions Africa needs?"}/>}
        {activeIndex === 1 && <TextGradient activeness={true} text={"What if we were capable of "} gtext={"turning"} ntext={"bold ideas into ventures?"}/>}
        {activeIndex === 2 && <TextGradient activeness={true} text={"What if we were capable of "} gtext={"powering"} ntext={"a continent of innovators?"}/>}
      </div>
    </section>
  )
}
export default TextLoader;
