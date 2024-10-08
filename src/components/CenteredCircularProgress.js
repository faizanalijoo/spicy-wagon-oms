import React from "react";
import { CircularProgress, Box } from "@mui/material";

const CenteredCircularProgress = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // This makes the Box take up the full viewport height
      }}
    //   sx={{
    //     position: 'fixed',
    //     top: 0,
    //     left: 0,
    //     width: '100%',
    //     height: '100%',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     zIndex: 9999,
    //     '&::before': {
    //       content: '""',
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%',
    //       height: '100%',
    //       backgroundColor: 'rgba(255, 255, 255, 0.7)',
    //       backdropFilter: 'blur(5px)',
    //     },
    //   }}
    >
      <CircularProgress />
    </Box>
  );
};

export default CenteredCircularProgress;
