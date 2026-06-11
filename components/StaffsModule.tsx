'use client'
import React, { useEffect, useRef, useState } from "react";
import StaffDivItem from "./StaffDivItem";
import TeamModal from "./TeamModal";
import ModalButton from "./ModalButton";
import leadershipData from "./leadershipData";
import aiconData from "./aconData";
import designData from "./designData";
import platformData from "./platformData";
import mechanicalData from "./mechanicalData";
import itrefData from "./itrefData";

function StaffsModule() {
  const [state, setState] = useState(false)
  const [data, setData] = useState(leadershipData)
  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [para1, setpara1] = useState("")
  const [para2, setpara2] = useState("")
  const [para3, setpara3] = useState("")
  const [para4, setpara4] = useState("")
  const [img, setImg] = useState("")
  const [src, setSrc] = useState("")
  const [idState, setIdState] = useState("")

  const teamModalRef = useRef<HTMLDivElement>(null)
  const teamModalRef1 = useRef<HTMLElement>(null)
  const leadershipref = useRef<HTMLButtonElement>(null)
  const designref = useRef<HTMLButtonElement>(null)
  const mechanicalref = useRef<HTMLButtonElement>(null)
  const platformref = useRef<HTMLButtonElement>(null)
  const aiconref = useRef<HTMLButtonElement>(null)
  const itref = useRef<HTMLButtonElement>(null)

  function handleModalButton() {
    setState(prevState => !prevState)
    if (teamModalRef.current) teamModalRef.current.classList.remove('is-active')
    document.body.classList.remove('is-unscrollable')
  }

  function HandleStaffClick(id: string) {
    if (teamModalRef.current) teamModalRef.current.classList.toggle('is-active')
    document.body.classList.add('is-unscrollable')
    const locator = document.querySelector('.locator')
    if (locator) locator.scrollIntoView({ behavior: "instant" })
    setState(prevState => !prevState)
    setIdState(id);
  }

  function handleNavClick(removeLeadership: boolean, addLeadership: boolean, removeDesign: boolean, addDesign: boolean, removeMechanical: boolean, addMechanical: boolean, removePlatform: boolean, addPlatform: boolean, removeAicon: boolean, addAicon: boolean, removeItref: boolean, addItref: boolean) {
    if (removeLeadership && leadershipref.current) leadershipref.current.classList.remove('is-active')
    if (removeDesign && designref.current) designref.current.classList.remove('is-active')
    if (removeMechanical && mechanicalref.current) mechanicalref.current.classList.remove('is-active')
    if (removePlatform && platformref.current) platformref.current.classList.remove('is-active')
    if (removeAicon && aiconref.current) aiconref.current.classList.remove('is-active')
    if (removeItref && itref.current) itref.current.classList.remove('is-active')
    
    if (addLeadership && leadershipref.current) leadershipref.current.classList.add('is-active')
    if (addLeadership) setData(leadershipData)
    
    if (addDesign && designref.current) designref.current.classList.add('is-active')
    if (addDesign) setData(designData)
    
    if (addMechanical && mechanicalref.current) mechanicalref.current.classList.add('is-active')
    if (addMechanical) setData(mechanicalData)
    
    if (addPlatform && platformref.current) platformref.current.classList.add('is-active')
    if (addPlatform) setData(platformData)
    
    if (addAicon && aiconref.current) aiconref.current.classList.add('is-active')
    if (addAicon) setData(aiconData)
    
    if (addItref && itref.current) itref.current.classList.add('is-active')
    if (addItref) setData(itrefData)
  }

  const dataCards = data.map(item => {
    return (
      <li className="team-moudle__list-item flex-[0_0_24.5rem]" key={item.id} >
        <StaffDivItem handleClick={() => HandleStaffClick(item.id)} state={state}
          {...item}
        />
      </li>
    )
  })

  useEffect(() => {
    const targetElement = data.find((element) => element.id === idState)
    function teamloader() {
      if (targetElement) {
        setpara1(targetElement.para1)
        setpara2(targetElement.para2)
        setpara3(targetElement.para3)
        setpara4(targetElement.para4)
        setName(targetElement.name)
        setTitle(targetElement.title)
        setImg(targetElement.imgsources.map(({ src, width }) => `${src} ${width}w`).join(', '))
        setSrc(targetElement.src)
      }
    }
    if (targetElement) {
      teamloader()
    }
  }, [idState, data])

  return (
    <section className="section section--large-margin">
      <style>{`
        .team-module__filters-nav-button.is-active {
          text-decoration: underline;
          opacity: 1;
        }
        .team-module__filters-nav:after {
          display: block;
          content: "";
          width: 6.6rem;
          height: 100%;
          position: absolute;
          right: 0;
          top: 0;
          z-index: 2;
          background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff);
          pointer-events: none;
        }
        .team-modal.is-active {
          opacity: 1;
          visibility: visible;
        }
        .team-modal.is-active .team-modal__content {
          transform: translateX(0);
        }
      `}</style>
      <section className="team-module p-[0_var(--content-padding)]">
        <div id="our-team" className="section__anchor"></div>
        <div className="team-module__inner mx-auto w-full max-w-[256rem]">
          <h1 className="team-module__heading font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] m-0 md:text-[3.6rem]">Our Team</h1>
          <nav className="team-module__filters-nav mt-[1.6rem] relative overflow-hidden ml-[calc(var(--content-padding)*-1)] w-[calc(100%+var(--content-padding)*2)] p-[0_var(--content-padding)] md:ml-0 md:w-full" aria-label="Filtering options for team members">
            <div className="team-module__filters-inner flex items-start justify-start overflow-auto p-[0_calc(var(--content-padding)*2)_0_var(--content-padding)] ml-[calc(var(--content-padding)*-1)] w-[calc(100%+var(--content-padding)*2)] md:p-0">
              <button className="team-module__filters-nav-button is-active transition-opacity duration-300 ease-in-out font-neue-haas text-[1.4rem] font-medium leading-[1.2] tracking-[0] border-none cursor-pointer bg-transparent p-[1rem_0] m-0 block appearance-none no-underline text-[#0c0c0c] opacity-50 whitespace-nowrap [&:not(:last-child)]:mr-[2.4rem]" onClick={() => handleNavClick(false, true, true, false, true, false, true, false, true, false, true, false)} ref={leadershipref}
              >Leadership</button>
              <button className="team-module__filters-nav-button transition-opacity duration-300 ease-in-out font-neue-haas text-[1.4rem] font-medium leading-[1.2] tracking-[0] border-none cursor-pointer bg-transparent p-[1rem_0] m-0 block appearance-none no-underline text-[#0c0c0c] opacity-50 whitespace-nowrap [&:not(:last-child)]:mr-[2.4rem]" onClick={() => handleNavClick(true, false, false, true, true, false, true, false, true, false, true, false)} ref={designref}
              >Design</button>
              <button className="team-module__filters-nav-button transition-opacity duration-300 ease-in-out font-neue-haas text-[1.4rem] font-medium leading-[1.2] tracking-[0] border-none cursor-pointer bg-transparent p-[1rem_0] m-0 block appearance-none no-underline text-[#0c0c0c] opacity-50 whitespace-nowrap [&:not(:last-child)]:mr-[2.4rem]" onClick={() => handleNavClick(true, false, true, false, false, true, true, false, true, false, true, false)} ref={mechanicalref}
              >Mechanical</button>
              <button className="team-module__filters-nav-button transition-opacity duration-300 ease-in-out font-neue-haas text-[1.4rem] font-medium leading-[1.2] tracking-[0] border-none cursor-pointer bg-transparent p-[1rem_0] m-0 block appearance-none no-underline text-[#0c0c0c] opacity-50 whitespace-nowrap [&:not(:last-child)]:mr-[2.4rem]" onClick={() => handleNavClick(true, false, true, false, true, false, false, true, true, false, true, false)} ref={platformref}
              >Platform HMS</button>
              <button className="team-module__filters-nav-button transition-opacity duration-300 ease-in-out font-neue-haas text-[1.4rem] font-medium leading-[1.2] tracking-[0] border-none cursor-pointer bg-transparent p-[1rem_0] m-0 block appearance-none no-underline text-[#0c0c0c] opacity-50 whitespace-nowrap [&:not(:last-child)]:mr-[2.4rem]" onClick={() => handleNavClick(true, false, true, false, true, false, true, false, false, true, true, false)} ref={aiconref}
              >AI & Controls</button>
              <button className="team-module__filters-nav-button transition-opacity duration-300 ease-in-out font-neue-haas text-[1.4rem] font-medium leading-[1.2] tracking-[0] border-none cursor-pointer bg-transparent p-[1rem_0] m-0 block appearance-none no-underline text-[#0c0c0c] opacity-50 whitespace-nowrap [&:not(:last-child)]:mr-[2.4rem]" onClick={() => handleNavClick(true, false, true, false, true, false, true, false, true, false, false, true)} ref={itref}
              >Integration & Test</button>
            </div>
          </nav>
          <ul className="team-module__list list-none flex items-start justify-start overflow-auto w-[calc(100%+var(--content-padding)*2)] p-[0.1rem_var(--content-padding)_2rem] m-[1.7rem_0_0_calc(var(--content-padding)*-1)] gap-[2rem] grid-cols-1 md:overflow-visible md:w-full md:p-0 md:grid md:grid-cols-3 md:gap-y-[6rem] md:m-[6rem_0_0] lg:grid-cols-4">
            {dataCards}
          </ul>
        </div>
        <div className="team-modal transition-[opacity,visibility] duration-300 ease-in-out fixed top-0 right-0 bottom-0 left-0 z-[200] flex justify-end bg-[hsla(0,0%,5%,.2)] opacity-0 invisible" aria-hidden={state} ref={teamModalRef}>
          <article id={`team-modal-${idState}`} className="team-modal__content transition-transform duration-300 ease-in-out relative translate-x-[100%] w-full max-w-[48rem] bg-[#f6f6ef]" ref={teamModalRef1}>
            <ModalButton onClick={handleModalButton} ariaLabel={'Close team member details'}></ModalButton>
            <TeamModal name={name} title={title} para1={para1} para2={para2} para3={para3} para4={para4} imgsources={img} src={src} />
          </article>
        </div>
      </section>
    </section>
  )
}
export default StaffsModule;
