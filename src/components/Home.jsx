import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Header extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <p>
            Hello, this is the frontpage
          </p>
        </Col>
      </Row>
    );
  }
}

export default Header;