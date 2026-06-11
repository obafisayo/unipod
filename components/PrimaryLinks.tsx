'use client'
import React, { useState } from "react";
import Slider from "./Slider";
import Svg from "./Svg";

interface PrimaryLinksProps {
  title?: string;
  text?: string;
  icon?: boolean;
  paddingTop?: boolean;
  borderBottom?: boolean;
  borderTop?: boolean;
  slide?: boolean;
  fsz?: string;
  mfsz?: string;
  fw?: string;
  height?: string;
  ls?: string;
  link?: boolean;
  unslide?: boolean;
  hoverIt?: boolean;
}

function PrimaryLinks({ title, text, icon, paddingTop, borderBottom, borderTop, slide, fsz, mfsz, fw, height, ls, link, unslide, hoverIt }: PrimaryLinksProps) {
  const [hover, setHover] = useState(false)
  
  function onEnter() { setHover(true) }
  function onLeave() { setHover(false) }

  const thereisSliderSlide = <Slider pri ls={ls} mfsz={mfsz} hovered={hoverIt || hover} fsz={fsz} fw={fw} height={height} unslide={unslide} slide text={text} ff={'pp-neue-machina-plain'}/>
  const thereNoHover = <Slider mfsz={mfsz} fsz={'3.4rem'} fw={'400'} height={'2px'} text={text} />
  const thereisIcon = <div className="flex justify-between w-[95dvw] text-[#0c0c0c]">{thereisSliderSlide} <Svg hov={hover} plus /> </div>

  function PrimaryLinksContent() {
    if (icon) return thereisIcon;
    if (!icon && slide) return thereisSliderSlide;
    return thereNoHover;
  }

  const borderStyles = `
    ${borderTop ? 'border-t border-solid border-[hsla(0,0%,5%,.2)]' : 'border-t-0'}
    ${borderBottom ? 'border-b border-solid border-[hsla(0,0%,5%,.2)]' : ''}
    ${paddingTop ? 'pt-[2.5rem]' : 'pt-[1.5rem] md:pt-[1.5rem]'}
  `;

  const ContentWrapper = () => (
    <span className="inline-block leading-[0.8] text-[#0c0c0c] transition-[background-size] duration-300 ease-in-out" 
      style={{
        background: 'linear-gradient(90deg,hsla(0,0%,5%,0),hsla(0,0%,5%,0)),linear-gradient(90deg,#0c0c0c,#0c0c0c)',
        backgroundSize: hover || hoverIt ? '0 0.3rem, 100% 0.3rem' : '100% 0.3rem, 0 0.3rem',
        backgroundPosition: '100% 100%, 0 100%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {PrimaryLinksContent()}
    </span>
  );

  if (link) {
    return <ContentWrapper />;
  }

  return (
    <div 
      className={`footer__primary-link flex items-center justify-start text-[#0c0c0c] no-underline cursor-pointer pb-[1.5rem] pr-[1.7rem] md:pb-[2.5rem] font-machina text-[3.4rem] md:text-[5.2rem] font-normal leading-[1.11] uppercase tracking-[0] border-t border-solid border-[hsla(0,0%,5%,.2)] first:border-t-0 before:content-[counter(number__primary-links-counter,decimal-leading-zero)] before:block before:mr-[3rem] before:font-machina before:text-[1.8rem] md:before:text-[2.4rem] md:before:relative md:before:top-[-0.2rem] before:font-normal before:leading-[1.11] before:uppercase before:tracking-[-0.01em] before:text-[#0c0c0c] ${borderStyles}`}
      style={{ fontFeatureSettings: '"ss12" on' }}
      onMouseEnter={onEnter} 
      onMouseLeave={onLeave} 
      title={title}
    >
      <ContentWrapper />
    </div>
  )
}
export default PrimaryLinks;
