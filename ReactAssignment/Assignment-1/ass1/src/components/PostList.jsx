// Create a component to render table and unordered list for the following array

import React, {useState} from 'react';
import Post from './Post';

const PostList = (props) => {

    const { posts } = props;
    console.log(posts);

    const [postData, setPostData] = useState(posts);
    console.log(postData);

    const listItems = posts.map((post) => {
        return (
            <>
                <li>User Id : {post.userId}</li>
                <li>Id : {post.id}</li>
                <li>Title : {post.title}</li>
                <li>Body : {post.body}</li>
            </>
        )
    });

    const addData = (data) => {
        const totalPost = postData.length;
        data.id = totalPost + 1;
        const updateData = [...postData];
        updateData.push(data);
        setPostData(updateData);
    }

    return (
        <div className='container'>
            <h2>Post List</h2>
            <ul>
                {listItems}
            </ul>
            <Post addData = {addData} post = {postData} />
        </div>
    )
}

export default PostList