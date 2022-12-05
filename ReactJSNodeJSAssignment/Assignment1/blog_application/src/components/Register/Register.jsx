import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import PasswordChecklist from "react-password-checklist";

const Register = () => {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();

    const existingUser = () => {
        if (user.firstName === '' || user.lastName === '' || user.password === '' || user.confirmPassword === '') {
            toast.warn('Please fill the details!!')
        } else {
            if (user.email !== '') {
                axios.post("http://localhost:3000/user/userEmail", {
                    email: user.email
                }).then((response) => {
                    const data = response.data
                    if (data) {
                        toast.warn('User already exists');
                    } else { }
                }).catch((error) => {
                    const err = error.response.data.message;
                    if (err === 'User Not Found!') {
                        signup();
                    } else {
                        toast.error(`Email must be an email!`);
                    }
                });
            } else {
                toast.error(`Email should not be empty`);
            }
        }
    }

    const signup = () => {
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
        const pass = strongRegex.test(user.password);
        if (pass) {
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
                    console.log(error)
                    toast.error('Something went wrong!!');
                })
            } else {
                toast.warn('Password and Confirm Password does not matched!!')
            }
        } else {
            toast.error(`Enter valid Password`);
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
                                {
                                    user.password ?
                                        <PasswordChecklist style={{ fontSize: 15 }} iconSize={13}
                                            rules={["minLength", "specialChar", "number", "capital", "match", "lowercase"]} minLength={5} value={user.password} valueAgain={user.confirmPassword}
                                            messages={{
                                                minLength: "Password has more than 5 characters.",
                                                specialChar: "Password has special characters.",
                                                number: "Password has a number.",
                                                capital: "Password has a capital letter.",
                                                match: "Passwords match.",
                                            }}
                                        />
                                        : <p></p>
                                }
                                <div className="form-group mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" name="confirmPassword" value={user.confirmPassword} placeholder='Confirm Password' className='form-control' onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} />
                                </div>
                                <div>
                                    <span>Already have account ? </span><Link to='/login' style={{ textDecoration: 'none', fontSize: '16px' }}> Signin Here </Link>
                                </div>
                                <button type='button' className='btn btn-primary mt-3' onClick={existingUser}>Signup</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register