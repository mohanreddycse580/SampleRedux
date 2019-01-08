import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  increment = () => {
    console.log("increment");
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    console.log("decrement");
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps" + state.count);
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
