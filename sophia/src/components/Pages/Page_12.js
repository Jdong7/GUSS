import React, { Component } from "react";
import { Button, Navbar } from "react-bootstrap";
import Image from "./Sofia_Images/Page_12_Bottom.JPG";
import Image1 from "./Sofia_Images/Page_12_top.JPG";
import { Link } from "react-router-dom";
class Page12 extends Component {
  render() {
    return (
      <div className="Page12">

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
        Sometimes scientists ask you to give a sample of blood to understand what's going on inside your body. 
        </div>
        <img src = {Image1}/>
        <img src = {Image}/>
        <Link to= "/page11">
        <Button >
          Prev Page
        </Button>
        </Link>
        <Link to= "/page13">
        <Button>
          Next Page
        </Button>
        </Link>


      </div>
    );
  }
}

export default Page12;
