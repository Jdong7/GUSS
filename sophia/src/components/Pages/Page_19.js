import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_19.JPG";
import { Link } from "react-router-dom";
class Page19 extends Component {
  render() {
    return (
      <div className="Page19">
        <div className="text">Sofia</div>

        <div className="text">Learns</div>

        <div className="text">Research</div>

        <div className="text">
          "Consent is when you agree to be in the study," answered Dr. Q. "It's
          when you say that you want to be in a study after you learn about what
          the study is. It's my job to tell you exactly what you would do if you
          were in the study. I have to tell you the good things that can happen
          and also the bad things. Then, you would decide if you wanted to do
          it.” "Since you're still young, we also talk with your parents about a
          study. They can help decide with you if it's a good idea. If you all
          think it is, then they give consent for you to participate. You would
          also have to assent to the study. This means that you agree that you
          want to do it. If you agree to be a part of the study and give consent
          then you'll be called a participant which is what a person who is in a
          study is called.”
        </div>
        <img src={Image} alt="" />
        <Link to="/page18">
          <Button>Prev Page</Button>
        </Link>
        <Link to="/page20">
          <Button>Next Page</Button>
        </Link>
      </div>
    );
  }
}

export default Page19;
