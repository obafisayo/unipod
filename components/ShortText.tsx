'use client'
import React from "react"
import Button from "./Button"

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

function ShortText({ header, paragraph, to, bt, paragraph2, kicker, bcc, nomargin, color, headerfsz, ppeff }: ShortTextProps) {
  const bg = bcc || 'white';
  const textColor = color || '#0c0c0c';

  return (
    <section
      className={`relative ${nomargin ? 'px-(--content-padding) md:px-(--content-padding)' : 'pt-[4rem] px-(--content-padding) pb-[8rem] md:pt-[12rem] md:pb-[16rem]'} ${ppeff ? 'md:pt-64' : ''} ${!ppeff ? 'lg:pr-[8rem]' : ''}`}
      style={{ backgroundColor: bg, color: textColor }}
    >
      <style>{`
        .cta-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin: 0 auto;
          width: 100%;
          max-width: 256rem;
        }
        .cta-heading {
          font-size: ${headerfsz ? '4.2rem' : '2.4rem'};
        }
        @media screen and (min-width: 768px) {
          .cta-content {
            display: grid;
            grid-template: 
                "heading description" auto
                "cta description" ${ppeff ? '2fr / 2fr 1.2fr' : '1fr / 1fr 1fr'};
            grid-gap: 3rem;
            gap: 3rem;
          }
          .cta-heading {
            font-size: ${headerfsz || '3.6rem'};
          }
        }
      `}</style>
      <div className="reveal cta">
        <div id="were-engineering-the-humanoid-to-make-humans-capable-of-more" className="absolute top-[-7.2rem] md:top-[-12.8rem]"></div>
        <div className="cta-content">
          <div 
            className={`flex flex-col w-full ${nomargin ? 'gap-0 md:gap-0' : 'gap-8 md:gap-0'}`} 
            style={{ maxWidth: ppeff ? '70.2rem' : '57.2rem', gridArea: 'heading' }}
          >
            {kicker && (
              <div className={`leading-[1.2] text-[1.4rem] font-medium tracking-normal ${ppeff ? 'font-machina uppercase' : 'font-neue-haas'}`}>
                {kicker}
              </div>
            )}
            {header && (
              <h1 className={`cta-heading m-0 font-normal tracking-[-0.01em] ${headerfsz ? 'leading-none' : 'leading-[1.1]'} ${ppeff ? 'font-machina uppercase' : 'font-neue-haas'}`}>
                {header}
              </h1>
            )}
          </div>
          
          {(paragraph || paragraph2) && (
            <div 
              className={`flex flex-col gap-8 md:justify-end ${paragraph2 ? 'md:flex-col md:gap-[20px]' : ''}`} 
              style={{ gridArea: 'description' }}
            >
              {paragraph && (
                <p className={`m-0 w-full whitespace-pre-line font-neue-haas font-normal text-[1.4rem] leading-[2.1rem] md:text-[1.6rem] md:leading-[2.4rem] max-w-[45.2rem] ${ppeff ? 'lg:max-w-full' : ''}`} style={{ color: textColor }}>
                  {paragraph}
                </p>
              )}
              {paragraph2 && (
                <p className={`m-0 w-full whitespace-pre-line font-neue-haas font-normal text-[1.4rem] leading-[2.1rem] md:text-[1.6rem] md:leading-[2.4rem] max-w-[45.2rem] ${ppeff ? 'lg:max-w-full' : ''}`} style={{ color: textColor }}>
                  {paragraph2}
                </p>
              )}
            </div>
          )}
          
          {bt && to && (
            <div style={{ gridArea: 'cta' }}>
              <Button link to={to} text={bt} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
export default ShortText;
