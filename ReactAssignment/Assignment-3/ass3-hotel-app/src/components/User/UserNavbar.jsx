import React from 'react';
import { Link, useParams } from 'react-router-dom';

const UserNavbar = () => {

    const { userId } = useParams();
    console.log(userId);

    return (
        <>
            <nav className="navbar shadow navbar-expand-sm bg-light">
                <div className="container" style={{ fontSize: '18px' }}>
                    <Link className="navbar-brand" style={{ fontWeight: 'bold' }}>USERNAVBAR</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={`/userDashboard/${userId}`}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/showUserBooking/${userId}`}>Show Bookings</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/showBookingHistory/${userId}`}>Booking History</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/showProfile/${userId}`}>Profile</Link>
                            </li>
                        </ul>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <Link to='/register' className="btn btn-outline-dark ms-2" href="#"><i className="bi bi-box-arrow-in-left me-1"></i> Sign Out</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default UserNavbar