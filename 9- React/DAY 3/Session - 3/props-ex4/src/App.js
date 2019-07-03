import React from 'react';
import './App.css';

class NumberDescriber extends React.Component{
 
  render() {
  //let : limited in scope to the block;
  // let description;
  // if (this.props.number % 2 === 0) {
  //   description = <strong>even</strong>;
  // } else {
  //   description = <i>odd</i>;
  // }

  let description = this.props.number % 2 === 0 ? <strong>even</strong> : <i>odd</i>
  return (
    <div onClick={ () => this.props.event(this.props.children) }>
      {this.props.number} is an {description} number
    </div>
  )
  }
}


//props.children to understand the usage of props

class App extends React.Component{
  render(){
    return <div><NumberDescriber number="1" event={(anytext) => alert(anytext)}>
    Alert as Class Component !!!
    </NumberDescriber>
    </div>
  }
}


export default App;