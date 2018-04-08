import React, { Component } from "react";
import { render } from "react-dom";
//import CreateLocation from "./CreateLocationPoll";
import '../../index.css';
//import moment from "moment";
class Timer extends Component {
  state = {
    time: 0,
    endtime: 0,
    endTimeInput: "",
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0
  };

  componentDidMount() {}

  submitEndDate = event => {
    event.preventDefault();
    this.setState({
   //   endtime: new moment.parse((this.state.endTimeInput)),
      endTimeInput:""
    });
    setInterval(() => {
      this.updateClock();
    }, 500);
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {timerStyling, timerStyle} = this.props;
    var { days, hours, minutes, seconds } = this.state;
    return (
      <div id = {timerStyle}>
        <div>
          {" "}
          Timer <br />
          Type in date and time when you'd like the poll to close.
          <br/>
          <br/>
          <strong>Please use Military Time for most accurate timer</strong>
          <br />
          <br />
        </div>
        <div>
          <span>Days: {days} </span>
          <br />
          <span>Hours: {hours} </span>
          <br />
          <span>Minutes: {minutes} </span>
          <br />
          <span>Seconds: {seconds} </span>
          <br />
        </div>
        <div>
          <form onSubmit={this.submitEndDate}>
            <input
              name="endTimeInput"
              type="text area"
              value={this.state.endTimeInput}
              onChange={this.handleChange}
              placeholder="MM/DD/YY XX:XX"
              style = {{width: "25vw"}}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }

  updateClock = () => {
    // +(1000*3600)
    var t = this.state.endtime - (Date.now());
    this.setState({
      seconds: Math.floor((t / 1000) % 60),
      minutes: Math.floor((t / 1000 / 60) % 60),
      hours: Math.floor((t / (1000 * 60 * 60)) % 24),
      days: Math.floor(t / (1000 * 60 * 60 * 24))
    });
  };
}


export default Timer;
