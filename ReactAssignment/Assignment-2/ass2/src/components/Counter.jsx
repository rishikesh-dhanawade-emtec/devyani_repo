//Create a counter component with two buttons and one label. One button will increment while another button will decrement the counter. The label should show the current value of counter.

import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <>
            <div className='container text-center'>
                <h2>Counter App</h2>
                <div style={{fontSize: '100%', fontWeight:'bold', margin:10}}> { count } </div>
                <button onClick={increment} className='btn btn-outline-success mb-3' style={{marginRight:10}}> Increment </button>
                <button onClick={decrement} className='btn btn-outline-danger mb-3'> Decrement </button>
            </div>
        </>
    )
}

export default Counter