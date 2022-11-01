import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { hotelDeleted } from '../../features/hotels/hotelsSlice';
import AdminNavbar from './AdminNavbar';

export const HotelList = () => {
  const hotels = useSelector(state => state.hotels)
  console.log(hotels);

  const hotelData = hotels.find(hotel => hotel.id)
  console.log(hotelData);

  const dispatch = useDispatch();

  const onDeleteCliked = (id) => {
    console.log(`hotel deleted`);
    toast.success('Hotel Deleted Successfully!!')
    dispatch(hotelDeleted({ id }));
  }

  const renderCard = () => {
    return (
      <>
        <div className="container">
          <h2 className='text-center pt-5'>Available Hotels</h2>
          <hr />
          <div className="row">
            {
              hotels.map((hotel) => (
                <div className="col-sm-4 p-2" key={hotel.id}>
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title text-center">{hotel.name}</h4>
                      <p className='card-text'>{hotel.desc}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item"><b>Hotel Address :</b> {hotel.address}</li>
                      <li className="list-group-item"><b>Hotel Contact :</b> {hotel.contact}</li>
                      <li className="list-group-item"><b>Hotel Email :</b> {hotel.email}</li>
                    </ul>
                    <div className="card-body">
                      {/* <Link to={`/hotels/${hotel.id}`} className='btn btn-outline-primary' style={{ marginRight: 10, fontWeight: 'bold' }}>View</Link> */}
                      <Link to={`/editHotel/${hotel.id}`} className="btn btn-outline-success" style={{ marginRight: 10, fontWeight: 'bold' }}>Update</Link>
                      <button onClick={() => onDeleteCliked(hotel.id)} className="btn btn-outline-danger" style={{ fontWeight: 'bold' }}>Delete</button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <AdminNavbar />
      {
        hotels.length ? renderCard()
          : <h4 className='text-center m-3' style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>No Hotels Available</h4>
    }
    </>
  )
}