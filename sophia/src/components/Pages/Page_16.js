import React, { Component } from "react";
import { Button, Navbar } from "react-bootstrap";
import Image from "./Sofia_Images/Page_16.JPG";
import { Link } from "react-router-dom";
class Page16 extends Component {
  render() {
    return (
      <div className="Page16">

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
        Scientists often try to figure out how two different medicines are different. This takes good observation skills. 
Can you help Sofia find the difference between these two pictures? 
The first one is how she looked after taking a hike on a hot, sunny day without bug spray and sun protection. The second picture is how she looked the following week 
after remembering her bug spray and sun protection. 

        </div>
        <img src = {Image}/>
        <Link to= "/page15">
        <Button >
          Prev Page
        </Button>
        </Link>
        <Link to= "/page17">
        <Button>
          Next Page
        </Button>
        </Link>


      </div>
    );
  }
}

export default Page16;
