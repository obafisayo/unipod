'use client'
import React from "react";

interface SvgProps {
  hov?: boolean;
  hove?: boolean;
  arrowUpRight?: boolean;
  arrowLeft?: boolean;
  arrowRight?: boolean;
  plus?: boolean;
  minus?: boolean;
  width?: string;
  nohover?: boolean;
  caree?: boolean;
}

function Svg({ hov, hove, arrowUpRight, arrowLeft, arrowRight, plus, minus, width, nohover, caree }: SvgProps) {
  const showBlur = (hove || hov) && !nohover;

  return (
    <span className={`relative inline-block ml-[1.2rem] ${caree ? '' : ''}`} style={{ width: width || 'auto' }}>
      {minus && (
        <span>
          <span className="block w-full">
            <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
              <path d="M13.7083 23.4881H32.0083M45 23.4881C45 35.6321 35.1503 45.4767 23 45.4767C10.8497 45.4767 1 35.6321 1 23.4881C1 11.3441 10.8497 1.49951 23 1.49951C35.1503 1.49951 45 11.3441 45 23.4881Z" stroke="url(#svg-id-7741)" strokeWidth="1.5"></path>
              <defs>
                <linearGradient id="svg-id-7741" x1="28.5995" y1="1.49915" x2="28.6041" y2="45.4767" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0457092" stopColor="#23B7CA"></stop>
                  <stop offset="0.554765" stopColor="#6CBD98"></stop>
                  <stop offset="0.864583" stopColor="#B4C465"></stop>
                  <stop offset="1" stopColor="#FDAB3B"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className={`absolute top-0 left-0 block w-full transition-all duration-300 ease-in-out blur-[0.25rem] ${showBlur ? 'opacity-100' : 'opacity-0'}`} style={{ willChange: 'filter' }}>
            <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
              <path d="M13.7083 23.4881H32.0083M45 23.4881C45 35.6321 35.1503 45.4767 23 45.4767C10.8497 45.4767 1 35.6321 1 23.4881C1 11.3441 10.8497 1.49951 23 1.49951C35.1503 1.49951 45 11.3441 45 23.4881Z" stroke="url(#svg-id-8308)" strokeWidth="1.5"></path>
              <defs>
                <linearGradient id="svg-id-8308" x1="28.5995" y1="1.49915" x2="28.6041" y2="45.4767" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0457092" stopColor="#23B7CA"></stop>
                  <stop offset="0.554765" stopColor="#6CBD98"></stop>
                  <stop offset="0.864583" stopColor="#B4C465"></stop>
                  <stop offset="1" stopColor="#FDAB3B"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </span>
      )}
      {arrowUpRight && (
        <span>
          <span className="block w-full">
            <svg className="block w-full w-[1.4rem]" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 15.4907L14.9814 1.50928M14.9814 1.50928H1M14.9814 1.50928V15.4907" stroke="url(#svg-id-8094)" strokeWidth="1.5"></path>
              <defs>
                <linearGradient id="svg-id-8094" x1="98%" y1="64%" x2="2%" y2="36%" gradientTransform="rotate(0)" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0457092" stopColor="#23B7CA"></stop>
                  <stop offset="0.554765" stopColor="#6CBD98"></stop>
                  <stop offset="0.864583" stopColor="#B4C465"></stop>
                  <stop offset="1" stopColor="#FDAB3B"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className={`absolute top-0 left-0 block w-full transition-all duration-300 ease-in-out blur-[0.25rem] ${showBlur ? 'opacity-100' : 'opacity-0'}`} style={{ willChange: 'filter' }}>
            <svg className="block w-full w-[1.4rem]" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 15.4907L14.9814 1.50928M14.9814 1.50928H1M14.9814 1.50928V15.4907" stroke="url(#svg-id-6487)" strokeWidth="1.5"></path>
              <defs>
                <linearGradient id="svg-id-6487" x1="98%" y1="64%" x2="2%" y2="36%" gradientTransform="rotate(0)" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0457092" stopColor="#23B7CA"></stop>
                  <stop offset="0.554765" stopColor="#6CBD98"></stop>
                  <stop offset="0.864583" stopColor="#B4C465"></stop>
                  <stop offset="1" stopColor="#FDAB3B"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </span>
      )}
      {plus && (
        <span>
          <span className="block w-full">
            <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
              <path d="M23 13.9454V31.9361M13.7083 23.4405H32.0083M45 23.4405C45 35.5845 35.1503 45.4291 23 45.4291C10.8497 45.4291 1 35.5845 1 23.4405C1 11.2965 10.8497 1.4519 23 1.4519C35.1503 1.4519 45 11.2965 45 23.4405Z"
                stroke="url(#svg-id-466)" strokeWidth="1.5">
              </path>
              <defs>
                <linearGradient id="svg-id-466" x1="28.5995" y1="1.45154" x2="28.6041" y2="45.4291" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0457092" stopColor="#23B7CA"></stop>
                  <stop offset="0.554765" stopColor="#6CBD98"></stop>
                  <stop offset="0.864583" stopColor="#B4C465"></stop>
                  <stop offset="1" stopColor="#FDAB3B"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className={`absolute top-0 left-0 block w-full transition-all duration-300 ease-in-out blur-[0.25rem] ${showBlur ? 'opacity-100' : 'opacity-0'}`} style={{ willChange: 'filter' }}>
            <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
              <path d="M23 13.9454V31.9361M13.7083 23.4405H32.0083M45 23.4405C45 35.5845 35.1503 45.4291 23 45.4291C10.8497 45.4291 1 35.5845 1 23.4405C1 11.2965 10.8497 1.4519 23 1.4519C35.1503 1.4519 45 11.2965 45 23.4405Z"
                stroke="url(#svg-id-8089)" strokeWidth="1.5">
              </path>
              <defs>
                <linearGradient id="svg-id-8089" x1="28.5995" y1="1.45154" x2="28.6041" y2="45.4291" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0457092" stopColor="#23B7CA"></stop>
                  <stop offset="0.554765" stopColor="#6CBD98"></stop>
                  <stop offset="0.864583" stopColor="#B4C465"></stop>
                  <stop offset="1" stopColor="#FDAB3B"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </span>
      )}
      {arrowLeft && (
        <span>
          <span className="block w-full">
            <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.25 22.75C2.25 11.014 11.7639 1.5 23.5 1.5C35.2361 1.5 44.75 11.014 44.75 22.75C44.75 34.486 35.2361 44 23.5 44C11.7639 44 2.25 34.486 2.25 22.75ZM23.5 0C10.9355 0 0.75 10.1855 0.75 22.75C0.75 35.3145 10.9355 45.5 23.5 45.5C36.0645 45.5 46.25 35.3145 46.25 22.75C46.25 10.1855 36.0645 0 23.5 0ZM23.8536 31.8808L15.7071 23.7344L32.5 23.7344V22.7344L15.7071 22.7344L23.8536 14.5879L23.1464 13.8808L14.1464 22.8808L13.7929 23.2344L14.1464 23.5879L23.1464 32.5879L23.8536 31.8808Z" fill="url(#svg-id-4572)"></path>
              <defs>
                <linearGradient id="svg-id-4572" x1="29.2904" y1="-0.000373377" x2="29.2952" y2="45.5" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0457092" stopColor="#23B7CA"></stop>
                  <stop offset="0.554765" stopColor="#6CBD98"></stop>
                  <stop offset="0.864583" stopColor="#B4C465"></stop>
                  <stop offset="1" stopColor="#FDAB3B"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className={`absolute top-0 left-0 block w-full transition-all duration-300 ease-in-out blur-[0.25rem] ${showBlur ? 'opacity-100' : 'opacity-0'}`} style={{ willChange: 'filter' }}>
            <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.25 22.75C2.25 11.014 11.7639 1.5 23.5 1.5C35.2361 1.5 44.75 11.014 44.75 22.75C44.75 34.486 35.2361 44 23.5 44C11.7639 44 2.25 34.486 2.25 22.75ZM23.5 0C10.9355 0 0.75 10.1855 0.75 22.75C0.75 35.3145 10.9355 45.5 23.5 45.5C36.0645 45.5 46.25 35.3145 46.25 22.75C46.25 10.1855 36.0645 0 23.5 0ZM23.8536 31.8808L15.7071 23.7344L32.5 23.7344V22.7344L15.7071 22.7344L23.8536 14.5879L23.1464 13.8808L14.1464 22.8808L13.7929 23.2344L14.1464 23.5879L23.1464 32.5879L23.8536 31.8808Z" fill="url(#svg-id-4804)"></path>
              <defs>
                <linearGradient id="svg-id-4804" x1="29.2904" y1="-0.000373377" x2="29.2952" y2="45.5" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0457092" stopColor="#23B7CA"></stop>
                  <stop offset="0.554765" stopColor="#6CBD98"></stop>
                  <stop offset="0.864583" stopColor="#B4C465"></stop>
                  <stop offset="1" stopColor="#FDAB3B"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </span>
      )}
      {arrowRight && (
        <span>
          <span className="block w-full">
            <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.25 22.75C2.25 11.014 11.7639 1.5 23.5 1.5C35.2361 1.5 44.75 11.014 44.75 22.75C44.75 34.486 35.2361 44 23.5 44C11.7639 44 2.25 34.486 2.25 22.75ZM23.5 0C10.9355 0 0.75 10.1855 0.75 22.75C0.75 35.3145 10.9355 45.5 23.5 45.5C36.0645 45.5 46.25 35.3145 46.25 22.75C46.25 10.1855 36.0645 0 23.5 0ZM23.1464 14.5879L31.2929 22.7344H14.5V23.7344H31.2929L23.1464 31.8808L23.8536 32.5879L32.8536 23.5879L33.2071 23.2344L32.8536 22.8808L23.8536 13.8808L23.1464 14.5879Z" fill="url(#svg-id-396)"></path>
              <defs>
                <linearGradient id="svg-id-396" x1="29.2904" y1="-0.000373377" x2="29.2952" y2="45.5" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0457092" stopColor="#23B7CA"></stop>
                  <stop offset="0.554765" stopColor="#6CBD98"></stop>
                  <stop offset="0.864583" stopColor="#B4C465"></stop>
                  <stop offset="1" stopColor="#FDAB3B"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className={`absolute top-0 left-0 block w-full transition-all duration-300 ease-in-out blur-[0.25rem] ${showBlur ? 'opacity-100' : 'opacity-0'}`} style={{ willChange: 'filter' }}>
            <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.25 22.75C2.25 11.014 11.7639 1.5 23.5 1.5C35.2361 1.5 44.75 11.014 44.75 22.75C44.75 34.486 35.2361 44 23.5 44C11.7639 44 2.25 34.486 2.25 22.75ZM23.5 0C10.9355 0 0.75 10.1855 0.75 22.75C0.75 35.3145 10.9355 45.5 23.5 45.5C36.0645 45.5 46.25 35.3145 46.25 22.75C46.25 10.1855 36.0645 0 23.5 0ZM23.1464 14.5879L31.2929 22.7344H14.5V23.7344H31.2929L23.1464 31.8808L23.8536 32.5879L32.8536 23.5879L33.2071 23.2344L32.8536 22.8808L23.8536 13.8808L23.1464 14.5879Z" fill="url(#svg-id-753)"></path>
              <defs>
                <linearGradient id="svg-id-753" x1="29.2904" y1="-0.000373377" x2="29.2952" y2="45.5" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0457092" stopColor="#23B7CA"></stop>
                  <stop offset="0.554765" stopColor="#6CBD98"></stop>
                  <stop offset="0.864583" stopColor="#B4C465"></stop>
                  <stop offset="1" stopColor="#FDAB3B"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </span>
      )}
    </span>
  )
}
export default Svg
