import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import FAQ from "./components/faq";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="faq" element={<FAQ />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
