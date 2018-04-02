import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import Planz from "./Planz";
import { Button, Icon, Modal,Input,Responsive,Menu,Header } from 'semantic-ui-react';

const mainpagestyle = {
  color:(201,254,255),
}

class Home extends Component {
render() {
return(
<div className = "container" style ={mainpagestyle}>
<div id= "MainLayout">
  <header>
    <div id="Navbar">
      <div className ="ui inverted text attached menu">
        <div className ="ui container nav-wrapper">
        <img src= "https://i.imgur.com/bfxEfy6.png" style={{width: '7em'}}/>
          <div className ="right menu">
            <div className ="item">
              <Button className ="ui inverted button">
              <span> Sign In</span>
              </Button>
            </div>
            <div className ="item">
              <Button className ="ui inverted button">
              <span> Register</span>
              </Button>
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
        <Input size="huge" placeholder="Enter plan name here"></Input>
        </div>
        <br/>
        <div style={{textAlign:'center'}} className="submit_plan">
        <Button style={{color:'black'}}inverted color="grey" size="big"><Link to="/planz">Plan It!</Link></Button>
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
      <div className="ui container">
      <h1 style={{textAlign:'center', color:'white', fontSize: '40px', lineHeight:'2em'}}>How It Works!</h1>
        <div className="ui grid">
          <div className="middle aligned two column row">
            <div className ="middle aligned column">
          <img src="https://i.imgur.com/cBbyXiV.jpg" style={{float:'left', width:'200px',borderRadius:'50%'}}/>
            </div>
          <div style={{color:'white'}}className="column">
          <h2>Make Your Plans Into Planz</h2>
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
          <div style={{color:'white'}} className="column">
          <h2>Create a Poll</h2>
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
          <div style={{color:'white'}} className="column">
          <h2>Share with friends!</h2>
          <p> Share your unique url to the people you wish to invite.
            By doing this you allow friends to add options for polls, and
            vote on them.</p>          
          </div>
          </div>
          </div>
          <br/>
          <div style={{textAlign:'center'}}className="container">
          <Button size="huge"> I'm Sold, Scroll me up so I can make Planz!</Button>
          </div>
          </div>
          </div>
          
</main>
<div style={{backgroundColor:'#C9FEFF', height: '2px'}}></div>
<footer>
  <div style={{backgroundColor:'#373738', height:'4em', fontSize:'15px'}} id="Footer">
    <div className="item">
    <a href="/"><span>About Us</span></a>
    </div>
  </div>
</footer>
</div>
)
}
}

export default Home;
