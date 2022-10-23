import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Grid, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import ActionTooltip from "../../components/ui/ActionTooltip";


const SeriesDetailsView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Grid container rowSpacing={5}>
      <Grid item xs={12}>
        <ActionTooltip title="Wróć">
          <IconButton
            onClick={() => navigate(-1)}
            size="large"
            sx={{ color: "white", marginLeft: "3vw", marginTop: "3vh" }}
          >
            <ArrowBack sx={{ fontSize: "4vw" }} />
          </IconButton>
        </ActionTooltip>
      </Grid>
      <Grid item xs={12}>
        <h2 style={{ textAlign: "center" }}>Show title</h2>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            paddingInline: "2%",
          }}
        >
          <iframe
            style={{
              width: "100%",
              height: "70vh",
            }}
            src="https://www.youtube.com/embed/HyWYpM_S-2c"
            frameBorder="0"
            title="show"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box sx={{ paddingInline: "5%" }}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            voluptatem magni eaque blanditiis sint sunt molestias quam debitis
            ad, laboriosam, assumenda, officiis nam dolores accusamus! Quibusdam
            quasi dicta quo autem?
          </p>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SeriesDetailsView;
