import React from 'react';
//import logo from './logo.svg';
import './App.css';

function MyReact(props) {
  console.log(props);
  return ( 
    <div className={props.mystyle} >
      <h1>Welcome onboard with Reactjs Course</h1>
      <p>This is the Course for learning Reactjs Library</p>
    </div>


  )
    
  }

  var App = () => (
    <div>
      <MyReact mystyle={'App'} test={'val'} id={'id1'}/>
    </div>
    );


export default App;
