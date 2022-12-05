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

    const [currentPage, setCurrentPage] = useState(1);

    const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end })
    }

    useEffect(() => {
        setLoading(true);
        getAllBlogs();
    }, []);

    async function getAllBlogs() {
        await axios.get(`http://localhost:3000/blog`).then((response) => {
            const blog = response.data
            setBlogs(blog);
        }).catch(function (error) {
            toast.error('Blogs not found!!')
        }).finally(() => {
            setLoading(false);
        });
    }

    const searchBlog = () => {
        axios.get(`http://localhost:3000/blog/search/${tag.tags}`).then((response) => {
            const data = response.data
            setBlogs(data);
        }).catch(function (error) {
            toast.error('Blogs not found!!')
        }).finally(() => {
            setLoading(false);
        });
    }

    const likes = (id) => {
        axios.patch(`http://localhost:3000/blog/likes/${id}`).then((response) => {
            const like = response.data;
            setBlogs(like);
        }).catch(function (error) {
            console.log(error);
        });
    }

    const dislikes = (id) => {
        axios.patch(`http://localhost:3000/blog/dislikes/${id}`).then((response) => {
            const dislike = response.data;
            setBlogs(dislike);
        }).catch(function (error) {
            console.log(error);
        })
    }

    const editBlog = (id) => {
        navigate(`/editBlog/${userId}/${id}`);
    }

    const readMoreBlog = (id) => {
        navigate(`/blogDetails/${userId}/${id}`);
    }

    const deleteBlog = (id) => {
        axios.delete(`http://localhost:3000/blog/${id}`).then((response) => {
            const data = response.data;
            toast.success('Blog Deleted Successfully!!');
            setBlogs(data);
        }).catch(function (error) {
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

            {/* All Blogs Details */}
            {
                (blogs.length > 0) ?
                    <>
                        {/* Search Bar */}
                        <div className="container pt-3" style={{ padding: '0 50px 0px 50px' }}>
                            <div className="input-group">
                                <input className='form-control' type="search" name="search" value={tag.tags} onChange={(e) => setTag({ ...tag, tags: e.target.value })} placeholder='Search Here' />
                                <button className='btn btn-primary' onClick={() => searchBlog()}>Search</button>
                            </div>
                        </div>
                        <div className="container" style={{ padding: '0 50px 10px 50px' }} key={blogs.id}>
                            {
                                blogs.slice(pagination.start, pagination.end).map((value) => {

                                    const { id, title, contents, date, user } = value;

                                    const ratings = value.likes - value.dislikes > 0 ? value.likes - value.dislikes : 0;

                                    const stars = Math.round((value.likes/(value.likes+value.dislikes))*5)

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
                                                                    <p className='font-small form-text'>Created by {user.firstName} on {format(parseISO(date), 'MMM dd, yyyy')}</p>
                                                                </div>
                                                                {/* Like */}
                                                                <div className="col-lg-6">
                                                                    <div className="row" style={{ justifyContent: 'end' }}>
                                                                        <div className="col-lg-4">
                                                                            <button className='btn btn-outline' onClick={() => likes(id)} style={{ color: 'black', fontSize: '25px' }}><i className="bi bi-hand-thumbs-up"></i></button>
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
                                                                    (userId == (value.user.id)) ?
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