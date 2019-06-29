import React from "react";
import { NavLink } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Row className="text-center">
          <Col>
            <h1>Welcome to TicTacToe!</h1>
            <nav>
              <Navlink exact to='/'>Home</Navlink>
              <Navlink exact to='/new'>New Game</Navlink>
              <Navlink exact to='/continue'>Continue</Navlink>
            </nav>
          </Col>
        </Row>
      </header>
    );
  }
}

export default Header;