import React, { useState } from "react";

export default function SimpleDemoTest({ activeStep, setActiveStep }) {
  const demoIndex = activeStep - 1;

  const demoPages = [
    <div key="page1" className="min-h-screen flex items-center justify-center bg-red-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">PAGE 1</h1>
        <p>This is the first demo page</p>
      </div>
    </div>,
    
    <div key="page2" className="min-h-screen flex items-center justify-center bg-blue-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">PAGE 2</h1>
        <p>This is the second demo page</p>
      </div>
    </div>,
    
    <div key="page3" className="min-h-screen flex items-center justify-center bg-green-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">PAGE 3</h1>
        <p>This is the third demo page</p>
      </div>
    </div>,
  ];

  console.log('SimpleDemoTest - activeStep:', activeStep, 'demoIndex:', demoIndex);

  if (demoIndex < 0 || demoIndex >= demoPages.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <p>Invalid page index: {demoIndex}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {demoPages[demoIndex]}
      
      {/* Simple navigation buttons instead of your stepper */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-white p-4 rounded-lg shadow-lg">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => {
              console.log('Back clicked, current activeStep:', activeStep);
              if (activeStep > 1) {
                setActiveStep(activeStep - 1);
              } else {
                setActiveStep(0); // Go back to WhatIsMySkin
              }
            }}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Back
          </button>
          
          <span className="text-sm">
            Page {demoIndex + 1} of {demoPages.length}
          </span>
          
          <button
            onClick={() => {
              console.log('Next clicked, current activeStep:', activeStep);
              if (demoIndex < demoPages.length - 1) {
                setActiveStep(activeStep + 1);
              } else {
                setActiveStep(0); // Go back to WhatIsMySkin when done
              }
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {demoIndex < demoPages.length - 1 ? 'Next' : 'Done'}
          </button>
        </div>
      </div>
    </div>
  );
}