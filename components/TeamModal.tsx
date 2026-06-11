'use client'
import React from "react";
import Image from "next/image";

interface TeamModalProps {
  para1: string;
  para2?: string;
  para3?: string;
  para4?: string;
  name: string;
  title: string;
  imgsources: string;
  src: string;
}

function TeamModal({ para1, para2, para3, para4, name, title, imgsources, src }: TeamModalProps) {
  return (
    <div className="team-modal__main-wrapper p-[2rem] h-full overflow-y-auto md:p-[6rem_2rem]">
      <div className="locator relative -top-[60px]"></div>
      <div className="team-modal__main flex flex-col gap-[3.2rem] md:gap-[4.2rem]">
        <div className="team-modal__heading-title-container flex flex-col gap-[1.5rem]">
          <h1 className="team-modal__heading font-neue-haas text-[1.8rem] font-normal leading-[1.5] tracking-[-0.01em] m-0 order-2 md:leading-[1.1] md:text-[2.2rem] md:order-1">{title}</h1>
          <div className="team-modal__title font-machina text-[3.4rem] font-normal leading-[1.11] tracking-[0] order-1 m-0 w-full max-w-[calc(100%-6rem)] uppercase md:text-[5.2rem] md:order-2 md:max-w-none" style={{ fontFeatureSettings: '"ss12" on' }}>{name}</div>
        </div>
        <div className="team-modal__image-wrapper aspect-square w-full h-auto overflow-hidden rounded-[0.4rem]">
          {src ? (
            <Image 
              alt={name || ""} 
              sizes="670vw"
              src={src} 
              width={670} 
              height={742} 
              decoding="async" 
              className="team-modal__image object-center object-cover display-block w-full h-auto" 
              loading="lazy" 
              style={{ color: "transparent" }} 
            />
          ) : null}
        </div>
        <div className="team-modal__bio m-0 whitespace-pre-line font-neue-haas font-medium">
          {para1} <br />
          <br />
          {para2 && <>{para2} <br /><br /></>}
          {para3 && <>{para3} <br /><br /></>}
          {para4 && <>{para4}</>}
        </div>
      </div>
    </div>
  )
}
export default TeamModal;
