'use client'
import React, { useState } from "react";
import Image from "next/image";
import HumanFormText from "./HumanFormText";
import EnteredDiv from "./EnteredDiv";

const HumanoidMobile = '/assets/robotics-lab.jpg';

function HumanForms() {
  const delay = 600;
  const [s0, setS0] = useState(false);
  const [s1, setS1] = useState(false);
  const [s2, setS2] = useState(false);
  const [s3, setS3] = useState(false);
  const [s4, setS4] = useState(false);
  const [s5, setS5] = useState(false);

  const [pods, setPods] = useState(0);
  const [hubs, setHubs] = useState(0);
  const [founders, setFounders] = useState(0);
  const [sectors, setSectors] = useState(0);
  const [labs, setLabs] = useState('AI');
  const [reach, setReach] = useState('FINTECH');

  function countTo(target: number, setter: (n: number) => void) {
    const start = performance.now();
    function step(now: number) {
      const p = Math.min((now - start) / delay, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setter(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function podsEntered() { if (!s0) { setS0(true); countTo(15, setPods); } }
  function hubsEntered() { if (!s1) { setS1(true); countTo(25, setHubs); } }
  function foundersEntered() { if (!s2) { setS2(true); countTo(28, setFounders); } }
  function sectorsEntered() { if (!s3) { setS3(true); countTo(8, setSectors); } }

  function labsEntered() {
    if (!s4) {
      setS4(true);
      const words = ['AI', 'ROBOTICS', '3D PRINT', 'AI · ROBOTICS'];
      let i = 0;
      const tick = () => { if (i < words.length) { setLabs(words[i]); i++; setTimeout(tick, 1400); } };
      tick();
    }
  }

  function reachEntered() {
    if (!s5) {
      setS5(true);
      const words = ['FINTECH', 'AGRITECH', 'CREATIVE', 'HEALTHTECH', 'EDTECH'];
      let i = 0;
      const tick = () => { if (i < words.length) { setReach(words[i]); i++; setTimeout(tick, 1400); } };
      tick();
    }
  }

  return (
    <section className="relative pt-[8rem] px-[var(--content-padding)] pb-[2.5rem] bg-[#f6f6ef] md:pt-[16rem]">
      <div id="introducing-figure-01" className="absolute top-[-7.2rem] md:top-[-12.8rem]"></div>
      
      <div className="relative z-[2] grid grid-cols-1 gap-[9rem] mx-auto max-w-[256rem] md:gap-0 lg:grid-cols-[minmax(0,.5fr)_minmax(0,.5fr)]">
        <div className="flex flex-col gap-[2.4rem] w-full md:gap-[3.2rem]">
            <h1 className="font-machina font-normal text-[4.2rem] leading-[1] tracking-[-0.01em] uppercase m-0 md:text-[8.5rem]" style={{ fontFeatureSettings: '"ss12" on' }}>Inside the<br />Unipod</h1>
            <p className="font-neue-haas text-[1.4rem] leading-[1.5] tracking-[-0.01em] m-0 md:text-[1.6rem] max-w-[34rem]">A multi-disciplinary innovation facility built for student founders — powered by UNDP and accredited by the University of Lagos.</p>
        </div>
        <dl className="m-0 p-0 md:pt-[9rem]" >
          <EnteredDiv element={<HumanFormText title={'Pods across Africa'} value={`${pods}`} blackText/>} threshold={0.5} whenDivIsentered={podsEntered} />
          <EnteredDiv element={<HumanFormText title={'Connected hubs'} value={`${hubs}+`} blackText/>} threshold={0.5} whenDivIsentered={hubsEntered} />
          <EnteredDiv element={<HumanFormText title={'Founders in residence'} value={`${founders}`}/>} threshold={0.5} whenDivIsentered={foundersEntered} />
          <EnteredDiv element={<HumanFormText title={'Sectors'} value={`${sectors}`}/>} threshold={0.5} whenDivIsentered={sectorsEntered} />
          <EnteredDiv element={<HumanFormText title={'Reach'} value={`${reach}`}/>} threshold={0.5} whenDivIsentered={reachEntered} />
          <EnteredDiv element={<HumanFormText title={'Core labs'} value={`${labs}`}/>} threshold={0.5} whenDivIsentered={labsEntered} />
        </dl>
      </div>
      
      <Image 
        className="absolute bottom-0 left-0 max-w-[37.5rem] w-full h-[60rem] object-contain object-left-bottom z-[1] aspect-[800/1330] md:max-w-full md:h-[90%] md:object-bottom md:aspect-[1440/1169]" 
        src={HumanoidMobile} 
        width={800} 
        height={1330} 
        alt="Inside Unipod lab" 
      />
    </section>
  )
}
export default HumanForms;
