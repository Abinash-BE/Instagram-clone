import React from 'react';
import { POSTS } from './data';

function Posts() {
  return (
    <div className="d-flex flex-column align-items-center">
      {POSTS.length > 0 ? (
        <div className="w-100" style={{ maxWidth: "500px" }}>
          {POSTS.map((post) => (
            <div key={post.id} className="mb-4 border p-2 rounded">
              
              {/* USER INFO */}
              <div className="d-flex align-items-center mb-2" style={{ cursor: "pointer" }}>
                <img
                  className="rounded-circle"
                  src={post.user.profile_picture}
                  alt="profile"
                  style={{ width: "40px", height: "40px", objectFit: "cover" }}
                />
                <h6 className="ms-2 mb-0">{post.user.username}</h6>
              </div>

              {/* POST IMAGE */}
              <img
                src={post.image}
                alt="post"
                className="img-fluid rounded"
                style={{ width: "100%", maxHeight: "450px", objectFit: "cover" }}
              />

              {/* ACTION ICONS */}
              <div className="d-flex align-items-center mt-2 fs-5">
                <div className="d-flex align-items-center me-3">
                  <i className="bi bi-heart me-1"></i>
                  <span>{post.likes}</span>
                </div>

                <div className="d-flex align-items-center me-3">
                  <i className="bi bi-chat me-1"></i>
                  <span>{post.comments.length}</span>
                </div>

                <i className="bi bi-send me-auto"></i>

                <div className="d-flex align-items-center">
                  <i className="bi bi-bookmark"></i>
                  <span className="ms-1">{post.bookmarks}</span>
                </div>
              </div>

              {/* LIKES */}
              <h6 className="mt-2">{post.likes} Likes</h6>

              {/* CAPTION */}
              <p>
                <strong>{post.user.username}</strong> {post.caption}
              </p>

              {/* COMMENTS */}
              <div className="ms-2">
                {post.comments.map((comment) => (
                  <p key={comment.id} className="mb-1">
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
