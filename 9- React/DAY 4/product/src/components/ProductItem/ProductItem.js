import React from 'react'
import styles from './ProductItem.module.css'

const ProductItem = props =>{
    return(
        <div className={styles.card}>
           {/* style={'width: 40px; height: 40;  border: 2px solid black;'} */}
            <img   className={styles.cardImgTop}
            src={ props.data.proImage} 
            alt={'test'} 
            ></img>
            <div className={styles.cardBody}>
               
                <div>
                <h4 className={styles.cardTitle}> 
                    {props.data.proName}
                </h4>
                <span>{props.data.proPrice}$</span>
                </div>
                <p className={styles.cardText}>
                    {props.data.desc}
                </p>
            </div>
        </div>
    )
}
export default ProductItem