'use client'
import React from "react";
import LabourForceText from "./LabourForceText";

function LabourForce() {
  return (
    <section>
      <section className="section stats-module section--small-margin p-[0_var(--content-padding)] relative overflow-hidden">
        <div id="stats-module" className="section__anchor"></div>
        <div className="stats-module__inner w-full max-w-1024 mx-auto">
          <div className="stats-item pt-0 md:pt-auto md:border-t-0">
            <LabourForceText h1={'There are 10 million unfilled jobs in the United States.'} span={'10M'} />
          </div>
          <div className="stats-item border-t border-solid border-[hsla(0,0%,5%,.1)]">
            <LabourForceText h1={'7 million of those job openings are for essential roles in warehouses, transportation, and retail.'} span={'7M'} />
          </div>
          <div className="stats-item border-t border-solid border-[hsla(0,0%,5%,.1)]">
            <LabourForceText h1={'There are only 6 million people available to fill these open positions — and attrition rates remain high.'} span={'6M'} />
          </div>
          <div className="stats-item border-t border-solid border-[hsla(0,0%,5%,.1)] pb-0 md:pb-auto">
            <LabourForceText h1={'Key warehouse suppliers predict they will run out of people to hire by 2024.'} span={'0'} />
          </div>
        </div>
      </section>
    </section>
  )
}
export default LabourForce;
