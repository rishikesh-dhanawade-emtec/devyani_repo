import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { bookingAdded } from '../../features/hotels/bookingSlice';
import { showUsers } from '../../features/users/usersSlice';
import UserNavbar from './UserNavbar'

const BookHotel = () => {

    const users = useSelector(showUsers); //all users

    // const {hotelName, userName} = useParams();
    const {hotelId, userId} = useParams();

    const currentHotel = useSelector(state => state.hotels.find(hotel => hotel.id === hotelId)) 
    console.log(currentHotel);// current hotel data

    const currentUser = users.find(user => user.id === userId)
    console.log(currentUser); //current user data

    const [checkInDate, setCheckInDate] = useState('');
    const [checkInTime, setCheckInTime] = useState('');
    const [table, setTable] = useState(1);

    const navigate = useNavigate();
    const onCheckInDateChanged = e => setCheckInDate(e.target.value);
    const onCheckInTimeChanged = e => setCheckInTime(e.target.value);
    const onTableChanged = e => setTable(e.target.value);

    const dispatch = useDispatch();
    const msg = 'Booked';

    const onBookClicked = () => {
        console.log(`${checkInDate}, ${checkInTime}, ${table}, ${currentHotel.name}, ${currentUser.name}`);
        
        dispatch(bookingAdded(checkInDate, checkInTime, table, currentHotel.name, currentUser.name, hotelId, userId, msg));
        setCheckInDate('');
        setCheckInTime('');
        setTable(1);
        // navigate('/userDashboard/userId');
    }

    return (
        <div>
            <UserNavbar />
            <div className="container" style={{ marginTop: '50px' }}>
                <div className="col-md-6 shadow mx-auto" style={{ padding: 20 }}>
                    <form>
                        <h2 className='text-center p-3' style={{ fontFamily: 'Poppins' }}>Make your Reservation</h2>
                        <div className="form-group" style={{ padding: 10 }}>
                            <label className="form-label">Hotel Name</label>
                            <input type="text" id="hotelName" name="hotelName" value={currentHotel.name} placeholder='Hotel Name' className='form-control' readOnly='readOnly' />
                        </div>
                        <div className="form-group" style={{ padding: 10 }}>
                            <label className="form-label">Check In Date</label>
                            <input type="date" name="checkInDate" className='form-control' value={checkInDate} onChange={onCheckInDateChanged} />
                        </div>
                        <div className="form-group" style={{ padding: 10 }}>
                            <label className="form-label">Check In Time</label>
                            <input type="time" name="checkInTime" className='form-control' value={checkInTime} onChange={onCheckInTimeChanged} />
                        </div>
                        <div className='form-group' style={{ padding: 10 }}>
                            <label className="form-label">Table </label>
                            <input type='number' name="table" placeholder='Number of Guests' className='form-control' value={table} onChange={onTableChanged} />
                        </div>
                        <div className='form-group' style={{ padding: 10 }}>
                            <button onClick={onBookClicked} type='button' className='btn' style={{ fontWeight: 'bold',background: '#0071c2', color: 'white' }}>Reserve</button>
                            <input onClick={() => navigate(-1)} type="button" value="Back" className='btn btn-secondary m-2' style={{fontWeight: 'bold'}} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookHotel