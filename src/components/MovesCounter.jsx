import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class MovesCounter extends React.Component {
  render() {
    return (
      <Row className="text-center m-2">
        <Col>
          <p>
            <strong>Number of Movements: {this.props.plays}</strong>
          </p>
        </Col>
      </Row>
    );
  }
}

export default MovesCounter;