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
    className: `relative inline-flex items-center cursor-pointer p-0 border-none no-underline transition-[background-size] duration-300 ease-in-out ${sb ? 'justify-between' : 'justify-center'} group slider-button ${className || ''}`,
    style: {
      lineHeight: 1.2,
      fontFamily: ff || 'pp-neue-machina-plain, sans-serif',
      fontSize: fsz || '1.4rem',
      fontWeight: fw || '500',
      letterSpacing: ls || '0',
      color: light ? '#ffffff' : '#0c0c0c',
      background: bgGradient,
      backgroundSize: hovered ? '0 0.1rem, 100% 0.1rem' : '100% 0.1rem, 0 0.1rem',
      backgroundPosition: '100% 100%, 0 100%',
      backgroundRepeat: 'no-repeat',
    } as React.CSSProperties,
  };

  const children = (
    <>
      <span className="relative z-10">{text}</span>

      <div
        className="absolute left-0 bottom-0 transition-all duration-300 ease-in-out pointer-events-none"
        style={{
          height: height || '1px',
          backgroundColor: bordercolor || 'black',
          width: hovered || slide ? '100%' : (unslide ? '0' : (news ? '100%' : '0')),
          top: pri ? '4.8rem' : 'auto'
        }}
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
