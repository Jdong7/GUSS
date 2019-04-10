import React, { Component } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Page22 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "Wow",
      play: false,
      pause: true,
    }
    this.url= "../Pages/Sounds/press.mp3";
    this.audio = new Audio(this.url);
  }
  play = () => {
    this.setState({ play: true, pause: false });
    this.audio.play();
    }

  handleKeyPress = e => {
    let buttonName = e.target.className;
    let buttonNameSplit = buttonName.split(" ");
    if (e.keyCode === 39) {
      if (buttonNameSplit[0] === "leftBtn") {
        this.refs.sound.focus();
      }
      if (buttonNameSplit[0] === "sound") {
        this.refs.rightBtn.focus();
      }
    } else if (e.keyCode === 37) {
      if (buttonNameSplit[0] === "rightBtn") {
        this.refs.sound.focus();
      }
      if (buttonNameSplit[0] === "sound") {
        this.refs.leftBtn.focus();
      }
    }
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="Page22">
        <div className="text">
          Crack the Code! Help Sofia figure out the hidden message!
        </div>

        <Form style={{ margin: "10px" }} text="white">
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm="5">
              <font color="white">Answer: </font>
            </Form.Label>
            <Col sm="7">
              <Form.Control
                type=""
                placeholder="0"
                name="answer"
                onChange={this.handleInputChange}
              />
            </Col>
          </Form.Group>
          <Button
          onClick = {this.check}
          >
          </Button>
        </Form>

        <div className="text">Game</div>
        <Link to="/page21" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
        </Link>
        <Link to="/page23" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            autoFocus
            ref="rightBtn"
            className="rightBtn"
          >
            Next Page
          </Button>
        </Link>
        <Button onClick={this.play} ref="sound" className="sound">
          sound
        </Button>
      </div>
    );
  }
}

export default Page22;