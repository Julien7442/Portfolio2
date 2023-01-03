import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import ImageHoverEffect from "../CardEffect/CardEffect";

class About extends Component {
  state = {
    content: <Loading text="You're pretty awesome yourself." />
  };

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          content: (
            <Container
              className="d-flex flex-column align-items-center"
              style={{ height: "100%", width: "100%" }}
            >
              <Row>
                <Col xs="12">
                  <h1
                    className="mt-4 animated jackInTheBox"
                    style={{ fontSize: "72px", color: "#08fdd8" }}
                  >
                    About Me
                  </h1>
                </Col>
                <Col xs="12" sm="6">
                  <p style={{ fontSize: "18px" }}>
                  I am currently learning different languages like Javascript and learning more about React everyday.

My field of Interest's are building new  Web Technologies, great designs and also in areas related to Web3 and blockchain.

Whenever possible, I also spend my time to improve my knowledge about React, Javascript and Modern Javascript Library and Frameworks.
                  </p>
                </Col>
                <Col xs="12" sm="6">
                  <p style={{ fontSize: "18px" }}>
                    I have been working as a Front-end Developer for a little
                    more than a year now. I am personally a <em>huge</em> fan of
                    working with React and dabbling in all of its intricacies,
                    but I am also experienced with solidity and web3 development.{" "}
                    <Link to="/work">
                      <u style={{ color: "#08fdd8" }}>Check out</u>
                    </Link>{" "}
                    a few of my works!
                  </p>
                </Col>
                <Col xs="12">
          
                </Col>
              </Row>
              
              <Col xs="12">
               
                <ImageHoverEffect />
            
                </Col>
                

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

export default About;
