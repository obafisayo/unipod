'use client'
import React, { useState } from "react";

interface NewsBoxesProps {
  href: string;
  text: string;
  text2: string;
}

function NewsBoxes({ href, text, text2 }: NewsBoxesProps) {
  const [hover, setHover] = useState(false)

  return (
    <a
      href={href}
      title="Read article"
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="reveal flex flex-col justify-between no-underline text-white rounded-[0.6rem] transition-all duration-300"
      style={{
        minHeight: '34rem',
        padding: '2.4rem',
        border: '0.1rem solid rgba(255,255,255,.18)',
        transform: hover ? 'translateY(-0.4rem)' : 'translateY(0)',
        background: hover ? 'rgba(255,255,255,.04)' : 'transparent',
        borderColor: hover ? 'rgba(255,255,255,.4)' : 'rgba(255,255,255,.18)',
      }}
    >
      {/* Source label */}
      <span
        className="font-machina uppercase text-[1.3rem] tracking-[0.02em]"
        style={{ color: 'rgba(255,255,255,.55)' }}
      >
        {text2}
      </span>

      {/* Headline */}
      <span className="text-[2rem] leading-[1.25] tracking-[-0.01em] mt-auto block">
        {text}
      </span>

      {/* Arrow */}
      <span className="mt-[2.4rem] block">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M5 17L17 5M17 5H7M17 5v10" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </span>
    </a>
  )
}
export default NewsBoxes;
