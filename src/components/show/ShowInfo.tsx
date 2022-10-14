import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { Add, PlayArrow } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75vw",
  bgcolor: "inherit",
  border: "none",
  boxShadow: 24,
  p: 0,
  color: "black",
  height: "40vh",
  borderRadius: "1rem",
};

const ShowInfo: React.FC<{
  isOpen: boolean;
  handleClose: () => void;
}> = (props) => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(props.isOpen);
  // const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.isOpen}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.isOpen}>
          <Box sx={style}>
            <img
              src="https://cdn.mos.cms.futurecdn.net/rwow8CCG3C3GrqHGiK8qcJ-1200-80.jpg"
              alt="modal photo"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "inherit",
              }}
            />
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{
                position: "absolute",
                top: "20%",
                left: "5%",
                color: "white",
              }}
            >
              Text in a modal
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{
                mt: 4,
                left: "5%",
                position: "absolute",
                top: "25%",
                color: "white",
              }}
            >
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Box
              sx={{
                display: "flex",
                position: "absolute",
                left: "5%",
                mt: 10,
                top: "30%",
              }}
            >
              <Button
                sx={{
                  color: "black",
                  backgroundColor: "white !important",
                  zIndex: 1,
                  marginY: "1rem",
                }}
                startIcon={<PlayArrow />}
              >
                <h4 style={{ margin: 0 }}>Odtwórz</h4>
              </Button>

              <Button
                startIcon={<Add />}
                sx={{
                  ml: 3,
                  color: "black",
                  backgroundColor: "white !important",
                  zIndex: 1,
                  marginY: "1rem",
                }}
              >
                <h4 style={{ margin: 0 }}>Dodaj do listy</h4>
              </Button>
            </Box>
            <Box
              sx={{
                backgroundColor: "transparent",
                backgroundImage:
                  "linear-gradient(180deg,hsla(0,0%,8%,0) 0,hsla(0,0%,8%,.15) 15%,hsla(0,0%,8%,.35) 29%,hsla(0,0%,8%,.58) 44%,#141414 68%,#141414)",
                backgroundPosition: "0 top",
                backgroundRepeat: "repeat-x",
                backgroundSize: "100% 100%",
                bottom: "-1px",
                height: "14.7vw",
                opacity: "1",
                borderRadius: "inherit",
                top: "auto",
                width: "100%",
                position: "absolute",
              }}
            ></Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ShowInfo;
