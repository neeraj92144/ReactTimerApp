import React from 'react';
import { Link } from 'react-router';
class Clock extends React.Component{
  constructor(props) {
    super(props);
  }
  giveRightTime(no){
    let minutes = Math.floor(no/60);
    let seconds = no%60;
    if(minutes < 10){
      minutes = '0' + minutes;
    }
    if(seconds < 10){
      seconds = '0' + seconds;
    }
    var finalTime = `${minutes}:${seconds}`;
    return finalTime;
  }
  render() {
    let {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">
          {this.giveRightTime(totalSeconds)}
        </span>
      </div>
    );
  }
}
Clock.propTypes = {
  totalSeconds : React.PropTypes.number
}
export default Clock;
