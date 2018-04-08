import React, { Component } from "react"
import Chatterbox from "./Chatterbox"
import { Icon,Accordion,Button,Step} from 'semantic-ui-react';
import CreateLocation from "./Polls/CreateLocationPoll"
import CreateTimeDatePoll from "./Polls/CreateTimeDatePoll"


const pollsStyle = {
  alignContent:"center", 
  marginTop:'3vh', 
  border:"solid",
  width: "30vw",
  float: "right",
  marginRight:"33vw",
  maxWidth:"40vw", 
}

class Planz extends Component {
state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
}

render() {
const { activeIndex } = this.state;

return(
<div className = "planz_page">
<div className="ui container planz" style={{ width:'100%', height:'100%'}}>
<header>
    <div id="Navbar">
      <div className ="ui inverted text attached menu">
        <div className ="ui container nav-wrapper">
        <img src= "https://i.imgur.com/bfxEfy6.png" style={{width: '7em'}}/>
          <div className ="right menu">
            <div className ="item">
              <Button className ="ui inverted button"> Sign In</Button>
            </div>
            <div className ="item">
              <Button className ="ui inverted button">Register</Button>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </header>
<main>
<h1 style={{textAlign:'center' }}>Plan Name Goes Here</h1>
<div className ="ui container planz info" >
<Step.Group ordered>
    <Step>
      <Step.Content>
        <Step.Title>Location</Step.Title>
        <Step.Description>TBD</Step.Description>
      </Step.Content>
    </Step>

    <Step>
      <Step.Content>
        <Step.Title>Date/Time</Step.Title>
        <Step.Description>TBD</Step.Description>
      </Step.Content>
    </Step>

    <Step >
      <Step.Content>
        <Step.Title>Confirm Planz</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
</div>
<br/>
<div className ="chat-poll">
<div className="ui container chatterbox" >
              <Chatterbox/>
</div>
<div className ="poll container" style={{textAlign:'center'}}>
<div className ="poll accordian"style={{marginRight: '4em'}}>
<Accordion styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Location Poll
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <CreateLocation />
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Date/Time Poll
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <CreateTimeDatePoll/>
        </Accordion.Content>
        </Accordion>
</div>
</div>
</div>
</main>
</div>
<footer>
  <div style={{backgroundColor:'#373738', height:'4em', fontSize:'15px', marginTop:'130px' }} id="Footer">
    <div className="item">
    <a href="/aboutus"><span>About Us</span></a>
    </div>
  </div>
</footer>
</div>
)
}
}




export default Planz;
