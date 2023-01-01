import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import WorkItem from "./WorkItem/WorkItem";
import WorkImage1 from "../../assets/img/work1tech.png";
import WorkImage2 from "../../assets/img/work2tech.png";
import WorkImage3 from "../../assets/img/work3tech.png";
import WorkImage4 from "../../assets/img/work4tech.png";
import WorkImage5 from "../../assets/img/work5tech.png";
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
                    title="The World Headlines"
                    year="2019"
                    tech="React / Bootstrap / RESTful API's"
                    info="React application gathering data from various API's (Newsapi and YouTube API) and displaying news content from around the globe."
                    link="https://theworldheadlines.netlify.com"
                    logo={WorkImage5}
                  />
                </div>
                <div className="animated fadeInRight">
                  <WorkItem
                    title="Movie Junkie"
                    year="2018"
                    tech="React / Express / MongoDB / NodeJS"
                    info="Full stack MERN application utilizing The Movie Database (TMDB) API.
            Users are able to authenticate themselves and create movie
            bucketlists, as well as stream movies on the platform."
                    link="https://mjunkie.herokuapp.com"
                    logo={WorkImage1}
                  />
                </div>
                <div className="animated fadeInLeft">
                  <WorkItem
                    title="Big Boys Group"
                    year="2018"
                    tech="EJS / Express / MongoDB / NodeJS"
                    info="Full stack application using EJS as a templating engine. Developed with a backend admin portal where the client is able to update costs and product names available for sale."
                    link="https://bigboysgroup.herokuapp.com"
                    logo={WorkImage2}
                  />
                </div>
                <div className="animated fadeInRight delay-1s">
                  <WorkItem
                    title="Cart Secure"
                    year="2018"
                    tech="Wordpress / CSS"
                    info="Wordpress website built for a client, utilizing a multitude of plugins including WooCommerce and Mailchimp."
                    link="https://cartsecure.io"
                    logo={WorkImage3}
                  />
                </div>

                <div className="animated fadeInLeft delay-1s">
                  <WorkItem
                    title="My Twitch"
                    year="2018"
                    tech="HTML / CSS / JS"
                    info="Small application using the twitch.tv API to display channels I follow on my personal twitch, as well as online activity."
                    link="https://mytwitch.surge.sh"
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
