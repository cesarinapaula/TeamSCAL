import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Planz from "./components/Planz";
import Timer from "./components/Polls/Timer";
import AboutUs from "./components/AboutUs";

const App = () => (
  <div>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/planz/:uniqueurl" component={Planz} />
        <Route path= "/planz/timer" component = {Timer}/>
        <Route path= "/aboutus" component = {AboutUs}/>
      </Switch>
    </div>
  </div>
);


export default App;
