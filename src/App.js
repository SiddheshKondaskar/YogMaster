import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home.jsx'
import Yoga from './Pages/Yoga/Yoga.jsx'
import About from './Pages/About/About.jsx'
import Navbar from "./Components/NavBar/Navbar.jsx"
import Instruction from './Pages/Instruction/Instruction'
import AR from './Components/AR/AR.jsx'
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/Yoga" element={<Yoga />} />
            <Route path="/Instruction" element={<Instruction />} /> 
            <Route path="/About" element={<About />} />
            {/* <Route path="/AR" element={<AR />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}