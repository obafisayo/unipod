'use client'
import React from "react";

interface LabourForceTextProps {
  h1: string;
  span: string;
}

function LabourForceText({ h1, span }: LabourForceTextProps) {
  return (
    <div className="w-full grid grid-cols-1 items-center p-[3.8rem_0] md:p-[6rem_0] md:grid-cols-[minmax(0,.35fr)_minmax(0,.65fr)]">
      <h1 className="stats-item__heading font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] m-[0_0_2.4rem] md:text-[3.6rem] md:m-0">{h1}</h1>
      <div className="stats-item__stat flex items-center justify-start md:justify-end">
        <span aria-label="The number of job openings for essential roles in warehouses, transportation, and retail in the United States." className="stats-item__stat-text font-machina text-[15.8rem] font-normal leading-none tracking-[-0.01em] text-right whitespace-nowrap text-transparent bg-clip-text [-webkit-background-clip:text] md:text-[25rem] md:mr-[-1.5rem] lg:text-[35rem] lg:mr-[-2rem] xl:text-[44rem] xl:mr-[-2.8rem] bg-[linear-gradient(270deg,#23B7CA_0%,#FDAB3B_100%)] font-features-['ss12'_on] bg-clip-text" >{span}</span>
      </div>
    </div>
  )
}
export default LabourForceText;
