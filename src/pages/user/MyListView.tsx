import React from "react";

import "./MyList.scss";

import { Grid, Box } from "@mui/material";

const MyListView: React.FC = () => {
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
            <Box className="list-item">
              <img
                src="https://cdn.mos.cms.futurecdn.net/rwow8CCG3C3GrqHGiK8qcJ-1200-80.jpg"
                alt="show image"
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyListView;
