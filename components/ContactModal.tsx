'use client'
import React from "react";
import InputComponent from "./InputComponent";
import Button from "./Button";

function ContactModal() {
  return (
    <div className="p-[8rem_2rem] md:p-[6rem_2rem] h-full overflow-y-auto">
      <div className="flex flex-col">
        <div className="flex flex-col gap-12 md:gap-[4.2rem]">
          <div className="flex flex-col gap-8 md:gap-12">
            <h1 className="font-neue-haas text-[2.4rem] md:text-[3.6rem] font-normal leading-[1.1] tracking-[-0.01em] m-0">What&apos;s on your mind?</h1>
            <div className="font-neue-haas text-[1.4rem] md:text-[1.6rem] leading-normal tracking-[-0.01em] m-0">We&apos;ll get back to you as soon as possible.</div>
          </div>
          <form noValidate className="flex flex-col gap-6 md:gap-8" aria-label="Send us a message">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className="w-full">
                <InputComponent input text={'First Name'} type={'text'} />
              </div>
              <div className="w-full">
                <InputComponent input text={'Last Name'} type={'text'} />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 w-full">
              <div className="w-full">
                <InputComponent input text={'Email'} type={'email'} />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 w-full">
              <div className="w-full">
                <InputComponent input text={'Subject'} type={'text'} />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 w-full">
              <div className="w-full">
                <InputComponent height={'fit-content'} borr={'1rem'} textarea text={'Message'} name={'message'} />
              </div>
            </div>
            <Button width={'100%'} text={'Submit'} className="w-full" />
            <p className="leading-0 text-transparent text-center m-0" aria-live="polite"></p>
            <p className="font-neue-haas text-[1.4rem] leading-normal tracking-[-0.01em] text-[hsla(0,0%,5%,.6)] text-center m-0">
              This site is protected by reCAPTCHA and the Google <a className="underline text-[hsla(0,0%,5%,.6)]" target="_blank" rel="noreferrer noopener" href="https://policies.google.com/privacy">Privacy Policy</a> and
              <a className="underline text-[hsla(0,0%,5%,.6)]" target="_blank" rel="noreferrer noopener" href="https://policies.google.com/terms"> Terms of Service</a> apply.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
export default ContactModal;
