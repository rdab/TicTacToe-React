import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      gameName: "",
    };
  }

  toggleShowForm = () => {
    let showForm = !this.state.showForm;
    this.setState({ showForm: showForm });
  }

  handleSubmitName = () => {
    this.toggleShowForm();
    this.props.submitGame(this.state.gameName);
  }

  render() {
    if (this.state.showForm) {
      return (
        <Row>
          <Col>
            <InputGroup>
              <FormControl
                placeholder="Game's name"
                aria-label="Game's name"
                aria-describedby="basic-addon2"
                value={this.state.gameName}
                onChange={(event)=>{ this.setState({gameName: event.target.value})}}
              />
              <InputGroup.Append>
                <Button variant="primary" onClick={this.handleSubmitName}
                    disabled={this.state.gameName === ""}>
                  Submit
                </Button>
                <Button variant="outline-secondary" onClick={this.toggleShowForm}>
                  Discard
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      )
    }
    return (
      <Row className="justify-content-center flex-nowrap">
        <Col xs="auto">
          <Button variant="secondary" className="ml-1 mr-1"
            onClick={() => this.props.reset()}>
            Reset
          </Button>
          <Button variant="primary" className="ml-1 mr-1"
            onClick={this.toggleShowForm}>
            Save
          </Button>
        </Col>
      </Row>
    );
  }
}

export default Menu;