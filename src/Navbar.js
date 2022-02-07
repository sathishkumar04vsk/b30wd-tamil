import * as React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return <div className="nav-items">
      <img className="logo" src="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png"></img>
   <ul className="links">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/Movies">Movies</Link>
    </li>
    <li>
      <Link to="/Color_game">Color Game</Link>
    </li>
    <li>  
      <Link to="/tic_tac_tce">Tic Tac Toe</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
  </div>;
}
