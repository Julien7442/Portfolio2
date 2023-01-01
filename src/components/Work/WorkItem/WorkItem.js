import React from "react";
import { Col, Row, CardImg } from "reactstrap";
import Button from "../../Button/Button";

const WorkItem = props => {
  return (
    <Col className="mt-4" xs="12">
      <Row
        style={{ backgroundColor: "rgba(24, 24, 24, 0.5)", padding: "2rem" }}
      >
        <Col sm="12" md="5">
          <h6>
            {props.year}
            <hr style={{ background: "#08fdd8", width: "30%" }} />
          </h6>

          <h1>{props.title}</h1>
          <h6 style={{ color: "#616161" }}>{props.tech}</h6>
          <p className="mt-4" style={{ fontSize: "20px" }}>
            {props.info}
          </p>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <Button text="VIEW" />
          </a>
        </Col>
        <Col
          style={{ height: "100%" }}
          className="d-flex justify-content-end mt-4"
          sm="12"
          md="7"
        >
          <CardImg
            style={{
              maxWidth: "600px",
              height: "100%"
            }}
            src={props.logo}
          />
        </Col>
      </Row>
    </Col>
  );
};

export default WorkItem;
