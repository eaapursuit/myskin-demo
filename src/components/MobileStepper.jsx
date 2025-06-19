import React, { useState } from "react";
import { useTheme } from "@mui/material/styles"
import { MobileStepper, Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export default function DotsMobileStepper({ activeStep,setActiveStep, steps }) {
  const theme = useTheme();
const lastIndex = steps - 1  
    
  const handleNext = () => {
    if(activeStep === lastIndex) {
      //go back to the start of the What is MySkinPage
      setActiveStep(0);

    } else {
      setActiveStep(activeStep + 1)
    }
  }
const handleBack = () => {
  if(activeStep === 0) {
    setActiveStep(-1)
  } else {
    setActiveStep(activeStep - 1)
  }
}

  return (
    <MobileStepper
    variant="dots"
    steps={steps}
    position="static"
    activeStep={activeStep}
    sx={{ maxWidth: 400, flexGrow: 1 }}
    nextButton={
        <Button size="small" onClick={handleNext}>
          {activeStep === lastIndex ? 'Done' : 'Next'}
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeftIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRightIcon />
          ) : (
            <KeyboardArrowLeftIcon />
          )}
          Back
        </Button>
      } />
  )
}
