import { React, useState, useEffect } from 'react'
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import Navbar from '../Home/Navbar';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Profile = () => {

    const { userId } = useParams();

    const country_list = ["United States", "Canada", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and/or Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecudaor", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France, Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kosovo", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfork Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbarn and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States minor outlying islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virigan Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zaire", "Zambia", "Zimbabwe"];

    useEffect(() => {
        getUser();
    },[]);

    const [user, setUser] = useState([]);

    const navigate = useNavigate();

    async function getUser() {
        await axios.get(`http://localhost:3000/user/${userId}`).then((response) => {
            const userData = response.data;
            setUser(userData);
        }).catch(function (error) {
            toast.error('User Not Found!!');
        })
    }

    const saveProfile = () => {
        axios.put(`http://localhost:3000/user/${userId}`, {
            firstName: user.firstName,
            lastName: user.lastName,
            city: user.city,
            state: user.state,
            country: user.country,
            postalCode: user.postalCode,
            birthDate: user.birthDate,
            gender: user.gender,
        }).then(function (response) {
            const profileData = response.data;
            setUser(profileData);
            toast.success('Profile Updated Successfully!!');
            navigate(`/${userId}`);
        }).catch(function (error) {
            console.log(error)
            toast.error('Something went wrong!!');
        });
    }

    return (
        <>

            {/* Navbar */}
            <Navbar />

            {/* Blog Header */}
            <Header />

            {/* Profile Updation Form */}
            <div className="container pt-5 mb-5" style={{ fontFamily: 'Poppins' }}>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-4">
                        <div className="form-group mb-3">
                            <label className="form-label">First Name</label>
                            <input type="text" name="firstName" placeholder='First Name' className='form-control' value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Email</label>
                            <input title="Field can't change" type="email" name="email" placeholder='Email' className='form-control' value={user.email} disabled />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">City</label>
                            <input type="text" name="city" placeholder='City' className='form-control' value={user.city} onChange={(e) => setUser({ ...user, city: e.target.value })} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Country</label>
                            <select className="form-select" aria-label="Default select example" value={user.country} onChange={(e) => setUser({ ...user, country: e.target.value })}>
                                <option selected disabled hidden>Choose Country</option>
                                {
                                    country_list.map((country) => {
                                        return <option value={country}>{country}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Birth Date</label>
                            <input type="date" name="birthDate" className='form-control' value={user.birthDate} onChange={(e) => setUser({ ...user, birthDate: e.target.value })} />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group mb-3">
                            <label className="form-label">Last Name</label>
                            <input type="text" name="lastName" placeholder='Last Name' className='form-control' value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Password</label>
                            <input title="Field can't change" type="password" name="password" placeholder='Password' className='form-control' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} disabled />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">State</label>
                            <input type="text" name="state" placeholder='State' className='form-control' value={user.state} onChange={(e) => setUser({ ...user, state: e.target.value })} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Postal Code</label>
                            <input type="number" name="postalCode" placeholder='Postal Code' className='form-control' value={user.postalCode} onChange={(e) => setUser({ ...user, postalCode: e.target.value })} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Gender</label>
                            <select className="form-select" aria-label="Default select example" value={user.gender} onChange={(e) => setUser({ ...user, gender: e.target.value })}>
                                <option>Choose Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <button type='button' className='btn btn-primary mt-3' style={{ padding: '8px 25px 8px 25px', fontSize: '16px' }} onClick={saveProfile}>Save</button>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Profile