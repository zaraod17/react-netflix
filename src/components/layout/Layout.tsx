import React, { PropsWithChildren } from "react";
import { Grid, Box } from "@mui/material";

import MainHeader from "./MainHeader";

const Layout: React.FC<PropsWithChildren> = (props) => {
  return (
    <React.Fragment>
      <MainHeader />
      {/* <Box
        sx={{
          flexGrow: 1,
          marginInline: "1rem",
          position: "relative",
        }}
      > */}
      <React.Fragment>{props.children}</React.Fragment>
      {/* </Box> */}
    </React.Fragment>
  );
};

export default Layout;
