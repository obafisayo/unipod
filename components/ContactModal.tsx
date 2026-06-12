'use client'
import React, { useState } from "react";
import InputComponent from "./InputComponent";
import Button from "./Button";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactModal() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const firstName = (data.get('first-name') as string || '').trim()
    const lastName = (data.get('last-name') as string || '').trim()
    const email = (data.get('email') as string || '').trim()
    const subject = (data.get('subject') as string || '').trim()
    const message = (data.get('message') as string || '').trim()

    if (!firstName || !lastName || !email || !subject || !message) {
      setErrorMsg('Please fill in all fields.')
      setStatus('error')
      return
    }
    if (!emailRe.test(email)) {
      setErrorMsg('Please enter a valid email address.')
      setStatus('error')
      return
    }
    setStatus('success')
    setErrorMsg('')
    e.currentTarget.reset()
  }

  return (
    <div className="p-[8rem_2rem] md:p-[6rem_2rem] h-full overflow-y-auto">
      <div className="flex flex-col">
        <div className="flex flex-col gap-12 md:gap-[4.2rem]">
          <div className="flex flex-col gap-8 md:gap-12">
            <h1 className="font-neue-haas text-[2.4rem] md:text-[3.6rem] font-normal leading-[1.1] tracking-[-0.01em] m-0">What&apos;s on your mind?</h1>
            <div className="font-neue-haas text-[1.4rem] md:text-[1.6rem] leading-normal tracking-[-0.01em] m-0">We&apos;ll get back to you as soon as possible.</div>
          </div>
          {status === 'success' ? (
            <p className="font-neue-haas text-[1.6rem] leading-normal text-green-700 m-0" role="status">
              Thank you! We&apos;ll get back to you as soon as possible.
            </p>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8" aria-label="Send us a message">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <div className="w-full">
                  <InputComponent input text={'First Name'} type={'text'} name={'first-name'} />
                </div>
                <div className="w-full">
                  <InputComponent input text={'Last Name'} type={'text'} name={'last-name'} />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 w-full">
                <div className="w-full">
                  <InputComponent input text={'Email'} type={'email'} name={'email'} />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 w-full">
                <div className="w-full">
                  <InputComponent input text={'Subject'} type={'text'} name={'subject'} />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 w-full">
                <div className="w-full">
                  <InputComponent height={'fit-content'} borr={'1rem'} textarea text={'Message'} name={'message'} />
                </div>
              </div>
              <Button width={'100%'} text={'Submit'} className="w-full" />
              <p className="font-neue-haas text-[1.4rem] leading-none text-center m-0 min-h-[1.4rem]" aria-live="polite">
                {status === 'error' && <span className="text-red-600">{errorMsg}</span>}
              </p>
              <p className="font-neue-haas text-[1.4rem] leading-normal tracking-[-0.01em] text-[hsla(0,0%,5%,.6)] text-center m-0">
                This site is protected by reCAPTCHA and the Google <a className="underline text-[hsla(0,0%,5%,.6)]" target="_blank" rel="noreferrer noopener" href="https://policies.google.com/privacy">Privacy Policy</a> and
                <a className="underline text-[hsla(0,0%,5%,.6)]" target="_blank" rel="noreferrer noopener" href="https://policies.google.com/terms"> Terms of Service</a> apply.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
export default ContactModal;
