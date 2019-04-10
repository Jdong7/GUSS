import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_27.JPG";
import { Link } from "react-router-dom";
class Page27 extends Component {
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
  render() {
    return (
      <div className="Page27">
        <div className="text">
          “Answering questions is my job!" Dr. Q said. “My job is to connect all
          of the dots to make sure you see the whole picture. If you decide to
          help with a study, my job is to make sure that you are feeling okay
          while you're helping. It's up to you to decide if you want to help us.
          You have a chance to help other kids, and who knows, maybe even change
          the world!" "What do you think? Would you like to participate in my
          study?” Dr. Q asked Sofia and her dad. Sofia said, “I think I would
          like to do that! I want to help change the world!”
        </div>
        <img src={Image} alt="image" />
        <div className="alt_text">
        Sofia and her brother both transitioning into research rangers. They can be seen with their research ranger outfits. Sofia has a pen and a clip board with a cape that has a RR symbol on it. Sofia’s brother can be see with a lasso and a cape with the RR symbol on it.
        </div>
        <Link to="/page26" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            ref="leftBtn"
            className="leftBtn"
          >
            Prev Page
          </Button>
        </Link>
        <Link to="/page28" style={{ textDecoration: "none" }}>
          <Button
            onKeyDown={this.handleKeyPress}
            autoFocus
            ref="rightBtn"
            className="rightBtn"
          >
            Next Page
          </Button>
        </Link>
        <Button onKeyDown={this.handleKeyPress} ref="sound" className="sound">
          sound
        </Button>
      </div>
    );
  }
}

export default Page27;
