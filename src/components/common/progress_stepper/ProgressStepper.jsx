import React, { useState } from "react";
import { Stepper, Step, StepLabel, Typography, Box } from "@mui/material";
import CustomButton from "../custom_button/CustomButton";

const ProgressStepper = ({ steps, stepDescription }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = steps.length;
  const completedSteps = Object.keys(completed).length;
  const allStepsCompleted = completedSteps === totalSteps;

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={step} completed={completed[index]}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>All Steps Completed</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <CustomButton variant="contained" onClick={handleReset}>
                Reset
              </CustomButton>
            </Box>
          </>
        ) : (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {stepDescription[activeStep]}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <CustomButton
                onClick={handleBack}
                variant="contained"
                disabled={activeStep === 0}
                sx={{ mr: 1 }}
              >
                Back
              </CustomButton>
              <Box sx={{ żflex: "1 1 auto" }} />
              <CustomButton onClick={handleNext} variant="contained">
                {completedSteps === totalSteps - 1 ? "Finish" : "Next"}
              </CustomButton>
            </Box>
          </>
        )}
      </div>
    </Box>
  );
};

export default ProgressStepper;
