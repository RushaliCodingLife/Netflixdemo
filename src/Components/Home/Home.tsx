import React, { useState } from "react";
import NetFlix from "../Json/NetFlix.json";
import CardContent from "@mui/material/CardContent";
import {
  Box,
  CardMedia,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import "./Home.css";
import ReactPlayer from "react-player";
import CloseIcon from "@mui/icons-material/Close";

function Home() {
  const [user, setUser] = useState(NetFlix);
  console.log(user);

  const [dialog, setDialog] = useState<any | null>();
  console.log(dialog);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (value: any) => {
    setOpen(true);
    setDialog(value);
  };

  const handleClose = () => {
    setOpen(false);
    setDialog(null);
  };

  return (
    <Box marginLeft={20} marginTop={15}>
      <Box className="row" display={"flex"}>
        <Box flex={"row"}>
          <Typography color={"white"} marginLeft={4} marginTop={2} variant="h6">
            Netflix Orignals{" "}
          </Typography>
        </Box>

        {user.map((value) => (
          <Box
            className="card"
            margin={2}
            display="flex"
            flexDirection={"column"}
            sx={{
              maxWidth: "300px",
              minHeight: "300px",
              background: "black",
              cursor: "pointer",
            }}
          >
            <Box
              onClick={() => handleClickOpen(value)}
              display={"flex"}
              sx={{ maxHeight: "100%", maxWidth: "100%" }}
            >
              <CardContent key={value.Id}>
                <CardMedia
                  component="img"
                  width="100%"
                  height="100%"
                  image={value.MovieImage}
                  alt="Movie Poster"
                />
              </CardContent>
            </Box>
          </Box>
        ))}
      </Box>

      {/* dialog */}

      {open && dialog && (
        <Box>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="xl"
          >
            <Box
              display={"flex"}
              flexDirection="row"
              justifyContent={"space-between"}
            >
              <DialogTitle id="alert-dialog-title">
                {"NetFlix Originals"}
              </DialogTitle>
              <DialogTitle id="alert-dialog-title">
                <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
              </DialogTitle>
            </Box>
            <DialogContent>
              <Box key={dialog.Id}>
                <DialogContentText id="alert-dialog-description">
                  {/* Video */}
                  <ReactPlayer
                    width={"100%"}
                    minHeight={"100%"}
                    pip
                    controls={true}
                    config={{ file: { forceHLS: true } }}
                    url={dialog.MovieTrailer}
                  />

                  <Box
                    marginTop={5}
                    marginBottom={3}
                    sx={{ fontSize: "20px", fontWeight: 800 }}
                  >
                    {dialog.MovieName}
                  </Box>
                  <Box marginTop={2} display="flex" flexDirection={"row"}>
                    <Box>
                      <img
                        src={require("../Util/1.png")}
                        height="50px"
                        width="50px"
                        alt="Netflix Logo"
                      />
                    </Box>{" "}
                    <Box
                      marginLeft={2}
                      marginTop={1}
                      sx={{ fontSize: "20px", fontWeight: 600 }}
                    >
                      {dialog.Rating}{" "}
                    </Box>
                    <Box marginLeft={2}>
                      <img
                        src={require("../Util/2.png")}
                        height="50px"
                        width="50px"
                        alt="Netflix Logo"
                      />
                    </Box>
                    <Box
                      marginLeft={2}
                      marginTop={1}
                      sx={{ fontSize: "20px", fontWeight: 600 }}
                    >
                      {dialog.Rating}
                    </Box>
                  </Box>
                  <Box marginTop={4} marginBottom={5} sx={{ fontSize: "20px" }}>
                    {dialog.MovieDesc}
                  </Box>
                </DialogContentText>
              </Box>
            </DialogContent>
          </Dialog>
        </Box>
      )}
    </Box>
  );
}

export default Home;
