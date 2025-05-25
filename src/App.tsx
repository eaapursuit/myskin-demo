import "./main.css";
import React, { useRef } from "react";
import Header from "./components/Header.jsx";
import Parallax from "./components/Parallax.jsx";
import MissionStatement from "./components/MissionStatement.jsx";
import ValueStatement from "./components/ValueStatement.jsx";
import About from "./components/About.jsx";
import Application from "./components/Application.jsx";
import {
  motion,
  MotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "motion/react";


// function SectionParallax({ children }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });
//   const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

//   return (
//     <section
//       ref={ref}
//       className="h-[calc(100vh-5rem)] snap-start flex items-center justify-center"
//     >
//       <motion.div style={{ y }} className="w-full">
//         {children}
//       </motion.div>
//     </section>
//   );
// }

export default function App() {
  const mainRef = useRef(null);
  return (
    <div className="bg-lightgray">
      <Header />

      <main id="scroll-area" className="scroll-area ">
        <section id="about" className="snap-section">
          <About />
        </section>
        <section id="application" className="snap-section">
          <Application />
        </section>
        <section id="missionstatement" className="snap-section">
          <MissionStatement />
        </section>
        <section id="valuestatement" className="snap-section">
          <ValueStatement />
        </section>
      </main>
    </div>
  );
}
