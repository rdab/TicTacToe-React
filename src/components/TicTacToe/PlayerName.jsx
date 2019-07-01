import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

class PlayersName extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      playerName: "",
    }
  } 

  handlePlayerInputChange = (event) => {
    this.setState({ playerName: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitPlayers(this.state.playerName);
  }

  render() {
    return (
      <Row className="justify-content-center">
        <Col sm="auto">
          <Form>
            <Form.Group as={Row} controlId="formHorizontalPlayer">
              <Form.Label column sm={2}>
                Player:
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Name" 
                  value={this.state.playerName} onChange={this.handlePlayerInputChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col sm={{ span: 9, offset: 3 }}>
                <Button type="submit" onClick={this.handleSubmit}
                  disabled={this.state.playerName === ""}>
                  Submit
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default PlayersName;