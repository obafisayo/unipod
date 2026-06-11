'use client'
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Totop from "./Totop";

function Navbar() {
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const navRefEl = navRef.current;
    if (navRefEl) {
      if (pathname === '/') {
        navRefEl.classList.add('is-home')
      } else {
        navRefEl.classList.remove('is-home')
      }
    }
  }, [pathname]);

  function handleClick() {
    const toggleRefEl = toggleRef.current
    const navRefEl = navRef.current
    if (toggleRefEl) toggleRefEl.classList.toggle('is-active')
    if (navRefEl) navRefEl.classList.toggle('is-mobile-navigation-active')
    document.body.classList.toggle('is-unscrollable')
    document.body.classList.toggle('.is-navigation-active')
    const masterdiv = document.querySelector('.rich-text-page-content__side-nav-container')
    if (masterdiv) {
      masterdiv.classList.toggle('not-active')
    }
  }

  function newhandleClick() {
    const toggleRefEl = toggleRef.current
    const navRefEl = navRef.current
    if (toggleRefEl) toggleRefEl.classList.remove('is-active')
    if (navRefEl) {
      navRefEl.classList.remove('is-mobile-navigation-active')
      navRefEl.classList.add('is-home-link-shown')
    }
    document.body.classList.remove('is-unscrollable')
  }

  const isActive = (href: string) => pathname === href ? 'navigation__link active group' : 'navigation__link group'

  return (
    <header
      className={`fixed top-[1.5rem] right-[2rem] left-[2rem] z-[200] md:top-[4rem] md:right-[var(--content-padding)] md:left-[var(--content-padding)] navigation ${pathname !== '/' ? 'is-home-link-shown' : ''} ${pathname === '/' ? 'is-home' : ''}`.trim()}
      ref={navRef}
    >
      <style dangerouslySetInnerHTML={{__html: `
        .is-home .navigation__home-link {
          pointer-events: none;
        }
        .navigation.is-mobile-navigation-active .navigation__links-wrapper {
          opacity: 1;
          visibility: visible;
        }
        .navigation-toggle::after, .navigation-toggle::before {
          transition: top .3s ease-in-out,opacity .3s ease-in-out;
          content: "";
          position: absolute;
          top: 1.2rem;
          left: 50%;
          transform: translateX(-50%);
          display: block;
          width: 2.3rem;
          height: 0.1rem;
          background-color: #0c0c0c;
        }
        .navigation-toggle::after {
          transition: bottom .3s ease-in-out,opacity .3s ease-in-out;
          top: unset;
          bottom: 1.2rem;
          height: 0.2rem;
        }
        .navigation-toggle.is-active:before {
          top: 50%;
          opacity: 0;
        }
        .navigation-toggle.is-active .navigation-toggle__icon {
          transform: translate(-50%,-50%) rotate(45deg);
          width: 2.3rem;
        }
        .navigation-toggle.is-active .navigation-toggle__icon--secondary {
          transform: translate(-50%,-50%) rotate(135deg);
          width: 2.3rem;
        }
        .navigation-toggle.is-active:after {
          bottom: 50%;
          opacity: 0;
        }
        .navigation__links {
          counter-reset: main-navigation-counter;
        }
        .navigation__link {
          counter-increment: main-navigation-counter;
        }
        .navigation__link-button-text::before {
          line-height: 1.11;
          font-size: 1.8rem;
          font-weight: 400;
          letter-spacing: -.01em;
          text-transform: uppercase;
          content: counter(main-navigation-counter,decimal-leading-zero);
          position: relative;
          top: -0.1rem;
          margin: 0 2.4rem 0 0;
          font-family: pp-neue-machina-plain, serif;
          font-feature-settings: "ss12" on;
          letter-spacing: 0;
        }
        @media screen and (min-width: 768px) {
          .navigation__link.active .navigation__link-background {
            background: linear-gradient(180deg,#ff38bb 4.25%,#ff8038 51.61%,#f5be66 80.43%,#f4dca8 93.03%);
          }
          .navigation__link.active:hover .navigation__link-background {
            transition: all .3s ease-in-out;
            background: #797af2;
          }
          .navigation__link-button-text::before {
            display: none;
          }
        }
      `}} />
      <div className="flex flex-row-reverse items-center mx-auto w-full max-w-[256rem] md:flex-row">
        <button
          className="navigation-toggle relative p-0 w-[4.2rem] h-[4.2rem] bg-white shadow-[0_0.4rem_2rem_rgba(0,0,0,.08)] border-none rounded-[0.4rem] cursor-pointer ml-auto z-[200] md:hidden"
          aria-label="Open main navigation"
          onClick={handleClick}
          ref={toggleRef}
        >
          <span className="navigation-toggle__icon transition-transform duration-300 ease-in-out absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-[2.3rem] h-[0.1rem] bg-[#0c0c0c] lg:hidden"></span>
          <span className="navigation-toggle__icon navigation-toggle__icon--secondary transition-transform duration-300 ease-in-out absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-[2.3rem] h-[0.1rem] bg-[#0c0c0c] lg:hidden"></span>
        </button>
        <div className="navigation__home-link-wrapper">
          <Totop component={
            <Link
              className="navigation__home-link transition-colors duration-300 ease-in-out flex justify-center items-center w-[4.2rem] h-[4.2rem] bg-white rounded-[0.4rem] md:w-[3.6rem] md:h-[3.6rem] active-logo hover:bg-[#797af2]"
              href="/"
            >
              <Image className="w-full max-w-[2.2rem] h-auto" src="/assets/unipod-logo.png" alt="Unipod" width={28} height={28} />
            </Link>
          } />
        </div>
        <nav
          className="navigation__links-wrapper transition-all duration-300 ease-in-out fixed top-0 right-0 bottom-0 left-0 z-[175] bg-[#f6f6ef] opacity-0 invisible overflow-y-auto md:relative md:top-auto md:right-auto md:bottom-auto md:left-auto md:z-auto md:bg-transparent md:opacity-100 md:visible md:overflow-visible"
          aria-label="Main navigation"
        >
          <Totop component={
            <div className="navigation__links flex flex-col items-start gap-[2.1rem] p-[11.2rem_2rem_2rem] md:flex-row md:items-center md:gap-[0.8rem] md:p-0 md:bg-transparent">
              <Link onClick={newhandleClick} className={`${isActive('/about-us')} p-[0.15rem] rounded-[0.3rem] relative overflow-hidden no-underline md:bg-white md:hover:bg-[#797af2] md:transition-colors md:duration-300 md:ease-in-out`} title="About Us" href="/about-us">
                <div className="navigation__link-background transition-opacity duration-300 ease-in-out absolute top-0 left-0 w-full h-full z-[1]"></div>
                <span className="navigation__link-button-text transition-all duration-300 ease-in-out relative z-[2] flex items-center text-[#0c0c0c] leading-[1.11] font-machina text-[3.4rem] font-normal no-underline uppercase border-[0.1rem] border-solid border-transparent md:p-[0_1rem] md:h-[3.6rem] md:leading-[1.2] md:tracking-[0.01em] md:font-neue-haas md:text-[1.4rem] md:font-medium md:normal-case md:bg-white md:border-white md:rounded-[0.2rem] md:shadow-[0_0.4rem_2rem_rgba(0,0,0,.08)] md:group-hover:bg-[#797af2] md:group-hover:border-[#797af2]">About Us</span>
              </Link>
              <div className="relative top-[-0.3rem] w-full h-[0.1rem] bg-[hsla(0,0%,5%,.2)] md:hidden"></div>
              <Link onClick={newhandleClick} className={`${isActive('/master-plan')} p-[0.15rem] rounded-[0.3rem] relative overflow-hidden no-underline md:bg-white md:hover:bg-[#797af2] md:transition-colors md:duration-300 md:ease-in-out`} title="Master Plan" href="/master-plan">
                <div className="navigation__link-background transition-opacity duration-300 ease-in-out absolute top-0 left-0 w-full h-full z-[1]"></div>
                <span className="navigation__link-button-text transition-all duration-300 ease-in-out relative z-[2] flex items-center text-[#0c0c0c] leading-[1.11] font-machina text-[3.4rem] font-normal no-underline uppercase border-[0.1rem] border-solid border-transparent md:p-[0_1rem] md:h-[3.6rem] md:leading-[1.2] md:tracking-[0.01em] md:font-neue-haas md:text-[1.4rem] md:font-medium md:normal-case md:bg-white md:border-white md:rounded-[0.2rem] md:shadow-[0_0.4rem_2rem_rgba(0,0,0,.08)] md:group-hover:bg-[#797af2] md:group-hover:border-[#797af2]">Master Plan</span>
              </Link>
              <div className="relative top-[-0.3rem] w-full h-[0.1rem] bg-[hsla(0,0%,5%,.2)] md:hidden"></div>
              <Link onClick={newhandleClick} className={`${isActive('/culture')} p-[0.15rem] rounded-[0.3rem] relative overflow-hidden no-underline md:bg-white md:hover:bg-[#797af2] md:transition-colors md:duration-300 md:ease-in-out`} title="Culture" href="/culture">
                <div className="navigation__link-background transition-opacity duration-300 ease-in-out absolute top-0 left-0 w-full h-full z-[1]"></div>
                <span className="navigation__link-button-text transition-all duration-300 ease-in-out relative z-[2] flex items-center text-[#0c0c0c] leading-[1.11] font-machina text-[3.4rem] font-normal no-underline uppercase border-[0.1rem] border-solid border-transparent md:p-[0_1rem] md:h-[3.6rem] md:leading-[1.2] md:tracking-[0.01em] md:font-neue-haas md:text-[1.4rem] md:font-medium md:normal-case md:bg-white md:border-white md:rounded-[0.2rem] md:shadow-[0_0.4rem_2rem_rgba(0,0,0,.08)] md:group-hover:bg-[#797af2] md:group-hover:border-[#797af2]">Culture</span>
              </Link>
              <div className="relative top-[-0.3rem] w-full h-[0.1rem] bg-[hsla(0,0%,5%,.2)] md:hidden"></div>
              <Link onClick={newhandleClick} className={`${isActive('/careers')} p-[0.15rem] rounded-[0.3rem] relative overflow-hidden no-underline md:bg-white md:hover:bg-[#797af2] md:transition-colors md:duration-300 md:ease-in-out`} title="Careers" href="/careers">
                <div className="navigation__link-background transition-opacity duration-300 ease-in-out absolute top-0 left-0 w-full h-full z-[1]"></div>
                <span className="navigation__link-button-text transition-all duration-300 ease-in-out relative z-[2] flex items-center text-[#0c0c0c] leading-[1.11] font-machina text-[3.4rem] font-normal no-underline uppercase border-[0.1rem] border-solid border-transparent md:p-[0_1rem] md:h-[3.6rem] md:leading-[1.2] md:tracking-[0.01em] md:font-neue-haas md:text-[1.4rem] md:font-medium md:normal-case md:bg-white md:border-white md:rounded-[0.2rem] md:shadow-[0_0.4rem_2rem_rgba(0,0,0,.08)] md:group-hover:bg-[#797af2] md:group-hover:border-[#797af2]">Careers</span>
              </Link>
              <div className="relative top-[-0.3rem] w-full h-[0.1rem] bg-[hsla(0,0%,5%,.2)] md:hidden"></div>
            </div>
          } />
        </nav>
      </div>
    </header>
  )
}
export default Navbar
