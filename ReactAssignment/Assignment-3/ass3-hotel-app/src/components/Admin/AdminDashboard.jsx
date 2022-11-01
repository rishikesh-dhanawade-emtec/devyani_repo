import React from 'react'
import { useSelector } from 'react-redux';
import AdminNavbar from './AdminNavbar';
import { showAdmin } from '../../features/users/usersSlice';

const AdminDashboard = () => {

  const admin = useSelector(showAdmin);
  console.log(admin);

  const adminData = admin.find(admin => admin.id) 
  console.log(adminData);

  return (
    <div>
      <AdminNavbar />
      <div className='container'>
        <h3 className='text-center mt-5' style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>Hi, Welcome {adminData.name} </h3>
      </div>
    </div>
  )
}

export default AdminDashboard