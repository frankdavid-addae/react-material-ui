import React, { useState } from "react";
import CustomCard from "../../components/common/custom_card/CustomCard";
import CustomSnackbar from "../../components/common/custom_snackbar/custom_snackbar";
import GridWrapper from "../../components/common/grid_wrapper/GridWrapper";
import UserTable from "../../components/user_table/UserTable";

const Storage = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <GridWrapper>
      <CustomCard 
          content={<UserTable onError={() => setOpen(true)} />}
        />
        <CustomSnackbar
          open={open}
          severity="error"
          message="Data couldn't be fetched"
          onClose={handleClose}
        />
    </GridWrapper>
  );
};

export default Storage;
