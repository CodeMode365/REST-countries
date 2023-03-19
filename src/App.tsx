import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Countries from "./components/Countries/Countries";
import Country from "./components/Country";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:country" element={<Country />} />
      </Routes>
    </Router>
  );
};

export default App;
