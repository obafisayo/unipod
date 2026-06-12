'use client'
import React from "react";

interface MasterplanNavItemProps {
  text: string;
  title: string;
  href: string;
  no: string;
  activeness: boolean;
}

function MasterplanNavItem({ text, title, href, no, activeness }: MasterplanNavItemProps) {
  return (
    <div className="side-navigation-item">
      {activeness ?
        <a className="side-navigation-item__link is-active no-underline text-brand-dark bg-transparent rounded-none p-0 h-[7.5rem] flex items-center justify-start w-full cursor-pointer border-none border-b border-solid border-[#cecece] text-left group" title={title} href={href}>
          <span className="side-navigation-item__link-text font-machina text-[1.8rem] font-normal leading-none tracking-[-0.01em] uppercase grid grid-cols-[minmax(0,5rem)_1fr] w-auto text-transparent bg-clip-text [-webkit-background-clip:text] md:text-[2.4rem] bg-[linear-gradient(90deg,#f5be66,#ff8038_25%,#ff38bb)] font-features-['ss12'_on] bg-clip-text" ><span>{no}</span><span>{text}</span></span>
        </a>
        :
        <a className="side-navigation-item__link no-underline text-brand-dark bg-transparent rounded-none p-0 h-[7.5rem] flex items-center justify-start w-full cursor-pointer border-none border-b border-solid border-[#cecece] text-left group" title={title} href={href}>
          <span className="side-navigation-item__link-text font-machina text-[1.8rem] font-normal leading-none tracking-[-0.01em] uppercase grid grid-cols-[minmax(0,5rem)_1fr] w-auto md:text-[2.4rem] font-features-['ss12'_on]" ><span>{no}</span><span>{text}</span></span>
        </a>
      }
    </div>
  )
}
export default MasterplanNavItem;
