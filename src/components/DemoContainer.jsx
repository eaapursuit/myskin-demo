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

export default function DemoContainer({ activeStep, setActiveStep }) {
  const demoIndex = activeStep;

  const demoPages = [
    //what we currently have in  "WhatIsMySkin"

    //first demo mockup of the login sign up page
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
      </div>
    </div>,
    //demo mockup of lets start the quiz page
    <div key={"quiz-intro"} className="text-center p-8">
      <img src={quizIntro} alt="MySkin Quiz Intro" />
    </div>,
    //demo mockup of uploading a photo
    <div key={"upload-photo"} className="text-center p-8">
      <img src={uploadPhoto} alt="MySkin iPhone Photo Upload" />
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

  if (demoIndex < 0 || demoIndex >= demoPages.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="text-[#472816] mb-4">Something went wrong with the demo.</p>
          <button
            className="px-4 py-2 bg-[#472816] text-white rounded-full"
            onClick={() => setActiveStep(0)}
          >
            Go Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {demoPages[demoIndex]}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10">
      <DotsMobileStepper
        activeStep={demoIndex}
        setActiveStep={setActiveStep}
        steps={demoPages.length}
      />
      </div>
    </div>
  );
}
