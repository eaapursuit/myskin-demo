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

      <main id="scroll-area" className="scroll-area ">
        <section id="whatismyskin" className="snap-section pt-20">
          <WhatIsMySkin />
        </section>
        <section id="about" className="snap-section pt-20">
          <About />
        </section>
        <section id="visionstatement" className="snap-section pt-20">
          <VisionStatement />
        </section>
        <section id="missionstatement" className="snap-section pt-20">
          <MissionStatement />
        </section>
        <section id="emailsignup" className="snap-section pt-5">
          <EmailSignUp />
        </section>
      </main>
    </div>
  );
}
