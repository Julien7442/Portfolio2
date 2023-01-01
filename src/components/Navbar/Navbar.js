import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CardImg } from "reactstrap";
import MiniLogo from "../../assets/img/minilogo.png";
import "./Navbar.css";
class Navbar extends Component {
  state = {
    home: false,
    about: false,
    skills: false,
    work: false,
    contact: false,
    experiments: false
  };

  onNavClick = e => {
    let updatedState = { ...this.state };

    for (let key in updatedState) {
      updatedState[key] = false;
    }

    this.setState(prevState => updatedState);

    const attr = e.target.getAttribute("customattribute");

    this.setState(prevState => ({ [attr]: !prevState[attr] }));
  };

  render() {
    return (
      <nav
        style={{
          height: "100%",
          width: "80px",
          position: "fixed",
          zIndex: "100",
          backgroundColor: "#181818",
          top: "0",
          left: "0"
        }}
        className="d-flex flex-column align-items-center"
      >
        <div className="mt-2">
          <Link to="/">
            <CardImg
              style={{ width: "50px", height: "50px" }}
              src={MiniLogo}
              alt="logo"
            />
          </Link>
        </div>
        <div
          style={{ width: "100%", height: "80%" }}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <Link name="home" className="mt-auto" to="/">
            <i
              onClick={this.onNavClick}
              style={this.state.home ? { color: "#08fdd8" } : null}
              customattribute="home"
              className="fas fa-home"
            />
          </Link>
          <Link name="about" className="mt-4" to="/about">
            <i
              onClick={this.onNavClick}
              style={this.state.about ? { color: "#08fdd8" } : null}
              customattribute="about"
              className="far fa-user"
            />
          </Link>
          <Link name="skills" className="mt-4" to="/skills">
            <i
              onClick={this.onNavClick}
              style={this.state.skills ? { color: "#08fdd8" } : null}
              customattribute="skills"
              className="fas fa-cogs"
            />
          </Link>
          <Link className="mt-4" to="/work">
            <i
              onClick={this.onNavClick}
              style={this.state.work ? { color: "#08fdd8" } : null}
              customattribute="work"
              className="far fa-eye"
            />
          </Link>
          <Link className="mt-4" to="/experiments">
            <i
              onClick={this.onNavClick}
              style={this.state.experiments ? { color: "#08fdd8" } : null}
              customattribute="experiments"
              className="fas fa-flask"
            />
          </Link>
          <Link className="mt-4" to="/contact">
            <i
              onClick={this.onNavClick}
              style={this.state.contact ? { color: "#08fdd8" } : null}
              customattribute="contact"
              className="far fa-envelope"
            />
          </Link>

          <a className="mt-auto" href="https://www.linkedin.com/in/s-haynes">
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="mt-4" href="https://www.codepen.io/s-haynes">
            <i className="fab fa-codepen" />
          </a>
          <a className="mt-4" href="https://www.github.com/s-haynes">
            <i className="fab fa-github" />
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
