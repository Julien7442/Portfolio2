import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Loading from "../Loading/Loading";
import Image1 from "../../assets/img/experiment1.jpg";
import Image2 from "../../assets/img/experiment2.jpg";
import Image3 from "../../assets/img/experiment3.jpg";
import Image4 from "../../assets/img/experiment4.jpg";
import Image5 from "../../assets/img/experiment5.jpg";
import Image6 from "../../assets/img/experiment6.png";
import Image7 from "../../assets/img/experiment7.png";
import Image8 from "../../assets/img/experiment8.png";
import Image9 from "../../assets/img/experiment9.png";
import Image10 from "../../assets/img/experiment10.png";
import Image11 from "../../assets/img/experiment11.png";
import Image12 from "../../assets/img/experiment12.png";
import ExperimentItem from "./ExperimentItem/ExperimentItem";
import ExperimentContainer from "./ExperimentContainer/ExperimentContainer";

import "./Experiments.css";

class Experiments extends Component {
  state = {
    content: <Loading text="Caution: Radioactivity ahead." />
  };

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          content: (
            <Container
              className="d-flex align-items-center"
              style={{
                height: "100%",
                width: "100%",
                marginTop: "50px"
              }}
            >
              <Row style={{ width: "100%" }}>
                <Col xs="12">
                  <h1
                    className="mt-4 animated"
                    style={{ fontSize: "72px", color: "#08fdd8" }}
                  >
                    Experiments
                  </h1>
                </Col>
                <Col xs="12">
                  <p style={{ fontSize: "18px" }}>
                    Sometimes I mess around in my free time...
                  </p>
                </Col>

                <Col
                  style={{
                    marginTop: "150px",
                    height: "100%",
                    width: "100%",
                    zIndex: "2"
                  }}
                  xs="12"
                >
                  <ExperimentContainer>
                    <ExperimentItem link="https://portfolioexamplejc.netlify.app" img={Image1} />
                    <ExperimentItem
                      link="https://bankmodernn.netlify.app/"
                      img={Image2}
                    />
                    <ExperimentItem
                      link="https://uniswap-clone-jc.netlify.app/"
                      img={Image3}
                    />
                    <ExperimentItem
                      link="https://robopunkjc.netlify.app/"
                      img={Image4}
                    />
                  </ExperimentContainer>
                  <ExperimentContainer>
                    <ExperimentItem
                      link="https://julienc.netlify.app/"
                      img={Image5}
                    />
                    <ExperimentItem
                      link="https://codepen.io/s-haynes/full/PezXLP"
                      img={Image6}
                    />
                    <ExperimentItem
                      link="https://codepen.io/s-haynes/full/odzKPM"
                      img={Image7}
                    />
                    <ExperimentItem
                      link="https://codepen.io/s-haynes/full/yjWVdM"
                      img={Image8}
                    />
                  </ExperimentContainer>
                  <ExperimentContainer>
                    <ExperimentItem
                      link="https://codepen.io/s-haynes/full/aMPQpz"
                      img={Image9}
                    />
                    <ExperimentItem
                      link="https://codepen.io/s-haynes/full/PLJGKP"
                      img={Image10}
                    />
                    <ExperimentItem
                      link="https://codepen.io/s-haynes/full/eXwGMJ"
                      img={Image11}
                    />
                    <ExperimentItem
                      link="https://codepen.io/s-haynes/full/ROPYGM"
                      img={Image12}
                    />
                  </ExperimentContainer>
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
export default Experiments;
