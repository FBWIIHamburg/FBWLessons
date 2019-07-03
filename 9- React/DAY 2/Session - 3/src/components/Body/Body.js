import React from 'react'
import './Body.css'

import LeftSide from '../LeftSide/LeftSide'
import RightSide from '../RightSide/RightSide'
import Article from '../Article/Article'

const Body = props => {
    return(
        <div className='Body'>
            <LeftSide />
            <Article />
            <RightSide />
        </div>
    )
}
export default Body; 