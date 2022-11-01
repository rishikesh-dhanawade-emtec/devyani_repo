// update the above list by creating a separate component named Post which will accept userId, id, title and body as props
import React from 'react'
import { useState } from 'react'

const Post = (props) => {
  console.log(props);

  const [userId, setUserId] = useState('');
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = {
      userId, id, title, body
    };
    
    console.log(props.post.append(val));

    setUserId('');
    setId('');
    setTitle('');
    setBody('');
  }

  return (
    <div className='container'>
      <form style={{width: '50%'}}>
        <div className="form-group">
          <input type="number" name="userId" placeholder='User ID' value={userId} onChange={(e) => setUserId(e.target.value)} className='form-control mb-2' />
          <input type="number" name="id" placeholder='ID' value={id} className='form-control mb-2' onChange={(e) => setId(e.target.value)} />
          <input type="text" name="title" placeholder='Title' value={title} className='form-control mb-2' onChange={(e) => setTitle(e.target.value)} />
          <input type="text" name="body" placeholder='Body' value={body} className='form-control mb-2' onChange={(e) => setBody(e.target.value)} />
          <button type='button' onClick={handleSubmit} className='btn btn-success' >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Post