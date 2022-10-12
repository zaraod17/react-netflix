import React from "react";
import { Box, Grid } from "@mui/material";

import ShowBanner from "../../components/show/banner/ShowBanner";
import ShowCarousel from "../../components/show/slider/ShowCarousel";

const MoviesView: React.FC = () => {
  return (
    <>
      <ShowBanner />
      <Box sx={{
        marginInline: "1rem",
        position: "relative",
        marginTop: "-27vh",
        zIndex: 3
      }}>
        <Grid container rowSpacing={10}>
          <ShowCarousel />
          <ShowCarousel />
        </Grid>
      </Box>
    </>
  );
};

export default MoviesView;
