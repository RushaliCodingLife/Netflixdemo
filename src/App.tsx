import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import TvShow from "./Components/TV Shows/TvShows";
import Search from "./Components/Search/Search";
import CalenderData from "./Components/Calender/CalenderData";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvshows" element={<TvShow />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/search" element={<Search />} />
          <Route path="/calendar" element={<CalenderData/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
