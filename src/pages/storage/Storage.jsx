import React, { useState, useEffect } from "react";
import CustomButton from "../../components/common/custom_button/CustomButton";
import CustomSnackbar from "../../components/common/custom_snackbar/custom_snackbar";
import GridWrapper from "../../components/common/grid_wrapper/GridWrapper";
import Loading from "../../components/common/loading/Loading";

const Storage = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <GridWrapper>
      {loading ? (
        <Loading>
          <CustomButton variant="contained" onClick={handleClick}>
            Open success snackbar
          </CustomButton>
        </Loading>
      ) : (
        <CustomButton variant="contained" onClick={handleClick}>
          Open success snackbar
        </CustomButton>
      )}
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
