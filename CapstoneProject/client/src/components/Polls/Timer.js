import React, { Component } from "react";
import { render } from "react-dom";
import CreateLocation from "./CreateLocationPoll";
import '../../index.css';
import moment from "moment"
class Timer extends Component {
  state = {
    time: 0,
    endtime: "",
    endDateInput: "January 12 2019",
    endDayInput: "",
    endMonthInput: "",
    endYearInput: "",
    endHourInput: "",
    endMinuteInput: "",
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    availablemonths: [" Month ","January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    availabledays: [" Day "],
    availableyears: [" Year "],
    availablehours:[" Hour "],
    availableminutes:[" Minutes "]
  };

  componentDidMount() {
    this.availablehours();
    this.availableminutes();
    this.availabledays();
    this.availableyears();
    console.log(this.state);
  }
  submitEndDate = event => {
    event.preventDefault();
    this.setState({
      
      endtime: new Date.parse(((this.state.endDateInput))),
    
    });
    console.log(this.state)
    setInterval(() => {
      this.updateClock();
    }, 10000);
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  availablehours = e =>{
    let hoursArr = this.state.availablehours;

    for(var i = 0; i<24; i++ ){
      if (i===0){
        hoursArr.push("12:00am Midnight")
      }
      else if(i<12){
        hoursArr.push(i + ":00am")
      }
      else if(i===12){
        hoursArr.push(i + ":00pm Noon")
      }
      else {
        hoursArr.push((i-12) + ":00pm") 
      }
    this.setState({
      availablehours: hoursArr
      })
    }
  }
  availableminutes = e =>{
    let minutesArr = this.state.availableminutes;

    for(var i = 0; i<60; i++ ){
      if(i===0){
        minutesArr.push("00")
      }
      else if(i%15===0){
        minutesArr.push(i)
    }
  }
    this.setState({
      availableminutes: minutesArr
    })
  }
  availabledays = e =>{
    let daysArr = this.state.availabledays;

    for(var i = 1; i<32; i++ ){
      
        daysArr.push(i)
    }
    this.setState({
      availabledays: daysArr
    })
  }
  availableyears = e =>{
    let yearsArr = this.state.availableyears;

    for(var i = 2018; i<2029; i++ ){
       
        yearsArr.push(i)
    }
    this.setState({
      availableyears: yearsArr
    })
  }

  render() {
    const {timerStyling, timerStyle} = this.props;
    var { days, hours, minutes, seconds } = this.state;
    return (
      <div id = {timerStyle}>
        <div>
          {" "}
           <br />
          Timer
           <br />
          <br/>
          Choose the Date and Time from the Drop Down Menus for your timer
          <br/>
          <br />
        </div>
        <div>
          <span>Days left: {days} </span>
          <br />
          <span>Hours left: {hours} </span>
          <br />
          <span>Minutes left: {minutes} </span>
          <br />
          <span>Seconds left: {seconds} </span>
          <br />
          <br />
        </div>
        <div>
            <form onSubmit={this.submitEndDate}>
           <select value = {this.state.endHourInput} name = "endHourInput" onChange = {this.handleChange}>
              {this.state.availablehours.map(x => <option> {x}</option>)} 
            </select>
           <select value = {this.state.endMinuteInput} name = "endMinuteInput" onChange = {this.handleChange}>
              {this.state.availableminutes.map(x => <option> {x}</option>)} 
            </select>
            <br/>
           <select value = {this.state.endMonthInput} name = "endMonthInput" onChange = {this.handleChange}>
              {this.state.availablemonths.map(x => <option> {x}</option>)} 
            </select>
           <select value = {this.state.endDayInput} name = "endDayInput" onChange = {this.handleChange}>
              {this.state.availabledays.map(x => <option> {x}</option>)} 
            </select>
            <select value = {this.state.endYearInput} name = "endYearInput" onChange = {this.handleChange}>
              {this.state.availableyears.map(x => <option> {x}</option>)} 
            </select>
            <br/>
            <input type="submit" />
            <br/>
            <br/>
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
