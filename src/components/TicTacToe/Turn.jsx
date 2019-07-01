import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Turn extends React.Component {
  render() {
    return (
      <Row className="text-center">
        <Col>
          {this.props.text}
        </Col>
      </Row>
    );
  }
}

export default Turn;