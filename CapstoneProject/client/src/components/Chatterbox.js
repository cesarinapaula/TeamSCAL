import React, { Component } from 'react';
import { render } from "react-dom";
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
      message: ""
    }
  }

  componentDidMount() {
  //  (function poll() {
      setInterval(this.getChat, 10000);
    }

    getChat = () => {
      axios
          .get(`http://localhost:3000/conversations/89989a479971472eb6d81493d24d1817`)
          .then(response=> {
            this.setState({
              chatMessages: response.data[0].array_agg
            })
           // console.log(response)
          })
          .catch(function (err) {
            console.log("there's nothing to see here", err)
          });
    }
    //})();  }


  
  handleKeyPress = (event) => {
    const {chatMessages, name, message, uniqueurl } = this.state;
    const incomingmessage =  { name: $("#namebox").val(), message: event.target.value }

    if (event.key === 'Enter') {
      //const incomingmessage =  { name: $("#namebox").val(), message: event.target.value }
      this.setState({
        chatMessages: [...chatMessages, incomingmessage]
      })
      event.target.value="";
   
    axios
    .post(`http://localhost:3000/postmessage`, {
      incomingmessage: incomingmessage,
      uniqueurl: uniqueurl
    })
    .then(response=>{
      console.log(response);
    })
    .catch(err=>{
      console.log(err);
    });
  }
  }

  handleButtonClick = (event) => {
      this.setState({
        chatMessages: []
      })
  }
  
render(){
  console.log("STATE: ", this.state)

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
            <div cssName="large-12 columns">
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



export default withRouter(Chatterbox);