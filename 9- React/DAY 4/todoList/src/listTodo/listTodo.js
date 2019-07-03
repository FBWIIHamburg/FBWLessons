import React from 'react'
import './listTodo.css';

const ListTodo = props => {
    let listofItem 
    if(props.list.length > 0 ){
      listofItem =  props.list.map( (item , index) => {
        return(
          <li className={'list-item'} key={index} onClick={ () => props.deleted(item)}>{item}</li>
        )
      })
    }else{
      listofItem = <p>Add Todo </p>
    }
    return(
        <div>
            <ul className={'list'}>
            { 
             listofItem
            }
            </ul>
        </div>
    )
}

export default ListTodo;