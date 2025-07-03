import React, { useState } from "react";
import DotsMobileStepper from "./MobileStepper";

function WhatIsMySkin({ onTryApp }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-2 xxs:px-3 xs:px-4 bg-cream font-sans">
      <div className="max-w-4xl mx-auto text-center space-y-2 xxs:space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center px-2 py-0.5 text-[9px] xxs:px-2 xxs:py-1 xxs:text-[10px] xs:px-3 xs:py-1.5 xs:text-xs sm:px-4 sm:py-2 sm:text-sm bg-[#F8F6F6] text-[#472816] font-medium rounded-full shadow-sm">
          What is MySkin?
        </div>
        
        {/* Main description - much smaller on mobile */}
        <p className="text-[9px] xxs:text-[10px] xs:text-xs sm:text-xl text-chocolate opacity-90 max-w-2xl mx-auto leading-snug">
          MySkin app will streamline acne solutions by connecting people to
          niche skincare communities and providing educational resources needed
          to close knowledge gaps that often prolong the acne struggle.
        </p>
        
        {/* Feature grid - compact for mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 xxs:gap-2 xs:gap-3 sm:gap-6">
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
            <div
              key={i}
              className="bg-sage p-2 xxs:p-2 xs:p-3 sm:p-6 md:p-8 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg"
            >
              <div className="text-sm xxs:text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-1 xs:mb-2 sm:mb-3">
                {feature.icon}
              </div>
              <h3 className="text-[9px] xxs:text-[10px] xs:text-xs sm:text-lg md:text-xl lg:text-2xl font-bold text-[#472816] mb-1 sm:mb-2">
                {feature.title}
              </h3>
              <p className="text-[8px] xxs:text-[9px] xs:text-[10px] sm:text-sm lg:text-base text-lightgray opacity-75 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
        
        {/* Button - smaller on mobile */}
        <button
          className="inline-flex items-center px-2 py-1 xxs:px-2 xxs:py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 bg-[#F8F6F6] text-[#472816] text-[9px] xxs:text-[10px] xs:text-xs sm:text-sm font-medium rounded-full shadow-sm"
          onClick={onTryApp}
        >
          📱 Try the App Now
        </button>
      </div>
    </div>
  );
}

export default WhatIsMySkin;