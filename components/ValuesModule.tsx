'use client'
import React from "react";
import ValueList from "./ValuesList";
import Link from "next/link";
import Slider from "./Slider";
import Totop from "./Totop";

function ValuesModule() {
  return (
    <section className="section section--with-background section--dark">
      <section className="values-module bg-brand-dark text-white p-[16rem_var(--content-padding)]">
        <div id="our-values" className="section__anchor"></div>
        <div className="values-module__inner max-w-1024 w-full mx-auto">
          <div className="values-module__top-content mb-[3.2rem] md:mb-[5.2rem]">
            <span className="values-module__kicker font-neue-haas text-[1.4rem] font-medium leading-[1.2] tracking-normal">Our Values</span>
            <h1 className="values-module__heading font-neue-haas text-[2.4rem] font-normal leading-[1.1] tracking-[-0.01em] m-[1rem_0_0] max-w-[44rem] w-full md:text-[3.6rem]">Breaking the limits of human achievement</h1>
          </div>
          <ol className="values-module__values p-0 m-0 list-none">
            <ValueList header={'Move Fast & Be Technically Fearless'} paragraph={'Hesitation is the enemy of momentum. We are tackling today\'s most complex technological challenges by testing, experimenting, and taking calculated risks to embrace the unknown without fear of failure.'} />
            <ValueList header={'Product First, Mission Focused'} paragraph={'Our product and our mission are one in the same: to bring a commercially viable humanoid to market. We are builders, designers, and engineers united by a commitment to that mission. We avoid distraction and unrelated activities to remain laser-focused on shipping a safe, high quality product.'} />
            <ValueList header={'Aggressively Optimistic'} paragraph={'Building Unipod won\'t be an easy win; it will require decades of commitment and ingenuity. We\'re humbled by our mission, and aspire to remain optimistic even in the face of enormous hurdles.'} />
            <ValueList header={'Maximize Future Impact'} paragraph={'We have what it takes to build the most groundbreaking company on the planet — to create an inspiring future for generations to come with improved access to goods and services, safer working conditions, and more opportunity for fulfilling work. Our focus is on what we can achieve 5, 10, 20+ years from now, not the near-term wins. '} />
            <ValueList header={'Championship Mindset'} paragraph={'To address the extraordinary demands of our work, we believe in operating as a winning team. We are in the trenches together, collaborating in-person, remaining hyper-focused, and pushing each other to the highest levels of performance.'} />
          </ol>
          <div className="values-module__cta mt-[5.2rem]">
            <Link href="/culture" >
              <Totop component={<Slider text={'Dive deeper into our culture'} icon arrowUpRight light slide bordercolor={'white'} ff={'neue-haas-grot-text, sans-serif'} />} />
            </Link>
          </div>
        </div>
      </section>
    </section>
  )
}
export default ValuesModule;
