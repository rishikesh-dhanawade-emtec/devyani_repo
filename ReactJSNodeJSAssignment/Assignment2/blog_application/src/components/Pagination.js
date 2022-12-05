import React, { useState, useEffect } from 'react'

const Pagination = ({ showPerPage, onPaginationChange, total }) => {

    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const value = showPerPage * counter;
        onPaginationChange(value - showPerPage, value);
    }, [counter]);

    const onButtonClick = (type) => {
        if (type === 'prev') {
            if (counter === 1) {
                setCounter(1);
            } else {
                setCounter(counter - 1)
            }
        } else if (type === 'next') {
            if (Math.ceil(total / showPerPage) === counter) {
                setCounter(counter)
            } else {
                setCounter(counter + 1)
            }
        }
    }

    return (
        <div style={{ padding: '10px' }}>
            <button className='btn btn-outline' style={{ color: 'blue', fontSize: '35px' }} onClick={() => onButtonClick('prev')}><i className="bi bi-arrow-left-square-fill"></i></button>
            <button className='btn btn-outline' style={{ color: 'blue', fontSize: '35px', paddingLeft: '10px' }} onClick={() => onButtonClick('next')}><i className="bi bi-arrow-right-square-fill"></i></button>
        </div>
    )
}

export default Pagination