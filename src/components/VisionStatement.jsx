import React from "react";

const ValueStatement = () => {
  return (
    <div className="min-h-screen flex items-center bg-[#aa663c] justify-center px-4 font-sans">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 md:mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-[#FCE4D8] text-[#472816] text-sm font-medium rounded-full shadow-sm mb-6 md:mb-8">
                  Our Values
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-[#F8F6F6] mb-6 font-sans px-2">
MySkin is built on the belief that the journey to clear skin should not be walked alone. We are committed to:
                </h3>
              </div>
              
              <div className="grid grid-cols-3 gap-2 md:gap-8 max-w-4xl mb-6 md:mb-8 mx-auto">
                {[
                  { 
                    // icon: "🔬", 
                    title: "Education", 
                    desc: "Educating users with expert-backed insights, ensuring they have the resources to make informed skincare choices.",
                    color: "#FCE4D8"
                  },
                  { 
                    // icon: "🤝", 
                    title: "Community", 
                    desc: "Fostering community by connecting people with similar skin concerns, so no one feels alone in their journey",
                    color: "#B2B379"
                  },
                  { 
                    // icon: "🌱", 
                    title: "Personalization", 
                    desc: "Providing personalized solutions that cater to unique skin needs, helping users discover what works for them",
                    color: "#A68671"
                  },
                  
                ].map((value, i) => (
                  <div key={i} className="group">
                    <div className="flex flex-col h-full bg-[#0A0A06] p-3 md:p-8 rounded-lg md:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#A68671]/20 hover:border-[#A68671]/40">
                      <div 
                        className="w-8 h-8 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 md:mb-6 mx-auto"
                        style={{ backgroundColor: value.color }}
                      >
                        {value.icon}
                      </div>
                      <h3 className="text-xs md:text-xl font-bold text-[#F8F6F6] mb-2 md:mb-4 text-center">
                        {value.title}
                      </h3>
                      <p className="text-[#F8F6F6] text-xs opacity-75 text-center leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-[#F8F6F6] px-2">
Through these pillars, MySkin is redefining acne care—because everyone deserves to feel confident in their skin.
                </h3>
            </div>
          </div>
  );
};

export default ValueStatement;
