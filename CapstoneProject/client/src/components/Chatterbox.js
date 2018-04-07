
import React from 'react';
import $ from "jquery";
import { Button, Input } from 'semantic-ui-react';


/*
const mainDivstyles = {
  color: "black",
  border: "solid",
  marginTop: "1vh",
  height: "60vh",
  minHeight:"50vh",
  overflow:"auto",
  minWidth:"20vw",
//   float:"left",
//   marginLeft:"3vw",
  position:"absolute",
//   margin:"auto"
}
const divheaderstyles = {
  textAlign:"center",
  color: "brown",
//   border: "solid",
  width: "80%",
  margin:"auto",
  fontSize:"3vh"
}
const chatterBoxstyles = {
  color: "black",
  fontColor:"black",
//   border: "solid",
  borderColor:"green",
  textAlign: "left",
  padding:"3px",
  width: "80%",
  height: "35vh",
  margin:"auto",
  overflow:"auto",
  maxHeight: "40vh"
}
const inputBoxstyles = {
  color: "red",
//   border: "solid",
  width: "80%",
  margin:"auto",
}


//   color: "black",
//   border: "solid",
//   marginTop: "1vh",
//   height: "70vh",
//   minHeight:"50vh",
//   overflow:"auto",
//   width:"25vw",
//   float:"left",
//   marginLeft:"3vw",
//   // overflow:"auto"
// }
// const divheaderstyles = {
//   textAlign:"center",
//   color: "brown",
//   //border: "solid",
//   width: "80%",
//   margin:"auto"
// }
// const chatterBoxstyles = {
//   color: "black",
//   fontColor:"black",
//   border: "solid",
//   borderColor:"green",
//   textAlign: "left",
//   padding:"3px",
//   width: "80%",
//   height: "60vh",
//   margin:"auto",
//   overflow:"auto",
//   maxHeight: "60vh"
// }
// const inputBoxstyles = {
//   color: "red",
//   //border: "solid",
//   width: "80%",
//   margin:"auto",

// }
*/ 

const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    // var message = ($("#chatterBox3").text(($("#namebox").val())+": " + event.target.value))
    var message = $("#namebox").val();
    $("#chatterBox3").append(message + ": " + event.target.value + "<br>" );
    event.target.value="";
  }
// //   $("#chatterbox3").scrollTop = 
//   console.log($("#chatterbox3").scrollTop)
// Here I'd like to figure out how to make chatterbox stay at the bottom of the chat log.
}

(function poll() {
    
    setTimeout(function () {
        fetch('http://localhost:3001/')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
            })
            .catch(function(errhnd) {
            });
    }, 10000);
})();


// const makePost = e => {
//     e.preventDefault();
//     $.ajax({
//         url: "http://localhost:3001",
//         type:"post",
//         success: function (data) {
//             $("#chatterlist").html(("fasjdlkfa"))
//         }
//     })
// };

//For time being, took out styles,  4/2

const Chatterbox = () => {
   return(  
    <div>
    <div className="wrapper">
       <div className="chat header">
        <p><i className="chat name"></i>Powered by Planz</p>
       </div>    
      <div id="chatterBox3" class="messages">
        <li>Planz-Team: Chat about those Planz!</li>
        <li>Planz-Team: Or whatever else you're into</li>
      </div>
      <form>
        <div className="row">
          <div className="large-12 columns">
            <div className="row collapse prefix-radius">
              <div className="small-4 columns">
              </div>
              <div className="small-8 columns">
                <Input inverted size={3}className ="input chat" id="namebox" type="text" placeholder="Enter a Username"/>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <label>
              <Input inverted className ="input chat" id="messagebox" onKeyPress={handleKeyPress} placeholder="Enter a Message"></Input>
            </label>
          </div>
        </div>
        </div>
      </form>
      <br/>
      <Button  className="ui inverted tiny send-btn">Send</Button>
      <Button className="ui inverted tiny  tiny clear-chat">Clear Chat</Button>
    </div>
    </div>
 
   )
};

    
export default Chatterbox;
