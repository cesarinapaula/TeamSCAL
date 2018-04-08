import React from "react";
import { Button, Icon, Modal,Input,Responsive,Menu,Header } from 'semantic-ui-react';

import steve from "../images/steve.png";
import cesa from "../images/cesa.png";
import asiya from "../images/asiya.png";
import shanda from "../images/shanda.png";





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
<div className='flex-container'>
<div className='steve'> <img className='image' src= {steve} alt="Steve" /> 
<br />
<br />
<br />
<div className='bio'> <p className='bioP'>Steve Ramirez is a web developer with a background in biology and healthcare. He would like to combine his passion for technology and science, with the goal of contributing to a project that would help individuals from all walks of life. Although he would like to primarily focus on the 
immigrant and LGBTQ population. </p> </div>
</div>
<div className='cesa'> <img className='image' src= {cesa} alt="Cesa" /> 
<br />
<br />
<br />
<div className='bio'> <p  className='bioP'>Cesarina Paula is a cat and she is proud. web developer with a background in biology and healthcare. He would like to combine his passion for technology and science, with the goal of contributing to a project that would help individuals from all walks of life. Although he would like to primarily focus on the 
immigrant and LGBTQ population. </p> </div>

 </div>
<div className='asiya'> <img className='image' style={{height:'260px'}} src= {asiya} alt="Asiya" />  
<br />
<br />
<br />
<div className='bio'> <p  className='bioP'>Steve Ramirez is a web developer with a background in biology and healthcare. He would like to combine his passion for technology and science, with the goal of contributing to a project that would help individuals from all walks of life. Although he would like to primarily focus on the 
immigrant and LGBTQ population. </p> </div>

</div>
<div className='shanda'> <img className='image' style={{height:'260px'}} src= {shanda} alt="Le'Shanda" />  
<br />
<br />
<br />
<div className='bio'> <p  className='bioP'>Le’Shanda Miller has a background in social services, from college being apart of an organization that focuses on community service to her most recent career as a social worker she always strived to better her community. She inspires to use her acquired skills in web development  to help people in low income areas better their lives through technology.</p> </div>

</div>

</div>

</div>
);

export default AboutUs;




