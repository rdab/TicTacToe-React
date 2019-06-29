import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Menu extends React.Component {
  render() {
    return (
      <Row className="justify-content-center flex-nowrap">
        <Col xs="auto">
          <button className="btn btn-primary"
                  onClick={()=>this.props.reset()}>
            Reset
          </button>
        </Col>
      </Row>
    );
  }
}

export default Menu;