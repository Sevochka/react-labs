import React from "react";

export default class extends React.Component {

  state = {
    current: this.props.min,
    btnStyle: {
      margin: "6px",
      background: "red"
    }
  };

  decreaseCnt = () => {
    if (this.state.current === this.props.min) {
      return;
    }

    this.setState({
      current: this.state.current - 1
    });
  };

  increaseCnt = () => {
    if (this.state.current === this.props.max) {
      return;
    }

    this.setState({
      current: this.state.current + 1
    });
    
  };

  inputChangedHandler = event => {
    const updatedValue = +event.target.value;
    this.setState({
      current:updatedValue
    })
  };

  render() {
    if (typeof(this.props.min) != 'number' && typeof(this.props.max) != 'number') {
      return(
        <React.Fragment>
          The values are not a number type!
        </React.Fragment>
      )
    } else {
    return (
      <React.Fragment>
        <button onClick={this.decreaseCnt} style={this.state.btnStyle}>
          Minus
        </button>
        <input
          onChange={this.inputChangedHandler}
          type="text"
          value={this.state.current}
        ></input>
        <button onClick={this.increaseCnt} style={this.state.btnStyle}>
          Plus
        </button>
        <p>The min is <b>{this.props.min}</b></p>
        <p>The max is <b>{this.props.max}</b></p>
      </React.Fragment>
    );
  }
}
}
