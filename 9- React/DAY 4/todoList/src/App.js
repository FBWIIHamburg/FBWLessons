import React from 'react';
import './App.css';

import InputTodo from './InputTodo/InputTodo'
import ListTodo from './listTodo/listTodo'

class App extends React.Component{
  state ={
    todoValue:'',
    todoList: []
  }
  changeTodoValue(event){
    
    this.setState({
      todoValue: event.target.value
    })
  }
  
  AddtoList(){
    let list = this.state.todoList ; 
    
    list.push( this.state.todoValue  )
    
    this.setState({
      todoList: list,
      todoValue:''
    })

  }
  deleteTodo(item){
    // let list = this.state.todoList
    // list.map( todo => {
    //   if(todo === item){
    //     list.splice(list.indexOf(todo) , 1 )
    //     this.setState({
    //       todoList : list
    //     })
    //   }
    //   else{
    //     alert('value not found')
    //   }
    // })
    let list = this.state.todoList.filter( todo  => {return todo !== item  })
    this.setState({
      todoList:list
    })
  }

  render(){
    // console.log('state' , this.state)
    return(
      <div className={'App'}>
        <div className={'container'}>
      
          <InputTodo changed={(e) => this.changeTodoValue(e)}  todoValue={this.state.todoValue}/>
          
          <button
          className={'btn'}
          onClick={ () => this.AddtoList() }
          >Add to the list</button>

          <ListTodo list={this.state.todoList} deleted={(item) => this.deleteTodo(item)}/>
        </div>
      </div>
    )
  }
}

export default App;
