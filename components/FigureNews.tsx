'use client'
import React from "react";
import NewsBoxes from "./NewsBoxes";

function FigureNews() {
  return (
    <section
      className="relative my-0"
      style={{ background: '#0c0c0c', color: '#fff', padding: '12rem var(--content-padding)' }}
    >
      <div id="unipod-in-the-news" className="absolute top-[-7.2rem] md:top-[-12.8rem]" />
      <div className="max-w-[256rem] w-full mx-auto">
        <h2
          className="font-neue-haas font-normal leading-[1.1] tracking-[-0.01em] m-0 text-[2.4rem] md:text-[3.6rem]"
          style={{ marginBottom: '10rem' }}
        >
          Unipod in the news
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
          <NewsBoxes
            href="https://www.undp.org/south-africa/press-releases/undp-and-uj-unveil-south-africas-first-unipod-accelerating-innovation-and-entrepreneurship"
            text="UNDP and UJ unveil South Africa's first UniPod"
            text2="UNDP"
          />
          <NewsBoxes
            href="https://leadership.ng/shettima-to-launch-first-varsity-innovation-pod-in-africa-at-unilag/"
            text="First varsity innovation pod launches at UNILAG"
            text2="Leadership"
          />
          <NewsBoxes
            href="https://news.uj.ac.za/news/uj-undp-unipod-sets-the-stage-for-africas-next-wave-of-innovators/"
            text="A pod that sets the stage for Africa's next wave of innovators"
            text2="University of Johannesburg"
          />
          <NewsBoxes
            href="https://www.undp.org/africa/stories/unipods-birthing-innovations-africa-matias-story"
            text="Birthing innovations in Africa: Matia's story"
            text2="UNDP"
          />
        </div>
      </div>
    </section>
  )
}
export default FigureNews;
