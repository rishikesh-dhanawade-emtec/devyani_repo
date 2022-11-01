import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import { cancelBooking } from '../../features/hotels/bookingSlice';

const ShowBooking = () => {

    const booking = useSelector(state => state.booking); //all booking
    console.log(booking);
    const msg = 'Completed';

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onCompleteCliked = (id) => {
        console.log(`booking deleted : ${id}`);
        dispatch(cancelBooking({ id, msg }))
        alert('Booking Completed!!');
        navigate(-1);
    }

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
                                booking.map((book) => (
                                    (book.msg === 'Booked') ?
                                        <tr>
                                            <td>{book.id}</td>
                                            <td>{book.hotelName}</td>
                                            <td>{book.userName}</td>
                                            <td>{book.checkInDate}</td>
                                            <td>{book.checkInTime}</td>
                                            <td>{book.table}</td>
                                            <td>
                                            <button onClick={() => onCompleteCliked(book.id)} className='btn btn-success'>Complete </button>
                                            </td>
                                        </tr>
                                        : <span></span>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    return (
        <div>
            <AdminNavbar />
            <div className="container">
                {
                    booking.length ? renderCard()
                        : <h4 className='text-center m-3' style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>No Booking Available</h4>
                }
            </div>
        </div>
    )
}

export default ShowBooking