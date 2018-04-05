import React from "react";
import { Button, Icon, Modal,Input,Responsive,Menu,Header } from 'semantic-ui-react';



const AboutUs = () => (
  <div>
        <header>
        <div id="Navbar">
          <div className ="ui inverted text attached menu">
            <div className ="ui container nav-wrapper">
            <a href="/"><img src= "https://i.imgur.com/bfxEfy6.png" style={{width: '7em'}}/></a>
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
      
      <h1 className='hAbout' id='h1About'>About Us</h1>
<h2 className='hAbout' id='h2About'>The Team Behind Planz</h2>  
<div className='steve'>  </div>

</div>
);

export default AboutUs;