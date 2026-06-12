'use client'
import React from "react";
import Svg from './Svg';
import useContextState from "../useContextState";

interface SliderProps {
  news?: boolean;
  text?: React.ReactNode;
  icon?: boolean;
  plus?: boolean;
  arrowUpRight?: boolean;
  arrowLeft?: boolean;
  arrowRight?: boolean;
  slide?: boolean;
  ls?: string;
  fsz?: string;
  mfsz?: string;
  fw?: string;
  height?: string;
  hovered?: boolean;
  unslide?: boolean;
  light?: boolean;
  bordercolor?: string;
  ff?: string;
  sb?: boolean;
  pri?: boolean;
  className?: string;
  /** Render the root element as a <div> instead of <button>.
   *  Use this whenever Slider is placed inside an existing <button>
   *  to avoid invalid nested-button HTML. */
  asDiv?: boolean;
}

function Slider({ news, text, icon, plus, arrowUpRight, arrowLeft, arrowRight, slide, ls, fsz, mfsz, fw, height, hovered, unslide, light, bordercolor, ff, sb, pri, className, asDiv }: SliderProps) {
  const { hover, onLeave, onEnter } = useContextState()

  const bgGradient = light
    ? 'linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,0)),linear-gradient(90deg,#fff,#fff)'
    : 'linear-gradient(90deg,hsla(0,0%,5%,0),hsla(0,0%,5%,0)),linear-gradient(90deg,#0c0c0c,#0c0c0c)';

  const sharedProps = {
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    className: `relative inline-flex items-center cursor-pointer p-0 border-none no-underline transition-[background-size] duration-300 ease-in-out ${sb ? 'justify-between' : 'justify-center'} group slider-button leading-[1.2] bg-[image:var(--slider-bg)] text-[color:var(--slider-color)] [font-family:var(--slider-font)] text-[length:var(--slider-fsz)] font-[number:var(--slider-fw)] tracking-[var(--slider-ls)] [background-size:var(--slider-bg-size)] [background-position:100%_100%,0_100%] bg-no-repeat ${className || ''}`,
    style: {
      '--slider-font': ff || 'pp-neue-machina-plain, sans-serif',
      '--slider-fsz': fsz || '1.4rem',
      '--slider-fw': fw || '500',
      '--slider-ls': ls || '0',
      '--slider-color': light ? '#ffffff' : '#0c0c0c',
      '--slider-bg': bgGradient,
      '--slider-bg-size': hovered ? '0 0.1rem, 100% 0.1rem' : '100% 0.1rem, 0 0.1rem',
    } as React.CSSProperties,
  };

  const children = (
    <>
      <span className="relative z-10">{text}</span>

      <div
        className="absolute left-0 bottom-0 transition-all duration-300 ease-in-out pointer-events-none h-[var(--slider-h)] bg-[var(--slider-bc)] w-[var(--slider-w)] top-[var(--slider-top)]"
        style={{
          '--slider-h': height || '1px',
          '--slider-bc': bordercolor || 'black',
          '--slider-w': hovered || slide ? '100%' : (unslide ? '0' : (news ? '100%' : '0')),
          '--slider-top': pri ? '4.8rem' : 'auto'
        } as React.CSSProperties}
      />

      {icon && plus && <Svg plus hov={hover} />}
      {icon && arrowUpRight && <Svg arrowUpRight hov={hover} hove={hovered} />}
      {icon && arrowLeft && <Svg arrowLeft hov={hover} />}
      {icon && arrowRight && <Svg arrowRight hov={hover} />}
    </>
  );

  if (asDiv) {
    return <div {...sharedProps}>{children}</div>;
  }

  return <button {...sharedProps}>{children}</button>;
}

export default Slider;
