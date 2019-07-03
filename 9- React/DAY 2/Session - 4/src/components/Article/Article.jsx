import React from 'react'
import  './Article.css'

class Article extends React.Component{
    constructor(props){
        super(props)
        this.state={
            InputValue:''
        }
    }
    ChangeTitle(event){
        console.log(event.target);
        this.setState({
            InputValue: event.target.value
        })
    }
    render(){
        return(
        <div className={'Article'}>
            <input 
            type="text" 
            placeholder="Enter title" 
            className="inputTitle" 
            onChange={ (event) => { this.ChangeTitle(event) }} /> 

            <h2> { this.state.InputValue } </h2>
            
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
        </div>   
        )
    }
}
// const Article = () =>{
//     return(
//         <div className={'Article'}>
//             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//             <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
//         </div>
//     )
// }
export default Article;