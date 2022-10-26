import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button } from "@mui/material";

import classes from "./LandingView.module.scss";

const LandingView: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box className={classes.banner}>
      <Box className={classes.backdrop}>
        <Box className={classes.header}>
          <h1>Reactflix</h1>
          <Button onClick={() => navigate('/auth')}>
            <strong>Zaloguj się</strong>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingView;
