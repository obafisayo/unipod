'use client'
import React from "react"
import Link from "next/link"

interface ShortTextProps {
  header?: string;
  paragraph?: string;
  to?: string;
  bt?: string;
  paragraph2?: string;
  kicker?: string;
  bcc?: string;
  nomargin?: boolean;
  color?: string;
  headerfsz?: string;
  ppeff?: boolean;
}

function ShortText({ header, paragraph, to, bt, paragraph2, kicker, bcc, color, ppeff }: ShortTextProps) {
  const bg = bcc || '#ffffff';
  const padding = ppeff
    ? '16rem var(--content-padding)'
    : '12rem var(--content-padding) 16rem';

  return (
    <section
      className="relative"
      style={{ background: bg, color: color || '#0c0c0c', padding }}
    >
      {/* Inline style for the responsive grid template */}
      <style>{`
        .cta-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin: 0 auto;
          width: 100%;
          max-width: 256rem;
        }
        @media screen and (min-width: 768px) {
          .cta-grid {
            gap: 3rem;
            grid-template: "heading description" auto "cta description" 1fr / 1fr 1fr;
          }
          .cta-grid .cta-heading { grid-area: heading; }
          .cta-grid .cta-desc    { grid-area: description; }
          .cta-grid .cta-btn     { grid-area: cta; }
        }
      `}</style>

      <div className="reveal cta-grid">
        {/* Heading + optional kicker */}
        <div className="cta-heading" style={{ maxWidth: '57rem' }}>
          {kicker && (
            <div
              className={`text-[1.4rem] font-medium tracking-[0] mb-[2rem] ${ppeff ? 'font-machina uppercase' : 'font-neue-haas'}`}
            >
              {kicker}
            </div>
          )}
          <h2
            className="m-0 font-neue-haas font-normal tracking-[-0.01em] leading-[1.1] text-[2.6rem] md:text-[3.6rem]"
          >
            {header}
          </h2>
        </div>

        {/* Description */}
        <div className="cta-desc flex flex-col gap-[2rem] md:justify-end">
          {paragraph && (
            <p className="m-0 font-neue-haas text-[1.6rem] leading-[1.5] max-w-[46rem]" style={{ color: color || '#0c0c0c' }}>
              {paragraph}
            </p>
          )}
          {paragraph2 && (
            <p className="m-0 font-neue-haas text-[1.6rem] leading-[1.5] max-w-[46rem]" style={{ color: color || '#0c0c0c' }}>
              {paragraph2}
            </p>
          )}
        </div>

        {/* CTA button */}
        {bt && to && (
          <div className="cta-btn">
            <Link
              href={to}
              className="inline-flex justify-center items-center px-[3rem] h-[4.8rem] no-underline font-neue-haas text-[1.4rem] font-medium text-[#0c0c0c] rounded-[2.4rem] border-none cursor-pointer transition-[background] duration-300"
              style={{ background: '#797af2' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#c9c3de')}
              onMouseLeave={e => (e.currentTarget.style.background = '#797af2')}
            >
              {bt}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
export default ShortText;
