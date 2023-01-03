import React, { Component } from "react";
import { Container, Row, Col, CardImg } from "reactstrap";
import BrandLogo from "../../assets/img/logo.png";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import "./Home.css";

class Home extends Component {
  state = {
    content: <Loading text="Loading something special..." />
  };

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          content: (
            <Container style={{ width: "100%", height: "100%" }}>
              <Row
                className="d-flex justify-content-between align-items-center"
                style={{ width: "100%", minHeight: "100%" }}
              >
                <Col
                  className="animated bounceInDown title__info"
                  sm="12"
                  md="8"
                >
                  <h1>Julien Conforto</h1>
                  <h1>
                    Front-end <span style={{ color: "#444" }}>/</span> UI
                    Developer
                  </h1>
                  <h6 style={{ color: "#777", letterSpacing: "3px" }}>
                    Modern UI/UX / React Developer{" "}
                  </h6>
                  <div className="mt-4">
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfqbprRHgWJLcTXdscmpKQxHlkGGsRssBLvcBrQcdPlnSLxnkVQHrbwcFRPvnpXsXjzQQq">
                      <Button text="CONTACT ME" />
                    </a>
                  </div>
                </Col>
                <Col className="brandlogo" sm="12" md="4">
                  <CardImg
                    className="animated flipInY delay-1s brandlogo__img"
                    src={BrandLogo}
                    alt="logo"
                  />
                </Col>
              </Row>
            </Container>
          )
        }),
      3000
    );
  }
  render() {
    return this.state.content;
  }
}

export default Home;
