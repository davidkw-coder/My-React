import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} /> {/* Home page */}
        <Route path="/about" element={<About />} /> {/* About page */}
      </Routes>
    </Router>
  );
}
