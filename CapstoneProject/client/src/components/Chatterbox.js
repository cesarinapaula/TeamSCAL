import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import $ from "jquery";
import { Button, Input } from 'semantic-ui-react';
import axios from "axios";

class Chatterbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueurl: this.props.location.pathname.slice(-32),
      chatMessages: [],
      name: "",
      message: "",
      clearChatBox: false,
    };
  }

  handleKeyPress = (event) => {
    const {chatMessages} = this.state;
    // if (event.key === 'Enter') {
    //   const message =  { name: $("#namebox").val(), message: event.target.value }
    //   this.setState({
    //     chatMessages: [...chatMessages, message]
    //   })
    //   event.target.value="";
    // }
    if (event.key === 'Enter') {
      const message =  { name: $("#namebox").val(), message: event.target.value }
      this.setState({
        chatMessages: [...chatMessages, message]
      })
      axios.post('/chatlist', {
        name: this.state.name,
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  }
   
    handleButtonClick = (event) => {
      this.setState({
        chatMessages: []
      })
    }
  
  render(){
  return (
    <div>
      <div className="wrapper">
        <div className="fBase-ico">
          <p><i className="fi-database small"></i>Powered by Planz</p>
        </div>
        <div id="chatterBox3" class="messages">
          <li>Planz-Team: Chat about those Planz!</li>
          <li>Planz-Team: Or whatever else you're into</li>
  {this.state.chatMessages.map(chatMessage => <li> {chatMessage.username} : {chatMessage.messages} </li>)}
        </div>
        <form>
          <div className="row">
            <div cssName="large-12 columns">
              <div className="row collapse prefix-radius">
                <div className="small-4 columns">
                </div>
                <div className="small-8 columns">
                  <Input inverted size={3} className="input chat" id="namebox" type="text" onInput={this.handleUsername} placeholder="Enter a Username" />
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
        <Button className="ui inverted tiny  tiny clear-chat" onClick={this.handleClearChat} id="clearchat">Clear Chat</Button>
        <Button className="ui inverted tiny  tiny clear-chat" onClick={this.handleReturnMessages} id="clearchat">Get All Messages</Button>
      </div>
    </div>
    )}
  }

export default withRouter(Chatterbox);
  
