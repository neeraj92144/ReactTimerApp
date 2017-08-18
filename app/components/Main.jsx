import React from 'react';
import NavBar from 'NavBar';

var Main = (props) =>{
  return(
    <div>
      <NavBar />
      <h2>Main Component</h2>
      {props.children}
    </div>
  )
}
export default Main;
