import React from 'react';
import { Link, IndexLink } from 'react-router';
var NavBar = (props) =>{
  return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
              <li className="menu-text">React Time App</li>
              <li><IndexLink to='/timer' activeClassName="active-link">Timer</IndexLink></li>
              <li><IndexLink to='/countdown' activeClassName="active-link">Countdown</IndexLink></li>
          </ul>
        </div>
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              Created by <Link to="/">Neeraj Jangid</Link>
            </li>
          </ul>
        </div>
      </div>
      )
}

export default NavBar;
