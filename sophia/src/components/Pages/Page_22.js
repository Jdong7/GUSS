import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class Page22 extends Component {
  render() {
    return (
      <div className="Page22">
        <div className="text">Sofia</div>

        <div className="text">Learns</div>

        <div className="text">Research</div>

        <div className="text">
          Crack the Code! Help Sofia figure out the hidden message!
        </div>

        <div className="text">Game</div>
        <Link to="/page21">
          <Button>Prev Page</Button>
        </Link>
        <Link to="/page23">
          <Button>Next Page</Button>
        </Link>
        <Button>sound</Button>
      </div>
    );
  }
}

export default Page22;
