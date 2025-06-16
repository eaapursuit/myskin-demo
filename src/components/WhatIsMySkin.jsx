import React from "react";
import DotsMobileStepper from "./MobileStepper";



const WhatIsMySkin = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center sm:justify-center bg-cream pt-32 pb-8 px-4 sm:px-8 md:px-16 py-6 sm:py-12 font-sans">
      <div className="max-w-4xl mx-auto text-center space-y-6 ">
       {/* Badge */}
        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-[#F8F6F6] text-[#472816] text-xs sm:text-sm font-medium rounded-full shadow-sm">
          What is MySkin?
        </div>
        <p className="text-sm sm:text-xl text-chocolate opacity-90 mb-6 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          MySkin app will streamline acne solutions by connecting people to
          niche skincare communities and providing educational resources needed
          to close knowledge gaps that often prolong the acne struggle.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
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
            <div key={i} className="bg-sage p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg">
              <div className="text-md sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-3">{feature.icon}</div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#472816] mb-1 sm:mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-lightgray opacity-75 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-[#F8F6F6] text-[#472816] text-xs sm:text-sm font-medium rounded-full shadow-sm md-4 sm:mb-8">
          📱 Try the App Now
        </div>
        <div className=" flex items-center justify-center">
        <DotsMobileStepper />
      </div> 
      </div>
    </div>
  );
};

export default WhatIsMySkin;
