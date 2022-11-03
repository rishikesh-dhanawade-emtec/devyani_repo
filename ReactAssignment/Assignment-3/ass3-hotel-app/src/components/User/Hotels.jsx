import React from 'react';
import { useSelector } from 'react-redux';
import { showHotels } from '../../features/hotels/hotelsSlice';
import UserNavbar from './UserNavbar';
import { Link } from 'react-router-dom';

const Hotels = () => {

    const hotels = useSelector(showHotels);
    console.log(hotels);

    return (
        <>
            <UserNavbar />
            <div className="container">
                <h4 className='text-center text-uppercase mt-5' style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>Hotels List </h4>
                <hr />
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
                                            <Link to={`/bookHotel/${hotel.id}`} className='btn' style={{ fontWeight: 'bold', background: '#0071c2', color: 'white' }}>Reserve or Book Table</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* {
                        hotels.map(hotel => {
                            return (
                                <div className="col mt-3">
                                    <div className="card">
                                        <div className="card-horizontal">
                                            <div>
                                                <img src="https://blog.venuerific.com/wp-content/uploads/2016/06/fairmont-hotel-jakarta-banquet-ballroom-birthday-round-table.jpg" alt="hotel" style={{width: '15rem'}} />
                                            </div>
                                            <div className="card-body">
                                                <h4>{hotel.name}</h4>
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas odit cupiditate ratione quia earum ab fugiat ullam aliquid, corrupti odio quas ut consectetur saepe delectus porro enim amet vero reprehenderit.</p>
                                                <p>{hotel.desc}</p>
                                                <p>{hotel.contact}</p>
                                                <Link to={`/bookHotel/${hotel.id}`} className='btn' style={{fontWeight: 'bold', background: '#0071c2', color: 'white'}}>Reserve or Book Table</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    } */}
            </div>
        </>
    )
}

export default Hotels