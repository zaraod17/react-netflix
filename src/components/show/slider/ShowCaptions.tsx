import { Box, IconButton } from "@mui/material";
import { PlayArrow, Add } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const ShowCaptions: React.FC = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  const ActionTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

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
            <IconButton>
              <PlayArrow />
            </IconButton>
          </ActionTooltip>
          <ActionTooltip title="Dodaj do listy">
            <IconButton>
              <Add />
            </IconButton>
          </ActionTooltip>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ShowCaptions;
