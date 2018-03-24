import React from "react";
const mainDivstyles = {
  color: "black",
  border: "solid",
  maxHeight:"50vh",
  minHeight:"10vh",
  overflow:"auto",
  maxWidth:"45vw",
  // overflow:"auto"
}
const divheaderstyles = {
  textAlign:"center",
  color: "brown",
  //border: "solid",
  width: "80%",
  margin:"auto"
}
const chatterBoxstyles = {
  color: "darkgreen",
  border: "solid",
  textAlign: "left",
  width: "80%",
  margin:"auto",
  overflow:"auto",
  maxHeight: "35vh"
}
const inputBoxstyles = {
  color: "red",
  //border: "solid",
  width: "80%",
  margin:"auto",
}



const Chatterbox = () => (
  <div id = "mainDiv1" style={mainDivstyles}>
    <div id = "divHeader2" style={divheaderstyles}>
      Send your messages to the Chatterbox Wall below:
    </div>
    <div id="chatterBox3" style={chatterBoxstyles}>
fas
    </div>
    <div id="textInputBox4" style={inputBoxstyles}>
      <form id = "textInput">
        <input type = "textarea" placeholder="Name" style={{width:"20%"}}/>
        <input type = "textarea" placeholder="Message" style={{width:"73%"}}/>
      </form>
    </div>
  </div>
);

export default Chatterbox;