import React from 'react';
import Card from '../Card/Card'
import './PersonCards.css';

const PersonCards = props => {
 
    let listofCards= ""
    if( props.data && props.data.length > 0  ){
        listofCards  = props.data.map( (item , index ) => {
            return <Card key={index} name={item.name} surename={item.last} ticket={item.ticket} />
            }
        )
    }else{
        listofCards =  <p> Enter data </p>;
    }
   
    return(
        <div className={'list'}>
            {listofCards}
        </div>
    )
}

export default PersonCards;