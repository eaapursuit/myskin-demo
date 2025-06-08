import React from "react";
import DotsMobileStepper from "./MobileStepper";



const WhatIsMySkin = () => {
  return (
    <div className="min-h-screen flex flex-col items-center sm:justify-center bg-cream px-4 sm:px-8 md:px-16 py-12 font-sans">
      <div className="max-w-4xl mx-auto text-center ">
       
        <p className="text-xl text-chocolate opacity-90 mb-12 max-w-2xl mx-auto">
          MySkin app will streamline acne solutions by connecting people to
          niche skincare communities and providing educational resources needed
          to close knowledge gaps that often prolong the acne struggle.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-10 gap-8">
          {[
            {
              icon: "🔍",
              title: "Skin Analysis",
              desc: "Advanced AI Scanning Coming Soon!",
            },
            {
              icon: "💡",
              title: "Smart Recommendations",
              desc: "Personalized suggestions",
            },
            {
              icon: "📊",
              title: "Progress Tracking",
              desc: "Monitor your journey",
            },
          ].map((feature, i) => (
            <div key={i} className="bg-sage p-8 w-full max-w-wd mx-auto rounded-2xl shadow-lg">
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#472816] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-lightgray opacity-75 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div className="inline-flex items-center px-4 py-2 bg-[#F8F6F6] text-[#472816] text-sm font-medium rounded-full shadow-sm mb-8">
          📱 Try the App Now
        </div>
        <div className="mt-10 flex items-center justify-center">
        <DotsMobileStepper />
      </div> 
      </div>
    </div>
  );
};

export default WhatIsMySkin;
