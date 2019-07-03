import React from 'react';
import './App.css';

class App extends React.Component{
  state ={
    todoValue:'',
    todoList: []
  }
  changeTodoValue(event){
  //  console.log(event.target)
    this.setState({
      todoValue: event.target.value
    })
  }
  
  AddtoList(){
     // let list = this.state.todoList ;
    // list.push( this.state.todoValue  )
     let item = this.state.todoValue ; 
     let list  = [ ...this.state.todoList , 
        item
       ]
    this.setState({
      todoList: list
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
    // console.log('value' , this.state.todoValue);
    console.log(this.state.todoList)
    const todo = this.state.todoList.map( (item ,index ) => {
      return(
        <li className={'list-item'} key={index} onClick={ () => this.deleteTodo(item)  }>{item}</li>
      )
    } )
    return(
      <div className={'App'}>
        <div className={'container'}>
        <input
          className={'input'}
          type='text'
          placeholder="Enter to do ..."
          value={this.state.todoValue}
          onChange={ event => this.changeTodoValue(event)} />

          <button
          className={'btn'}
          onClick={ () => this.AddtoList() }
          >Add to the list</button>

          <ul className={'list'}>
            {todo}
            {/* {
              this.state.todoList.map( (item ,index ) => {
                return(
                  <li className={'list-item'} key={index} >{item}</li>
                )
              })
            } */}
          </ul> 
        </div>
      </div>
    )
  }
}

export default App;
