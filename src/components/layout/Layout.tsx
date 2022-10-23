import React, { PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";

import MainHeader from "./MainHeader";

const Layout: React.FC<PropsWithChildren> = (props) => {
  const location = useLocation();

  let isAuth = location.pathname === "movies" || location.pathname === "series";

  return (
    <React.Fragment>
      {<MainHeader />}
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
