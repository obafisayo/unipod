"use client";
import React, { useRef, useEffect, useState } from "react";
import NewsletterMail from "./NewsletterMail";
import Slider from "./Slider";
import Button from "./Button";

const figureMaster1 = "/assets/hero-ai-mural.jpg";
const figureHr1 = "/assets/lounge-sunset.jpg";

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

  const ringStyle = {
    transition: "stroke-dashoffset 5ms ease 0s",
    strokeDashoffset: `${dashoffset}`,
  };

  const whichPicture = career ? figureHr1 : figureMaster1;
  const contentClass = `relative mx-auto bg-[#0c0c0c] w-full min-h-[60rem] max-w-1024 flex flex-col overflow-hidden aspect-[1500/3248] min-[480px]:aspect-[3840/2160] pt-[8.2rem] px-[var(--content-padding)] pb-0 md:pt-[11.6rem] md:pb-[5rem] md:flex-row md:justify-between ${career ? "hero--layout-2" : ""}`;

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
          <picture className="absolute top-0 right-0 bottom-0 left-0 z-4 block">
            <source srcSet={figureMaster1} media="(min-width: 768px)" />
            <img
              src={whichPicture}
              width="750"
              height="1624"
              alt="Unipod innovation hub"
              className="absolute top-0 right-0 bottom-0 left-0 object-center object-cover w-full h-full"
            />
          </picture>
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
                className="leading-[1.11] font-machina text-[3.4rem] font-normal uppercase mb-[1.3rem] text-white md:text-[3rem] lg:text-[5.2rem] m-0"
                style={{ fontFeatureSettings: '"ss12" on' }}
              >
                {heading}
              </h1>
              {button && (
                <a href="/careers#careers-listing" title="Careers listing">
                  <Button text="See all open roles" arrowdown />
                </a>
              )}
            </div>
          ) : (
            <>
              <h1 className="leading-[1.1] font-neue-haas text-[2.4rem] font-normal tracking-[-.01em] m-0 text-white md:text-[3.6rem]">
                {heading}
              </h1>
              <p
                className="font-neue-haas text-[1rem] font-normal md:text-[2rem] text-gray-300"
                style={{ fontFeatureSettings: '"ss12" on' }}
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
                    <stop
                      className="hero-video-progress__linear-gradient-stop-1"
                      offset="0"
                    />
                    <stop
                      className="hero-video-progress__linear-gradient-stop-2"
                      offset="0.55"
                    />
                    <stop
                      className="hero-video-progress__linear-gradient-stop-3"
                      offset="0.68"
                    />
                    <stop
                      className="hero-video-progress__linear-gradient-stop-4"
                      offset="0.94"
                    />
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
                  className="hero-video-progress__progress-circle"
                  cx="26.5"
                  cy="26.5"
                  r="23"
                  stroke="url(#home-video-progress-linear-gradient)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="144.51326206513048"
                  strokeDashoffset="144.51326206513048"
                  style={ringStyle}
                />
                {/* Blur glow layer 1 */}
                <circle
                  className="hero-video-progress__progress-circle hero-video-progress__progress-circle--blur"
                  cx="26.5"
                  cy="26.5"
                  r="23"
                  stroke="url(#home-video-progress-linear-gradient)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="144.51326206513048"
                  strokeDashoffset="144.51326206513048"
                  filter="url(#home-video-progress-blur-filter)"
                  style={ringStyle}
                />
                {/* Blur glow layer 2 */}
                <circle
                  className="hero-video-progress__progress-circle hero-video-progress__progress-circle--blur"
                  cx="26.5"
                  cy="26.5"
                  r="23"
                  stroke="url(#home-video-progress-linear-gradient)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="144.51326206513048"
                  strokeDashoffset="144.51326206513048"
                  filter="url(#home-video-progress-blur-filter)"
                  style={ringStyle}
                />
              </svg>

              {/* Pause bars — solid */}
              <span className="hero__icon-pause" />
              {/* Pause bars — blur glow */}
              <span className="hero__icon-pause hero__icon-pause--blur" />
              <span className="hero__icon-pause hero__icon-pause--blur" />

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
                    <stop className="gradient-stop--1--1" offset="0.0457092" />
                    <stop className="gradient-stop--1--2" offset="0.554765" />
                    <stop className="gradient-stop--1--3" offset="0.66346" />
                    <stop className="gradient-stop--1--4" offset="0.8" />
                    <stop className="gradient-stop--1--4" offset="1" />
                  </linearGradient>
                </defs>
                <mask
                  id="svg-id-4967.31175585768-mask"
                  style={{ maskType: "alpha" }}
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
                    <stop className="gradient-stop--1--1" offset="0.0457092" />
                    <stop className="gradient-stop--1--2" offset="0.554765" />
                    <stop className="gradient-stop--1--3" offset="0.66346" />
                    <stop className="gradient-stop--1--4" offset="0.8" />
                    <stop className="gradient-stop--1--4" offset="1" />
                  </linearGradient>
                </defs>
                <mask
                  id="svg-id-3371.905405673761-mask"
                  style={{ maskType: "alpha" }}
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
                    <stop className="gradient-stop--1--1" offset="0.0457092" />
                    <stop className="gradient-stop--1--2" offset="0.554765" />
                    <stop className="gradient-stop--1--3" offset="0.66346" />
                    <stop className="gradient-stop--1--4" offset="0.8" />
                    <stop className="gradient-stop--1--4" offset="1" />
                  </linearGradient>
                </defs>
                <mask
                  id="svg-id-3161.2831055466663-mask"
                  style={{ maskType: "alpha" }}
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
                href="https://www.undp.org/africa/timbuktoo"
                className="no-underline"
              >
                <Slider
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
