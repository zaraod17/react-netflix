import React from "react";
import { Grid, Box, IconButton } from "@mui/material";

import classes from "./MyList.module.scss";

import { Link } from "react-router-dom";
import { PlayArrow, Remove, Info } from "@mui/icons-material";
import ShowInfo from "../../components/show/info/ShowInfo";
import ActionTooltip from "../../components/ui/ActionTooltip";

const MyListView: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        marginInline: "1rem",
      }}
    >
      <Grid
        container
        paddingX={5}
        marginTop="1rem"
        columnSpacing={2}
        rowSpacing={5}
        position="relative"
      >
        {Array.from({ length: 24 }).map((item, index) => (
          <Grid
            key={index}
            item
            xs={4}
            sm={3}
            md={3}
            lg={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box className={classes.item}>
              <Link className={classes.link} to="/my-list">
                <img
                  src="https://cdn.mos.cms.futurecdn.net/rwow8CCG3C3GrqHGiK8qcJ-1200-80.jpg"
                  alt="show image"
                />
                <Box
                  className={classes.actions}
                  sx={{
                    display: "block",
                    width: "100%",
                    position: "absolute",
                    height: "35%",
                    bottom: "0",
                    borderRadius: "0 0 14px 14px",
                    objectFit: "cover",
                    color: "white",
                    backgroundColor: "rgba(177, 168, 168, 0.3)",
                  }}
                >
                  <h5
                    style={{
                      textAlign: "center",
                      marginBottom: "1%",
                      marginTop: "2%",
                    }}
                  >
                    Title
                  </h5>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      flexGrow: 1,
                      marginInline: "0.5vw",
                      color: "white",
                    }}
                  >
                    <ActionTooltip title="Odtwarzaj">
                      <IconButton sx={{ color: "white" }}>
                        <PlayArrow />
                      </IconButton>
                    </ActionTooltip>
                    <ActionTooltip title="Usuń z listy">
                      <IconButton sx={{ color: "white" }}>
                        <Remove />
                      </IconButton>
                    </ActionTooltip>
                    <ActionTooltip title="Pokaż info">
                      <IconButton sx={{ color: "white" }} onClick={openModal}>
                        <Info />
                      </IconButton>
                    </ActionTooltip>
                  </Box>
                </Box>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
      <ShowInfo isOpen={open} handleClose={closeModal} />
    </Box>
  );
};

export default MyListView;
