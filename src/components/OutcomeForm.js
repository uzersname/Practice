import React, {useRef} from 'react';

function OutcomeForm({outcome,setOutcome}){
    const desc = useRef(null);
    const data = useRef(null);
    const price = useRef(null)
    const AddOutcome = e => {
        e.preventDefault();
        let d = data.current.value.split("-");
        let newD = new Date(d[0],d[1]-1,d[2]);
        //console.log(desc.current.value);
        setOutcome([...outcome, { 
            "desc": desc.current.value,
            "price": price.current.value,
            'data': newD.getTime()
        }])
        desc.current.value="";
        price.current.value = null;
        data.current.value = null;
    }
    return(
        <form className='outcome-form' onSubmit={AddOutcome}>
            <div className='form-inner'>
                <input type='text' name='desc' id ='desc' placeholder='Outcome decs' ref={desc}></input>
                <input type='number' name='price' id ='price' placeholder='price:' ref={price}></input>
                <input type='date' name='date' id ='date' placeholder='data ' ref={data}></input>
                <input type='submit' value="Add outcome"></input>
            </div>
        </form>
    )

}

export default OutcomeForm;