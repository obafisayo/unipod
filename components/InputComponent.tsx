'use client'
import React, { useRef } from "react";

interface InputComponentProps {
  text: string;
  button?: React.ReactNode;
  type?: string;
  width?: string;
  height?: string;
  fsz?: string;
  textarea?: boolean;
  input?: boolean;
  name?: string;
  borr?: string;
}

function InputComponent({ text, button, type, width, height, fsz, textarea, input, name, borr }: InputComponentProps) {
  const customInput = useRef<HTMLDivElement>(null)
  const customInputText = useRef<HTMLSpanElement>(null)
  const customInputInput = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  function focusInput() {
    if (customInput.current) customInput.current.style.border = '0.1rem solid royalblue';
    if (customInputText.current) {
      customInputText.current.style.transform = 'translateY(-210%)';
      customInputText.current.style.fontSize = '1.2rem';
      customInputText.current.style.top = '2.6rem';
      customInputText.current.style.color = 'hsla(0,0%,5%,1)';
    }
  }

  function blurInput() {
    if (customInput.current) customInput.current.style.border = '0.1rem solid white';
    if (customInputText.current && customInputInput.current) {
      if (customInputInput.current.value) {
        customInputText.current.style.transform = 'translateY(-210%)';
        customInputText.current.style.fontSize = '1.2rem';
        customInputText.current.style.top = '2.6rem';
        customInputText.current.style.color = 'hsla(0,0%,5%,1)';
      } else {
        customInputText.current.style.transform = 'translateY(-100%)';
        customInputText.current.style.top = '2.9rem';
        customInputText.current.style.fontSize = '1.4rem';
        customInputText.current.style.color = 'hsla(0,0%,5%,.6)';
      }
    }
  }

  return (
    <div 
      ref={customInput} 
      onFocus={focusInput} 
      onBlur={blurInput}
      className="transition-[border-color] duration-300 ease-in-out flex items-center bg-white border-[0.1rem] border-white px-[0.5rem] py-[0.5rem] pl-[2.4rem] w-full"
      style={{
        width: width || '100%',
        height: height || '5.8rem',
        borderRadius: borr || '2.9rem',
      }}
    >
      {input && (
        <label className="relative flex items-center m-0 mr-[0.5rem] w-full h-full cursor-default">
          <span 
            ref={customInputText} 
            className="transition-all duration-300 ease-in-out font-neue-haas text-[1.4rem] tracking-[-0.01em] absolute top-[2.9rem] -translate-y-full text-[hsla(0,0%,5%,.6)] whitespace-nowrap pointer-events-none leading-none"
          >
            {text}*
          </span>
          <input 
            ref={customInputInput as React.RefObject<HTMLInputElement>} 
            className="transition-transform duration-300 ease-in-out font-neue-haas tracking-[-0.01em] block p-0 w-full h-[2rem] bg-transparent border-none outline-none"
            style={{ fontSize: fsz || '1.4rem' }}
            name={name} 
            type={type} 
            required 
            aria-invalid="false" 
          />
        </label>
      )}
      {textarea && (
        <label className="relative flex items-center m-0 mr-[0.5rem] w-full h-full cursor-default min-h-[13rem]">
          <span 
            ref={customInputText} 
            className="transition-all duration-300 ease-in-out font-neue-haas text-[1.4rem] tracking-[-0.01em] absolute top-[2.9rem] -translate-y-full text-[hsla(0,0%,5%,.6)] whitespace-nowrap pointer-events-none leading-none"
          >
            {text}*
          </span>
          <textarea 
            ref={customInputInput as React.RefObject<HTMLTextAreaElement>} 
            className="transition-transform duration-300 ease-in-out font-neue-haas tracking-[-0.01em] block p-0 w-full bg-transparent border-none outline-none min-h-[13rem] pt-[1.5rem]"
            style={{ fontSize: fsz || '1.4rem' }}
            name={name} 
            required 
            aria-invalid="false"
          />
        </label>
      )}
      {button}
    </div>
  )
}
export default InputComponent;
