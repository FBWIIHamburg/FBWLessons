import React from 'react';
import ImagePos from './ImagePos';
import PositionItem from './PositionItem/PositionItem'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      top: 0,
      left: 0 ,
      
    }
  } 
  verticalIncrease = () => {
    this.setState( prevState => ({
      top: prevState.top += 20
    }) )
  }

  verticalDecrease = () => {
    this.setState( prevState => ({
      top: prevState.top -= 20
    }) )
  }
  horizontalIncrease = () => {
    this.setState( prevState => ({
        left: prevState.left += 20
    }) )
  }
  horizontalDecrease = () => {
    this.setState( prevState => ({
        left: prevState.left -= 20
    }) )
  }
  render(){
    console.log(this.state.top)
    return(
      <div className="App">
        <ImagePos top={this.state.top} left={this.state.left}/>
        <PositionItem  
        topIncrease={ () => this.verticalIncrease()} 
        topDecrease={ () => this.verticalDecrease()} 
        leftIncrease={ () => this.horizontalIncrease() } 
        leftDecrease={ () => this.horizontalDecrease() }
        />
      </div>
    )
  }
}

export default App;
