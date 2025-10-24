import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import VictimForm from "./components/VictimForm";
import NGOList from "./components/NGOList";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/victim-form" element={<VictimForm />} />
        <Route path="/ngos" element={<NGOList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
