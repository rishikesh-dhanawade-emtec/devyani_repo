import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userAdded } from '../../features/users/usersSlice';
import './register.css';

const Register = () => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const users = useSelector(state => state.users);
    console.log(users);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onNameChanged = e => setName(e.target.value);
    const onAddressChanged = e => setAddress(e.target.value);
    const onEmailChanged = e => setEmail(e.target.value);
    const onPasswordChanged = e => setPassword(e.target.value);
    const onConfirmPasswordChanged = e => setConfirmPassword(e.target.value);

    const onRegisterClicked = () => {
        if (name && address && email && password && confirmPassword) {
            if (password === confirmPassword) {
                dispatch(userAdded(name, address, email, password, confirmPassword))
                setName('');
                setAddress('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                toast.success('Registered Successfully !!');
                navigate('/login');
            }
            else {
                toast.warning('Enter Correct Password');
                setName('');
                setAddress('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                navigate('/register');
            }
        }
    }

    return (
        <>
            <section className='form shadow m-5'>
                <div className="container">
                    <div className="row register-row no-gutters">
                        <div className="col-lg-5">
                            <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" alt="RegisterImage" className='RegisterImage img-fluid' />
                        </div>
                        <div className="col-lg-7 px-5">
                            <h1 className='font-weight-bold py-3 text-uppercase' style={{ textAlign: 'center' }}>Register</h1>
                            <form>
                                <div className="form-row">
                                    <div className="form-group mb-3">
                                        <input type="text" className='form-control' placeholder='Name' name='name' id='name' value={name} onChange={onNameChanged} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type='text' placeholder='City' className='form-control' style={{ resize: 'none' }} value={address} name='address' id='address' onChange={onAddressChanged} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="email" className='form-control' placeholder='Email Address' value={email} name='email' id='email' onChange={onEmailChanged} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="password" className='form-control' placeholder='Password' value={password} name='password' id='password' onChange={onPasswordChanged} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="password" className='form-control' placeholder='Confirm Password' value={confirmPassword} name='confirmPassword' id='confirmPassword' onChange={onConfirmPasswordChanged} />
                                    </div>
                                    <button onClick={onRegisterClicked} type='button' className='btn btn-success mt-3 mb-4'>Register</button>
                                </div>
                            </form>
                            <p><span>Already have an account ? </span><Link to='/login' style={{ textDecoration: 'none', fontSize: '18px' }}> Sign In </Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register