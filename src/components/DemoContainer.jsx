import React, { useState } from "react";
import WhatIsMySkin from "./WhatIsMySkin";
import signupMockup from "../assets/MySkinSignUpPage.png";
import quizIntro from "../assets/MySkinQuizIntro.png";
import uploadPhoto from "../assets/MySkinUploadPhoto.png";
import uploadModal from "../assets/MySkinUploadPhotoModal.png";
import skinTypeConcerns from "../assets/MySkinTypeConcerns.png";
import skinGoalsIngredients from "../assets/MySkinGoalsConcerns.png";
import skinGoalsComplete from "../assets/MySkinGoalsConcernsDone.png";
import welcome from "../assets/MySkinFinishQuiz.png";
import profile from "../assets/MySkinProfile.png";
import communities from "../assets/MySkinCommunities.png";
import feed from "../assets/MySkinFeed.png";
import DotsMobileStepper from "./MobileStepper";

export default function DemoContainer({ onExit }) {
  const [demoIndex, setDemoIndex] = useState(0);

  // Debug logging
  console.log("=== DemoContainer Debug ===");
  // console.log("activeStep from parent:", activeStep);
  console.log("calculated demoIndex:", demoIndex);

  const demoPages = [
    //what we currently have in  "WhatIsMySkin"

    //1. SignUp Page
    <div
      key={"signup"}
      className="min-h-screen flex items-center justify-center p-4 bg-cream"
    >
      <div className="max-w-sm mx-auto">
        <img
          src={signupMockup}
          alt="MySkin iPhone Login + SignUp"
          className="w-full h-auto rounded-2xl"
        />
        <p className="text-center  text-sm text-gray-600">Page 1: Sign Up</p>
      </div>
    </div>,

    //2. Quiz Intro
    <div
      key={"quiz-intro"}
      className="min-h-screen flex items-center p-4 justify-center "
    >
      <div className=" max-w-sm mx-auto">
        <img
          src={quizIntro}
          alt="MySkin Quiz Intro"
          className="w-full h-auto rounded-2xl"
        />
      </div>
    </div>,

    //3. Upload photo
    <div
      key={"upload-photo"}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="max-w-sm mx-auto">
        <img
          src={uploadPhoto}
          alt="MySkin iPhone Photo Upload"
          className="w-full h-auto rounded-2xl"
        />
      </div>
    </div>,

    //demo mockup of the upload photo-modal
    <div key={"upload-photo-modal"} className="text-center p-8">
      <img src={uploadModal} alt="MySkin iPhone Login + SignUp" />
    </div>,

    //demo mockup of the skin type and concerns page
    <div key={"skin-type-concerns"} className="text-center p-8">
      <img src={skinTypeConcerns} alt="MySkin iPhone Login + SignUp" />
    </div>,

    //demo mockup of the skin goals showinfg the seach bar and ingredient list
    <div key={"skin-goals-ingredients"} className="text-center p-8">
      <img src={skinGoalsIngredients} alt="MySkin iPhone Login + SignUp" />
    </div>,

    //demo mockup of the completed skin goals and concerns page
    <div key={"skin-gc-complete"} className="text-center p-8">
      <img src={skinGoalsComplete} alt="MySkin iPhone Login + SignUp" />
    </div>,

    //demo mockup of welcome landing page showing the different navigations to go to
    <div key={"welcome"} className="text-center p-8">
      <img src={welcome} alt="MySkin iPhone Login + SignUp" />
    </div>,

    //demo mockup of profile showing followers and a recap of the skin type and goals
    <div key={"profile"} className="text-center p-8">
      <img src={profile} alt="MySkin iPhone Login + SignUp" />
    </div>,

    //demo mockup of different communities to join
    <div key={"communities"} className="text-center p-8">
      <img src={communities} alt="MySkin iPhone Login + SignUp" />
    </div>,

    // final page showing your feed and the deffirent posts based on your matching goals and concerns as well as ingredient lists
    <div key={"feed"} className="text-center p-8">
      <img src={feed} alt="MySkin feed" />
      <button
        className="px-4 py-2 bg-cream text-white rounded"
        onClick={() => setActiveStep(0)}
      >
        Done
      </button>
    </div>,
  ];

  console.log("demoPages.length:", demoPages.length);
  console.log(
    "demoIndex valid?",
    demoIndex >= 0 && demoIndex < demoPages.length
  );

  const lastIndex = demoPages.length - 1;

  // if (demoIndex < 0) {
  //   console.log('❌ demoIndex is negative, going back to WhatIsMySkin');
  //   setActiveStep(0);
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-cream">
  //       <p className="text-[#472816]">Redirecting to home...</p>
  //     </div>
  //   );
  // }

  // if (demoIndex >= demoPages.length) {
  //   console.log('❌ demoIndex out of bounds, resetting to first demo');
  //   setActiveStep(1);
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-cream">
  //       <p className="text-[#472816]">Redirecting to first demo...</p>
  //     </div>
  //   );
  // }

  console.log("✅ Rendering demo page at index:", demoIndex);

  return (
    <div className="w-full relative min-h-screen">
      {demoPages[demoIndex]}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <DotsMobileStepper
          activeStep={demoIndex}
          setActiveStep={(newIndex) => {
            if (newIndex > lastIndex) {
              onExit();
            } else if (newIndex < 0) {
              setDemoIndex(0);
            } else {
              setDemoIndex(newIndex);
            }
          }}
          steps={demoPages.length}
        />
      </div>
    </div>
  );
}
