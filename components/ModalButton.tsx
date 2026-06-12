'use client'
import React from "react";

interface ModalButtonProps {
  ariaLabel: string;
  onClick: () => void;
}

function ModalButton({ ariaLabel, onClick }: ModalButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className="transition-colors duration-300 ease-in-out absolute top-8 right-8 p-0 w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] text-brand-dark bg-white rounded-[0.4rem] border-none cursor-pointer hover:bg-[#797af2] group"
    >
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[4.4rem] h-[4.4rem]"></span>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2rem] md:w-[2.3rem] h-[0.1rem] bg-current rotate-45 block"></span>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2rem] md:w-[2.3rem] h-[0.1rem] bg-current rotate-[135deg] block"></span>
    </button>
  )
}
export default ModalButton;
