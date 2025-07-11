import React from "react";

const VisionStatement = () => {
  return (
    <div className="min-h-screen flex items-center bg-[#aa663c] justify-center px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-16">
          <div className="inline-flex items-center px-2 py-1 sm:px-4 sm:py-2 bg-[#FCE4D8] text-[#472816] text-[10px] sm:text-sm font-medium rounded-full shadow-sm mb-4 md:mb-8">
            Our Values
          </div>
          <h3 className="text-sm sm:text-lg md:text-2xl font-bold text-[#F8F6F6] mb-4 sm:mb-6 font-sans px-2">
            MySkin is built on the belief that the journey to clear skin should not be walked alone. We are committed to:
          </h3>
        </div>
        
        <div className="grid grid-cols-3 gap-2 md:gap-8 max-w-4xl mb-4 md:mb-8 mx-auto">
          {[
            { 
              title: "Education", 
              desc: "Educating users with expert-backed insights, ensuring they have the resources to make informed skincare choices.",
              color: "#FCE4D8"
            },
            { 
              title: "Community", 
              desc: "Fostering community by connecting people with similar skin concerns, so no one feels alone in their journey",
              color: "#B2B379"
            },
            { 
              title: "Personalization", 
              desc: "Providing personalized solutions that cater to unique skin needs, helping users discover what works for them",
              color: "#A68671"
            },
          ].map((value, i) => (
            <div key={i} className="group"> 
              <div className="flex flex-col h-full bg-[#0A0A06] p-3 md:p-8 rounded-lg md:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#A68671]/20 hover:border-[#A68671]/40">
                <div 
                  className="w-8 h-8 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-2 md:mb-6 mx-auto"
                  style={{ backgroundColor: value.color }}
                >
                </div>
                <h3 className="text-[10px] md:text-xl font-bold text-[#F8F6F6] mb-1 md:mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-[#F8F6F6] text-[9px] md:text-sm opacity-75 text-center leading-tight md:leading-relaxed">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-sm sm:text-lg md:text-2xl font-bold text-[#F8F6F6] px-2">
          Through these pillars, MySkin is redefining acne care—because everyone deserves to feel confident in their skin.
        </h3>
      </div>
    </div>
  );
};

export default VisionStatement;