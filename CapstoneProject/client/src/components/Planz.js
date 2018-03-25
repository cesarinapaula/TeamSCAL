
import React from "react"
import Chatterbox from "./Chatterbox"

const pollsStyle = {
  alignContent:"center", 
  marginTop:'3vh', 
  border:"solid",
  width: "30vw",
  float: "right",
  marginRight:"33vw",
  maxWidth:"40vw", 
}

const Planz = () => (
<div style = {{textAlign:"center"}}>
<h2> Planz Logo</h2>
    <p>Occasion Goes Here</p>
    <p>Location:TBA</p>
    <p>Time:TBA</p>
    <p>DAte:TBA</p>
<p/>
<div>
<Chatterbox/>

            <div style={pollsStyle} >
            <h2>Decide on a Plan(polls)</h2>
            </div>
</div>
</div>


);


export default Planz;