import "./main.css";
import React, { useRef } from "react";
import Header from "./components/Header.jsx";
import MissionStatement from "./components/MissionStatement.jsx";
import VisionStatement from "./components/VisionStatement.jsx";
import About from "./components/About.jsx";
import WhatIsMySkin from "./components/WhatIsMySkin.jsx";
import EmailSignUp from "./components/EmailSignUp.jsx";

export default function App() {
  const mainRef = useRef(null);
  return (
    /*const meta = {
    title: '[insert title]',
    description: '[insert description]',
    canonical: '[insert webpage link]',
    meta: {
      charset: 'utf-8',
      name: {
        viewport: `width=device-width, initial-scale=1.0`,
        keywords: `[inserst,tags]`
      }
    }
  };
    */
    <div className="bg-lightgray ">
      <Header />

      <main id="scroll-area" className="h-screen overflow-y-auto snap-y snap-mandatory pt-20 ">
        <section id="whatismyskin" className="snap-start min-h-[calc(100vh-5rem)] flex items-center md:px-16 ">
          <WhatIsMySkin />
        </section>
        <section id="about" className="snap-start min-h-[calc(100vh-5rem)] flex flex-col justify-center ">
          <About />
        </section>
        <section id="visionstatement" className="snap-start min-h-[calc(100vh-5rem)] flex flex-col justify-center">
          <VisionStatement />
        </section>
        <section id="missionstatement" className="snap-section ">
          <MissionStatement />
        </section>
        <section id="emailsignup" className="snap-section ">
          <EmailSignUp />
        </section>
      </main>
    </div>
  );
}
