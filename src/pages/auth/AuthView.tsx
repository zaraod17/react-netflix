import React from "react";

import { Box, TextField, Button, InputAdornment } from "@mui/material";

import classes from "./AuthView.module.scss";
import { Link } from "react-router-dom";
import { AlternateEmail, Key } from "@mui/icons-material";

const AuthView: React.FC = () => {
  return (
    <>
      <Box className={classes.background}>
        <Box className={classes.backdrop}>
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
              <TextField
                id="email"
                type="email"
                placeholder="Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment sx={{ color: "white" }} position="start">
                      <AlternateEmail />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                id="password"
                type="password"
                placeholder="Hasło"
                InputProps={{
                  startAdornment: (
                    <InputAdornment sx={{ color: "white" }} position="start">
                      <Key />
                    </InputAdornment>
                  ),
                }}
              />
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
                <p>
                  Nie nasz jeszcze konta? &nbsp;
                  <Link to="/auth/register">Zarejestruj się</Link>
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AuthView;
