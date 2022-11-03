import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { showUsers } from '../../features/users/usersSlice';
import UserNavbar from './UserNavbar';

const ShowProfile = () => {

    const { userId } = useParams();
    console.log(userId);

    const users = useSelector(showUsers);
    const userData = users.filter(user => user.id === userId);
    const currentUser = userData.find(user => user.id);
    console.log(currentUser);

    return (
        <div>
            <UserNavbar />

            <div class="container" style={{ marginTop: '20px' }}>
                <h3 className='text-center m-3' style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>Users Profile</h3>
                <hr />
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col">
                        <div class="card shadow mt-5" style={{ width: '600px' }}>
                            <div class="row no-gutters">
                                <div class="col-sm-5">
                                    <img class="card-img" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="cardImage" style={{ height: '200px', width: '200px', borderRadius: '50%', objectFit: 'cover', margin: '20px' }} />
                                </div>
                                <div class="col-sm-7">
                                    <div class="card-body">
                                        <h4 className='card-text text-center text-uppercase m-2' style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>{currentUser.name}</h4>
                                        <hr />
                                        <p className='card-text'><strong>Email : </strong>{currentUser.email}</p>
                                        <p className='card-text'><strong>Contact : </strong>{currentUser.contact}</p>
                                        <p className='card-text'><strong>City : </strong>{currentUser.city}</p>
                                        <Link class="btn btn-warning" to={`/editProfile/${currentUser.id}`} style={{fontWeight:'bold'}}>Update Profile</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="container">
                <div className='card' style={{width: '60rem', margin: '100px', padding: '10px'}}>
                    <div className="row g-0">
                        <div className="col-md-4 text-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="img-fluid rounded-start" alt="..." width={150} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body" style={{fontSize: '20px'}}>
                                <p className="card-title"><strong>User Name : </strong>{currentUser.name}</p>
                                <p className="card-text"><strong>User Email : </strong>{currentUser.email}</p>
                                <p className="card-text"><strong>User Address : </strong>{currentUser.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default ShowProfile