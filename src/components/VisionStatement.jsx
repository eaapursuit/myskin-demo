import React from "react";

const ValueStatement = () => {
  return (
    <div className="h-full flex items-center bg-[#aa663c] justify-center px-16 font-sans">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-[#FCE4D8] text-[#472816] text-sm font-medium rounded-full shadow-sm mb-8">
                  Our Values
                </div>
                <h3 className="text-2xl font-bold text-[#F8F6F6] mb-6 font-sans">
MySkin is built on the belief that the journey to clear skin should not be walked alone. We are committed to:
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
                    <div className="bg-[#0A0A06] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#A68671]/20 hover:border-[#A68671]/40">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6 mx-auto"
                        style={{ backgroundColor: value.color }}
                      >
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold text-[#F8F6F6] mb-4 text-center">
                        {value.title}
                      </h3>
                      <p className="text-[#F8F6F6] opacity-75 text-center leading-relaxed">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-[#F8F6F6] mb-6">
Through these pillars, MySkin is redefining acne care—because everyone deserves to feel confident in their skin.
                </h3>
            </div>
          </div>
  );
};

export default ValueStatement;
