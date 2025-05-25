import React from "react";

const ValueStatement = () => {
  return (
    <div className="h-full flex items-center bg-chocolate justify-center px-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-[#FCE4D8] text-[#472816] text-sm font-medium rounded-full shadow-sm mb-8">
                  Our Values
                </div>
                <h2 className="text-5xl font-bold text-[#F8F6F6] mb-6">
                  What Drives Us Forward
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { 
                    // icon: "🔬", 
                    title: "Innovation", 
                    desc: "Cutting-edge technology meets beauty science",
                    color: "#FCE4D8"
                  },
                  // { 
                  //   icon: "🤝", 
                  //   title: "Trust", 
                  //   desc: "Building lasting relationships through reliability",
                  //   color: "#B2B379"
                  // },
                  // { 
                  //   icon: "🌱", 
                  //   title: "Sustainability", 
                  //   desc: "Caring for your skin and our planet",
                  //   color: "#A68671"
                  // },
                  // { 
                  //   icon: "✨", 
                  //   title: "Excellence", 
                  //   desc: "Uncompromising quality in everything we do",
                  //   color: "#FCE4D8"
                  // }
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
            </div>
          </div>
  );
};

export default ValueStatement;
