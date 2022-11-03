// Create a login component to get email address and password from user. The component should contian a login button. The login button should print the user credentials on console.

import React from 'react';
import { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Please fill the fields!');
        }

        console.log(`Email Address : ${email}`);
        console.log(`Password : ${password}`);

    }

    return (
        <>
            <div className='container'>
                <h2 style={{ margin: 10, textAlign: 'center' }}>LOGIN</h2>
                <div className="row">
                    <div className='col'></div>
                    <div className="col-lg-6">
                        <form onSubmit={login}>
                            <div className="form-group mb-3">
                                <label className='form-label'>Email Address</label>
                                <input type="email" name="email" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                            </div>
                            <div className="form-group mb-3">
                                <label className='form-label'>Password</label>
                                <input type="password" name="password" value={password} className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                            </div>
                            <button type='submit' className='btn btn-outline-success'>Login</button>
                        </form>
                    </div>
                    <div className="col"></div>
                </div>
            </div>

        </>
    )
}

export default Login