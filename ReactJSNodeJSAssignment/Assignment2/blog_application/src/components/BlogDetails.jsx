import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import { toast } from 'react-toastify';
import axios from 'axios';
import { format, parseISO } from 'date-fns';

const BlogDetails = () => {

    const { userId, blogId } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState([]);
    const [comment, setComment] = useState([]);

    useEffect(() => {
        setLoading(true);
        getBlogDetails();
        getAllComments();
    }, []);

    async function getBlogDetails() {
        await axios({
            url: 'http://localhost:3000/graphql',
            method: 'POST',
            data: {
                query: `query {
                getBlogDetails(id: ${blogId}) {
                    id, title, contents, tags, date, likes, dislikes
                    users {
                        id, firstName, lastName, email,
                    }
                }
            }`
            }
        }).then((response) => {
            const data = response.data.data.getBlogDetails;
            setBlogs(data);
        }).catch(function (error) {
            toast.error('Blogs not found!!')
        });
    }

    const createComment = (id) => {
        axios({
            url: 'http://localhost:3000/graphql',
            method: 'POST',
            data: {
                query: `mutation{
                    createComment(
                        userId: ${userId}, blogId: ${id}, comments: "${comment.comments}") {
                        id, comments, date, 
                        users { 
                            id, firstName, lastName, email
                        }
                    }
                  }`
            }
        }).then(function (response) {
            setComment(response.data.data.createComment);
            toast.success(`Commented Successfully!!`);
        }).catch(function (error) {
            toast.error('Something went wrong...Please try again!!');
        })
    }

    function getAllComments() {
        axios({
            url: 'http://localhost:3000/graphql',
            method: 'POST',
            data: {
                query: `query{
                    getAllComments(id: ${blogId}) {
                        id, comments, date, 
                        users { 
                            id, firstName, lastName, email
                        }
                    }
                  }`
            }
        }).then((response) => {
            const data = response.data.data.getAllComments;
            setComment(data);
        }).catch(function (error) {
            toast.error('Comments not found!!')
        }).finally(() => {
            setLoading(false);
        });
    }
    

    if (loading) {
        return <p>Data is loading...</p>;
    }

    const newDate = new Date(blogs.date).toDateString().slice(3);

    const ratings = blogs.likes - blogs.dislikes > 0 ? blogs.likes - blogs.dislikes : 0;

    const stars = Math.round((blogs.likes / (blogs.likes + blogs.dislikes)) * 5)

    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Blog Header */}
            <Header />

            {/* Blog */}

            <div className="container" style={{ padding: '0 50px 10px 50px' }} key={blogId}>
                <div className="row">
                    <div className="col">
                        {/* Blog Card */}
                        <div className="card mt-4" style={{ border: 'none' }}>
                            <div className="card-body" style={{ padding: '30px 40px 10px 40px' }}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h4 className="card-title" style={{ fontWeight: 'bold' }}>{blogs.title}</h4>
                                        <p className='font-small form-text'>Created by {user.firstName} on {newDate} </p>
                                    </div>
                                    {/* Like */}
                                    <div className="col-lg-6">
                                        <div className="row" style={{ justifyContent: 'end' }}>

                                            {/* Rating */}
                                            <div className="col-lg-4 text-center">
                                                {
                                                    blogs.likes > 0 ?
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
                                <p className='card-text' style={{ textAlign: 'justify' }}>{blogs.contents}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comments */}
                <div className="container" style={{ padding: '0 20px 10px 50px' }} key={comment.id}>
                    {
                        comment.length ?
                            comment.map((value) => {
                                return (
                                    <div className="row">
                                        <div className="col">
                                            <div className="card" style={{ border: 'none' }}>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <p className='font-small form-text'>Commented by {value.users.firstName} on {format(parseISO(value.date), 'MMM dd, yyyy')}</p>
                                                        </div>
                                                    </div>
                                                    <p className='card-text' style={{ textAlign: 'justify' }}>{value.comments}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            : <p></p>
                    }
                </div>

                {/* Comment box */}
                <div className="container" style={{ padding: '0 30px 5px 60px' }}>
                    <form action="">
                        <div className="form-group mb-3">
                            <textarea className="form-control" placeholder="Comment here..." rows={6} style={{ resize: 'none' }} value={comment.comments} onChange={(e) => setComment({ ...comment, comments: e.target.value })} />
                        </div>
                        <div className=''>
                            <button onClick={() => createComment(blogs.id)} type='button' className='btn btn-primary mt-3' style={{ padding: '8px 25px 8px 25px', fontSize: '16px' }}>Submit</button>
                        </div>
                    </form>
                </div>


                <div style={{ padding: '10px' }}>
                    <Link style={{ color: 'blue', fontSize: '35px' }}><i className="bi bi-arrow-left-square-fill"></i></Link>
                    <Link style={{ color: 'blue', fontSize: '35px', paddingLeft: '10px' }}><i className="bi bi-arrow-right-square-fill"></i></Link>
                </div>
            </div>

            {/* Footer */}
            <Footer />

        </>
    )
}

export default BlogDetails