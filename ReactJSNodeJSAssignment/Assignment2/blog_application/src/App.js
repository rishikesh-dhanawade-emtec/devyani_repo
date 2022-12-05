import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import BlogDetails from './components/BlogDetails';
import CreateBlog from './components/CreateBlog';
import EditBlog from './components/EditBlog';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <ToastContainer />
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
