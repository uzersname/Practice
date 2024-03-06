import React from 'react';

function Header({totalIncome, untotalIncome}){
    return(
        <header>
            <h1>Trace</h1>
            <div className='total-income'>Total - {totalIncome}</div>
            <div className='total-outcome'>Untotal - {untotalIncome}</div>
        </header>
    )

}

export default Header