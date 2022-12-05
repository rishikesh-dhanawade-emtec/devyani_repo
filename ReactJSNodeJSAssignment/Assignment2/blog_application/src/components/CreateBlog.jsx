import { useNavigate, useParams } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import { React, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const CreateBlog = () => {

  const { userId } = useParams();

  const [blog, setBlog] = useState({
    title: '',
    contents: '',
    tags: ''
  });

  const navigate = useNavigate();

  const createBlog = () => {
    if (blog.title === '' || blog.contents === '') {
      toast.warn('please fill the details..')
    } else {
      axios({
        url: 'http://localhost:3000/graphql',
        method: 'POST',
        data: {
          query: `mutation {
            createBlog (id: ${userId}, title:"${blog.title}", contents: "${blog.contents}", tags: "${blog.tags}") 
            {
              id, title, contents, tags, date,
              users {
                id, firstName, lastName, email,
              }
            }
          }`
        }
      }).then(function (response) {
        const data = response.data.data.createBlog;
        setBlog('');
        toast.success(`Blog Created Successfully!!`);
        navigate(`/${userId}`);
      }).catch(function (error) {
        toast.error('Something went wrong...Please try again!!');
      })
    }
  }

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Blog Header */}
      <Header />

      {/* Blog Form */}
      <div className="container pt-3">
        <form style={{ margin: '5px 20px 5px 20px' }}>
          <div className="form-group mb-3">
            <label htmlFor="Title" className="form-label" style={{ fontWeight: 'bold' }}>Title</label>
            <input type="text" name="title" value={blog.title} className="form-control" placeholder='Title' onChange={(e) => setBlog({ ...blog, title: e.target.value })} />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="contents" className="form-label" style={{ fontWeight: 'bold' }}>Contents</label>
            <textarea className="form-control" placeholder="Leave a Content here" rows={6} style={{ resize: 'none' }} value={blog.contents} onChange={(e) => setBlog({ ...blog, contents: e.target.value })} />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="Tags" className="form-label" style={{ fontWeight: 'bold' }}>Tags</label>
            <input type="text" name="tags" value={blog.tags} className="form-control" placeholder='Tags' onChange={(e) => setBlog({ ...blog, tags: e.target.value })} />
          </div>
          <div className=''>
            <button type='button' className='btn btn-primary mt-3' style={{ padding: '8px 25px 8px 25px', fontSize: '16px' }} onClick={createBlog}>Submit</button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default CreateBlog