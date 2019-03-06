import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Image from "./Sofia_Images/Page_13.JPG";
import { Link } from "react-router-dom";
class Page13 extends Component {
  render() {
    return (
      <div className="Page13">
        

        <div className="text">
          Some scientists will ask if they can measure how tall you are, how
          much you weigh, or even how big around your head is! This helps them
          learn more about how your body is growing. Sofia is learning about the
          different data that scientists collect. Can you share some data about
          yourself? Do you know how tall you are?___feet___Inches Do you know
          how much you weigh?____ pounds What size shoe are you?
        </div>
        <img src={Image} alt="" />
        <Link to="/page12" style={{textDecoration: 'none'}}>
          <Button className="leftBtn">Prev Page</Button>
        </Link>
        <Link to="/page14" style={{textDecoration: 'none'}}>
          <Button className="rightBtn">Next Page</Button>
        </Link>
        <Button className ="sound">sound</Button>
      </div>
    );
  }
}

export default Page13;
