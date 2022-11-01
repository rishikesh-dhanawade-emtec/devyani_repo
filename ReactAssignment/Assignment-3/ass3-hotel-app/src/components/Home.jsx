import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
                <div className="container">
                    <Link className='navbar-brand'  style={{fontFamily: 'Poppins', fontSize: '25px'}}>Hotel</Link>
                    <button type='button' className='navbar-toggler' data-bs-target='#navbarNav' data-bs-toggler='collapse' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle Navbar'><span className='navbar-toggler-icon'></span></button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="mx-auto">
                            <ul className='navbar-nav' style={{fontFamily: 'Poppins', fontSize: '20px'}}>
                                <li className="nav-item">
                                    <Link className="nav-link text-white">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to='/login'>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to='/register'>Register</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>

            <div className="banner-image w-100 vh-100 d-flex" style={{justifyContent: 'center', alignItems:'center'}}>
                <div className="content text-center">
                    <h1 className='text-white' style={{fontSize: '50px', marginRight: '20rem'}}>HOTEL ZONE</h1>
                </div>
            </div>
        </>
    )
}

export default Home