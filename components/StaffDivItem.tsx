'use client'
import React from "react";
import Image from "next/image";
import Slider from "./Slider";

interface StaffDivItemProps {
  name: string;
  id: string;
  title: string;
  imgsources: { src: string; width: number }[];
  src: string;
  handleClick: () => void;
  state: boolean;
}

function StaffDivItem({ name, id, title, src, handleClick, state }: StaffDivItemProps) {
  return (
    <button type="button" className="team-module__list-item-button text-left cursor-pointer border-none bg-transparent p-0 m-0 block no-underline appearance-none w-full text-brand-dark" aria-controls={`team-modal-${id}`} aria-expanded={state} onClick={handleClick}>
      <span className="team-member team-member--has-bio cursor-pointer">
        <Image alt={name || ""} sizes="670vw" src={src} width={670} height={742} decoding="async" className="team-member__image w-full block h-auto aspect-[335/371] rounded-[0.4rem] text-transparent" loading="lazy"  />
        <span className="team-member__text pt-[2rem] block grid-cols-1">
          <Slider icon plus sb asDiv
            text={<span className="team-member__name-title-container text-left block">
              <span className="team-member__name font-neue-haas text-[1.8rem] font-normal leading-normal tracking-[-0.01em] m-[0_0_0.7rem] block md:text-[2.2rem] md:leading-[1.1]">{name}</span>
              <span className="team-member__title font-neue-haas text-[1.4rem] font-medium leading-[1.2] tracking-normal m-0 block">{title}</span>
            </span>}
          />
        </span>
      </span>
    </button>
  )
}
export default StaffDivItem;
