import React from 'react'
import './PositionItem.css'


const PositionItem = (props) => {
    return(
    <div>
         <div>
        <button className={'btn'} onClick={ () => props.topIncrease()}>Down</button>
        <button className={'btn'} onClick={ () => props.topDecrease()}>Up</button>
      
    </div>
    <div>
          <button className={'btn'} onClick={ () => props.leftIncrease()}>Right</button>
          <button className={'btn'} onClick={ () => props.leftDecrease()}>Left</button>
    </div>
    </div>
    )
}
export default  PositionItem