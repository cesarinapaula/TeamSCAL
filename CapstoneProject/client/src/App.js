import React, { Component } from 'react';
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Chatterbox from "./components/Chatterbox";
import Home from "./components/Home";
import Login from "./components/Login";
import Planz from "./components/Planz";
import idtest from "./components/idtest";
import Timer from "./components/Timer";
import AboutUs from "./components/AboutUs";

//make the planz exact path be the index for all the planz made.
//make a second component for planz index


const App = () => (
  <div>
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/planz/:uniqueurl" component={Planz} />
        <Route path="/planz/:idtest" component={idtest} />
        <Route path= "/planz/timer" component = {Timer}/>
        <Route path= "/aboutus" component = {AboutUs}/>
    </div>
  </div>
);


export default App;
