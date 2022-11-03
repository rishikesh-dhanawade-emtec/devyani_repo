import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import { HotelList } from './components/Admin/HotelList';
import { AddHotel } from './components/Admin/AddHotel';
import EditHotel from './components/Admin/EditHotel';
import Register from './components/register/Register';
import { ToastContainer } from 'react-toastify';
import Login from './components/login/Login';
import UserList from './components/Admin/UserList';
import UserDashboard from './components/User/UserDashboard';
import AdminDashboard from './components/Admin/AdminDashboard';
import Hotels from './components/User/Hotels';
import BookHotel from './components/User/BookHotel';
import ShowBooking from './components/Admin/ShowBooking';
import ShowCancellation from './components/Admin/ShowCancellation';
import ShowUserBooking from './components/User/ShowUserBooking';
import ShowProfile from './components/User/ShowProfile';
import ShowBookingHistory from './components/User/ShowBookingHistory';
import ShowCompleteBooking from './components/Admin/ShowCompleteBooking';
import AdminNavbar from './components/Admin/AdminNavbar';
import EditProfile from './components/User/EditProfile';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/hotelList' element={<HotelList />}></Route>
        <Route path='/addHotel' element={<AddHotel/>}></Route>
        <Route path='/hotels/:userId' element={<Hotels />}></Route>
        <Route exact path='/editHotel/:hotelId' element={<EditHotel />}></Route>
        <Route path='/userList' element={<UserList />}></Route>
        <Route path='/userDashboard/:userId' element={<UserDashboard />}></Route>
        <Route path='/adminDashboard' element={<AdminDashboard />}></Route>
        <Route exact path='/bookHotel/:hotelId/:userId' element={<BookHotel />}></Route>
        <Route path='/showBooking' element={<ShowBooking />}></Route>
        <Route path='/showCancellation' element={<ShowCancellation />}></Route>
        <Route path='/showUserBooking/:userId' element={<ShowUserBooking />}></Route>
        <Route path='/showProfile/:userId' element={<ShowProfile />}></Route>
        <Route path='/showBookingHistory/:userId' element={<ShowBookingHistory />}></Route>
        <Route path='/showCompleteBooking' element={<ShowCompleteBooking />}></Route>
        <Route path='/adminNavbar' element={<AdminNavbar />}></Route>
        <Route path='/editProfile/:userId' element={<EditProfile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
