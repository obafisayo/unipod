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
        <a className="side-navigation-item__link is-active no-underline text-[#0c0c0c] bg-transparent rounded-none p-0 h-[7.5rem] flex items-center justify-start w-full cursor-pointer border-none border-b border-solid border-[#cecece] text-left group" title={title} href={href}>
          <span className="side-navigation-item__link-text font-machina text-[1.8rem] font-normal leading-[1] tracking-[-0.01em] uppercase grid grid-cols-[minmax(0,5rem)_1fr] w-auto text-transparent bg-clip-text [-webkit-background-clip:text] md:text-[2.4rem]" style={{ fontFeatureSettings: '"ss12" on', background: 'linear-gradient(90deg,#f5be66,#ff8038 25%,#ff38bb)', backgroundClip: 'text', WebkitBackgroundClip: 'text' }}>{no}&nbsp;&nbsp;&nbsp;{text}</span>
        </a>
        :
        <a className="side-navigation-item__link no-underline text-[#0c0c0c] bg-transparent rounded-none p-0 h-[7.5rem] flex items-center justify-start w-full cursor-pointer border-none border-b border-solid border-[#cecece] text-left group" title={title} href={href}>
          <span className="side-navigation-item__link-text font-machina text-[1.8rem] font-normal leading-[1] tracking-[-0.01em] uppercase grid grid-cols-[minmax(0,5rem)_1fr] w-auto md:text-[2.4rem]" style={{ fontFeatureSettings: '"ss12" on' }}>{no}&nbsp;&nbsp;&nbsp;{text}</span>
        </a>
      }
    </div>
  )
}
export default MasterplanNavItem;
