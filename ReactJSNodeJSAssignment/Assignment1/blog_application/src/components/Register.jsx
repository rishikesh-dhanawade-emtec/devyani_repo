import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();

    const signup = () => {

        if (user.firstName === '' || user.lastName === '' || user.email === '' || user.password === '' || user.confirmPassword === '') {
            toast.warn('Please fill the details!!')
        } else {
            if (user.password === user.confirmPassword) {

                axios.post("http://localhost:3000/user/signup", {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    password: user.password,
                    confirmPassword: user.confirmPassword,
                }).then(function (response) {
                    setUser('');
                    toast.success('User Registered Successfully!!')
                    navigate('/login');
                }).catch(function (error) {
                    toast.error('Something went wrong!! Please try again!!');
                })
            } else {
                toast.warn('Password and Confirm Password does not matched!!')
            }
        }
    }

    return (
        <>
            <section className='form' style={{ marginTop: '2%', marginBottom: '2%', fontFamily: 'Poppins' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6 shadow p-5">
                            <form action="" method='POST' encType="multipart/form-data">
                                <h4 className='text-center pt-0 text-uppercase' style={{ fontWeight: '600' }}>Register</h4>
                                <div className="form-group mb-3">
                                    <label className="form-label">First Name</label>
                                    <input type="text" name="firstName" value={user.firstName} placeholder='First Name' className='form-control' onChange={(e) => setUser({ ...user, firstName: e.target.value })} required='required' />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" name="lastName" value={user.lastName} placeholder='Last Name' className='form-control' onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" name="email" value={user.email} placeholder='Email' className='form-control' onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" name="password" value={user.password} placeholder='Password' className='form-control' onChange={(e) => setUser({ ...user, password: e.target.value })} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" name="confirmPassword" value={user.confirmPassword} placeholder='Confirm Password' className='form-control' onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} />
                                </div>
                                <div>
                                    <span>Already have account ? </span><Link to='/login' style={{ textDecoration: 'none', fontSize: '16px' }}> Signin Here </Link>
                                </div>
                                <button type='button' className='btn btn-primary mt-3' onClick={signup}>Signup</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register