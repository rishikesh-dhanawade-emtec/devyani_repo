//Create a component which will show the rating using star images. The component should receive a property rating which should control number of stars to be shown.

import React, { useState } from 'react';
import starImage from '../star.png';

const StarRating = () => {

    const [count, setCount] = useState(0);
    console.log(count);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <>
            <div className='container text-center'>
                <h2>Star Rating App</h2>
                {
                    count <= 5 ?
                        <div style={{ fontSize: '100%', fontWeight: 'bold', margin: 10 }}>
                            {
                                [...Array(count)].map((star, index) => {
                                    index += 1;
                                    // console.log(index);
                                    return (
                                        <img src={starImage} alt='star' width={50} height={50} />
                                    )
                                })
                            }
                        </div>
                        : ""
                }

                <button onClick={increment} className='btn btn-outline-success mb-3' style={{ marginRight: 10 }}> Increment </button>
                <button onClick={decrement} className='btn btn-outline-danger mb-3'> Decrement </button>
            </div>
        </>
    )
}

export default StarRating