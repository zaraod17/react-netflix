import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Grid, TextField } from "@mui/material";

import classes from "./LandingView.module.scss";

const LandingView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box className={classes.banner}>
      <Box className={classes.backdrop}>
        <Box className={classes.header}>
          <h1>Reactflix</h1>
          <Button onClick={() => navigate("/auth")}>
            <strong>Zaloguj się</strong>
          </Button>
        </Box>
        <Box className={classes.info}>
          <Grid
            container
            rowSpacing={1}
            sx={{
              marginInline: "25vw",
            }}
          >
            <Grid item xs={12}>
              <h1>
                Nieograniczona oferta filmów, seriali, programów i nie tylko.
              </h1>
            </Grid>
            <Grid item xs={12}>
              <h2>Oglądaj wszędzie. Anuluj w każdej chwili.</h2>
            </Grid>
            <Grid item xs={12}>
              <h3>
                Zaczynamy oglądać? Wprowadź adres e-mail, aby utworzyć lub
                odnowić konto.
              </h3>
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="email"
                type="email"
                label="Adres e-mail"
                variant="filled"
                sx={{
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "0",
                }}
              />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "red",

                }}
              >
                Rozpocznij
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingView;
