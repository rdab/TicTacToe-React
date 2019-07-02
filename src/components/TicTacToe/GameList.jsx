import React from "react";
import { Button, ListGroup, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteGame } from "../../redux/actions";

class GameList extends React.Component {

  continueGame = (uri) => {
    console.log(`continue game ${uri}`);
  };

  render() {
    let games = this.props.games;
    return (
      <Row className="text-center">
        <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
          <ListGroup >
            { games && games.length
              ? games.map ((game) => {
                  return (
                    <ListGroup.Item key={game.uri}>
                      {game.name}
                      <span>
                        <Button className="ml-1 mr-1" variant="primary" size="sm"
                            onClick={() => this.continueGame(game.uri)}>
                          Continue
                        </Button>
                        <Button className="ml-1 mr-1" variant="danger" size="sm"
                            onClick={() => this.props.deleteGame(game.uri)}>
                          Delete
                        </Button>
                      </span>
                    </ListGroup.Item>
                  )
                })
              : "No games to show!"}
          </ListGroup>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  return { games: state.games }
}

export default connect(
  mapStateToProps,
  { deleteGame }
)(GameList);