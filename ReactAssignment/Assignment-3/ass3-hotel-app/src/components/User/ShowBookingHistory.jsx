import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bookingData } from '../../features/hotels/bookingSlice';
import UserNavbar from './UserNavbar';

const ShowBookingHistory = () => {
    const { userId } = useParams();
    console.log(userId);

    const booking = useSelector(bookingData);
    console.log(booking);

    // const bookData = booking.filter(book => book.userId === userId)

    const currentBookingData = booking.filter(book => book.userId === userId)
    console.log(currentBookingData);

    const bookingRenderCard = () => {
        return (
            <>
                <div className="container">
                    <h4 className='text-center text-uppercase mt-4 mb-5' style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>Booking History</h4>
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
                                    currentBookingData.map((book) => {
                                        return (
                                            <>
                                                {
                                                    (book.msg === 'Cancelled' || book.msg === 'Completed') ?
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
                                                }
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div>
            <UserNavbar />
            {
                booking.length ? bookingRenderCard()
                    : <h4 className='text-center m-3' style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>No Booking Available</h4>
            }
        </div>
    )
}

export default ShowBookingHistory