import { Box, Grid } from "@mui/material";

import "./ShowBanner.scss";

const ShowBanner: React.FC = () => {
  return (
    <Box position="relative">
      <img
        style={{ width: "100%", height: "90vh", position: "relative" }}
        src="https://cdn.mos.cms.futurecdn.net/rwow8CCG3C3GrqHGiK8qcJ-1200-80.jpg"
        alt="banner"
      />
      <div className="gradient"></div>
    </Box>
  );
};

export default ShowBanner;
