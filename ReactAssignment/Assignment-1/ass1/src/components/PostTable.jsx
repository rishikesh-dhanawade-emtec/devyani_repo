// Create a component to render table and unordered list for the following array

import React from 'react';

const PostTable = (props) => {
    // console.log(props);
    const posts = props.posts;

    return (
        <div className='container'>
            <h2 style={{ textAlign: 'center' }}>Posts</h2>
            <table className='table table-striped text-center'>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            posts.map((post, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{post.userId}</td>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.body}</td>
                                    </tr>
                                )
                            })
                        }
                </tbody>
            </table>
        </div>
    )
}

export default PostTable