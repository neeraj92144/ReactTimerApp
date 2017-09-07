import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import Main from 'Main';
import Timer from 'Timer';
import Countdown from 'Countdown';

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
//$(document).foundation();
//Css style
require('style!css!applicationStyles');
// Scss style
require('style!css!sass!applicationSCSCStyles');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
        <Route path="/timer" component={Timer} />
        <Route path="/countdown" component={Countdown} />
        <IndexRoute component={Timer} />
    </Route>
  </Router>
  ,
  document.getElementById('app')
);
