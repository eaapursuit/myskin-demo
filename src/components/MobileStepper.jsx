import React from "react";
import { useTheme } from "@mui/material/styles"
import { MobileStepper } from "@mui/material";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyBoardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyBoardArrowRight'

export default function DotsMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }
    
  return (
    <MobileStepper
    variant="dots"
    steps={6}
    position="static"
    activeStep={activeStep}
    sx={{ maxWidth: 400, flexGrow: 1 }}
    nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeftIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
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
