import React from 'react';

const Transaction = props => {
    return (
        
        <li>
            
            <div id={props.id}>{props.name}</div>
            <div>{props.type === 'income' ? (
                <>
                <span className="income"> 
                    +$ {props.price}
                </span>
                </>
            ) : (
                <>
                <span className="expense"> 
                    -$ {props.price}
                </span>
                </>
            )}</div>
        </li>
    )
}

export default Transaction;
