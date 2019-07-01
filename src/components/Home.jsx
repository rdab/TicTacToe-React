import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";

class Header extends React.Component {
  render() {
    return (
      <Row className="text-center">
        <Col>
          <Jumbotron>
            <p>
              Hello, this is the frontpage
            </p>
          </Jumbotron>
        </Col>
      </Row>
    );
  }
}

export default Header;