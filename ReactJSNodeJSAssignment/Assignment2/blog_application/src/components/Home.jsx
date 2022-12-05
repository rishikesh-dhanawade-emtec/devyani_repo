import { React, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import Pagination from './Pagination';

const Home = () => {

    const { userId } = useParams();

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [tag, setTag] = useState({ tags: '' });
    const navigate = useNavigate();

    const [showPerPage, setShowPerPage] = useState(2);
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    });

    const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end })
    }

    useEffect(() => {
        setLoading(true);
        getAllBlogs();
    }, []);

    async function getAllBlogs() {
        await axios({
            url: 'http://localhost:3000/graphql',
            method: 'POST',
            data: {
                query: `query{
                    getAllBlogs {
                        id, title, contents, tags, date, likes, dislikes, 
                        users {
                            id, firstName, lastName, email
                        }
                    }
                  }`
            }
        }).then((response) => {
            const blog = response.data.data.getAllBlogs;
            setBlogs(blog);
        }).catch(function (error) {
            toast.error('Blogs not found!!')
        }).finally(() => {
            setLoading(false);
        });
    }

    const searchBlog = async () => {
        await axios({
            url: 'http://localhost:3000/graphql',
            method: 'POST',
            data: {
                query: `mutation {
                    searchBlog (tags: "${tag.tags}") {
                        id, title, contents, tags, date, likes, dislikes, 
                        users {
                            id, firstName, lastName, email
                        }
                        comments {
                            id, comments
                     }
                   }
                 }`
            }
        }).then((response) => {
            const data = response.data.data.searchBlog;
            setBlogs(data);
        }).catch(function (error) {
            toast.error('Blogs not found!!')
        }).finally(() => {
            setLoading(false);
        });
    }

    const updateBlogByLikes = (id) => {
        axios({
            url: 'http://localhost:3000/graphql',
            method: 'POST',
            data: {
                query: `mutation { 
                    updateBlogByLikes(id: ${id}) 
                    {
                        id, title, contents, tags, date, likes, dislikes
                        users {
                            id, firstName, lastName, email
                        }
                    }
                  }`
            }
        }).then((response) => {
            const data = response.data.data.updateBlogByLikes;
            setBlogs(data);
        }).catch(function (error) {
            console.log(error);
        });
    }

    const dislikes = (id) => {
        axios({
            url: 'http://localhost:3000/graphql',
            method: 'POST',
            data: {
                query: `mutation { 
                    updateBlogByDislikes(id: ${id}) 
                    {
                        id, title, contents, tags, date, likes, dislikes
                        users {
                            id, firstName, lastName, email
                        }
                    }
                  }`
            }
        }).then((response) => {
            const data = response.data.data.updateBlogByDislikes;
            setBlogs(data);
        }).catch(function (error) {
            console.log(error);
        });
    }

    const editBlog = (id) => {
        navigate(`/editBlog/${userId}/${id}`);
    }

    const readMoreBlog = (id) => {
        navigate(`/blogDetails/${userId}/${id}`);
    }

    const deleteBlog = (id) => {
        console.log(id)
        axios({
            url: 'http://localhost:3000/graphql',
            method: 'POST',
            data: {
                query: `mutation {
                    deleteBlog (id: ${id}) {
                        id, title, contents, tags, date, likes, dislikes,
                        users { id, firstName }
                    }
                  }`
            }
        }).then((response) => {
            const data = response.data.data.deleteBlog;
            console.log(data)
            toast.success('Blog Deleted Successfully!!');
            setBlogs(data);
            // getAllBlogs();
        }).catch(function (error) {
            console.log(error)
            toast.error('Something went wrong!!');
        });
    }

    if (loading) {
        return <p>Data is loading...</p>;
    }

    if (!Array.isArray(blogs)) {
        return <p>No Blogs Found!!</p>;
    }

    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Blog Header */}
            <Header />

            {/* Search Bar */}
            <div className="container pt-3" style={{ padding: '0 50px 0px 50px' }}>
                <div className="input-group">
                    <input className='form-control' type="search" name="search" value={tag.tags} onChange={(e) => setTag({ ...tag, tags: e.target.value })} placeholder='Search Here' />
                    <button className='btn btn-primary' onClick={() => searchBlog()}>Search</button>
                </div>
            </div>

            {/* All Blogs Details */}
            {
                (blogs.length > 0) ?
                    <>
                        <div className="container" style={{ padding: '0 50px 10px 50px' }} key={blogs.id}>
                            {
                                blogs.slice(pagination.start, pagination.end).map((value) => {

                                    const { id, title, contents, date, users } = value;

                                    const ratings = value.likes - value.dislikes > 0 ? value.likes - value.dislikes : 0;

                                    const stars = Math.round((value.likes / (value.likes + value.dislikes)) * 5)

                                    // const newDate = format(parseISO(date), 'MMM dd, yyyy');
                                    // console.log(newDate)

                                    return (
                                        <>
                                            <div className="row" key={id}>
                                                <div className="col">
                                                    {/* Blog Card */}
                                                    <div className="card mt-4">
                                                        <div className="card-body" style={{ padding: '30px 40px 10px 40px' }}>
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <h4 className="card-title" style={{ fontWeight: 'bold' }}>{title} </h4>
                                                                    <p className='font-small form-text'>Created by {users.firstName} on {format(parseISO(date), 'MMM dd, yyyy')}
                                                                    </p>
                                                                </div>
                                                                {/* Like */}
                                                                <div className="col-lg-6">
                                                                    <div className="row" style={{ justifyContent: 'end' }}>
                                                                        <div className="col-lg-3">
                                                                            <button className='btn btn-outline' onClick={() => updateBlogByLikes(id)} style={{ color: 'black', fontSize: '25px' }}><i className="bi bi-hand-thumbs-up"></i></button>
                                                                            <button className='btn btn-outline' onClick={() => dislikes(id)} style={{ paddingLeft: '10px', color: 'black', fontSize: '25px' }}><i className="bi bi-hand-thumbs-down"></i></button>
                                                                        </div>

                                                                        {/* Rating */}
                                                                        <div className="col-lg-4 text-center">
                                                                            {
                                                                                value.likes > 0 ?
                                                                                    [...Array(stars)].map((index) => {
                                                                                        index += 1;
                                                                                        return (
                                                                                            <Link style={{ color: '#FFD700', fontSize: '20px' }}><i className="bi bi-star-fill"></i></Link>
                                                                                        )
                                                                                    })
                                                                                    : <p></p>
                                                                            }
                                                                            <p className='font-small form-text p-0' style={{ fontSize: '14px' }}>{ratings} ratings</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className='card-text' style={{ textAlign: 'justify' }}>{contents}</p>

                                                            <div className="row">
                                                                <div className="col-lg-10">
                                                                    <button onClick={() => readMoreBlog(id)} className='btn btn-outline' style={{ textDecoration: 'none', fontWeight: '600' }}>Read More</button>
                                                                </div>
                                                                {
                                                                    (userId == (value.users.id)) ?
                                                                        <>
                                                                            <div className="col-lg-2 col-sm-2" style={{ justifySelf: 'end', width: '5%' }}>
                                                                                <button className='btn btn-outline' onClick={() => editBlog(id)} style={{ paddingLeft: '5px', color: 'black', fontSize: '30px' }}><i className='bi bi-pencil-square'></i></button>
                                                                            </div>
                                                                            <div className="col-lg-2 col-sm-2" style={{ justifySelf: 'end', width: '5%' }}>
                                                                                <button onClick={() => deleteBlog(id)} className='btn btn-outline' style={{ paddingLeft: '5px', color: 'black', fontSize: '30px' }}><i className='bi bi-trash3'></i></button>
                                                                            </div>
                                                                        </>
                                                                        : <p></p>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                            <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={blogs.length} />
                        </div>
                    </>
                    : <h3 className='text-center pt-4' style={{ color: 'red' }}>Blogs Not found</h3>
            }

            {/* Footer */}
            <Footer />
        </>
    )

}

export default Home