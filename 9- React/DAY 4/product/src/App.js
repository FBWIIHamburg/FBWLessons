import React from 'react';
import styles from  './App.module.css';

import Productform from './components/Productform/ProductForm'
import ProductList from './components/ProductList/ProductList'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      ProductList :[]
    }
  }
  NewProduct = (item) =>{
    let list = [...this.state.ProductList];
    list.push(item)
    this.setState({
      ProductList: list
    })
  }
  render(){
   
    return(
      <div className={styles.App}>
       
        <Productform addToList={(item)  => this.NewProduct(item)} />
        <ProductList list={this.state.ProductList} />

      </div>

    )
  }
}

export default App;
