import React from 'react'
import img from './logo.svg'

const ImagePos =  (props) => {
    let styles  = {
        width: '160px',
        height: '160px',
        position: 'absolute',
        top: props.top,
        left: props.left
    }
    return(
        <img src={img} style={styles} className='imgPosition'/>
    )
}

export default ImagePos;