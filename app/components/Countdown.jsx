import React from 'react';
import Clock from 'Clock';
import { Link } from 'react-router';
var Countdown = (props) =>{
  return (
      <div>
          Countdown Compoent
          <Clock totalSeconds={129} />
      </div>
      )
}

export default Countdown;
