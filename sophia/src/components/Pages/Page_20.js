import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class Page20 extends Component {
  render() {
    return (
      <div className="Page20">
       

        <div className="text">
          Lots and Lots of Research Words Complete the crossword below
        </div>

        <div className="text">Game</div>
        <Link to="/page19">
          <Button>Prev Page</Button>
        </Link>
        <Link to="/page21">
          <Button>Next Page</Button>
        </Link>
      </div>
    );
  }
}

export default Page20;
