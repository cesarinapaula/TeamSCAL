
import React from 'react';
import $ from "jquery";


const mainDivstyles = {
  color: "black",
  border: "solid",
  marginTop: "1vh",
  height: "60vh",
  minHeight:"50vh",
  overflow:"auto",
  width:"33%",
//   float:"left",
//   marginLeft:"3vw",
  position:"absolute",
//   margin:"auto"
}
const divheaderstyles = {
  textAlign:"center",
  color: "brown",
  //border: "solid",
  width: "80%",
  margin:"auto",
  fontSize:"3vh"
}
const chatterBoxstyles = {
  color: "black",
  fontColor:"black",
  border: "solid",
  borderColor:"green",
  textAlign: "left",
  padding:"3px",
  width: "80%",
  height: "35vh",
  margin:"auto",
  overflow:"auto",
  maxHeight: "60vh"
}
const inputBoxstyles = {
  color: "red",
  //border: "solid",
  width: "80%",
  margin:"auto",


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

const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    // var message = ($("#chatterBox3").text(($("#namebox").val())+": " + event.target.value))
    var message = $("#namebox").val();
    $("#chatterBox3").append(message + ": " + event.target.value + "<br>" );
    event.target.value="";
  }
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

const Chatterbox = () => {
   return(    
    <div id = "mainDiv1" style={mainDivstyles}>
        <div id = "divHeader2" style={divheaderstyles}>
            Send your messages to the Chatterbox Wall below:

        </div>
        <div id="chatterBox3" style={{backgroundColor:'red'}}>

        </div>
        <div id="textInputBox4" >
            <form id = "textInput">
                <input type = "textarea" id = "namebox" placeholder="Name" style={{width:"25%", height:"3em", paddingTop:"1px", marginTop:"1vh"}}/>
                <input type = "textarea" id= "messagebox" placeholder="Message" style={{width:"70%",height:"3em", marginTop:"1vh"}} onKeyPress={handleKeyPress}/>
            </form>
        </div>
    </div>
   )
};

    
export default Chatterbox;
