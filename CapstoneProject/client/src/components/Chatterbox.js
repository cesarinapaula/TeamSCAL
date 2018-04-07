import React, { Component } from 'react';
import $ from "jquery";
import { Button, Input } from 'semantic-ui-react';
import axios from "axios"
import { render } from "react-dom";

class Chatterbox extends Component {
  constructor() {
    super();
    this.state = {
      chatMessages: [],
      name: "",
      message: ""
    }
    console.log(this.state);
  }

  handleKeyPress = (event) => {
    const {chatMessages} = this.state;
    if (event.key === 'Enter') {
      const message =  { name: $("#namebox").val(), message: event.target.value }
      this.setState({
        chatMessages: [...chatMessages, message]
      })
      event.target.value="";
    }
  }

  handleButtonClick = (event) => {
      this.setState({
        chatMessages: []
      })
  }
  
render(){
  console.log(this.state)

  return (
    <div>
      <div className="wrapper">
        <div className="fBase-ico">
          <p><i className="fi-database small"></i>Powered by Planz</p>
        </div>
        <div id="chatterBox3" class="messages">
          <li>Planz-Team: Chat about those Planz!</li>
          <li>Planz-Team: Or whatever else you're into</li>
          {this.state.chatMessages.map(chatMessage => <li> {chatMessage.name} : {chatMessage.message} </li>)}
        </div>
        <form>
          <div className="row">
            <div className="large-12 columns">
              <div className="row collapse prefix-radius">
                <div className="small-4 columns">
                </div>
                <div className="small-8 columns">
                  <Input inverted size={3} className="input chat" id="namebox" type="text" placeholder="Enter a Username" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="large-12 columns">
                <label>
                  <Input inverted className="input chat" id="messagebox" onKeyPress={this.handleKeyPress} placeholder="Press Enter to send Message"></Input>
                </label>
              </div>
            </div>
          </div>
        </form>
        <br />
        <Button className="ui inverted tiny  tiny clear-chat" onClick={this.handleButtonClick} id="clearchat">Clear Chat</Button>
      </div>
    </div>
    )
  }
}

(function poll() {
  setInterval(function () {
    fetch('http://localhost:3001/')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (errhnd) {
        console.log("there's nothing to see here")
      });
  }, 10000);
})();

export default Chatterbox;