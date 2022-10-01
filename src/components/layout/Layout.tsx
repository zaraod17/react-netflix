import React, { PropsWithChildren } from "react";

import MainHeader from "./MainHeader";

const Layout: React.FC<PropsWithChildren> = (props) => {
  return (
    <React.Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
