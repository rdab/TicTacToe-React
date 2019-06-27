import React from "react";

const squareStyle = {
  height: "100px",
  width: "100px"
}

class Square extends React.Component {
  constructor(props){
    super(props);
    this.squareClick = this.squareClick.bind(this);
  }

  squareClick(row, column){
    this.props.boardClick(row, column);
  }
  
  render() {
    return (
      <button style={squareStyle} 
        onClick={()=>this.squareClick(this.props.rowIndex, this.props.columnIndex)} >
          {this.props.value}
      </button>
    );
  }
}

export default Square;