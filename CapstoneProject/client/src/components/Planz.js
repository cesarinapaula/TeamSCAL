import React from "react"
import Chatterbox from "./Chatterbox"
import CreateLocationPoll from "./Polls/CreateLocationPoll"
import CreateTimeDatePoll from "./Polls/CreateTimeDatePoll"

const Planz = () => (

<div>
    <div style = {{textAlign:"center"}}>
        <h1> Planz Logo </h1>
            <p>Occasion Goes Here</p>
            <p>Location:TBA</p>
            <p>Time:TBA</p>
            <p>DAte:TBA</p>
    </div>
    <div style = {{position:"relative"}}>
        <div>
        <Chatterbox/>
        
        <CreateLocationPoll/>
        
        <CreateTimeDatePoll/>
        </div>
        
    </div>
</div>



);


export default Planz;