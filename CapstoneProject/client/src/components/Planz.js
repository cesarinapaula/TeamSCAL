
import React, { Component } from "react"
import Chatterbox from "./Chatterbox"
import { Icon,Accordion,Grid,Button, Segment, Menu, Divider} from 'semantic-ui-react';

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
const { activeIndex } = this.state

return(
<div className="ui container" style={{ width:'100%', height:'100%'}}>
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
<Grid>
<Grid.Row columns={2}>
<Grid.Column className="ui centered aligned grid" width={5}>
<div className ="ui container plan info">
<div id="planzInfo">
  <Menu fluid vertical>
          <Menu.Item className='header'>Plan Name</Menu.Item>
          <Menu.Item>Occasion/Location: TBD</Menu.Item>
          <Menu.Item>Date: TBD</Menu.Item>
          <Menu.Item>Time: TBD</Menu.Item>
  </Menu>
</div>
</div>
</Grid.Column>
</Grid.Row>
<Grid.Column className="ui centered aligned grid"  width={5}>
<div className ="ui container poll" style={{alignContent:'center'}}>
<div className ="poll accordian">
<Accordion styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Location Poll
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            Poll goes in here
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Date/Time Poll
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
          Poll goes here
          </p>
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
</Grid.Column>
<div>
  {/* <Chatterbox/> */}
</div>
  
            {/* <div style={pollsStyle} >
            <h2>Decide on a Plan(polls)</h2>
            </div> */}
</Grid>
<div className="ui container" style={{float:'left', marginTop:'-20em'}}>
    <div className ="ui card" >
      <div className="ui feed">
        <div className="event thread-post">
          <div className="content thread-post__container">
              <div className="text extra thread-post__content">
              <Chatterbox/>

              </div>
        </div>
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