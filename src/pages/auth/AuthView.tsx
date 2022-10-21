import React from "react";

import { Box, TextField, Button } from "@mui/material";
import {} from "@mui/icons-material";

import classes from "./AuthView.module.scss";
import { Link } from "react-router-dom";

const AuthView: React.FC = () => {
  return (
    <>
      <Box className={classes.background}>
        <Box className={classes.cont}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "50%",
                background: "rgba(48, 48, 48, 0.87)",
                borderRadius: "6px",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "grey",
                },
                "&:hover fieldset": {
                  borderColor: "gray",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },

              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="email" type="email" label="Email" />
            <TextField id="password" type="password" label="Password" />
            <Button
              sx={{
                color: "white",
                backgroundColor: "red !important",
                zIndex: 1,
                width: "50%",
                mt: "5%",
              }}
            >
              <h4>Zaloguj się</h4>
            </Button>
            <Box className={classes.loginSignup}>
              <p>Nie nasz jeszcze konta ? &nbsp; <Link to="/auth">Zarejestruj się</Link></p>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AuthView;
