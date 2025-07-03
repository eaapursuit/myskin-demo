import React from "react";

const About = () => {
  return (
    <div className="bg-tan flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-16 py-6 sm:py-10 md:py-16 font-sans">
      <div className="text-center max-w-xl space-y-4 sm:space-y-8">
        {/* Badge - iPhone SE: very small, scales up normally */}
        <div className="inline-block px-2 py-1 sm:px-4 sm:py-2 bg-sage text-lightgray text-[10px] sm:text-sm font-medium rounded-full shadow-sm">
          About Our Mission
        </div>

        {/* Content container - smaller padding on iPhone SE */}
        <div className="bg-[#F8F6F6] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
          <p className="text-xs sm:text-lg text-chocolate max-w-md leading-relaxed mx-auto">
            MySkin is a digital platform dedicated to helping people navigate
            their acne journey with confidence. Currently, MySkin lives as a growing community on Substack,
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