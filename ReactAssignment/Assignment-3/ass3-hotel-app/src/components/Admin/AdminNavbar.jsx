import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <>
            <nav className="navbar shadow navbar-expand-sm bg-light">
                <div className="container" style={{ fontSize: '18px' }}>
                    <Link className="navbar-brand">ADMIN NAVBAR</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/adminDashboard'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/addHotel'>Add Hotel</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/hotelList'>Hotels</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/userList'>Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/showBooking'>Bookings</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/showCancellation'>Cancellation</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/showCompleteBooking'>Complete Booking</Link>
                            </li>
                        </ul>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <Link to='/login' className="btn btn-outline-dark ms-2" href="#"><i className="bi bi-box-arrow-in-left me-1"></i> Sign Out</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AdminNavbar