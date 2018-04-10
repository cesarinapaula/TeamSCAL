import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import axios from 'axios';
import { Button, Icon, Modal,Input,Responsive,Menu,Header } from 'semantic-ui-react';

const uuidv4 = require('uuid/v4');
const uuidURL = uuidv4().replace(/-/gi, '');

const mainpagestyle = {
  color:(201,254,255),
}

class Home extends Component {
  constructor(){
    super();
    this.state = {
      redirect: false,
      captureURL: uuidURL,
      eventName: ''
    }
  }

  handleEventName=(event)=>{
    this.setState({
        eventName: event.target.value
    });
  };


  componentDidMount=()=>{
    console.log(this.state);
  };


  handleSubmit=()=>{
    axios
    .post('http://localhost:3000/newevent',{
      uniqueurl: this.state.captureURL,
      eventname: this.state.eventName
    })
    .then(response=> {
    this.setState({
      redirect: true
    });
    })
    .catch(function(err){
      console.log(err);
    });
  };


render() {
  const { redirect } = this.state;
       
         
  if(redirect){
      return(
          <Redirect 
              to={{
              pathname: `/planz/${this.state.captureURL}`,
          }} 
          />
      )
  }

return(
<div className = "container" style ={mainpagestyle}>
<div id= "MainLayout">
  <header>
    <div id="Navbar">
      <div className ="ui inverted text attached menu">
        <div className ="ui container nav-wrapper">
        <a href="/"><img src= "https://i.imgur.com/bfxEfy6.png" alt='image' style={{width: '7em'}}/></a>
          <div className ="right menu">
            <div className ="item">
              <Button className ="ui inverted button"> Sign In</Button>
            </div>
            <div className ="item">
              <Button className ="ui inverted button">Register</Button>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </header>
</div>
<main>
  <div>
    <div className ="ui fluid continer" style={{backgroundImage:'url(https://i.imgur.com/uU5O8nU.png)', width:'100%',height:'600px', backgroundSize:'cover', backgroundRepeat:'no-repeat' }}>
      <div className = "ui container">
        <div style={{backgroundColor:'white', height: '2px'}}></div>
        <br/>
        <div style={{textAlign:'center'}}className="header" >
        <img src= "https://i.imgur.com/7Vzviab.png" style={{width: '25em'}}/>
         {/* <h1 style={{textAlign:'center', lineHeight:'7vh', fontSize:'40px', textShadow:'black 1px '}}>Got Planz?</h1> */}
        </div>
        <br/>
        <div style={{textAlign:'center'}} className="input">
        <Input size="huge" placeholder="Enter plan name here" onInput={this.handleEventName}></Input>
        </div>
        <br/>
        <div style={{textAlign:'center'}} className="submit_plan">
        <Button style={{color:'black'}}inverted color="grey" size="big" onClick={this.handleSubmit}> Plan It!</Button>
        </div>
          <div className ="ui container doubling stackable two column grid">
            <div className ="two column row" style={{minHeight:'400px'}}>
            <div>
              {/* <Button size="huge" inverted color="white" style={{marginLeft:'34vw', marginTop: '16vh'}}> Click Me To Make Planz!</Button> */}
            </div>
          </div>
          </div>
      </div>
    </div>
  </div>
  <div className ="ui fluid container" style={{backgroundColor:'#373738', width: '100%', height: '900px'}}>
      <div className="ui container" style={{fontSize:'40px'}}>
      <h1 style={{textAlign:'center', color:'white', lineHeight:'2em'}}>How It Works!</h1>
        <div className="ui grid">
          <div className="middle aligned two column row">
            <div className ="middle aligned column">
          <img src="https://i.imgur.com/cBbyXiV.jpg" style={{float:'left', width:'200px',borderRadius:'50%'}}/>
            </div>
          <div style={{color:'white', fontSize: '20px'}}className="column">
          <h1>Make Your Plans Into Planz</h1>
          <p>Type your plan name and press the "Plan It" button. 
             You will be redirected to your Planz Page, where you can set up
             a poll, invite friends using your unique url, and also chat 
             directly through the page.
          </p>
          </div>
          </div>
          <div className="middle aligned two column row" style={{marginBottom:'25px'}}>
          <div className ="middle aligned column">
          <img src="https://i.imgur.com/1jUOpkT.jpg" style={{ float:'left',width:'200px',borderRadius:'50%'}}/>
          </div>
          <div style={{color:'white', fontSize: '20px'}} className="column">
          <h1>Create a Poll</h1>
          <p> Use our polling feature to set a occasion/location, and the date 
            and time of the event. Set a timer on the poll to speed up the process
            of coming to a decision. Once the timer ends, and the votes are in, Planz information
            will be updated automagically!</p>          
          </div>
          </div>
          <div className="middle aligned two column row" style={{marginBottom:'25px'}}>
          <div className ="middle aligned column">
          <img src="https://i.imgur.com/vHr4ho1.jpg" style={{ float:'left',width:'200px',borderRadius:'50%'}}/>
          </div>
          <div style={{color:'white', fontSize: '20px'}} className="column">
          <h1>Share with friends!</h1>
          <p> Share your unique url to the people you wish to invite.
            By doing this you allow friends to add options for polls, and
            vote on them.</p>          
          </div>
          </div>
          </div>
          <br/>
          <div style={{textAlign:'center'}}className="container">
          <a href="/"><Button size="huge"> I'm Sold, Scroll me up so I can make Planz!</Button></a>
          </div>
          </div>
          </div>
          
</main>
<div style={{backgroundColor: '#C6FEFE', height: '2px'}}></div>
<footer>
  <div style={{backgroundColor:'#373738', height:'4em', fontSize:'15px',textAlign:'center' }} id="Footer">
    <div className="item">
      {''}
      {''}
    <a  href="/aboutus" ><span id='aboutus'>About Us</span></a> <p style={{textAlign:'center'}}>&#169; Planz</p>
    </div>
  </div>
</footer>
</div>
)
}
}

export default Home;
