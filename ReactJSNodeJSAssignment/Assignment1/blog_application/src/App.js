import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Profile from './components/UserProfile/Profile';
import Register from './components/Register/Register';
import CreateBlog from './components/Blog/CreateBlog';
import EditBlog from './components/Blog/EditBlog';
import BlogDetails from './components/Blog/BlogDetails';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000} pauseOnFocusLoss />
      <Routes>
        <Route path='/:userId' element={<Home />} ></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Register />}></Route>
        <Route path='/profile/:userId' element={<Profile />}></Route>
        <Route path='/createBlog/:userId' element={<CreateBlog />}></Route>
        <Route path='/editBlog/:userId/:blogId' element={<EditBlog />}></Route>
        <Route path='/blogDetails/:userId/:blogId' element={<BlogDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
