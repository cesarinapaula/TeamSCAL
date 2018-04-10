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

    componentDidMount() {
      setInterval(this.getChat, 500);
    }

    handleUsername=(event)=>{
        this.setState({
          name: event.target.value
        });
        console.log(this.state.name)
    }

    getChat = () => {
      if(this.state.clearChatBox){
        return; 
      }
        axios
          .get(`http://localhost:3000/conversations/${this.state.uniqueurl}`)
          .then(response=> {
            if(response.data.length < 1){
              console.log('no messages yet')
            }
            this.setState({
              chatMessages: response.data,
          });
          })
          .catch(function (err) {
            console.log("there's nothing to see here", err)
          });
      };
      
    postMessage = ()=> {
      axios
      .post(`http://localhost:3000/postmessage`, {
        message: this.state.message,
        username: this.state.name,
        uniqueurl: this.state.uniqueurl
      })
      .then(response=>{
        console.log(response.data);
      })
      .catch(err=>{
        console.log(err);
      });
    }

    handleKeyPress = (event) => {
      const {chatMessages, name, message } = this.state;
    
      const incomingmessage =  { name: $("#namebox").val(), message: event.target.value }
    
      if (event.key === 'Enter') {
      //const incomingmessage =  { name: $("#namebox").val(), message: event.target.value }
        this.setState({
          message: event.target.value,
          chatMessages: [...chatMessages, incomingmessage],
          clearChatBox: false
        });
        setTimeout(this.postMessage, 200);
        event.target.value='';
      }
    }

    handleClearChat = (event) => {
      this.setState({
        chatMessages: [],
        clearChatBox: true
      });
    };

    handleReturnMessages = (event) => {
      this.setState({
        clearChatBox: false
      });
    };
  
  render(){
    return (
      <div>
        <div className="wrapper">
          <div className="fBase-ico">
            <p><i className="fi-database small"></i>Powered by Planz</p>
          </div>
        <div id="chatterBox3" className="messages">
          <li>Planz-Team: Chat about those Planz!</li>
          <li>Planz-Team: Or whatever else you're into</li>
  {this.state.chatMessages.map(chatMessage => <li> {chatMessage.username}: {chatMessage.messages} </li>)}
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
    )
  }
}

export default withRouter(Chatterbox);
  