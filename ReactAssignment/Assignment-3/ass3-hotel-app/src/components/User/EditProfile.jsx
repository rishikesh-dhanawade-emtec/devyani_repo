import React, { useState } from 'react';
import UserNavbar from './UserNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {showUsers, userUpdate} from '../../features/users/usersSlice';
import { toast } from 'react-toastify';

const EditProfile = () => {

    const {userId} = useParams();
    console.log(userId);

    const userData = useSelector(showUsers)
    const currentUser = userData.find(user => user.id === userId);
    console.log(currentUser);

    const [name, setName] = useState(currentUser.name);
    const [city, setCity] = useState(currentUser.city);
    const [email, setEmail] = useState(currentUser.email);
    const [contact, setContact] = useState(currentUser.contact);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onNameChanged = e => setName(e.target.value);
    const onCityChanged = e => setCity(e.target.value);
    const onEmailChanged = e => setEmail(e.target.value);
    const onContactChanged = e => setContact(e.target.value);

    function onUpdateClicked() {
        if (name && city && email && contact) {
            dispatch(userUpdate({ id: userId, name, city, email, contact }))
            toast.success('Profile Data Updated Successfully!!');
            navigate(`/showProfile/${userId}`);
        }
    }

    return (
        <>
            <UserNavbar />
            <div className="container">
                <h3 className='text-center m-3' style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>Update Profile</h3>
                <hr />
                <div className="content text-center" style={{ marginTop: '50px' }}>
                    <div className="col-md-6 shadow mx-auto" style={{ padding: 20 }}>
                        <form>
                            <div className="form-group" style={{ padding: 10 }}>
                                <input type="text" className='form-control' placeholder='Name' name='name' id='name' value={name} onChange={onNameChanged} />
                            </div>
                            <div className="form-group" style={{ padding: 10 }}>
                                <input type='text' placeholder='City' className='form-control' style={{ resize: 'none' }} value={city} name='city' id='city' onChange={onCityChanged} />
                            </div>
                            <div className="form-group" style={{ padding: 10 }}>
                                <input type="email" className='form-control' placeholder='Email Address' value={email} name='email' id='email' onChange={onEmailChanged} />
                            </div>
                            <div className='form-group' style={{ padding: 10 }}>
                                <input type='number' placeholder='Contact Number' className='form-control' style={{ resize: 'none' }} value={contact} name='contact' id='contact' onChange={onContactChanged} />
                            </div>
                            <div className='form-group' style={{ padding: 10 }}>
                                <input type='button' className='btn' onClick={onUpdateClicked} value='Update' style={{ fontWeight: 'bold',background: '#0071c2', color: 'white' }} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile