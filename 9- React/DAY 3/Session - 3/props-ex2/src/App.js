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
  return <div onClick={ () => props.event(props.children) }>{props.number} is an {description} number</div>;
}
//props.children to understand the usage of props
function App(){
  return <div><NumberDescriber number="1" event={(text) => alert(text)}>
    Hello , I am a Functional Component !!!
    </NumberDescriber>
  </div>
}

export default App;
