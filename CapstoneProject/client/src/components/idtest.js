import React, { Component } from "react";

class idtest extends Component {
  state = {};

  render() {
    console.log(this, this.props, this.props.params);

    return (
      <div>
        {/* <h1>THIS IS A TEST!!!!!</h1>
        <h1> Planz Logo </h1>
        <p>Occasion Goes Here</p>
        <p>Location:{this.state.plan && this.state.plan.location}</p>
        <p>Time:{this.state.plan && this.state.plan.time}</p>
        <p>DAte:TBA</p>
        <h2>{this.props.match.params.idtest}</h2> */}
      </div>
    );
  }
}

// fsdafa
export default idtest;
