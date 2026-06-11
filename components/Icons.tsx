'use client'
import React from "react";
import { FaXTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

function Icon() {
  return (
    <nav className="flex items-center justify-start gap-[2.4rem] mt-[2.4rem] ml-[0.5rem]">
      <a className="block text-[#0c0c0c] no-underline transition-opacity duration-200 ease-in-out hover:opacity-70" title="Twitter" target="_blank" rel="noreferrer" href="https://twitter.com/figure_robot">
        <FaXTwitter className="w-[2rem] h-[2rem]" />
      </a>
      <a className="block text-[#0c0c0c] no-underline transition-opacity duration-200 ease-in-out hover:opacity-70" title="Instagram" target="_blank" rel="noreferrer" href="https://www.instagram.com/figure_robot/">
        <FaInstagram className="w-[2rem] h-[2rem]" />
      </a>
      <a className="block text-[#0c0c0c] no-underline transition-opacity duration-200 ease-in-out hover:opacity-70" title="LinkedIn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/figure-ai/">
        <FaLinkedin className="w-[2rem] h-[2rem] scale-[1.1]" />
      </a>
      <a className="block text-[#0c0c0c] no-underline transition-opacity duration-200 ease-in-out hover:opacity-70" title="YouTube" target="_blank" rel="noreferrer" href="https://www.youtube.com/@figureai">
        <FaYoutube className="w-[2rem] h-[2rem] scale-[1.4]" />
      </a>
    </nav>
  )
}
export default Icon
