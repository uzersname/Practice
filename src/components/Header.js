import React from 'react';

function Header({totalIncome}){
    return(
        <header>
            <h1>Trace</h1>
            <div className='total-income'>Total - {totalIncome}</div>
        </header>
    )

}

export default Header