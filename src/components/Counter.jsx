import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.numberHandler()}</span>
        <button
          onClick={() => {
            this.clickHandler(1);
          }}
          className="btn btn-primary btn-sm"
        >
          +
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let badgeClasses = "m-2 badge badge-";
    badgeClasses += this.state.count === 0 ? "warning" : "primary";
    return badgeClasses;
  }

  numberHandler() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  clickHandler = (number) => {
    console.log(number);
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
