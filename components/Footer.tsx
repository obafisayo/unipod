'use client'
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "./ContactModal";
import ModalButton from "./ModalButton";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import Slider from "./Slider";

function Footer() {
  const [state, setState] = useState(false)
  const [email, setEmail] = useState('')
  const contactModalRef = useRef<HTMLDivElement>(null)

  function handleContactOpen() {
    document.body.classList.add('is-unscrollable')
    setState(true)
  }

  function handleContactClose() {
    document.body.classList.remove('is-unscrollable')
    setState(false)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleContactClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const linkHoverStyle = {
    onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement>) => { (e.currentTarget as HTMLAnchorElement).style.setProperty('--after-scale', '1') },
    onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement>) => { (e.currentTarget as HTMLAnchorElement).style.setProperty('--after-scale', '0') },
  }

  return (
    <>
      <footer className="bg-brand-cream pt-40 px-(--content-padding) pb-16">
        <div className="grid gap-24 mx-auto max-w-1024 md:grid-cols-2">
          {/* ── Left column ── */}
          <div className="w-full max-w-184">
            {/* Logos */}
            <div className="mb-20">
              <Image
                alt="AI UniPod"
                src="/assets/ai-unipod-logo.png"
                className="w-full max-w-[20rem] h-auto mb-10"
                width={400}
                height={100}
              />
              <div className="flex items-center gap-8 mt-12">
                <img
                  alt="coat of arm"
                  src="/assets/coatofarm.png"
                  className="w-auto h-[7rem]"
                />
                <div className="h-[5.5rem] w-[1px] bg-brand-dark opacity-20 mx-2"></div>
                <img
                  alt="UNDP"
                  src="/assets/undp-logo.svg"
                  className="w-auto h-[7rem]"
                />
                <div className="h-[5.5rem] w-[1px] bg-brand-dark opacity-20 mx-2"></div>
                <img
                  alt="Unilag"
                  src="/assets/unilag.png"
                  className="w-auto h-[7rem]"
                />
              </div>
            </div>

            {/* Newsletter */}
            <h3 className="text-[2.4rem] font-medium m-0 mb-[0.4rem] tracking-[-0.01em] font-neue-haas text-brand-dark">
              Stay in the loop
            </h3>
            <p className="text-[1.6rem] m-0 mb-8 text-brand-dark font-neue-haas">
              Innovation stories, cohorts and open calls from the hub.
            </p>
            <form
              onSubmit={e => e.preventDefault()}
              className="flex items-center gap-4 bg-white rounded-[4.6rem] p-[0.5rem_0.5rem_0.5rem_2.4rem] shadow-[0_0.4rem_2rem_rgba(0,0,0,0.06)]"
            >
              <input
                type="email"
                placeholder="Email Address*"
                aria-label="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 min-w-0 border-none outline-none bg-transparent font-inherit text-[1.5rem] text-brand-dark"
              />
              <button
                type="submit"
                className="bg-brand-purple hover:bg-[#c9c3de] text-brand-dark border-none rounded-[3rem] h-[4.6rem] px-[2.6rem] font-inherit text-[1.4rem] font-medium cursor-pointer transition-colors duration-400 ease-in-out"
              >
                Sign Up
              </button>
            </form>

            {/* Social icons */}
            <nav
              className="flex gap-[2.2rem] mt-[2.6rem] items-center"
              aria-label="Social media links"
            >
              {[
                { icon: <FaInstagram />, href: 'https://www.instagram.com/aiunipodunilag/', label: 'Instagram' },
                { icon: <FaLinkedin />, href: 'https://ng.linkedin.com/in/ai-unipod-unilag-aba118401', label: 'LinkedIn' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-brand-dark opacity-85 hover:opacity-45 transition-opacity duration-300 ease-in-out flex text-[1.8rem]"
                >
                  {icon}
                </a>
              ))}
            </nav>

            {/* Contact Us button */}
            <div
              onClick={handleContactOpen}
              className="group mt-28 inline-flex items-center gap-[0.8rem] bg-transparent border-none p-0 font-inherit text-[1.4rem] font-medium text-brand-dark cursor-pointer"
            >
              <Slider
                unslide
                text="Contact Us"
                icon
                arrowUpRight
                bordercolor="black"
                ff="neue-haas-grot-text, sans-serif"
              />
            </div>
          </div>

          {/* ── Right column: numbered nav links ── */}
          <nav className="[counter-reset:fc] flex flex-col" aria-label="Site links">
            {[
              { href: "/about-us", label: "About Us" },
              { href: "/master-plan", label: "Master Plan" },
              { href: "/culture", label: "Culture" },
              { href: "/proposals", label: "Proposals" }
            ].map(({ href, label }) => (
              <Link 
                key={href}
                href={href}
                {...linkHoverStyle}
                className="group [counter-increment:fc] flex items-center font-machina uppercase text-[3.4rem] md:text-[5.2rem] font-normal tracking-normal no-underline text-brand-dark py-6 md:pt-6 md:pr-[1.7rem] md:pb-10 md:pl-0 border-t border-solid border-[hsla(0,0%,5%,.2)] first:pt-0 first:border-t-0 font-features-['ss12'_on] relative before:content-[counter(fc,decimal-leading-zero)] before:text-[1.8rem] md:before:text-[2.4rem] before:font-medium before:mr-[2.4rem] md:before:mr-12 before:relative before:top-[0.1rem]"
              >
                <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-2 after:h-[0.3rem] after:bg-brand-dark after:origin-left after:[transform:scaleX(var(--after-scale,0))] after:transition-transform after:duration-500 after:ease-[cubic-bezier(.16,1,.3,1)]">
                  {label}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="flex items-center flex-wrap gap-[3.4rem] mx-auto max-w-1024 mt-32"
        >
          <p className="text-[hsla(0,0%,5%,.6)] m-0 mr-auto text-[1.4rem] font-neue-haas">
            © 2026 AI UNIPOD · University of Lagos. All rights reserved.
          </p>
          {[
            { label: 'Terms & Conditions', href: '/terms-and-conditions' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Accessibility Statement', href: '/accessibility-statement' },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="underline text-brand-dark opacity-60 hover:opacity-100 text-[1.4rem] transition-opacity duration-300 ease-in-out font-neue-haas"
            >
              {label}
            </Link>
          ))}
        </div>
      </footer>

      {/* ── Contact modal ── */}
      <div
        ref={contactModalRef}
        aria-hidden={!state ? "true" : "false"}
        className={`fixed inset-0 z-300 flex justify-end bg-[hsla(0,0%,5%,.5)] transition-all duration-300 ease-in-out ${state ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={e => { if (e.target === e.currentTarget) handleContactClose() }}
      >
        <article
          className={`relative w-full max-w-[49.3rem] bg-brand-cream transition-transform duration-300 ease-in-out overflow-y-auto ${state ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <ModalButton ariaLabel="Close contact form" onClick={handleContactClose} />
          <ContactModal />
        </article>
      </div>
    </>
  )
}
export default Footer
