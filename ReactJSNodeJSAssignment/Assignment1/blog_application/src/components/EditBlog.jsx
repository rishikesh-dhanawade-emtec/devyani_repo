import { React, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import axios from 'axios';
import { toast } from 'react-toastify';

const EditBlog = () => {

  const { userId, blogId } = useParams();

  const [blog, setBlog] = useState({
    title: '',
    contents: '',
    tags: ''
  });

  useEffect(() => {
    getBlogDetails();
  }, [])

  const navigate = useNavigate();

  async function getBlogDetails() {
    await axios.get(`http://localhost:3000/blog/${blogId}`).then((response) => {
      const blog = response.data
      setBlog(blog);
      console.log(blog)
    }).catch(function (error) {
      toast.error('Blogs not found!!')
    }).finally(() => {
      // setLoading(false);
    });
  }

  const updateBlog = () => {
    axios.put(`http://localhost:3000/blog/${userId}/${blogId}`, {
      title: blog.title,
      contents: blog.contents,
      tags: blog.tags
    }).then(function (response) {
      setBlog(response.data);
      toast.success('Blog Updated Successfully!!');
      navigate(`/${userId}`);
    }).catch(function (error) {
      toast.error('Something went wrong!!');
    });
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
            <button type='button' className='btn btn-primary mt-3' style={{ padding: '8px 25px 8px 25px', fontSize: '16px' }} onClick={updateBlog}>Update</button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default EditBlog