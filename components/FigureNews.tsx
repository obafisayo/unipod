'use client'
import React from "react";
import NewsBoxes from "./NewsBoxes";

function FigureNews() {
  return (
    <section className="relative py-24 px-(--content-padding) bg-brand-dark text-white md:py-48">
      <div id="unipod-in-the-news" className="absolute top-[-7.2rem] md:top-[-12.8rem]" />
      <div className="w-full max-w-1024 mx-auto">
        <h2 className="font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] m-0 mb-[4.2rem] md:text-[3.6rem] md:mb-64">
          Unipod in the news
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
