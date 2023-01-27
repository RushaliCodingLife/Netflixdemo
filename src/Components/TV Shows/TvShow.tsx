import React, { useEffect, useState } from "react";
import NetFlix from "../Json/NetFlix.json";
import CardContent from "@mui/material/CardContent";
import {
  Box,
  Button,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import axios from "axios";
import "./Home.css";
// import DialogBox from "../Json/DialogBox.json";
import ReactPlayer from "react-player";
import CloseIcon from "@mui/icons-material/Close";

export default function Home() {
  const [user, setUser] = useState(NetFlix);
  console.log(user);

  const [dialog, setDialog] = useState<any | null>();
  console.log(dialog);

  // const fetchData = async () => {
  //   const item = await axios.get("NetFlix");
  //   setUser(item.data);
  //   console.log(item.data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

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
    <Box marginLeft={8} marginRight={4}>
      <Box className="row" display={"flex"}>
        <Box flex={"row"}>
          <Typography color={"white"} marginLeft={4} marginTop={2} variant="h6">
            Netflix Orignals:
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
      </Box>
  )}
