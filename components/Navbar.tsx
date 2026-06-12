"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Totop from "./Totop";

function Navbar() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const pathname = usePathname();

  function handleClick() {
    setIsMobileNavActive((prev) => !prev);
    document.body.classList.toggle("is-unscrollable");
    document.body.classList.toggle("is-navigation-active");
    const masterdiv = document.querySelector(
      ".rich-text-page-content__side-nav-container",
    );
    if (masterdiv) {
      masterdiv.classList.toggle("not-active");
    }
  }

  function newhandleClick() {
    setIsMobileNavActive(false);
    document.body.classList.remove("is-unscrollable");
    document.body.classList.remove("is-navigation-active");
    const masterdiv = document.querySelector(
      ".rich-text-page-content__side-nav-container",
    );
    if (masterdiv) {
      masterdiv.classList.remove("not-active");
    }
  }

  const isActive = (href: string) =>
    pathname === href
      ? "navigation__link active group"
      : "navigation__link group";
  const activeBgClass = (href: string) =>
    pathname === href
      ? "md:[background:linear-gradient(180deg,#23B7CA_0%,#FDAB3B_100%)] md:group-hover:[background:#23B7CA]"
      : "";

  return (
    <header
      className={`fixed top-6 right-8 left-8 z-200 md:top-16 md:right-(--content-padding) md:left-(--content-padding) navigation ${pathname !== "/" ? "is-home-link-shown" : ""} ${pathname === "/" ? "is-home" : ""}`.trim()}
    >
      <div className="flex flex-row items-center justify-between md:justify-start md:gap-4 mx-auto w-full max-w-1024">
        <div className="navigation__home-link-wrapper shrink-0">
          <Totop
            component={
              <Link
                className={`navigation__home-link transition-colors duration-300 ease-in-out flex justify-center items-center w-[4.2rem] h-[4.2rem] bg-white rounded-[0.4rem] md:w-[3.6rem] md:h-[3.6rem] active-logo hover:bg-brand-purple ${pathname === "/" ? "pointer-events-none" : ""}`}
                href="/"
              >
                <Image
                  className="w-full max-w-[2.2rem] h-auto"
                  src="/assets/unipod-logo.png"
                  alt="Unipod"
                  width={28}
                  height={28}
                />
              </Link>
            }
          />
        </div>
        <button
          className="navigation-toggle relative p-0 w-[4.2rem] h-[4.2rem] shrink-0 bg-white shadow-[0_0.4rem_2rem_rgba(0,0,0,.08)] border-none rounded-[0.4rem] cursor-pointer z-200 md:hidden"
          aria-label="Open main navigation"
          onClick={handleClick}
        >
          <span
            className={`absolute left-1/2 -translate-x-1/2 w-[2.3rem] h-[0.1rem] bg-brand-dark transition-all duration-300 ease-in-out block lg:hidden ${isMobileNavActive ? "top-1/2 opacity-0" : "top-[1.2rem] opacity-100"}`}
          ></span>
          <span
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2.3rem] h-[0.1rem] bg-brand-dark transition-transform duration-300 ease-in-out block lg:hidden ${isMobileNavActive ? "rotate-45" : ""}`}
          ></span>
          <span
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2.3rem] h-[0.1rem] bg-brand-dark transition-transform duration-300 ease-in-out block lg:hidden ${isMobileNavActive ? "-rotate-45" : ""}`}
          ></span>
          <span
            className={`absolute left-1/2 -translate-x-1/2 w-[2.3rem] h-[0.2rem] bg-brand-dark transition-all duration-300 ease-in-out block lg:hidden ${isMobileNavActive ? "bottom-1/2 opacity-0" : "bottom-[1.2rem] opacity-100"}`}
          ></span>
        </button>
        <nav
          className={`navigation__links-wrapper transition-all duration-300 ease-in-out fixed top-0 right-0 bottom-0 left-0 z-175 bg-brand-cream overflow-y-auto md:relative md:top-auto md:right-auto md:bottom-auto md:left-auto md:z-auto md:bg-transparent md:opacity-100 md:visible md:overflow-visible ${isMobileNavActive ? "opacity-100 visible" : "opacity-0 invisible"}`}
          aria-label="Main navigation"
        >
          <Totop
            component={
              <div className="navigation__links flex flex-col items-start gap-[2.1rem] p-[11.2rem_2rem_2rem] md:flex-row md:items-center md:gap-[0.8rem] md:p-0 md:bg-transparent [counter-reset:main-navigation-counter]">
                <Link
                  onClick={newhandleClick}
                  className={`${isActive("/about-us")} [counter-increment:main-navigation-counter] p-[0.15rem] rounded-[0.3rem] relative overflow-hidden no-underline md:bg-white md:hover:bg-brand-purple md:transition-colors md:duration-300 md:ease-in-out`}
                  title="About Us"
                  href="/about-us"
                >
                  <div
                    className={`navigation__link-background transition-all duration-300 ease-in-out absolute top-0 left-0 w-full h-full z-1 ${activeBgClass("/about-us")}`}
                  ></div>
                  <span className="navigation__link-button-text before:content-[counter(main-navigation-counter,decimal-leading-zero)] before:leading-[1.11] before:text-[1.8rem] before:font-normal before:tracking-[-0.01em] before:uppercase before:relative before:-top-[0.1rem] before:mr-[2.4rem] before:font-machina before:[font-feature-settings:'\22ss12\22_on'] md:before:hidden transition-all duration-300 ease-in-out relative z-2 flex items-center text-brand-dark leading-[1.11] font-machina text-[3.4rem] font-normal no-underline uppercase border-[0.1rem] border-solid border-transparent md:p-[0_1rem] md:h-[3.6rem] md:leading-[1.2] md:tracking-[0.01em] md:font-neue-haas md:text-[1.4rem] md:font-medium md:normal-case md:bg-white md:border-white md:rounded-[0.2rem] md:shadow-[0_0.4rem_2rem_rgba(0,0,0,.08)] md:group-hover:bg-brand-purple md:group-hover:border-brand-purple">
                    About Us
                  </span>
                </Link>
                <div className="relative top-[-0.3rem] w-full h-[0.1rem] bg-[hsla(0,0%,5%,.2)] md:hidden"></div>

                <Link
                  onClick={newhandleClick}
                  className={`${isActive("/master-plan")} [counter-increment:main-navigation-counter] p-[0.15rem] rounded-[0.3rem] relative overflow-hidden no-underline md:bg-white md:hover:bg-brand-purple md:transition-colors md:duration-300 md:ease-in-out`}
                  title="Master Plan"
                  href="/master-plan"
                >
                  <div
                    className={`navigation__link-background transition-all duration-300 ease-in-out absolute top-0 left-0 w-full h-full z-1 ${activeBgClass("/master-plan")}`}
                  ></div>
                  <span className="navigation__link-button-text before:content-[counter(main-navigation-counter,decimal-leading-zero)] before:leading-[1.11] before:text-[1.8rem] before:font-normal before:tracking-[-0.01em] before:uppercase before:relative before:-top-[0.1rem] before:mr-[2.4rem] before:font-machina before:[font-feature-settings:'\22ss12\22_on'] md:before:hidden transition-all duration-300 ease-in-out relative z-2 flex items-center text-brand-dark leading-[1.11] font-machina text-[3.4rem] font-normal no-underline uppercase border-[0.1rem] border-solid border-transparent md:p-[0_1rem] md:h-[3.6rem] md:leading-[1.2] md:tracking-[0.01em] md:font-neue-haas md:text-[1.4rem] md:font-medium md:normal-case md:bg-white md:border-white md:rounded-[0.2rem] md:shadow-[0_0.4rem_2rem_rgba(0,0,0,.08)] md:group-hover:bg-brand-purple md:group-hover:border-brand-purple">
                    Master Plan
                  </span>
                </Link>
                <div className="relative top-[-0.3rem] w-full h-[0.1rem] bg-[hsla(0,0%,5%,.2)] md:hidden"></div>

                <Link
                  onClick={newhandleClick}
                  className={`${isActive("/culture")} [counter-increment:main-navigation-counter] p-[0.15rem] rounded-[0.3rem] relative overflow-hidden no-underline md:bg-white md:hover:bg-brand-purple md:transition-colors md:duration-300 md:ease-in-out`}
                  title="Culture"
                  href="/culture"
                >
                  <div
                    className={`navigation__link-background transition-all duration-300 ease-in-out absolute top-0 left-0 w-full h-full z-1 ${activeBgClass("/culture")}`}
                  ></div>
                  <span className="navigation__link-button-text before:content-[counter(main-navigation-counter,decimal-leading-zero)] before:leading-[1.11] before:text-[1.8rem] before:font-normal before:tracking-[-0.01em] before:uppercase before:relative before:-top-[0.1rem] before:mr-[2.4rem] before:font-machina before:[font-feature-settings:'\22ss12\22_on'] md:before:hidden transition-all duration-300 ease-in-out relative z-2 flex items-center text-brand-dark leading-[1.11] font-machina text-[3.4rem] font-normal no-underline uppercase border-[0.1rem] border-solid border-transparent md:p-[0_1rem] md:h-[3.6rem] md:leading-[1.2] md:tracking-[0.01em] md:font-neue-haas md:text-[1.4rem] md:font-medium md:normal-case md:bg-white md:border-white md:rounded-[0.2rem] md:shadow-[0_0.4rem_2rem_rgba(0,0,0,.08)] md:group-hover:bg-brand-purple md:group-hover:border-brand-purple">
                    Culture
                  </span>
                </Link>
                <div className="relative top-[-0.3rem] w-full h-[0.1rem] bg-[hsla(0,0%,5%,.2)] md:hidden"></div>

                <Link
                  onClick={newhandleClick}
                  className={`${isActive("/proposals")} [counter-increment:main-navigation-counter] p-[0.15rem] rounded-[0.3rem] relative overflow-hidden no-underline md:bg-white md:hover:bg-brand-purple md:transition-colors md:duration-300 md:ease-in-out`}
                  title="Proposals"
                  href="/proposals"
                >
                  <div
                    className={`navigation__link-background transition-all duration-300 ease-in-out absolute top-0 left-0 w-full h-full z-1 ${activeBgClass("/proposals")}`}
                  ></div>
                  <span className="navigation__link-button-text before:content-[counter(main-navigation-counter,decimal-leading-zero)] before:leading-[1.11] before:text-[1.8rem] before:font-normal before:tracking-[-0.01em] before:uppercase before:relative before:-top-[0.1rem] before:mr-[2.4rem] before:font-machina before:[font-feature-settings:'\22ss12\22_on'] md:before:hidden transition-all duration-300 ease-in-out relative z-2 flex items-center text-brand-dark leading-[1.11] font-machina text-[3.4rem] font-normal no-underline uppercase border-[0.1rem] border-solid border-transparent md:p-[0_1rem] md:h-[3.6rem] md:leading-[1.2] md:tracking-[0.01em] md:font-neue-haas md:text-[1.4rem] md:font-medium md:normal-case md:bg-white md:border-white md:rounded-[0.2rem] md:shadow-[0_0.4rem_2rem_rgba(0,0,0,.08)] md:group-hover:bg-brand-purple md:group-hover:border-brand-purple">
                    Proposals
                  </span>
                </Link>
                <div className="relative top-[-0.3rem] w-full h-[0.1rem] bg-[hsla(0,0%,5%,.2)] md:hidden"></div>
              </div>
            }
          />
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
