import { Alert, Snackbar } from "@mui/material";
import React from "react";

function CustomSnacbar({ handleClose, snackBarOpen, errorMessage }) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={snackBarOpen}
      autoHideDuration={3000}
      onClose={handleClose}>
      <Alert
        variant="filled"
        severity="error"
        className="alert"
        onClose={handleClose}>
        {errorMessage}
      </Alert>
    </Snackbar>
  );
}

export default CustomSnacbar;
