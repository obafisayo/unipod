'use client'
import React from "react";
import MasterplanIntro from "../../components/Intro";
import MasterplanContent from "../../components/MasterplanContent";

function Masterplan() {
  return (
    <main className="block">
      <section className="section rich-text-page-content rich-text-page-content--has-side-nav">
        <div id="master-plan" className="section__anchor"></div>
        <div className="rich-text-page-content__inner">
          <MasterplanIntro name={'Master Plan'}
            ntext={'Roadmap to a positive future '}
            gtext={'powered by AI'}
            descriptionlink
          />
          <MasterplanContent/>
        </div>
      </section>
    </main>
  )
}
export default Masterplan;
