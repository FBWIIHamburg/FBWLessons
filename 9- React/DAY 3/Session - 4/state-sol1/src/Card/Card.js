import React from 'react';
import './Card.css';

const Card = props => {
    return(
        <div className="card">
            <div className={'name'}><p><b>Name :</b>{props.name} {props.surename }</p> </div>
            <div className={'name'}><p><b>Ticket Number :</b> T{props.ticket}</p> </div>
        </div>
    )
}

export default Card;