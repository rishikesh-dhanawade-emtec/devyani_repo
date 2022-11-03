import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hotelUpdated } from '../../features/hotels/hotelsSlice';
import { useNavigate, useParams } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import { toast } from 'react-toastify';

const EditHotel = ({ match }) => {
    const { hotelId } = useParams();

    const hotel = useSelector(state =>
        state.hotels.find(hotel => hotel.id === hotelId)
    )

    const [name, setName] = useState(hotel.name);
    const [address, setAddress] = useState(hotel.address);
    const [contact, setContact] = useState(hotel.contact);
    const [email, setEmail] = useState(hotel.email);
    const [desc, setDesc] = useState(hotel.desc);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onNameChanged = e => setName(e.target.value);
    const onAddressChanged = e => setAddress(e.target.value);
    const onContactChanged = e => setContact(e.target.value);
    const onEmailChanged = e => setEmail(e.target.value);
    const onDescChanged = e => setDesc(e.target.value);

    function onSaveHotelClicked() {
        if (name && address && email && contact) {
            dispatch(hotelUpdated({ id: hotelId, name, address, contact, email, desc }))
            toast.success('Hotel Data Updated Successfully!!');
            navigate(`/hotelList`);
        }
    }

    return (
        <>
        <AdminNavbar/>
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <h2 className='text-center p-3'>Edit Hotel Data</h2>
                        <div className='row'>
                            <div className="col-md-6 shadow mx-auto" style={{ padding: 20 }}>
                                <form>
                                    <div className="form-group" style={{ padding: 10 }}>
                                        <label className='form-label'>Hotel Name:</label>
                                        <input type="text" id="hotelName" name="hotelName" value={name} placeholder='Hotel Name' className='form-control' onChange={onNameChanged}
                                        />
                                    </div>
                                    <div className="form-group" style={{ padding: 10 }}>
                                        <label className='form-label'>Hotel Address:</label>
                                        <input type="text" id="hotelAddress" name="hotelAddress" value={address} placeholder='Hotel Address' className='form-control' onChange={onAddressChanged}
                                        />
                                    </div>
                                    <div className="form-group" style={{ padding: 10 }}>
                                        <label className='form-label'>Hotel Contact Number:</label>
                                        <input type="number" id="hotelContact" name="hotelContact" value={contact} placeholder='Hotel Contact Number' className='form-control' onChange={onContactChanged}
                                        />
                                    </div>
                                    <div className='form-group' style={{ padding: 10 }}>
                                        <label className='form-label'>Hotel Email Address:</label>
                                        <input type='email' id="hotelEmail" name="hotelEmail" value={email} onChange={onEmailChanged} placeholder='Hotel Email Address' className='form-control'
                                        />
                                    </div>
                                    <div className='form-group' style={{ padding: 10 }}>
                                        <label className='form-label'>Hotel Description:</label>
                                        <input type='text' id="hotelDesc" name="hotelDesc" value={desc} onChange={onDescChanged} placeholder='Hotel Description' className='form-control'
                                        />
                                    </div>
                                    <div className='form-group' style={{ padding: 10 }}>
                                        <input type='button' className='btn btn-outline-primary' onClick={onSaveHotelClicked} value='Update' style={{fontWeight: 'bold'}} />
                                        <input onClick={() => navigate(-1)} type="button" value="Back" className='btn btn-outline-secondary m-2' style={{fontWeight: 'bold'}} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditHotel;