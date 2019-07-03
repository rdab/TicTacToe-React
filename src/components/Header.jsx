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
            <nav className="d-flex justify-content-center" >
              <NavLink exact to='/'>Home</NavLink>
              <NavLink exact to='/new'>New Game</NavLink>
              <NavLink to='/continue'>Continue</NavLink>
              <NavLink exact to='/games'>Games</NavLink>
            </nav>
          </Col>
        </Row>
      </header>
    );
  }
}

export default Header;