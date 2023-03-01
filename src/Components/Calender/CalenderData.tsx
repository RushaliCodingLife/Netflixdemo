import React, { useState } from "react";
import Netflix from "../Json/NetFlix.json";
import { Box, Typography } from "@mui/material";
import "./CalendarData.css";

function Home() {

  
  return (
    <Box marginLeft={20} marginTop={15}>
      <Box className="row" display={"flex"}>
        <Box flex={"row"}>
          <Typography color={"white"} marginLeft={4} marginTop={2} variant="h6">
            Netflix Orignals:
          </Typography>
        </Box>

        {Netflix.map((value) => (
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
             <Box>
              <Typography className="Image_text">{value.Id}</Typography>
            </Box>
            <Box marginTop={2} display="flex" flexDirection={"row"}>
              <img
                src={value.MovieImage}
                height="300px"
                width="300px"
                alt="Netflix Logo"
              />
            </Box>
           
          </Box>
        ))}
      </Box>
    </Box>
  );
}
export default Home;
