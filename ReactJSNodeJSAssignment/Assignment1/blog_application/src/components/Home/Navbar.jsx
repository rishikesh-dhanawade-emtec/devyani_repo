import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = () => {

    const {userId} = useParams();

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getUser();
      },[]);

    async function getUser() {
        await axios.get(`http://localhost:3000/user/${userId}`).then((response) => {
            const userData = response.data;
            setUser(userData);
        }).catch(function(error) {
            toast.error('User Not Found!!');
        }).finally(() => {
            setLoading(false);
        });
    }

    if (loading) {
        return <p>Data is loading...</p>;
    }

    return (
        <>
            <div className='navbar navbar-expand-lg' style={{fontFamily: 'Poppins'}}>
                <div className="container">
                <Link className="navbar-brand"></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontWeight: '600', fontSize: '18px'}}>
                                    Welcome {user.firstName}
                                </Link>
                                <ul className="dropdown-menu p-0" style={{textAlign:'center'}}>
                                    <li><Link to={`/createBlog/${user.id}`} className="dropdown-item">Create</Link></li>
                                    <li><Link to={`/profile/${user.id}`} className="dropdown-item">Profile</Link></li>
                                    <div className='dropdown-divider'></div>
                                    <li><Link to={`/login`} className="dropdown-item">Logout</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar