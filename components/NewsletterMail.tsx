'use client'
import React from "react";
import Button from "./Button";
import InputComponent from "./InputComponent";

interface NewsletterMailProps {
  background?: string;
  icon?: React.ReactNode;
  paddingLeft?: string;
  fsz?: string;
  width?: string;
  color?: string;
  newsletterHeading?: string;
  medianewsletterHeading?: string;
  newsletterDes?: string;
}

function NewsletterMail({ background, icon, paddingLeft, fsz, width, color, newsletterHeading, medianewsletterHeading, newsletterDes }: NewsletterMailProps) {
  return (
    <section
      className="relative z-[2] pt-[15px] pb-[10px] w-full"
      style={{
        width: width || '100%',
        paddingLeft: paddingLeft || '20px',
        color: color || 'black'
      }}
    >
      <div
        className="absolute z-[-1] top-0 left-0 w-full h-full opacity-30 rounded-[5px]"
        style={{ backgroundColor: background || 'gray' }}
      />
      <h1
        className="font-neue-haas font-normal tracking-[-0.01em] m-0 mb-[0.8rem] leading-[1.5] md:leading-[1.1]"
        style={{
          fontSize: newsletterHeading || '1.9rem',
        }}
      >
        <style dangerouslySetInnerHTML={{ __html: `@media screen and (min-width: 768px) { .nl-heading-dyn { font-size: ${medianewsletterHeading || '2.2rem'} !important; } }` }} />
        <span className="nl-heading-dyn">Stay in the loop</span>
      </h1>
      <p
        className="font-neue-haas font-normal m-0 mb-[2.4rem]"
        style={{ fontSize: newsletterDes || '1.6rem' }}
      >
        Innovation stories, cohorts and open calls from the hub.
      </p>
      <form className="block w-full min-w-[30rem] mt-[2.4rem]" aria-label="Subscribe to newsletter">
        <InputComponent input fsz={fsz} text={'Email Address'} button={<Button fsz={fsz} text={'Sign Up'}/>} type={'email'}/>
        <p id="newsletter-newsletter-form" aria-live="polite"></p>
        {icon}
      </form>
    </section>
  )
}
export default NewsletterMail;
