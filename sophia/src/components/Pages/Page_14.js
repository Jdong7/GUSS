import React, { Component } from "react";
import { Button, Navbar } from "react-bootstrap";
import Image from "./Sofia_Images/Page_14.JPG";

class Page14 extends Component {
  render() {
    return (
      <div className="Page14">

        <Navbar fixed="top" variant="dark" className="navbar">
          <div className="logo">SOPHIA'S STORYBOOK</div>
        </Navbar>

        <div className="text">
        Sofia
        </div>

        <div className="text">
        Learns
        </div>

        <div className="text">
        Research
        </div>

        <div className="text">
        Sofia saw the word clinical trials on the sign on the wall. “What does that mean?” asked Sofia next. 
“Another great question, Sofia. A clinical trial is when you try out a new kind of treatment, like a medicine, to see if it works. 
Sometimes the people in the study actually try the new medicine. Sometimes the people in the study take a pretend medicine. This is called a placebo." 
Sofia thinks this is a little strange. “Why would they take a pretend medicine?" she asked. 
Dr. Q said, “That does seem funny, doesn't it? Well, if the people in the study start to feel better, the scientist wants to make sure it is because of the medicine and not because of something else that happened in the study.” 
Dr. Q explained a little more. “There is also a kind of study where some people try a new medicine and other people try an old one. This is to see if the new one works better.”

        </div>
        <img src = {Image}/>



      </div>
    );
  }
}

export default Page14;
