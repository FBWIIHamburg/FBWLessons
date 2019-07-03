import React from 'react';
//import logo from './logo.svg';
import './App.css';

function NumberDescriber(props) {
  console.log(props);
  let description;
  if (props.number % 2 === 0) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }
  return <div onClick={ () => props.event() }>{props.number} is an {description} number</div>;
}

function App(){
  return <div><NumberDescriber number="1" event={() => alert('I am not "children" ')}/></div>
}

export default App;
