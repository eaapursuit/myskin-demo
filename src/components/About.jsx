import React from "react";

const About = () => {
  return (
    <div className="bg-tan flex flex-col items-center justify-center min-h-screen px-6 py-10 sm:px-10 md:px-16 md:py-16 font-sans">
      {/* Left column: badge + text + buttons */}
      <div className="text-center max-w-xl space-y-8">
        {/* Badge */}
        <div className="inline-block px-4 py-2 bg-sage text-lightgray text-sm font-medium rounded-full shadow-sm">
          About Our Mission
        </div>

        {/* Body copy */}
        <div className="bg-[#F8F6F6] rounded-3xl p-12 shadow-2xl">
        <p className="text-lg text-chocolate max-w-md leading-relaxed mx-auto">
          MySkin is a digital platform dedicated to helping people navigate
          their acne journey with confidence. Designed to bridge the knowledge
          gaps that often prolong skin struggles, MySkin connects users to niche
          skincare communities while providing science-backed educational
          resources. Currently, MySkin lives as a growing community on Substack,
          where founder, Toluwani, shares daily skin journals, expert insights,
          and interviews with people across all skin types. Slated to launch as
          an app in early to mid-2026, MySkin will revolutionize the way people
          access personalized skincare solutions and peer support.
        </p>
        </div>
      </div>

      
    </div>
  );
};

export default About;
