import React from 'react';
import Btn from './Button'
import './App.css';


class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      count:0
    }
  }
  render(){
    return(
      <div className='App'> 
        <div>
          {/*1 <Btn kind="increase" clickhandler={() =>{ const x = {...this.state }; this.setState({count: x.count + 1  })}}>+</Btn> */}
          {/*2 <Btn kind="increase" 
          clickhandler={() => this.setState( prevState =>({count: prevState.count += 1 }))}>+</Btn> */}
          <Btn kind="increase" 
          clickhandler={() => this.setState({count: this.state.count+=1 }) }>+</Btn>
          <h2>{this.state.count}</h2>  
          <Btn kind="decrease" 
          clickhandler={() => this.setState({count: this.state.count-=1 }) }>-</Btn>
        </div> 
      </div>
    )
  }
}

export default Counter;
