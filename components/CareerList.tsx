'use client'
import React from "react";
import Slider from "./Slider";
import CareerListA from "./CareerListA";
import CareerListH from "./CareersListH";

function CareerList() {
  return (
    <section className="p-[8rem_var(--content-padding)] md:p-[16rem_var(--content-padding)]" style={{ background: 'var(--section-dark, #0c0c0c)' }}>
      <section className="relative overflow-hidden text-white">
        <div id="careers-listing"></div>
        <div className="w-full max-w-[256rem] mx-auto grid grid-cols-1 gap-[6rem] lg:gap-[9rem] lg:grid-cols-[22rem_1fr]">
          <div className="flex flex-col items-start gap-[2rem] w-full sm:max-w-[30rem]">
            <h1 className="font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] m-0 md:text-[3.6rem]">Open roles</h1>
            <p className="font-neue-haas text-[1.4rem] leading-[1.5] tracking-[-0.01em] m-0">Have another role in mind? Let us know what you could bring to the team.</p>
            <Slider fw={'500'} fsz={'1.4rem'} slide text={'Contact Us'} icon arrowUpRight ff={"neue-haas-grot-text"} light bordercolor={'white'} />
          </div>
          <div>
            <ul className="m-0 p-0 list-none">
              <li className="m-0">
                <article className="border-t border-solid border-[hsla(0,0%,100%,.8)] w-full">
                  <CareerListH head={"AI"} sup={'05'} />
                  <div id="careers-listing-module-item-ai" className="transition-[height] duration-300 ease-in-out overflow-hidden" style={{ height: "auto" }}>
                    <div className="pb-[5rem]">
                      <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4031371006"} text={'Humanoid Robot Operator Interface Engineer'} />
                      <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4007375006"} text={'Perception / Computer Vision Software Engineer'} />
                      <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4007384006"} text={'Robot Behavior Coordination Engineer'} />
                      <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4007386006"} text={'Robot Manipulation Engineer'} />
                      <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4007366006"} text={'Senior Motion Planning and Navigation Engineer'} />
                    </div>
                  </div>
                </article>
              </li>
              <li className="m-0">
                <article className="border-t border-solid border-[hsla(0,0%,100%,.8)] w-full">
                  <CareerListH head={"CONTROLS"} sup={'02'} />
                  <div id="careers-listing-module-item-controls" className="transition-[height] duration-300 ease-in-out overflow-hidden" style={{ height: "auto" }}>
                    <div className="pb-[5rem]">
                      <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4050903006"} text={'Actuator Controls Engineer'} />
                      <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4007360006"} text={'Senior Robotics Controls Engineer'} />
                    </div>
                  </div>
                </article>
              </li>
              <li className="m-0">
                <article className="border-t border-solid border-[hsla(0,0%,100%,.8)] w-full">
                  <CareerListH head={"HARDWARE"} sup={'02'} />
                  <div id="careers-listing-module-item-hardware" className="transition-[height] duration-300 ease-in-out overflow-hidden" style={{ height: "auto" }}>
                    <div className="pb-[5rem]">
                      <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4052819006"} text={'Electrical Distribution - Harness Engineer'} />
                      <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4006348006"} text={'Senior Mechanical Engineer'} />
                    </div>
                  </div>
                </article>
              </li>
              <li className="m-0">
                <article className="border-t border-solid border-[hsla(0,0%,100%,.8)] w-full">
                  <CareerListH head={"HUMANOID MANAGEMENT SYSTEM"} sup={'05'} />
                  <div id="careers-listing-module-item-hms" className="transition-[height] duration-300 ease-in-out overflow-hidden" style={{ height: "auto" }}>
                    <div className="pb-[5rem]">
                      <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4006355006"} text={'Electrical Engineer'} />
                      <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4032252006"} text={'Electrical Engineer Intern'} />
                      <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4006360006"} text={'Embedded Software Engineer'} />
                      <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4252522006"} text={'Sr. Electrical Engineer (Contract)'} />
                      <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4006362006"} text={'Test Automation Engineer'} />
                    </div>
                  </div>
                </article>
              </li>
              <li className="m-0">
                <article className="border-t border-b border-solid border-[hsla(0,0%,100%,.8)] w-full">
                  <CareerListH head={"SYSTEMS INTEGRATION & TEST"} sup={'04'} />
                  <div id="careers-listing-module-item-sit" className="transition-[height] duration-300 ease-in-out overflow-hidden" style={{ height: "auto" }}>
                    <div className="pb-[5rem]">
                      <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4018394006"} text={'Electrical Integration Technician'} />
                      <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4018373006"} text={'Mechanical R&D Technician'} />
                      <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4009607006"} text={'Systems Integration Engineer'} />
                      <CareerListA href={"https://boards.greenhouse.io/figureai/jobs/4009608006"} text={'Systems Test Engineer'} />
                    </div>
                  </div>
                </article>
              </li>
            </ul>
            <p className="font-neue-haas text-[1.4rem] leading-[1.5] tracking-[-0.01em] text-[hsla(0,0%,100%,.6)] m-[2.5rem_0_0] md:text-[1.6rem] md:m-[5rem_0_0]">Unipod is an equal opportunity employer that is committed to diversity and inclusion in the workplace. We prohibit discrimination and harassment of any kind based on race, color, sex, religion, sexual orientation, national origin, disability, genetic information, pregnancy, or any other protected characteristic as outlined by federal, state, or local laws.</p>
          </div>
        </div>
      </section>
    </section>
  )
}
export default CareerList;
