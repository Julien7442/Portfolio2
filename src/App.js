import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Particles from "react-tsparticles";
import Experiments from "./components/Experiments/Experiments";

import "./App.css";

function App() {
  return (
    <Router>
      <div
        style={{
          paddingLeft: "80px",
          width: "100%",
          minHeight: "100%",
          backgroundColor: "#222",
          position: "relative",
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Navbar />
        <Particles
          params={{
            particles: {
              line_linked: {
                enable: false
              },
              color: {
                value: "#fff"
              },
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  enable: false
                }
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 0.1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              move: {
                enable: true,
                direction: "top",
                speed: 1,
                random: false,
                straight: false,
                bounce: false,
                out_mode: "out"
              }
            }
          }}
          style={{
            width: "100%",
            height: "100%",
            background: "#222",
            position: "absolute",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0"
          }}
        />
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/skills" exact element={<Skills />} />
            <Route path="/work" exact element={<Work />} />
            <Route path="/experiments" exact element={<Experiments />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;