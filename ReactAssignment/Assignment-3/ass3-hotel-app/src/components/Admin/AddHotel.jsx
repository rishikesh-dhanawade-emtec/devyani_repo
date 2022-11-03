import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { hotelAdded } from '../../features/hotels/hotelsSlice';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';

export const AddHotel = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [desc, setDesc] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onNameChanged = e => setName(e.target.value);
    const onAddressChanged = e => setAddress(e.target.value);
    const onContactChanged = e => setContact(e.target.value);
    const onEmailChanged = e => setEmail(e.target.value);
    const onDescChanged = e => setDesc(e.target.value);

    function onSaveHotelClicked() {
        if (name && address && contact && email && desc) {
            dispatch(hotelAdded(name, address, contact, email, desc))
            setName('');
            setAddress('');
            setContact('');
            setEmail('');
            setDesc('');
            navigate('/hotelList');
        }
    }

    return (
        <>
        <AdminNavbar />
            <div className="content text-center" style={{marginTop: '50px'}}>
                <div className="col-md-6 shadow mx-auto" style={{ padding: 20 }}>
                    <form>
                        <h2 className='text-center p-3'>Add a New Hotel</h2>
                        <div className="form-group" style={{ padding: 10 }}>
                            <input type="text" id="hotelName" name="hotelName" value={name} placeholder='Hotel Name' className='form-control' onChange={onNameChanged}
                            />
                        </div>
                        <div className="form-group" style={{ padding: 10 }}>
                            <input type="text" id="hotelAddress" name="hotelAddress" value={address} placeholder='Hotel Address' className='form-control' onChange={onAddressChanged}
                            />
                        </div>
                        <div className="form-group" style={{ padding: 10 }}>
                            <input type="number" id="hotelContact" name="hotelContact" value={contact} placeholder='Hotel Contact Number' className='form-control' onChange={onContactChanged}
                            />
                        </div>
                        <div className='form-group' style={{ padding: 10 }}>
                            <input type='email' id="hotelEmail" name="hotelEmail" value={email} onChange={onEmailChanged} placeholder='Hotel Email Address' className='form-control'
                            />
                        </div>
                        <div className='form-group' style={{ padding: 10 }}>
                            <input type='text' id="hotelDesc" name="hotelDesc" value={desc} onChange={onDescChanged} placeholder='Hotel Description' className='form-control'
                            />
                        </div>
                        <div className='form-group' style={{ padding: 10 }}>
                            <input type='button' className='btn btn-outline-success' onClick={onSaveHotelClicked} value='Add Hotel' style={{fontWeight: 'bold'}} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}