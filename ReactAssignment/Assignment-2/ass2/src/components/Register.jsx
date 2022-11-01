// Create a registration component to get the user details. The component should contian a register button. The button should print the user credentials on console.

import React from 'react'
import { useState } from 'react';

const Register = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = (e) => {
        e.preventDefault();

        if (!name || !number || !address || !email || !password) {
            alert('Please fill the fields!');
        }
        console.log(`Name : ${name}`);
        console.log(`Contact : ${number}`);
        console.log(`Address : ${address}`);
        console.log(`Email Address : ${email}`);
        console.log(`Password : ${password}`);

    }
    return (
        <>
            <div className='container'>
                <h2 style={{ margin: 10, textAlign: 'center' }}>REGISTER</h2>
                <div className="row">
                    <div className='col'></div>
                    <div className="col-lg-6">
                        <form onSubmit={register}>
                            <div className="form-group mb-3">
                                <label className='form-label'>Name</label>
                                <input type="text" name="name" value={name} className="form-control" onChange={(e) => setName(e.target.value)} placeholder='Name' />
                            </div>
                            <div className="form-group mb-3">
                                <label className='form-label'>Contact Number</label>
                                <input type="number" placeholder='Contact Number' name="number" value={number} className="form-control" onChange={(e) => setNumber(e.target.value)} />
                            </div>
                            <div className="form-group mb-3">
                                <label className='form-label'>Address</label>
                                <input type="text" name="address" placeholder='Address' value={address} className="form-control" onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div className="form-group mb-3">
                                <label className='form-label'>Email Address</label>
                                <input type="email" name="email" placeholder='Email Address' value={email} className="form-control" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group mb-3">
                                <label className='form-label'>Password</label>
                                <input type="password" name="password" placeholder='Password' value={password} className="form-control" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type='submit' className='btn btn-outline-success'>Register</button>
                        </form>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </>
    )
}

export default Register