import React from "react";

const MissionStatement = () => {
  return (
    <div className="bg-tan h-full flex items-center justify-center px-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#FCE4D8] text-[#472816] text-sm font-medium rounded-full shadow-sm mb-8">
                Our Mission
              </div>
              <h2 className="text-5xl font-bold text-[#F8F6F6] mb-8">
                "Captivating Attention grabber"
              </h2>
              <div className="bg-[#F8F6F6] rounded-3xl p-12 shadow-2xl">
                <p className="text-2xl text-[#472816] leading-relaxed font-medium">
                  "Mission statement goes here."
                </p>
                <div className="mt-8 flex justify-center">
                  <div className="w-16 h-1 bg-[#A68671] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
  );
};

export default MissionStatement;
