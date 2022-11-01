import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { showUsers } from '../../features/users/usersSlice';
import UserNavbar from './UserNavbar'

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
            <div className="container">
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
            </div>
        </div>
    )
}

export default ShowProfile