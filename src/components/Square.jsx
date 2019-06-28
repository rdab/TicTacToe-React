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
    if (this.props.value === '-'){
      this.props.boardClick(row, column);
    }
  }

  render() {
    let disabled = this.props.value !== '-' || this.props.disabled;
    return (
      <button className="btn btn-light" style={squareStyle} 
        disabled={disabled}
        onClick={()=>this.squareClick(this.props.rowIndex, this.props.columnIndex)} >
          {this.props.value}
      </button>
    );
  }
}

export default Square;