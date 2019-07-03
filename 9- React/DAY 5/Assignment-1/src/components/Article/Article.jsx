import React from 'react'
import  './Article.css'

class Article extends React.Component{
    constructor(props){
        super(props)
        this.state={
            InputValue1:'',
            InputValue2:''
        }
    }
    InputHandler(event){
    if(event.target.name === 'addt')
       { this.setState({
            InputValue1: event.target.value
        })
    }
        else {
            this.setState({
                InputValue2: event.target.value})
        }
    }

    render(){
        return(
        <div className={'Article'}>
            <input 
            type="text" 
            name="addt"
            placeholder="Enter title" 
            className="inputTitle" 
            onChange={ (event) => { this.InputHandler(event) }} /> 

            <input 
            type="text" 
            name="addp"
            placeholder="Enter paragraph" 
            className="inputTitle" 
            onChange={ (event) => { this.InputHandler(event) }} />

            <h2> { this.state.InputValue1 } </h2>
            
            <p>{ this.state.InputValue2 }</p>
            
        </div>   
        )
    }
}

export default Article;