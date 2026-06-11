'use client'
import React from "react";
import Intro from "../../components/Intro";
import CultureContent from "../../components/CultureContent";

function Culture() {
  return (
    <main className="block">
      <section className="section rich-text-page-content rich-text-page-content--has-side-nav">
        <div id="master-plan" className="section__anchor"></div>
        <div className="rich-text-page-content__inner">
          <Intro name={'Culture at Unipod'}
            ntext={'UNIPOD WAS FOUNDED WITH THE AMBITION TO CHANGE '}
            gtext={'THE WORLD.'}
          />
          <CultureContent/>
        </div>
      </section>
    </main>
  )
}
export default Culture;
