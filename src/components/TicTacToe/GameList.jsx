import React from "react";
import { Button, ListGroup, Row, Col } from "react-bootstrap";

class GameList extends React.Component {

  render() {
    return (
      <Row className="text-center">
        <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
          <ListGroup>
            <ListGroup.Item >
              a game name
              <span>
                <Button className="ml-1 mr-1" variant="primary" size="sm">Continue</Button>
                <Button className="ml-1 mr-1" variant="danger" size="sm">Delete</Button>
              </span>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    )
  }
}

export default GameList;