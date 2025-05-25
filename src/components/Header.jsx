import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "./MySkinLogo";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "application", label: "Application" },
  { id: "missionstatement", label: "Mission Statement" },
  { id: "valuestatement", label: "Value Statement" },
];

export default function Header() {
  const [activeLink, setActiveLink] = useState("about");

  return (
    <header className="fixed top-0 left-0 bg-lightgray w-full z-50 h-20 border-b border-tan/20 shadow-lg">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* {Logo and theme selector} */}
        <div className="flex items-center space-x-6">
          <Logo fillColor="#472816" className="w-[93px] h-[66px]"/>
  
        </div>

        {/* {Center with navigation links} */}
        <nav>
          <ul className="flex items-center space-x-8 mt-6 text-sm  font-medium">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <Link
                  to={id}
                  containerId="scroll-area"
                  smooth={true}
                  spy={true}
                  offset={-64} // tweak so header doesn’t cover
                  duration={50}
                  onSetActive={() => setActiveLink(id)}
                  className=
                    {`cursor-pointer inline-block py-2 px-1 text-sm no-underline text-chocolate ${activeLink === id}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* {Right: auth buttons} */}
        <div className="flex items-center text-dark space-x-4">
          <button className="text-sm font-medium text-chocolate hover:text-[#61623F]">
            Sign Up
          </button>
          <button className="text-sm font-medium text-chocolate hover:text-[#61623F]">
            Log In
          </button>
        </div>
      </div>
    </header>
  );
}