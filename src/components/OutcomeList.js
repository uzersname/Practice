import React from 'react';
import OutcomeItem from './OutcomeItem';

function OutcomeList({outcome,setOutcome}){

    const removeOutcome = i => {
        let temp = outcome.filter((v,index) => index !== i);
        setOutcome(temp);
    }
    const sortbyDate = (a,b) => {
        return a.data - b.data;
    }
    return(
        <div className='outcome-list'>
            {
                outcome.sort(sortbyDate).map((value,index)=> (
                    <OutcomeItem 
                    key={index} 
                    outcome={value} 
                    index={index} 
                    removeOutcome={removeOutcome}/>
                ))
            }
        </div>
        
    )

}

export default OutcomeList;