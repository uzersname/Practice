import React from 'react';

function OutcomeItem({outcome,index,removeOutcome}){

    let data = new Date(outcome.data)
    let day = data.getDate();
    let month = data.getMonth() + 1;
    let year = data.getFullYear();

    const removeHandle = i =>{
        removeOutcome(i);
    }
    return(
        <div className='outcome-item'>
            <button className='remove-item' onClick={() => removeHandle(index)}> x </button>
            <div className='desc'>{outcome.desc}</div>
            <div className='price'>${outcome.price}</div>
            <div className='date'>{day + "/" + month + "/" + year}</div>
        </div>
    )
}
export default OutcomeItem;