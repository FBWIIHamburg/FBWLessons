import React from 'react'
import './LeftSide.css'
import img1 from  '../../img1.jpg'
import img2 from  '../../img2.jpg'

const LeftSide = props => {
    return(
        <div className={'LeftSide'}>
            <ul>
                <li><img src={img1}></img> </li>
                <li><img src={img2}></img> </li>
               
            </ul>
        </div>
    )
}
export default LeftSide;