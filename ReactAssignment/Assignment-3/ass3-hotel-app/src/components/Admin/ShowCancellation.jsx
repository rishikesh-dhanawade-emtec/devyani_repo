import React from 'react';
import AdminNavbar from './AdminNavbar';
import { useSelector } from 'react-redux';

const ShowCancellation = () => {

    const booking = useSelector(state => state.booking); //all booking
    console.log(booking);

    const renderCard = () => {
        return (
            <div className="row">
                <h3 className='text-center m-3' style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>Booking List</h3>
                <div className="col">
                    <table className="table text-center">
                        <thead style={{ background: 'black', color: 'white' }}>
                            <tr>
                                <th scope="col">Booking ID</th>
                                <th scope="col">Hotel Name</th>
                                <th scope='col'>User Name</th>
                                <th scope="col">Booking Date</th>
                                <th scope="col">Booking Time</th>
                                <th scope='col'>Table</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                booking.map((book) => {
                                    return (
                                        (book.msg === 'Cancelled') ? 
                                        <tr>
                                            <td>{book.id}</td>
                                            <td>{book.hotelName}</td>
                                            <td>{book.userName}</td>
                                            <td>{book.checkInDate}</td>
                                            <td>{book.checkInTime}</td>
                                            <td>{book.table}</td>
                                            <td>{book.msg}</td>
                                        </tr>
                                        : <span></span>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    return (
        <>
            <div>
                <AdminNavbar />
                <div className="container">
                    {
                        booking.length ? renderCard()
                            : <h4 className='text-center m-3' style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>No Cancellation Found</h4>
                    }
                </div>
            </div>

        </>
    )
}

export default ShowCancellation