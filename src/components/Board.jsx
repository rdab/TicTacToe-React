import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Square from "./Square";

class Board extends React.Component {
  constructor(props){
    super(props);
    this.boardClick = this.boardClick.bind(this);
  }

  boardClick(row, column){
    this.props.appClick(row, column);
  }

  render() {
    let board = this.props.values.map((rowValues, rowIndex)=>{
      let row = rowValues.map((value, columnIndex)=>{
        return(
          <Col className="p-0 m-0" xs="auto">
            <Square rowIndex={rowIndex} columnIndex={columnIndex}
              boardClick={this.boardClick}
              key={"".concat(rowIndex, columnIndex)}
              value={value}/>
          </Col>
        );
      })
      return(
        <Row className="justify-content-center flex-nowrap"
             key={"row".concat(rowIndex)}>
          {row}
        </Row>
      );
    })
    return (
        [board]
      );
  }
}

export default Board;