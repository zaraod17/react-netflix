import { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import { PlayArrow, Info } from "@mui/icons-material";

import "./ShowBanner.scss";
import ShowInfo from "../ShowInfo";

const ShowBanner: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Box position="relative">
      <img
        style={{ width: "100%", height: "90vh", position: "relative" }}
        src="https://cdn.mos.cms.futurecdn.net/rwow8CCG3C3GrqHGiK8qcJ-1200-80.jpg"
        alt="banner"
      />

      <Grid className="info" container rowSpacing={3}>
        <Grid className="grid-item" item xs={12}>
          <h3>Title</h3>
        </Grid>
        <Grid className="grid-item" item xs={12}>
          <p>
            <strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              ab, odit debitis alias deleniti officia amet natus reprehenderit
              et
            </strong>
          </p>
        </Grid>
        <Grid className="grid-item" item sm={12} md={6}>
          <Button
            sx={{
              color: "black",
              backgroundColor: "white !important",
              zIndex: 1,
            }}
            startIcon={<PlayArrow />}
          >
            <h4>Odtwórz</h4>
          </Button>
        </Grid>
        <Grid
          className="grid-item"
          justifyContent="flex-end !important"
          item
          md={6}
          sm={12}
        >
          <Button
            sx={{
              color: "black",
              backgroundColor: "white !important",
              zIndex: 1,
            }}
            onClick={openModal}
            startIcon={<Info />}
          >
            <h4>Info</h4>
          </Button>
        </Grid>
      </Grid>

      <div className="gradient"></div>
      <ShowInfo handleClose={closeModal} isOpen={open} />
    </Box>
  );
};

export default ShowBanner;
