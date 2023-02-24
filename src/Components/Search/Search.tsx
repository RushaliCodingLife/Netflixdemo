import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  Box,
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
import axios from "axios";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

export default function Search() {
  const [user, setUser] = useState<any>(NetFlix);
  console.log(user);
  const [rows, setRows] = useState([]);
  // const [rowdata, setRowdata] = useState([]);
  const [search, setSearch] = useState("");

  React.useEffect(() => {
    axios.get("NetFlix").then((response) => {
      setRows(response.data);
    });
  }, []);

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
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={NetFlix}
      onKeyUp={TableContainer}
      // onInputChange={onInputChange}
      getOptionLabel={(value:any) => value.MovieName}
      sx={{ width: 600}}
      renderInput={(value) => <TextField {...value} label="Movie" />}
    />
{/* 
      <ReactSearchAutocomplete
        autoFocus
        items={NetFlix} 
        onSearch={(e) => setSearch(e)}
        onSelect={(value:any) => value.MovieName}
      /> */}

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
                Rating
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((value: any) => (
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
