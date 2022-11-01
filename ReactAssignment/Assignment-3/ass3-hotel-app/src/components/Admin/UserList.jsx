import React from 'react'
import { useSelector } from 'react-redux'
import { showUsers } from '../../features/users/usersSlice'
import AdminNavbar from './AdminNavbar';

const UserList = () => {
    const users = useSelector(showUsers);
    console.log(users);

    const renderCard = () => {
        return (
            <>
                <h3 className='text-center m-3' style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>Users List</h3>
                <div className="col-2"></div>
                <div className="col-8">
                    <table className="table">
                        <thead style={{ background: 'black', color: 'white' }}>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">City</th>
                                <th scope='col'>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => {
                                    return (
                                        <tr>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.address}</td>
                                            <td>{user.password}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }

    return (
        <div>
            <AdminNavbar />

            <div className="container">
                <div className="row">
                    {
                        users.length ? renderCard()
                            : <h4 className='text-center m-3' style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>No Users Available</h4>
                    }

                </div>
            </div>
        </div>
    )
}

export default UserList