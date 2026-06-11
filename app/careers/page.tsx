'use client'
import React from "react";
import Video from "../../components/Video";
import CareerDoubleImg from "../../components/CareerDoubleImg";
import ImageComponent from "../../components/Image";
import ShortText from "../../components/ShortText";
import MetricsModule from "../../components/MetricsModule";
import StaffQuotes from "../../components/StaffQuotes";
import CareerList from "../../components/CareerList";

const CareerVideo = '/assets/mural-lounge.jpg'
const careerImg1 = '/assets/staircase-mural.jpg'
const careerImg2 = '/assets/staircase-mural.jpg'

function Careers() {
  return (
    <main className="block">
      <Video button videotobeshown={CareerVideo} career heading={"WE'RE BRINGING THE HUMANOID TO LIFE. JOIN US."}/>
      <CareerDoubleImg/>
      <ImageComponent img1={careerImg2} img2={careerImg1} marginTop/>
      <ShortText bt={"Dive Deeper into our culture"} to={"/culture"} bcc={'#0c0c0c'} color={'white'} headerfsz={'8.5rem'} ppeff
        header={'OUR MISSION IS TO EXPAND HUMAN CAPABILITIES THROUGH ADVANCED AI.'}
        paragraph={"We're building a team singularly focused on that mission. We're seeking candidates dedicated to relentless iteration, who are ready for the race to rollout."}
      />
      <MetricsModule/>
      <StaffQuotes/>
      <CareerList/>
    </main>
  )
}
export default Careers;
