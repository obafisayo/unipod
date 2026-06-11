'use client'
import React, { useEffect, useRef } from "react";
import Video from "../components/Video";
import TextLoader from "../components/TextLoader";
import ImageComponent from "../components/Image";
import ShortText from "../components/ShortText";
import FigureNews from "../components/FigureNews";
import HumanForms from "../components/HumanForms";

const loungeSunset = '/assets/lounge-sunset.jpg'
const mezzanine = '/assets/mezzanine.jpg'

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Reveal on scroll — mirrors site.js IntersectionObserver
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Logo reveal observer
    const navIo = new IntersectionObserver(
      (entries) => {
        const nav = document.querySelector('.navigation');
        if (!nav) return;
        
        entries.forEach(e => {
          if (!e.isIntersecting) {
            nav.classList.add('is-home-link-shown');
          } else {
            nav.classList.remove('is-home-link-shown');
          }
        });
      },
      { threshold: 0 }
    );
    if (heroRef.current) navIo.observe(heroRef.current);

    return () => {
      io.disconnect();
      navIo.disconnect();
    };
  }, []);

  return (
    <main className="block">
      {/* Hero / video */}
      <div ref={heroRef}>
        <Video
          videotobeshown="/unipod-hero.mp4"
          slideText
          heading="Unipod is the University of Lagos academic hub for innovation, design and robotics."
          subtext="turning bold student ideas into ventures that move the continent forward"
        />
      </div>

      {/* Rotating text */}
      <TextLoader />

      {/* Full bleed — lounge sunset */}
      <ImageComponent img1={loungeSunset} img2={loungeSunset} />

      {/* CTA 1 */}
      <ShortText
        to="/master-plan"
        bt="See our Master Plan"
        header="We're turning the university into an engine of innovation and enterprise."
        paragraph="Unipod puts world-class tools in students' hands — AI and robotics labs, 3D printing and prototyping, design software and mentorship — so ideas don't stay in lecture halls. They get built, tested, and taken to market."
      />

      {/* Inside / Stats */}
      <HumanForms />

      {/* CTA 2 */}
      <ShortText
        to="/about-us"
        bt="About Us"
        bcc="#f6f6ef"
        kicker="Powered by UNDP"
        header="Why a university innovation pod?"
        paragraph="Africa's universities are its richest idea hubs — but too often, ideas graduate into research papers, not products. Unipod changes that."
        paragraph2="The hub gives student innovators the tools, mentorship, IP support and market pathways to turn a prototype into a venture — and connects them to a continent-wide network of sector hubs."
      />

      {/* News */}
      <FigureNews />

      {/* Full bleed — mezzanine */}
      <ImageComponent img1={mezzanine} img2={mezzanine} />

      {/* CTA 3 */}
      <ShortText
        bt="Submit a Proposal"
        to="/careers"
        header="The people building the pod"
        paragraph="Unipod is powered by a community of academics, engineers, designers, mentors and student founders — all working to turn ideas into impact."
      />
    </main>
  )
}
export default Home;
