import React from "react";

const MissionStatement = () => {
  return (
    <div className="bg-chocolate h-full flex items-center justify-center px-16 ">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#FCE4D8] text-[#472816] font-medium rounded-full shadow-sm mb-8 font-sans">
                Our Mission
              </div>
              <div className="bg-[#F8F6F6] rounded-3xl p-12 shadow-2xl">
                <p className=" text-[#472816] leading-relaxed font-medium font-sans sm:text-sm">
                  "At MySkin, our mission is to streamline acne solutions by empowering individuals with the knowledge, community, 
                  and tools they need to make informed skincare decisions. We believe that access to accurate, 
                  science-backed information—paired with a supportive community—can transform the way people manage their skin"
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
