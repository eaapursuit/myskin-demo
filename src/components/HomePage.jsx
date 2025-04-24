import About from "./About";
import MissionStatement from "./MissionStatement";
import React from "react";
import ValueStatement from "./ValueStatement";

 function Homepage() {

  return (
    <div className="homepage">
      <About />

      <MissionStatement />

      <ValueStatement />
    </div>
  );
}

export default Homepage;
