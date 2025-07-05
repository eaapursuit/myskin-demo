import "./main.css";
import React, { useRef, useState } from "react";
import Header from "./components/Header.jsx";
import MissionStatement from "./components/MissionStatement.jsx";
import VisionStatement from "./components/VisionStatement.jsx";
import About from "./components/About.jsx";
import WhatIsMySkin from "./components/WhatIsMySkin.jsx";
import EmailSignUp from "./components/EmailSignUp.jsx";
import DemoContainer from "./components/DemoContainer.jsx";
import DotsMobileStepper from "./components/MobileStepper.jsx";


export default function App() {
  const mainRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const pages = [
    <WhatIsMySkin onTryApp={() => setActiveStep(1)} />,
    <DemoContainer onExit={() => setActiveStep(0)} key="demo"/>,
  ];
  return (
    <div className="bg-lightgray ">
      <Header />

      <main
        id="scroll-area"
        className="h-screen overflow-y-auto snap-y snap-mandatory pt-20 "
      >
        <section
          id="whatismyskin"
          className="snap-start w-full bg-cream h-screen flex overflow-y-auto "
        >
          {pages[activeStep]}
        </section>
        <section
          id="about"
          className="snap-start min-h-[calc(100vh-5rem)] flex flex-col justify-center "
        >
          <About />
        </section>
        <section
          id="visionstatement"
          className="snap-start w-full min-h-[calc(100vh-5rem)] flex flex-col justify-center"
        >
          <VisionStatement />
        </section>
        <section id="missionstatement" className="snap-section ">
          <MissionStatement />
        </section>
        <section
          id="emailsignup"
          className="snap-start w-full h-screen bg-[#aa663c] flex flex-col justify-center"
        >
          <EmailSignUp />
        </section>
      </main>
    </div>
  );
}
