import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Stories() {

  const [Stories, setStories] = useState([]);

  useEffect(() => {
      fetch("http://localhost:5000/stories")
          .then(res => res.json())
          .then(data => setStories(data))
          .catch(err => console.log(err))
  }, []);

  const navigate = useNavigate();

  const handleStoryClick = (id) => {
    navigate(`/story/${id}/${Stories.length}`);
  }

  return (
    <div className=" d-flex gap-3 p-3 overflow-auto justify-content-center">
      {Stories.length > 0 ? (
        Stories.map((story) => (
          <div key={story.id} className='mx-1' style={{ cursor: "pointer" }} onClick={() => handleStoryClick(story.id)}>
            <div className='gradient-border'>
              <img src={story.user.profile_picture} alt="db" className='story-db rounded-circle' />
            </div>
            <p className='text-truncate' style={{ width: "50px", overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{story.user.username}</p>
          </div>
        ))
      ) : (
        <p>No stories available</p>
      )}
    </div>
  )
}

export default Stories;
