
import React from 'react';
import $ from "jquery";
import { Form, Button } from 'semantic-ui-react';


// const mainDivstyles = {

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
        $.ajax({
            url: "http://localhost:3001",
            type:"get",
            success: function (data) {
                
                $("#chatterlist").html(("fasjdlkfa"))
                
                poll();
            }
        });
    }, 10000);
})();


const makePost = e => {
    e.preventDefault();
    $.ajax({
        url: "http://localhost:3001",
        type:"post",
        success: function (data) {
            $("#chatterlist").html(("fasjdlkfa"))
        }
    })
};



//   const generateId = () => {
    //       return Math.random()
    //       .toString(34)
    //       .slice(2);
    //     };
    
const Chatterbox = () => {
   return(   
    <div className="container"> 
    <div id = "mainDiv1" >
        <div id = "divHeader2" >
            Wall
        </div>
        <div id="chatterBox3">

        </div>
        <div id="textInputBox4" >
            <Form>
            <Form.Group>
                <Form.Input id = "namebox" placeholder="Name" width={5} style={{ paddingTop:"1px", marginTop:"50vh"}}/>
                <Form.Input id= "messagebox" placeholder="Message" width={12} style={{ marginTop:"50vh"}} onKeyPress={handleKeyPress}/>
            </Form.Group>
            </Form>
        </div>
    </div>
    </div>
   )};
    
export default Chatterbox;
