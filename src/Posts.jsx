import React from 'react';
import { POSTS } from './data';

function Posts() {
  return (
    <div className='d-flex flex-column align-items-center'>
      {POSTS.length > 0 ? (
        <div>
          {POSTS.map((post) => (
            <div key={post.id}>
              <div
                className='d-flex align-items-center'
                style={{ cursor: 'pointer' }}
              >
                <img
                  className='db rounded-circle'
                  src={post.user.profile_picture}
                  alt='profile pic'
                />
                <h6 className='ms-2'>{post.user.username}</h6>
              </div>

              <img className='w-300px' src={post.image} alt='post' />

              <div
                className='d-flex align-items-center fs-6 mt-2'
                style={{ cursor: 'pointer' }}
              >
                <div className='d-flex align-items-center me-3'>
                  <i className='bi bi-heart me-1'></i>
                  <span>{post.likes}</span>
                </div>
                <div className='d-flex align-items-center me-3'>
                  <i className='bi bi-chat me-1'></i>
                  <span>{post.comments.length}</span>
                </div>
                <i className='bi bi-send'></i>
                <div className='d-flex align-items-center justify-content-between ms-auto'>
                  <i className='bi bi-bookmark me-0'></i>
                  <span>{post.bookmarks}</span>
                </div>
              </div>

              <div>
                <h6 className='mt-2' style={{ cursor: 'pointer' }}>
                  {post.likes} Likes
                </h6>
              </div>

              <p>
                <span className='cap-name'>{post.user.username}</span>{' '}
                {post.caption}
              </p>

              <div className='ms-2'>
                {post.comments.map((comment) => (
                  <p key={comment.id}>
                    <strong>{comment.user.username}</strong> {comment.text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}

export default Posts;
