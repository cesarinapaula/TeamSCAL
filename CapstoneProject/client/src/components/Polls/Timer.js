import React, { Component } from "react";
import { render } from "react-dom";
import CreateLocation from "./CreateLocationPoll";
import '../../index.css';
import moment from "moment"
import {dropdown, button} from "semantic-ui-react";

class Timer extends Component {
  state = {
    time: 0,
    endtime: "",
    endDayInput: "",
    endMonthInput: "",
    endYearInput: "",
    endHourInput: "",
    endampm: "false",
    endMinuteInput: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    availablemonths: [" Month ","January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    availabledays: [" Day "],
    availableyears: [" Year "],
    availablehours:[" Hour "],
    hourunits:[],
    availableminutes:[],
    appear:"appear",
    disappear:"hidden"
  };
  componentDidMount() {
    this.availablehours();
    this.availableminutes();
    this.availabledays();
    this.availableyears();
    this.hourunits();
    console.log(this.state);
  }
  submitEndDate = event => {
    let datecatcher = this.state.endMonthInput + " "+ this.state.endDayInput +" " +this.state.endYearInput
    event.preventDefault();
    console.log("this is datecatcher:" + datecatcher)
    console.log("this is datecatcher type of: " + typeof(datecatcher))
    this.setState({
      disappear:"appear",
      appear:"hidden",
      endtime: new Date(datecatcher)
    });
    console.log(this.state)
    setInterval(() => {
      this.updateClock();
    }, 500);
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  availablehours = e =>{
    let hoursArr = this.state.availablehours;

    for(var i = 0; i<24; i++ ){
      if (i===0){
        hoursArr.push("12 pm") 
      }
    this.setState({
      availablehours: hoursArr
      })
    }
  }
  hourunits = e =>{
    let unitcatcher = this.state.hourunits;
    for(var  i=0; i<24; i++){
      unitcatcher.push(i)
    }
      this.setState({
        hourunits:unitcatcher
      })
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
        <div id = {this.state.appear}>
          {" "}
           <br />
          <br/>
          Choose the Date and Time from the Drop Down Menus for your timer
          <br/>
          <br />
        </div>
        <div id = {this.state.disappear}>
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
        <div id = {this.state.appear}>
            <form onSubmit={this.submitEndDate}>
           <select value = {this.state.endHourInput} name = "endHourInput" onChange = {this.handleChange} class = "ui selection dropdown">
            <option value="0">Hour</option><option value="1">01 </option><option value="2">02 </option><option value="3">03 </option>
            <option value="4">04 </option><option value="5">05 </option><option value="6">06 </option><option value="7">07 </option>
            <option value="8">08 </option><option value="9">09 </option><option value="10">10 </option><option value="11">11 </option>
            <option value="12">12</option> 
            </select>
           <select value = {this.state.endMinuteInput} name = "endMinuteInput" onChange = {this.handleChange} class = "ui selection dropdown">
              <option value = "0">Minutes</option>{this.state.availableminutes.map(x => <option> {x}</option>)} 
            </select>
            <select value = {this.state.endampm} name = "endampm" onChange = {this.handleChange} class = "ui selection dropdown">
              <option value = "false">AM</option> 
              <option value = "true">PM</option> 
            </select>
            <br/>
           <select value = {this.state.endMonthInput} name = "endMonthInput" onChange = {this.handleChange} class = "ui selection dropdown">
              {this.state.availablemonths.map(x => <option> {x}</option>)} 
            </select>
           <select value = {this.state.endDayInput} name = "endDayInput" onChange = {this.handleChange} class = "ui selection dropdown">
              {this.state.availabledays.map(x => <option> {x}</option>)} 
            </select>
            <select value = {this.state.endYearInput} name = "endYearInput" onChange = {this.handleChange} class = "ui selection dropdown">
              {this.state.availableyears.map(x => <option> {x}</option>)} 
            </select>
            <br/>
            <input type="submit" class = "ui blue button" />
            <br/>
            <br/>
          </form>
        </div>
      </div>
    );
  }
  updateClock = () => {
    if(this.state.endampm==="true"){
    var t = (this.state.endtime - (Date.now()))+(Number(this.state.endHourInput)*3600000)+(Number(this.state.endMinuteInput)*60000)+(12*60*60*1000)
    // var t = (this.state.endtime - (Date.now()))
    this.setState({
      seconds: Math.floor((t / 1000) % 60),
      minutes: Math.floor((t / 1000 / 60) % 60),
      hours: Math.floor((t / (1000 * 60 * 60)) % 24),
      days: Math.floor(t / (1000 * 60 * 60 * 24))
    })
    }
    else if(this.state.endHourInput==="Hour"||this.state.endMinuteInput==="Minute"){
        this.setState({
        days:0,
        hours:0,
        minutes:0,
        seconds:0,
    })
    }
    else{
      var t = (this.state.endtime - (Date.now()))+(Number(this.state.endHourInput)*3600000)+(Number(this.state.endMinuteInput)*60000)
      // var t = (this.state.endtime - (Date.now()))
      this.setState({
        seconds: Math.floor((t / 1000) % 60),
        minutes: Math.floor((t / 1000 / 60) % 60),
        hours: Math.floor((t / (1000 * 60 * 60)) % 24),
        days: Math.floor(t / (1000 * 60 * 60 * 24))
      })
      }
    }
}
export default Timer;