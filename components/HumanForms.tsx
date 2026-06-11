'use client'
import React, { useState } from "react";
import EnteredDiv from "./EnteredDiv";

const InsideFull = '/assets/robotics-lab.jpg'
const InsideMobile = '/assets/robotics-lab.jpg'

function HumanForms() {
  const delay = 900;
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

  function countTo(target: number, setter: (n: number) => void, suffix = '') {
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

  const statRowClass = "flex items-baseline justify-between gap-[2rem] py-[2rem] border-t border-[hsla(0,0%,5%,.18)] first:border-t-0";
  const labelClass = "font-neue-haas text-[1.6rem] font-medium tracking-[0]";
  const valueClass = "font-machina font-normal uppercase text-[3.4rem] tracking-[-0.01em] text-right";

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--color-brand-cream, #f6f6ef)', padding: '16rem var(--content-padding) 0' }}
    >
      <div id="inside-the-unipod" className="absolute top-[-7.2rem] md:top-[-12.8rem]" />

      {/* Grid: heading+desc left, stats right */}
      <div className="relative z-[2] grid grid-cols-1 gap-[6rem] mx-auto max-w-[256rem] lg:grid-cols-[1fr_1fr]">

        {/* Left: heading + description */}
        <div className="flex flex-col gap-[3.2rem]">
          <h1
            className="font-machina font-normal uppercase m-0 leading-none tracking-[-0.01em] text-[4.6rem] md:text-[8.5rem]"
            style={{ fontFeatureSettings: '"ss12" on' }}
          >
            Inside the<br />Unipod
          </h1>
          <p className="font-neue-haas text-[1.6rem] tracking-[-0.01em] m-0 leading-[1.5] max-w-[34rem]">
            A multi-disciplinary innovation facility built for student founders — powered by UNDP and accredited by the University of Lagos.
          </p>
        </div>

        {/* Right: stats */}
        <dl className="m-0 p-0 pt-[9rem]" style={{ fontFeatureSettings: '"ss12" on' }}>
          <EnteredDiv threshold={0.4} whenDivIsentered={podsEntered} element={
            <div className={statRowClass}>
              <dt className={labelClass}>Pods across Africa</dt>
              <dd className={valueClass}>{pods}</dd>
            </div>
          } />
          <EnteredDiv threshold={0.4} whenDivIsentered={hubsEntered} element={
            <div className={statRowClass}>
              <dt className={labelClass}>Connected hubs</dt>
              <dd className={valueClass}>{hubs}+</dd>
            </div>
          } />
          <EnteredDiv threshold={0.4} whenDivIsentered={foundersEntered} element={
            <div className={statRowClass}>
              <dt className={labelClass}>Founders in residence</dt>
              <dd className={valueClass}>{founders}</dd>
            </div>
          } />
          <EnteredDiv threshold={0.4} whenDivIsentered={labsEntered} element={
            <div className={statRowClass}>
              <dt className={labelClass}>Core labs</dt>
              <dd className={`${valueClass} transition-all duration-300`}>{labs}</dd>
            </div>
          } />
          <EnteredDiv threshold={0.4} whenDivIsentered={sectorsEntered} element={
            <div className={statRowClass}>
              <dt className={labelClass}>Sectors</dt>
              <dd className={valueClass}>{sectors}</dd>
            </div>
          } />
          <EnteredDiv threshold={0.4} whenDivIsentered={reachEntered} element={
            <div className={statRowClass}>
              <dt className={labelClass}>Reach</dt>
              <dd className={`${valueClass} text-[2.6rem] transition-all duration-300`}>{reach}</dd>
            </div>
          } />
        </dl>
      </div>

      {/* Full-bleed image */}
      <div className="mt-[8rem]">
        <picture>
          <source srcSet={InsideFull} media="(min-width: 768px)" />
          <img
            className="w-full object-cover object-center"
            style={{ height: '60vw', maxHeight: '80rem' }}
            src={InsideMobile}
            width="2000" height="1100"
            alt="AI and robotics lab inside a Unipod"
            loading="lazy"
          />
        </picture>
      </div>
    </section>
  )
}
export default HumanForms;
