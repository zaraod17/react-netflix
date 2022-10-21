import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Box, IconButton } from "@mui/material";
import { PlayArrow, Add, Info } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ShowInfo from "../info/ShowInfo";
import ActionTooltip from "../../ui/ActionTooltip";

const ShowCaptions: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState<boolean>(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        className="slider-captions"
        sx={{
          display: "block",
          position: "absolute",
          width: "100%",
          height: "35%",
          bottom: "0",
          borderRadius: "0 0 14px 14px",
          objectFit: "cover",
          color: "white",
          backgroundColor: "rgba(177, 168, 168, 0.3)",
        }}
      >
        <h5 style={{ marginBottom: "1%", marginTop: "2%" }}>Title</h5>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexGrow: 1,
            marginInline: "0.5vw",
          }}
        >
          <ActionTooltip title="Odtwarzaj">
            <IconButton
              onClick={() =>
                location.pathname === "/movies"
                  ? navigate("/movies/id")
                  : navigate("/series/id")
              }
            >
              <PlayArrow />
            </IconButton>
          </ActionTooltip>
          <ActionTooltip title="Dodaj do listy">
            <IconButton>
              <Add />
            </IconButton>
          </ActionTooltip>
          <ActionTooltip title="Pokaż info">
            <IconButton onClick={openModal}>
              <Info />
            </IconButton>
          </ActionTooltip>
        </Box>
      </Box>
      <ShowInfo isOpen={open} handleClose={closeModal} />
    </ThemeProvider>
  );
};

export default ShowCaptions;
