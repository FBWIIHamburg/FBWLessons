import React from 'react'
import styles from './ProductList.module.css'
import ProductItem from '../ProductItem/ProductItem'

const ProductList = props =>{
    console.log('list',props.list.length)
    let listofproduct
    if(props.list && props.list.length > 0 ){
        listofproduct =  props.list.map((item , index) => {
            return(
                <ProductItem key={index} data={item} />
            )
        })
    }
    else{
        listofproduct = <div className={styles.alert}><p>There is no Product</p></div>
    }
    return(
        <div className={styles.listWrapper}>
            {listofproduct}
        </div>
    )
}
export default ProductList