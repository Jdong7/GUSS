import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class Page8 extends Component {
  render() {
    return (
      <div className="Page8">
       

        <div className="text">
          Can you help Sofia find all the words she just learned about?
        </div>

        <div className="text">Game</div>
        <Link to="/page7" style={{textDecoration: 'none'}}>
          <Button>Prev Page</Button>
        </Link>
        <Link to="/page9" style={{textDecoration: 'none'}}>
          <Button>Next Page</Button>
        </Link>
      </div>
    );
  }
}

export default Page8;
