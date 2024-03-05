import React from 'react';
import IncomeItem from './IncomeItem';

function IncomeList({income,setIncome}){

    const removeIncome = i => {
        let temp = income.filter((v,index) => index !== i);
        setIncome(temp);
    }
    const sortbyDate = (a,b) => {
        return a.data - b.data;
    }
    return(
        <div className='income-list'>
            {
                income.sort(sortbyDate).map((value,index)=> (
                    <IncomeItem 
                    key={index} 
                    income={value} 
                    index={index} 
                    removeIncome={removeIncome}/>
                ))
            }
        </div>
    )

}

export default IncomeList;