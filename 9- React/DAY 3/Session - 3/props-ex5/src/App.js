import React from 'react';
import './App.css';


class Button extends React.Component{
    render(){
      //Destructuring & Spread'...other'
      //  const {x, ...y} = {x:1, x1:2, x2:3};
      const { kind , ...other } = this.props;
      //console.log( other )
      // const className = ''
      // if(kind === "primary"){
      //   className = "PrimaryButton"
      // }else{
      //   className = "SecondaryButton"
      // }
      const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
      return <button className={className} {...other} />; 
    }
}

class App extends React.Component{
  render(){
    return (
      <div>
        <Button kind="primary" onClick={() => console.log("clicked!")} >
          My Button as Class Component!
        </Button>
      </div>
    );
  }
}

export default App;