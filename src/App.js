import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Particles from "react-particles-js";
import Experiments from "./components/Experiments/Experiments";

import "./App.css";

class App extends Component {
  render() {
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
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/about" exact component={About} />
              <Route path="/skills" exact component={Skills} />
              <Route path="/work" exact component={Work} />
              <Route path="/experiments" exact component={Experiments} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
