import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { showAdmin, showUsers } from '../../features/users/usersSlice';
import './login.css';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const users = useSelector(showUsers);
  // console.log(users);

  const admin = useSelector(showAdmin);
  // console.log(admin);

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const onEmailChanged = e => setEmail(e.target.value);
  const onPasswordChanged = e => setPassword(e.target.value);

  const onLoginClicked = () => {
    if (!email || !password) {
      return toast.warning("Please fill in all fields!!");
    }

    const loggedIn = users.find(user => user.email === email && user.password === password);
    console.log(loggedIn);

    const adminLoggedIn = admin.find(admin => admin.email === email && admin.password === password);
    // console.log(adminLoggedIn);

    if (loggedIn) {
      toast.success('User Login Successfully !!');
      navigate(`/userDashboard/${loggedIn.id}`);
    }
    else if (adminLoggedIn) {
      toast.success('Admin Login Successfully !!');
      navigate('/adminDashboard')
    }
    else {
      toast.warning('Wrong Crendentials!!');
      setEmail('');
      setPassword('');
    }
  }

  return (
    <>
      <section className='form shadow' style={{ margin: '5rem' }}>
        <div className="container">
          <div className="row login-row no-gutters">
            <div className="col-lg-5">
              <img src="https://i.pinimg.com/736x/65/dc/a6/65dca69f78972935caf61580e7c17bd9.jpg" alt="loginImage" className='loginImage img-fluid' />
            </div>
            <div className="col-lg-7 px-5">
              <h1 className='font-weight-bold py-3 text-uppercase'>Login</h1>
              <form>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input type="email" placeholder='Email-Address' className='form-control my-4 p-2' value={email} onChange={onEmailChanged} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input type="password" placeholder='******' className='form-control my-4 p-2' value={password} onChange={onPasswordChanged} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <button onClick={onLoginClicked} type='button' className='btn btn1 btn-success mt-3 mb-4'>Login</button>
                  </div>
                </div>
              </form>
              <p style={{ marginTop: '10px' }}>Don't have an account ? <Link to='/register' style={{ textDecoration: 'none', fontSize: '18px' }}>Register Here</Link></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login