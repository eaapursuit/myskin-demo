import React from "react";

const About = () => {
  return (
    <div className=" bg-cream  flex items-center flex-row px-16 py-16 min-h-screen ">
      {/* Left column: badge + text + buttons */}
      <div className="space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-sage text-lightgray text-sm font-medium rounded-full shadow-sm">
          About Our Mission
        </div>

        {/* Title */}
        <h2 className="text-4xl lg:text-6xl font-bold text-charcoal leading-tight">
          Something can go here(optional){" "}
        </h2>
        <span className="text-tan block">Like Skincare</span>

        {/* Subtitle */}
        <h3 className=" text-xl text-chocolate font-medium opacity-80">
          Subtitle goes here
        </h3>

        {/* Body copy */}
        <p className="text-lg text-chocolate max-w-md leading-relaxed">
          A Netlify Create website is a git repo that you own. Every code commit
          is instantly reflected in the visual editor and since every visual
          edit is a git commit, git workflows and collaboration just work.
        </p>

        {/* {Call to Action Buttons} */}
        <div className="flex space-x-4 pt-4">
          <button className="bg-chocolate text-lightgray px-8 py-4 rounded-full font-medium hover:bg-charcoal transition-colors duration-300 shadow-lg hover-shadow-xl">
            Get Started
          </button>
          <button className="border-2 border-tan text-tan px-8 py-4 rounded-full font-medium hover:bg-tan hover:text-lightgray transition-all duration-300">
            Learn More{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
