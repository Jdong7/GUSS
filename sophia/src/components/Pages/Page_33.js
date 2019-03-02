import React, { Component } from "react";
import { Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
class Page33 extends Component {
  render() {
    return (
      <div className="Page33">

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
        Special thanks to all of the families who helped 
us make this book the best it could be! 
The Buhendwa Family 
The Berhalter Family 
The Cadzow Family 
The Caito Family 
The Corey Family 
The Ecker Family 
The Jackson Family 
The Knowles Family 
The Liss Family 
The Molnar 
We couldn't have done it without you! 

        </div>
        <Link to= "/page1">
        <Button >
          Prev Page
        </Button>
        </Link>
        <Link to= "/About">
        <Button>
          Next Page
        </Button>
        </Link>


      </div>
    );
  }
}

export default Page33;
