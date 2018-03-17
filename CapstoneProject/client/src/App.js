import React, { Component } from 'react';


import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
 
import Chatterbox from "./components/Chatterbox";
import Home from "./components/Home";
import Login from "./components/Login";
import Polls from "./components/Polls";

import Planz from "./components/Planz";


const App = () => (
  <div>

<Link  to="/">Home</Link>
      {"  "} 

 <Link to="/login">Login/Sign In</Link>
      {"  "}


    
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/planz" component={Planz} />

    </div>
  </div>
);


export default App;
