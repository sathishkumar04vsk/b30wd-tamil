import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { Addcolor } from "./Addcolor";
import { Navbar } from "./Navbar";
import { Movies } from "./Movies";
import { TicTacToe } from "./TicTacToe";
import { NotFound } from "./NotFound";



export default function App() {
  return (
    <div className="App">
    
      <Router>
      {Navbar()}
        <Switch>
          <Route path="/" exact><h1 className="home">sample application</h1></Route>
          <Route path="/flims"><Redirect to="/Movies/"></Redirect></Route>
          <Route path="/Movies" component={Movies} exact></Route>
          <Route path="/Movies/:id" exact></Route>
          <Route path="/Color_game" exact component={Addcolor}></Route>
          <Route path="/tic_tac_tce" exact component={TicTacToe}></Route>
          <Route path="/about" exact></Route>
          <Route path="**" exact> <NotFound /></Route>
        </Switch>
      </Router>
    </div>
  );
}
