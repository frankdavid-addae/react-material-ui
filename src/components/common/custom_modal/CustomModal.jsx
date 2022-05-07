import React from "react";
import { Box, Typography, Modal } from "@mui/material";
import { modalStyles } from "./styles";
import CustomButton from "../custom_button/CustomButton";

const CustomModal = ({ open, onClose, title, subTitle, content, onSubmit }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyles.wrapper}>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography sx={{ mt: 2 }}>{subTitle}</Typography>
        {content}
        <Box sx={modalStyles.buttons}>
          <CustomButton variant="contained" onClick={onSubmit}>
            Submit
          </CustomButton>
          <CustomButton onClick={onClose}>Cancel</CustomButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
