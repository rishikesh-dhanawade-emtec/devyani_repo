import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const signin = () => {

        if (user.email === '' || user.password === '') {
            toast.warn('Please fill the details..')
        } else {
            axios({
                url: 'http://localhost:3000/graphql',
                method: 'POST',
                data: {
                    query: `query {
                        signin(email:"${user.email}", password:"${user.password}") 
                        {
                          id, email, firstName, lastName
                        }
                      }`
                }
            }).then(function (response) {
                const userData = response.data.data.signin;
                setUser('');
                toast.success('User Login Successfully!!');
                navigate(`/${userData.id}`);
            }).catch(function (error) {
                toast.error('Invalid Credentials!!');
            });
        }
    }

    return (
        <>
            <section className='form' style={{ marginTop: '10%', fontFamily: 'Poppins' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6 shadow p-5">
                            <h4 className='text-center pt-0 text-uppercase' style={{ fontWeight: '600' }}>Login</h4>
                            <div className="form-group mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" name="email" value={user.email} placeholder='Email' className='form-control' onChange={(e) => setUser({ ...user, email: e.target.value })} />
                            </div>
                            <div className="form-group mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" name="password" value={user.password} placeholder='Password' className='form-control' onChange={(e) => setUser({ ...user, password: e.target.value })} />
                            </div>
                            <button type='button' className='btn btn-primary mt-3 mb-4' onClick={signin}>Login</button>
                            <div>
                                <span>No account ? </span><Link to='/' style={{ textDecoration: 'none', fontSize: '16px' }}> Register Here </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login