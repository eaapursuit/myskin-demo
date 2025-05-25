import React from "react";

const Application = () => {
  return (
    <div className="h-full flex items-center justify-center bg-cream  px-16">
            <div className="max-w-4xl mx-auto text-center ">
              <div className="inline-flex items-center px-4 py-2 bg-[#F8F6F6] text-[#472816] text-sm font-medium rounded-full shadow-sm mb-8">
                📱 Our Application
              </div>
              <h2 className="text-5xl font-bold text-chocolate mb-6">
                Experience the Future
              </h2>
              <p className="text-xl text-chocolate opacity-90 mb-12 max-w-2xl mx-auto">
                Our cutting-edge application brings professional skincare analysis to your fingertips
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: "🔍", title: "Skin Analysis", desc: "Advanced AI scanning" },
                  { icon: "💡", title: "Smart Recommendations", desc: "Personalized suggestions" },
                  { icon: "📊", title: "Progress Tracking", desc: "Monitor your journey" }
                ].map((feature, i) => (
                  <div key={i} className="bg-sage p-8 rounded-2xl shadow-lg">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-[#472816] mb-3">{feature.title}</h3>
                    <p className="text-lightgray opacity-75">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
  );
};

export default Application;
