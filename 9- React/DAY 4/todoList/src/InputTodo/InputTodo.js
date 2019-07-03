import React from 'react'
import './inputTodo.css'

const InputTodo = props => {
    return(
        <input
        className={'input'}
        type='text'
        placeholder="Enter to do ..."
        value={props.todoValue}
        onChange={ event => props.changed(event) } />
    )
}

export default InputTodo