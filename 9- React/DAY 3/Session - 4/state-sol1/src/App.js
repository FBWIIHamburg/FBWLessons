import React from 'react';
import PersonCards from './PersonCards/PersonCards'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      name: '',
      last: '',
      ticket: null,
      persons: []
    }
  }
  NewTicket = () => {
    let newItem  = {
      name : this.state.name,
      last: this.state.last,
      ticket : Math.floor(Math.random() * 1000)
    }
   
    let personlist = [ ...this.state.persons ]
     personlist.push(newItem)
    this.setState({
      persons: personlist,
      name:'',
      last: ''
    })
  }
  render(){
   console.log(this.state)
    return(
      <div className="Appform ">
         <input type="text" 
         onChange={ (e) => this.setState({ name: e.target.value }) } 
         placeholder="Enter Name ... " 
         className="input" 
         value={this.state.name}/>
       

         <input type="text" 
         onChange={ (e) => this.setState({ last: e.target.value }) } 
         placeholder="Enter SureName ... "
         className="input" 
         value={this.state.last}/>
        <button onClick={() => this.NewTicket()}>Add</button>

          <PersonCards  data={this.state.persons}/>
      </div>
    )
  }
}

export default App;
