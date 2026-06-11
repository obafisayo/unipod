'use client'
import React from "react";

interface CareerListHProps {
  head: string;
  sup: string;
}

function CareerListH({ head, sup }: CareerListHProps) {
  return (
    <h1 className="careers-listing-module-item__heading-wrapper m-0">
      <div className="careers-listing-module-item__heading font-machina text-[3.4rem] font-normal leading-[1.11] tracking-[0] uppercase relative flex items-center gap-[2rem] w-full text-white text-left bg-transparent border-none min-h-0 p-[5rem_0_2rem] md:text-[5.2rem] md:min-h-[15rem] md:p-[5rem_0]" style={{ fontFeatureSettings: '"ss12" on' }}>
        <span className="careers-listing-module-item__heading-text relative block leading-[1.1] mb-[-0.8rem]">{head}<sup className="careers-listing-module-item__superscript font-machina text-[1.8rem] font-normal leading-[1.11] uppercase text-[hsla(0,0%,100%,.6)] ml-[0.8rem] md:text-[2.4rem]" style={{ fontFeatureSettings: '"ss12" on' }}>{sup}</sup></span>
      </div>
    </h1>
  )
}
export default CareerListH;
