'use client'
import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

function Icon() {
  return (
    <nav className="flex items-center justify-start gap-[2.4rem] mt-[2.4rem] ml-[0.5rem]">
      <a className="block text-brand-dark no-underline transition-opacity duration-200 ease-in-out hover:opacity-70" title="Instagram" target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/aiunipodunilag/">
        <FaInstagram className="w-[2rem] h-[2rem]" />
      </a>
      <a className="block text-brand-dark no-underline transition-opacity duration-200 ease-in-out hover:opacity-70" title="LinkedIn" target="_blank" rel="noreferrer noopener" href="https://ng.linkedin.com/in/ai-unipod-unilag-aba118401">
        <FaLinkedin className="w-[2rem] h-[2rem] scale-[1.1]" />
      </a>
    </nav>
  )
}
export default Icon
