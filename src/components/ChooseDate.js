import { useState } from 'react';
// Для выбора даты
function Getdate({data})
{
    return(
        <form className='getter' onSubmit={Adddate}>
            <div className='form-inner'>
                <input type='date' name='date' id ='date' placeholder='data ' ref={data}></input>
            </div>
        </form>
    )
}

export default Getdate