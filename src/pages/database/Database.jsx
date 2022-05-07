import React from "react";
import GridWrapper from "../../components/common/grid_wrapper/GridWrapper";
import CustomCard from "../../components/common/custom_card/CustomCard";
import ProgressStepper from "../../components/common/progress_stepper/ProgressStepper";

const steps = ["Step 1", "Step 2", "Step 3"];
const stepDescription = ["Description 1", "Description 2", "Description 3"];

const Database = () => {
  return (
    <GridWrapper>
      <CustomCard
        content={
          <ProgressStepper steps={steps} stepDescription={stepDescription} />
        }
      />
    </GridWrapper>
  );
};

export default Database;
