import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


import Login from "./Login";
import Planz from "./Planz";


const Home = () => (
  <div>
    <h2> Planz Logo</h2>
      <form>
        <input type='text' placeholder="What's The Occasion?" /> <button> <Link to="/planz"> Make A Plan </Link> </button> 
      </form>
        <button>  <Link to="/login"> Login </Link> </button>  
  <div>
    
    <Switch>
      <Route  path="/login" component={Login} />
      <Route path="/planz" component={Planz} />
    </Switch>

</div> 
  </div>
);

export default Home;