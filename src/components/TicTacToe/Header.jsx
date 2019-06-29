import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Row className="text-center">
          <Col>
            <p>
              {this.props.text}
            </p>
          </Col>
        </Row>
      </header>
    );
  }
}

export default Header;