import React from 'react';
import Btn from './Button'
import './App.css';


class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      value1:0,
      value2:0,
      result: 0
    }
  }
  render(){
    return(
      <div className='App'> 
        <div>
          <Btn kind="increase" 
          clickhandler={() => this.setState( prevState =>({value1: prevState.value1 += 1 }))}>+</Btn>
          <h2>{this.state.value1}</h2>  
          <Btn kind="decrease" 
          clickhandler={() =>this.setState( prevState =>({value1: prevState.value1 -= 1 }))}>-</Btn>
        </div> 

        <div>
          <Btn kind="increase" 
          clickhandler={() => this.setState( prevState =>({value2: prevState.value2 += 1 }))}>+</Btn>
          <h2>{this.state.value2}</h2>  
          <Btn kind="decrease" 
          clickhandler={() => this.setState( prevState =>({value2: prevState.value2 -= 1 }))}>-</Btn>
        </div> 
        <div>
          <Btn kind="result" 
            clickhandler={() => this.setState( prevState =>({result: prevState.value1 + prevState.value2 }))}>Result</Btn>
          <h2>{ this.state.result}</h2>
        </div>
      </div>
    )
  }
}

export default Counter;
