"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import NewsletterMail from "./NewsletterMail";
import Slider from "./Slider";
import Button from "./Button";

const heroImage = "/assets/hero-ai-mural.jpg";
const hrImage = "/assets/lounge-sunset.jpg";

interface VideoProps {
  videotobeshown?: string;
  notNeeded?: React.ReactNode;
  career?: boolean;
  heading?: string;
  subtext?: string;
  slideText?: boolean;
  button?: boolean;
}

function Video({
  videotobeshown,
  notNeeded,
  career,
  heading,
  subtext,
  slideText,
  button,
}: VideoProps) {
  /* ── refs ── */
  const videoRef = useRef<HTMLVideoElement>(null);
  const playModeRef = useRef<HTMLButtonElement>(null); // receives is-playing / is-hovering
  const progressRef = useRef<SVGSVGElement>(null); // receives is-hovering

  /* ── state ── */
  const [showPicture, setShowPicture] = useState(true);
  const [dashoffset, setDashoffset] = useState(144.51326206513048); // starts full (empty ring)

  /* ── toggle play / pause on click ── */
  function handleToggle() {
    const video = videoRef.current;
    const btn = playModeRef.current;
    if (!video || !btn) return;

    if (video.paused) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Play was interrupted by pause or unmounted, safe to ignore
        });
      }
    } else {
      video.pause();
    }
  }

  /* ── wire up video events ── */
  useEffect(() => {
    const video = videoRef.current;
    const btn = playModeRef.current;
    if (!video || !btn) return;

    // Never autoplay — wait for the user to click
    video.autoplay = false;
    video.controls = false;
    video.muted = true;

    function onPlaying() {
      btn!.classList.add("is-playing");
      setShowPicture(false);
    }
    function onPause() {
      btn!.classList.remove("is-playing");
    }
    function onEnded() {
      btn!.classList.remove("is-playing");
    }

    video.addEventListener("playing", onPlaying);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);

    return () => {
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  /* ── time-update → ring progress ── */
  function handleLoadedMetadata() {
    /* duration now available */
  }
  function handleTimeUpdate() {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const pct = (video.currentTime / video.duration) * 100;
    setDashoffset(144.51326206513048 - (pct / 100) * 144.51326206513048);
  }

  /* ── hover glow on button + ring ── */
  function handleEnter() {
    playModeRef.current?.classList.add("is-hovering");
    progressRef.current?.classList.add("is-hovering");
  }
  function handleLeave() {
    playModeRef.current?.classList.remove("is-hovering");
    progressRef.current?.classList.remove("is-hovering");
  }

  // ringStyle removed to use CSS variables on parent

  const whichPicture = career ? hrImage : heroImage;
  const contentClass = `relative mx-auto bg-brand-dark w-full min-h-240 max-w-1024 flex flex-col overflow-hidden aspect-[1500/3248] min-[480px]:aspect-[3840/2160] pt-[8.2rem] px-(--content-padding) pb-0 md:pt-[11.6rem] md:pb-[5rem] md:flex-row md:justify-between ${career ? "hero--layout-2" : ""}`;

  return (
    <section className="block">
      <div className={contentClass}>
        {/* ── top gradient vignette ── */}
        <div
          className={`absolute right-0 left-0 block w-full h-184 opacity-60 z-5 pointer-events-none ${
            career
              ? "top-0 bg-[linear-gradient(180deg,#000_14%,transparent_88%)]"
              : "bottom-0 bg-[linear-gradient(0deg,#000_24%,transparent_72%)]"
          }`}
        />

        {/* ── poster image — z-index 4 keeps it above video (z-index 3) until play ── */}
        {showPicture && (
          <div className="absolute top-0 right-0 bottom-0 left-0 z-4 block">
            <div className="block md:hidden h-full">
              <Image
                src={whichPicture}
                width={750}
                height={1624}
                alt="Unipod innovation hub"
                className="absolute top-0 right-0 bottom-0 left-0 object-center object-cover w-full h-full"
              />
            </div>
            <div className="hidden md:block h-full">
              <Image
                src={heroImage}
                width={1920}
                height={1080}
                alt="Unipod innovation hub"
                className="absolute top-0 right-0 bottom-0 left-0 object-center object-cover w-full h-full"
              />
            </div>
          </div>
        )}

        {/* ── video — z-index 3, sits under the poster overlay ── */}
        <video
          ref={videoRef}
          src={videotobeshown}
          poster="/assets/hero-ai-mural.jpg"
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          loop
          playsInline
          preload="none"
          aria-label={heading}
          className="absolute top-0 right-0 bottom-0 left-0 object-center object-cover w-full h-full z-3"
        />

        {/* ── left column: heading + play button row ── */}
        <div
          className={`relative flex flex-col w-full z-10 justify-end md:gap-[3.4rem] ${
            career
              ? "gap-[1.4rem] max-w-244 h-full justify-between"
              : "gap-[1.4rem] max-w-[54.4rem]"
          }`}
        >
          {career ? (
            <div>
              <h1
                className="leading-[1.11] font-machina text-[3.4rem] font-normal uppercase mb-[1.3rem] text-white md:text-[3rem] lg:text-[5.2rem] m-0 font-features-['ss12'_on]"
              >
                {heading}
              </h1>
              {button && (
                <a href="/proposals#proposals-listing" title="Proposals listing">
                  <Button text="See all open fellowships" arrowdown />
                </a>
              )}
            </div>
          ) : (
            <>
              <h1 className="leading-[1.1] font-neue-haas text-[2.4rem] font-normal tracking-[-.01em] m-0 text-white md:text-[3.6rem]">
                {heading}
              </h1>
              <p
                className="font-neue-haas text-[1rem] font-normal md:text-[2rem] text-gray-300 font-features-['ss12'_on]"
              >
                {subtext}
              </p>
            </>
          )}

          {/* ── play / pause controls ── */}
          <div
            className={`flex items-center gap-4 md:gap-[2.8rem] ${career ? "mb-8 md:mb-0" : ""}`}
          >
            {/* The button — receives is-playing / is-hovering classes */}
            <button
              ref={playModeRef}
              className="hero__video-toggle relative p-0 bg-none border-none cursor-pointer"
              onClick={handleToggle}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              aria-label="play / pause video"
              style={{ '--dashoffset': dashoffset } as React.CSSProperties}
            >
              {/* Gradient progress ring */}
              <svg
                ref={progressRef}
                className="hero-video-progress"
                width="53"
                height="53"
                viewBox="0 0 53 53"
              >
                <defs>
                  <linearGradient
                    id="home-video-progress-linear-gradient"
                    x1="1"
                    y1="0"
                    x2="0"
                    y2="0"
                  >
                    <stop stopColor="#23B7CA" offset="0" />
                    <stop stopColor="#FDAB3B" offset="1" />
                  </linearGradient>
                  <filter
                    id="home-video-progress-blur-filter"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
                  </filter>
                </defs>
                {/* Track ring */}
                <circle
                  cx="26.5"
                  cy="26.5"
                  r="23"
                  strokeWidth="1"
                  stroke="#515050"
                  fill="none"
                />
                {/* Progress arc */}
                <circle
                  className="hero-video-progress__progress-circle transition-[stroke-dashoffset] duration-[5ms] ease-[ease] [stroke-dashoffset:var(--dashoffset)]"
                  cx="26.5"
                  cy="26.5"
                  r="23"
                  stroke="url(#home-video-progress-linear-gradient)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="144.51326206513048"
                />
                {/* Blur glow layer 1 */}
                <circle
                  className="hero-video-progress__progress-circle hero-video-progress__progress-circle--blur transition-[stroke-dashoffset] duration-[5ms] ease-[ease] [stroke-dashoffset:var(--dashoffset)]"
                  cx="26.5"
                  cy="26.5"
                  r="23"
                  stroke="url(#home-video-progress-linear-gradient)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="144.51326206513048"
                  filter="url(#home-video-progress-blur-filter)"
                />
                {/* Blur glow layer 2 */}
                <circle
                  className="hero-video-progress__progress-circle hero-video-progress__progress-circle--blur transition-[stroke-dashoffset] duration-[5ms] ease-[ease] [stroke-dashoffset:var(--dashoffset)]"
                  cx="26.5"
                  cy="26.5"
                  r="23"
                  stroke="url(#home-video-progress-linear-gradient)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="144.51326206513048"
                  filter="url(#home-video-progress-blur-filter)"
                />
              </svg>

              {/* Pause bars — solid */}
              <svg
                className="hero__icon-pause"
                width="9"
                height="18"
                viewBox="0 0 9 18"
                fill="none"
              >
                <defs>
                  <linearGradient
                    id="pause-gradient"
                    x1="4.5"
                    y1="0"
                    x2="4.5"
                    y2="18"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#23B7CA" offset="0" />
                    <stop stopColor="#FDAB3B" offset="1" />
                  </linearGradient>
                </defs>
                <rect width="1" height="18" fill="url(#pause-gradient)" />
                <rect x="8" width="1" height="18" fill="url(#pause-gradient)" />
              </svg>
              {/* Pause bars — blur glow 1 */}
              <svg
                className="hero__icon-pause hero__icon-pause--blur"
                width="9"
                height="18"
                viewBox="0 0 9 18"
                fill="none"
              >
                <rect width="1" height="18" fill="url(#pause-gradient)" />
                <rect x="8" width="1" height="18" fill="url(#pause-gradient)" />
              </svg>
              {/* Pause bars — blur glow 2 */}
              <svg
                className="hero__icon-pause hero__icon-pause--blur"
                width="9"
                height="18"
                viewBox="0 0 9 18"
                fill="none"
              >
                <rect width="1" height="18" fill="url(#pause-gradient)" />
                <rect x="8" width="1" height="18" fill="url(#pause-gradient)" />
              </svg>

              {/* Play triangle — normal */}
              <svg
                className="icon-play hero__icon-play"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
              >
                <defs>
                  <linearGradient
                    id="svg-id-4967.31175585768"
                    x1="8.30574"
                    y1="-3.07943"
                    x2="8.30574"
                    y2="17.9281"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#23B7CA" offset="0" />
                    <stop stopColor="#FDAB3B" offset="1" />
                  </linearGradient>
                </defs>
                <mask
                  id="svg-id-4967.31175585768-mask"
                  className="[mask-type:alpha]"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="18"
                >
                  <path
                    d="M0.500001 0.854924L14.9801 9L0.5 17.1451L0.500001 0.854924Z"
                    stroke="black"
                  />
                </mask>
                <rect
                  mask="url(#svg-id-4967.31175585768-mask)"
                  width="16"
                  height="18"
                  fill="url(#svg-id-4967.31175585768)"
                />
              </svg>

              {/* Play triangle — blur glow 1 */}
              <svg
                className="icon-play hero__icon-play hero__icon-play--blur"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
              >
                <defs>
                  <linearGradient
                    id="svg-id-3371.905405673761"
                    x1="8.30574"
                    y1="-3.07943"
                    x2="8.30574"
                    y2="17.9281"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#23B7CA" offset="0" />
                    <stop stopColor="#FDAB3B" offset="1" />
                  </linearGradient>
                </defs>
                <mask
                  id="svg-id-3371.905405673761-mask"
                  className="[mask-type:alpha]"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="18"
                >
                  <path
                    d="M0.500001 0.854924L14.9801 9L0.5 17.1451L0.500001 0.854924Z"
                    stroke="black"
                  />
                </mask>
                <rect
                  mask="url(#svg-id-3371.905405673761-mask)"
                  width="16"
                  height="18"
                  fill="url(#svg-id-3371.905405673761)"
                />
              </svg>

              {/* Play triangle — blur glow 2 */}
              <svg
                className="icon-play hero__icon-play hero__icon-play--blur"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
              >
                <defs>
                  <linearGradient
                    id="svg-id-3161.2831055466663"
                    x1="8.30574"
                    y1="-3.07943"
                    x2="8.30574"
                    y2="17.9281"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#23B7CA" offset="0" />
                    <stop stopColor="#FDAB3B" offset="1" />
                  </linearGradient>
                </defs>
                <mask
                  id="svg-id-3161.2831055466663-mask"
                  className="[mask-type:alpha]"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="18"
                >
                  <path
                    d="M0.500001 0.854924L14.9801 9L0.5 17.1451L0.500001 0.854924Z"
                    stroke="black"
                  />
                </mask>
                <rect
                  mask="url(#svg-id-3161.2831055466663-mask)"
                  width="16"
                  height="18"
                  fill="url(#svg-id-3161.2831055466663)"
                />
              </svg>
            </button>

            {/* Watch the full video link */}
            {slideText && (
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.instagram.com/reel/DZDUGwTI1Oj/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
                className="no-underline"
                title="Watch the full video"
              >
                <Slider
                  asDiv
                  text="Watch the full video"
                  icon
                  arrowUpRight
                  light
                  slide
                  bordercolor="white"
                  ff="neue-haas-grot-text, sans-serif"
                />
              </a>
            )}
          </div>
        </div>

        {/* ── right column: newsletter ── */}
        <div
          className={`flex flex-col py-[2.4rem] px-8 bg-[hsla(0,0%,5%,.4)] z-10 -ml-(--content-padding) w-[calc(100%+var(--content-padding)*2)] mt-auto md:ml-0 md:max-w-172 md:mb-0 md:self-end md:rounded-[.8rem] md:w-auto md:p-[2.4rem] md:gap-[.4rem] ${career ? "max-md:bg-brand-dark" : ""}`}
        >
          <NewsletterMail
            background="hsla(0,0%,5%,.4)"
            color="white"
            paddingLeft="0px"
            medianewsletterHeading="1.6rem"
            newsletterHeading="1.4rem"
            newsletterDes="1.4rem"
          />
        </div>

        <div className="hidden">{notNeeded}</div>
      </div>
    </section>
  );
}
export default Video;
