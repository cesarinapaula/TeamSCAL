import React, { Component } from "react"
import Chatterbox from "./Chatterbox"
import { Icon,Accordion,Grid,Button, Segment, Menu, Divider, Header} from 'semantic-ui-react';
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
<div className="ui container planz" style={{ width:'100%', height:'100%'}}>
<header>
    <div id="Navbar">
      <div className ="ui inverted text attached menu">
        <div className ="ui container nav-wrapper">
        <img src= "https://i.imgur.com/bfxEfy6.png" style={{width: '7em'}}/>
          <div className ="right menu">
            <div className ="item">
              <Button className ="ui inverted button">
              <span> Sign In</span>
              </Button>
            </div>
            <div className ="item">
              <Button className ="ui inverted button">
              <span> Register</span>
              </Button>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </header>
<main>
<div className ="ui container plan info"/>
<h1 style={{textAlign:'center'}}>Plan Name</h1>
<div className="ui container">
<div className ="ui container poll" style={{textAlign:'center'}}>
<div className ="poll accordian">
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

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Other Poll
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Poll goes here
          </p>
        </Accordion.Content>
        </Accordion>
</div>
</div>
            {/* <div style={pollsStyle} >
            <h2>Decide on a Plan(polls)</h2>
            </div> */}
<div className="ui fluid container"style={{marginTop:'-12em'}} >
    <div className ="ui card" style={{width:'30em',marginLeft:'2em', maxHeight:'30em'}}>
              <div className="text extra thread-post__content" style={{overflow:'scroll'}}>
              <Chatterbox/>
              </div>

</div>
</div>
</div>
</main>
</div>
)
}
}






export default Planz;