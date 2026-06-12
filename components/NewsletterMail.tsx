'use client'
import React, { useState } from "react";
import Button from "./Button";

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

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function NewsletterMail({ background, icon, paddingLeft, fsz, width, color, newsletterHeading, medianewsletterHeading, newsletterDes }: NewsletterMailProps) {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) {
      setMsg({ type: 'error', text: 'Please enter your email address.' })
      return
    }
    if (!emailRe.test(trimmed)) {
      setMsg({ type: 'error', text: 'Please enter a valid email address.' })
      return
    }
    setMsg({ type: 'success', text: 'You\'re signed up! Thanks for subscribing.' })
    setEmail('')
  }

  return (
    <section
      className="relative z-2 pt-[15px] pb-[10px] w-[var(--nl-w)] pl-[var(--nl-pl)] text-[color:var(--nl-color)]"
      style={{
        '--nl-w': width || '100%',
        '--nl-pl': paddingLeft || '20px',
        '--nl-color': color || 'black'
      } as React.CSSProperties}
    >
      <div
        className="absolute z-[-1] top-0 left-0 w-full h-full opacity-30 rounded-[5px] bg-[var(--nl-bg)]"
        style={{ '--nl-bg': background || 'gray' } as React.CSSProperties}
      />
      <h1
        className="font-neue-haas font-normal tracking-[-0.01em] m-0 mb-[0.8rem] leading-normal md:leading-[1.1] text-[length:var(--nl-heading)]"
        style={{ '--nl-heading': newsletterHeading || '1.9rem' } as React.CSSProperties}
      >
        <style dangerouslySetInnerHTML={{ __html: `@media screen and (min-width: 768px) { .nl-heading-dyn { font-size: ${medianewsletterHeading || '2.2rem'} !important; } }` }} />
        <span className="nl-heading-dyn">Stay in the loop</span>
      </h1>
      <p
        className="font-neue-haas font-normal m-0 mb-[2.4rem] text-[length:var(--nl-des)]"
        style={{ '--nl-des': newsletterDes || '1.6rem' } as React.CSSProperties}
      >
        Innovation stories, cohorts and open calls from the hub.
      </p>
      <form noValidate onSubmit={handleSubmit} className="block w-full min-w-[30rem] mt-[2.4rem]" aria-label="Subscribe to newsletter">
        <div className="flex items-center gap-2 bg-white border border-[hsla(0,0%,5%,.15)] rounded-[2.9rem] px-[1.6rem] h-[5.8rem] shadow-[0_0.4rem_2rem_rgba(0,0,0,0.06)]">
          <input
            type="email"
            placeholder="Email Address*"
            aria-label="Email Address"
            value={email}
            onChange={e => { setEmail(e.target.value); setMsg(null) }}
            className="flex-1 min-w-0 border-none outline-none bg-transparent font-inherit text-[length:var(--nl-fsz)] text-brand-dark"
            style={{ '--nl-fsz': fsz || '1.4rem' } as React.CSSProperties}
          />
          <Button fsz={fsz} text={'Sign Up'} />
        </div>
        {msg && (
          <p className={`font-neue-haas text-[1.3rem] mt-[0.8rem] m-0 ${msg.type === 'error' ? 'text-red-600' : 'text-green-700'}`} aria-live="polite">
            {msg.text}
          </p>
        )}
        {icon}
      </form>
    </section>
  )
}
export default NewsletterMail;
