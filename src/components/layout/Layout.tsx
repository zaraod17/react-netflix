import React, { PropsWithChildren } from "react";
import { Grid, Box } from "@mui/material";

import MainHeader from "./MainHeader";

const Layout: React.FC<PropsWithChildren> = (props) => {
  return (
    <React.Fragment>
      <MainHeader />
      <Box sx={{ flexGrow: 1, marginTop: "1rem"}}>
        <Grid container rowSpacing={4}>
          {props.children}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Layout;
