import React from 'react';
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom';
import { bookingData } from '../../features/hotels/bookingSlice';
import { showHotels } from '../../features/hotels/hotelsSlice';
import { showUsers } from '../../features/users/usersSlice';
import UserNavbar from './UserNavbar';

const UserDashboard = ({ match }) => {

    const { userId } = useParams();

    const users = useSelector(showUsers);

    const userData = users.filter((user) => user.id === userId);
    console.log(userData);

    const currentUser = userData.find(user => user.id);
    console.log(currentUser);

    const hotels = useSelector(showHotels);
    console.log(hotels);

    const booking = useSelector(bookingData);
    console.log(booking);

    const currentUserBooking = booking.filter(book => book.userName === currentUser.name)
    console.log(currentUserBooking);

    const hotelRenderCard = () => {
        return (
            <>
                <h4 className='text-center text-uppercase' style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>Hotels List </h4>
                <div className="row mt-3">
                    {
                        hotels.map((hotel) => {
                            return (
                                <div className="col mt-3">
                                    <div class="card p-0" style={{ width: '20rem' }}>
                                        <img src="https://blog.venuerific.com/wp-content/uploads/2016/06/fairmont-hotel-jakarta-banquet-ballroom-birthday-round-table.jpg" class="card-img-top" alt="HotelImages" />
                                        <div class="card-body">
                                            <h5 class="card-title">{hotel.name}</h5>
                                            <p class="card-text">{hotel.desc}</p>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">{hotel.email}</li>
                                            <li class="list-group-item">{hotel.contact}</li>
                                        </ul>
                                        <div class="card-body">
                                            <Link to={`/bookHotel/${hotel.id}/${currentUser.id}`} className='btn' style={{ fontWeight: 'bold', background: '#0071c2', color: 'white' }}>Reserve or Book Table</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }

    return (
        <div>
            <UserNavbar />
            <div className="container">
                <h4 className='text-center m-3' style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>Hi, Welcome {currentUser.name}  </h4>
                <hr />
                <div className="row">
                    <div className="col">
                        {
                            hotels.length ? hotelRenderCard()
                                : <h4 className='text-center m-3' style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>No Hotels Available</h4>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard