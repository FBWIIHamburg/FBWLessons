import React from 'react';
//import logo from './logo.svg';
import './App.css';




const Button = props => {
   //Destructuring & Spread'...other'
  //  const {x, ...y} = {x:1, x1:2, x2:3};
 
  const { kind , ...other } = props;
  // const className = ''
  // if(kind === "primary"){
  //   className = "PrimaryButton"
  // }else{
  //   className = "SecondaryButton"
  // }
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />; 
};







const App = () => {
  return (
    <div>
      <Button kind="Secondary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
};

export default App;
