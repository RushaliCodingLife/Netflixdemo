import * as React from "react";
import TextField from "@mui/material/TextField";
import {
  Box,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./Search.css";
import NetFlix from "../Json/NetFlix.json";
import { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const data = NetFlix;


export default function Search() {
  const [user, setUser] = useState<any>(NetFlix);
  console.log({ user });
  const [search, setSearch] = useState("");
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  const getSearchData = (data, search) => {
    return data.filter((item: any) =>
      item.MovieName.toLowerCase().includes(search)
    );
  };


  <Box sx={{ flexGrow: 1 }}>
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
        MUI
      </Typography>
    </Toolbar>
  </Box>;

  return (
    <Box marginTop={20} marginLeft={20}>
      <TextField
        id="demo-helper-text-misaligned"
        label="Movie Name"
        onKeyUp={handleSearch}
        variant="filled"
        sx={{
          minWidth: "600px",
          backgroundColor: "white",
          marginTop: "10px",
          "& .MuiFilledInput-input": { color: "black" },
        }}
      />

      <TableContainer>
        <Table
          sx={{
            minWidth: 650,
            marginTop: "50px",
          }}
          aria-label="Fetching Data through Api"
        >
          <TableHead>
            <TableRow>
              <TableCell className="Table_Data" align="center">
                Id
              </TableCell>
              <TableCell className="Table_Data" align="center">
                Movie Image
              </TableCell>
              <TableCell className="Table_Data" align="center">
                Movie Name
              </TableCell>
              <TableCell className="Table_Data" align="center">
                Movie Desc
              </TableCell>
              <TableCell className="Table_Data" align="center">
                Duration
              </TableCell>
              <TableCell className="Table_Data" align="center">
                 <Box display={"flex"}>
                 Rating 
                <ArrowUpwardIcon />
          {/* <ArrowDownwardIcon/> */}
                </Box>
              </TableCell>
              <TableCell className="Table_Data" align="center">
            

              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getSearchData(user, search).map((value: any) => (
              <TableRow key={value.Id}>
                <TableCell component="td" align="center" className="Table_Data">
                  {value.Id}
                </TableCell>
                <TableCell align="center">
                  <img src={value.MovieImage} alt="" height={"100px"} />
                </TableCell>
                <TableCell component="td" align="center" className="Table_Data">
                  {value.MovieName}
                </TableCell>
                <TableCell component="td" align="center" className="Table_Data">
                  {value.MovieDesc}
                </TableCell>
                <TableCell component="td" align="center" className="Table_Data">
                  {value.Duration}
                </TableCell>
                <TableCell component="td" align="center" className="Table_Data">
                  {value.Rating}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
