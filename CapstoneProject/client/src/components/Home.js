import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import idtest from "./idtest";
// uuid do it

import Login from "./Login";
import Planz from "./Planz";

const Home = () => (
  <div>
    <h2> Planz Logo</h2>
    <form>
      <input type="text" placeholder="What's The Occasion?" />{" "}
      <button>
        {" "}
        <Link to="/planz"> Make A Plan </Link>{" "}
      </button>
    </form>
    <button>
      {" "}
      <Link to="/login"> Login </Link>{" "}
    </button>
  </div>
);

fdsaf
{
  /* // POST /api/planz
      // GET  /api/planz/1
      // GET  /api/planz/ for all the planz made through a log in. INDEX of all planz
    </Switch> */
}
export default Home;
