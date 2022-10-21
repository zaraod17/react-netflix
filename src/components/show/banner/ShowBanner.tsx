import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Box, Grid, Button } from "@mui/material";
import { PlayArrow, Info } from "@mui/icons-material";

import "./ShowBanner.scss";
import ShowInfo from "../info/ShowInfo";

const ShowBanner: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
        <Grid className="grid-item" item xs={6} sm={6} md={6}>
          <Button
            sx={{
              color: "black",
              backgroundColor: "white !important",
              zIndex: 1,
            }}
            startIcon={<PlayArrow />}
            onClick={() =>
              location.pathname === "/movies"
                ? navigate("/movies/id")
                : navigate("/series/id")
            }
          >
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                },
              }}
            >
              <h4>Odtwórz</h4>
            </Box>
          </Button>
        </Grid>
        <Grid className="grid-item" item xs={6} sm={6} md={6}>
          <Button
            sx={{
              color: "black",
              backgroundColor: "white !important",
              zIndex: 1,
            }}
            onClick={openModal}
            startIcon={<Info />}
          >
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                },
              }}
            >
              <h4>Info</h4>
            </Box>
          </Button>
        </Grid>
      </Grid>

      <div className="gradient"></div>
      <ShowInfo handleClose={closeModal} isOpen={open} />
    </Box>
  );
};

export default ShowBanner;
