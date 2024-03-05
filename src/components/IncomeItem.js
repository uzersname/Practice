import React from 'react';

function IncomeItem({income,index,removeIncome}){

    let data = new Date(income.data)
    let day = data.getDate();
    let month = data.getMonth() + 1;
    let year = data.getFullYear();

    const removeHandle = i =>{
        removeIncome(i);
    }
    return(
        <div className='income-item'>
            <button className='remove-item' onClick={() => removeHandle(index)}> x </button>
            <div className='desc'>{income.desc}</div>
            <div className='price'>${income.price}</div>
            <div className='date'>{day + "/" + month + "/" + year}</div>
        </div>
    )
}
export default IncomeItem;