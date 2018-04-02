
import React from 'react';
import $ from "jquery";

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
        <div id="chatterBox3" style={{backgroundColor:'red'}}>

        </div>
        <div id="textInputBox4" >
            <form id = "textInput">
                <input type = "textarea" id = "namebox" placeholder="Name" style={{width:"25%", height:"3em", paddingTop:"1px", marginTop:"1vh"}}/>
                <input type = "textarea" id= "messagebox" placeholder="Message" style={{width:"70%",height:"3em", marginTop:"1vh"}} onKeyPress={handleKeyPress}/>
            </form>
        </div>
    </div>
    </div>
   )};
    
export default Chatterbox;
