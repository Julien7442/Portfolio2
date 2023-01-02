import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import WorkItem from "./WorkItem/WorkItem";
import WorkImage1 from "../../assets/img/experiment4.jpg";
import WorkImage2 from "../../assets/img/experiment2.jpg";
import WorkImage3 from "../../assets/img/experiment3.jpg";
import WorkImage4 from "../../assets/img/experiment1.jpg";
import WorkImage5 from "../../assets/img/experiment5.jpg";
import Loading from "../Loading/Loading";

class Work extends Component {
  state = {
    content: <Loading text="The fun stuff lives here." />
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        content: (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#222",
              zIndex: "1"
            }}
          >
            <Container
              className="d-flex"
              style={{
                height: "100%",
                width: "100%"
              }}
            >
              <Row>
                <Col xs="12" className="text-center mt-4">
                  <h1 style={{ fontSize: "72px", color: "#08fdd8" }}>
                    Recent Work
                  </h1>
                </Col>
                <div className="animated fadeInLeft">
                  <WorkItem
                    title="Design page"
                    year="2022"
                    tech="React / Tailwind / Matter.js / Spline"
                    info="Experience the sleek and modern design of our page, featuring a mesmerizing 3D object animation powered by Matter.js and Spline"
                    link="https://julienc.netlify.app"
                    logo={WorkImage5}
                  />
                </div>
                <div className="animated fadeInRight">
                  <WorkItem
                    title="RoboPunks"
                    year="2022"
                    tech="React / Solidity"
                    info="Join the revolution in the world of non-fungible tokens with RoboPunks, the ultimate minting platform for fans and collectors. Connect to the Goerli testnet and unleash your creativity with this easy-to-use interface and wide range of customization options."
                    link="https://robopunkjc.netlify.app"
                    logo={WorkImage1}
                  />
                </div>
                <div className="animated fadeInLeft">
                  <WorkItem
                    title="Bank modern app"
                    year="2022"
                    tech="React / Vite"
                    info="Welcome to the future of banking with Bank modern app. The state-of-the-art application combines the convenience of online banking with the security and reliability of a traditional bank"
                    link="https://bankmodernn.netlify.app"
                    logo={WorkImage2}
                  />
                </div>
                <div className="animated fadeInRight delay-1s">
                  <WorkItem
                    title="Uniswap clone"
                    year="2022"
                    tech="React / Solidity / Cranq"
                    info="Trade tokens on the Goerli testnet with ease using this Uniswap clone. With a simple and intuitive interface, you can access liquidity pools and take advantage of flash loans to buy and sell your favorite tokens."
                    link="https://uniswap-clone-jc.netlify.app"
                    logo={WorkImage3}
                  />
                </div>

                <div className="animated fadeInLeft delay-1s">
                  <WorkItem
                    title="Portfolio example"
                    year="2022"
                    tech="React"
                    info="This project is an example of my earlier portfolio. It includer tools I use, works, description. It can be use as a template for your future one!"
                    link="https://portfolioexamplejc.netlify.app"
                    logo={WorkImage4}
                  />
                </div>
              </Row>
            </Container>
          </div>
        )
      });
    }, 2900);
  }

  render() {
    return this.state.content;
  }
}

export default Work;
