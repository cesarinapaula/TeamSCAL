
import React from 'react';
import $ from "jquery";
import { Form, Button } from 'semantic-ui-react';


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
    <div className="container">
    <div id = "mainDiv1">
        <div id = "divHeader2">
            Send your messages to the Chatterbox Wall below:
        </div>
        <div id="chatterBox3">
        </div>
        <div id="textInputBox4" >
        <div className ="input" style={{verticalAlign: 'top'}}>
            <Form>
            <Form.Group>
                <Form.Input id = "namebox" placeholder="Name" width={5} style={{ paddingTop:"1px", marginTop:"50vh"}}/>
                <Form.Input id= "messagebox" placeholder="Message" width={12} style={{ marginTop:"50vh"}} onKeyPress={handleKeyPress}/>
            </Form.Group>
            </Form>
        </div>
    </div>
    </div>
    </div>
   )
};

    
export default Chatterbox;
