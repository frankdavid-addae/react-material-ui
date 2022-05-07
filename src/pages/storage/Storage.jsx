import React, { useState } from "react";
import CustomButton from "../../components/common/custom_button/CustomButton";
import CustomSnackbar from "../../components/common/custom_snackbar/custom_snackbar";
import GridWrapper from "../../components/common/grid_wrapper/GridWrapper";

const Storage = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <GridWrapper>
      <CustomButton variant="contained" onClick={handleClick}>
        Open success snackbar
      </CustomButton>
      <CustomSnackbar
        open={open}
        onClose={handleClose}
        severity="error"
        message="Error message"
      />
    </GridWrapper>
  );
};

export default Storage;
