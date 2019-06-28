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
          <Square rowIndex={rowIndex} columnIndex={columnIndex}
            boardClick={this.boardClick}
            key={"".concat(rowIndex, columnIndex)}
            value={value}/>
        );
      })
      return(
        <Row className="justify-content-center flex-nowrap"
             key={"row".concat(rowIndex)}>
          <Col className="p-0 m-0" xs="auto">
            {row}
          </Col>
        </Row>
      );
    })
    return (
      <div className="m-1">
        {board}
      </div>
      );
  }
}

export default Board;