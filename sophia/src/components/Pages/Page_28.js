import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class Page28 extends Component {
  render() {
    return (
      <div className="Page28">
       

        <div className="text">
          Walk with Sofia Through the Research Process Finish Sofia and her
          parents have final meeting with the scientist. Sofia won the school
          science fair! Sofia’s family goes out for pizza! Sofia gets a gift
          card in the mail! Sofia keeps a journal of her activities. Sofia goes
          to the doctor for a breathing test. Sofia enters the school science
          fair. Sofia starts a new medicine. Sofia goes to the doctor for a
          breathing test. Sofia goes to a friend’s sleepover. Sofia gets a gift
          card in the mail! Sofia goes to the doctor to have blood drawn. Sofia
          keeps a journal of her activities. Sofia answers a question in a
          survey. Sofia goes to the movies. Sofia tells her friends at school.
          Sofia assents to a study. Sofia’s parents consent to a study. Sofia
          and Michael learn about research. Start
        </div>

        <div className="text">Game</div>
        <Link to="/page27">
          <Button>Prev Page</Button>
        </Link>
        <Link to="/page29">
          <Button>Next Page</Button>
        </Link>
      </div>
    );
  }
}

export default Page28;
