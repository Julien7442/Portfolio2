import React, { Component } from "react";
import { Container, Form, FormGroup, Input, Col, Row } from "reactstrap";
import Button from "../Button/Button";
import axios from "axios";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    error: null,
    mailSent: false,
    btn: "SEND"
  };

  inputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    const emailData = {
      name,
      email,
      subject,
      message
    };

    axios
      .post("https://accept-mail.herokuapp.com/send", emailData)
      .then(res =>
        this.setState({
          btn: "EMAIL RECIEVED!",
          name: "",
          email: "",
          subject: "",
          message: "",
          error: null,
          mailSent: false
        })
      )
      .catch(err => console.log("failed"));
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmitHandler} action="/email_page.php">
          <Row>
            <Col sm="12" md="8">
              <Row>
                <Col xs="12">
                  <h1
                    style={{
                      fontSize: "72px",
                      color: "#08fdd8",
                      opacity: "0.9"
                    }}
                  >
                    Contact Me
                  </h1>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Input
                      className="formInput"
                      style={{
                        color: "white",
                        background: "#111",
                        border: "none",
                        borderBottom: "1px solid #08fdd8"
                      }}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="name"
                      required
                      value={this.state.name}
                      onChange={this.inputChangeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Input
                      className="formInput"
                      style={{
                        color: "white",
                        background: "#111",
                        border: "none",
                        borderBottom: "1px solid #08fdd8"
                      }}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="email"
                      required
                      value={this.state.email}
                      onChange={this.inputChangeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col xs="12">
                  <FormGroup>
                    <Input
                      className="formInput"
                      style={{
                        color: "white",
                        background: "#111",
                        border: "none",
                        borderBottom: "1px solid #08fdd8"
                      }}
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="subject"
                      value={this.state.subject}
                      onChange={this.inputChangeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col xs="12">
                  <FormGroup>
                    <Input
                      className="formInput"
                      style={{
                        color: "white",
                        background: "#111",
                        border: "none",
                        borderBottom: "1px solid #08fdd8",
                        height: "350px"
                      }}
                      type="textarea"
                      name="message"
                      id="message"
                      placeholder="leave a message"
                      value={this.state.message}
                      onChange={this.inputChangeHandler}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Col>
            <Col sm="6">
              <Button text={this.state.btn} />
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Contact;
