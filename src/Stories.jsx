import React from 'react';
import { useNavigate } from 'react-router-dom';
import { STORIES } from './data';

function Stories() {
  const navigate = useNavigate();

  const handleStoryClick = (id) => {
    navigate(`/story/${id}/${STORIES.length}`);
  };

  return (
    <div className="d-flex gap-3 p-3 overflow-auto justify-content-center">
      {STORIES.length > 0 ? (
        STORIES.map((story) => (
          <div
            key={story.id}
            className="mx-1"
            style={{ cursor: 'pointer' }}
            onClick={() => handleStoryClick(story.id)}
          >
            <div className="gradient-border">
              <img
                src={story.user.profile_picture}
                alt={story.user.username}
                className="story-db rounded-circle"
              />
            </div>
            <p
              className="text-truncate"
              style={{
                width: '50px',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              {story.user.username}
            </p>
          </div>
        ))
      ) : (
        <p>No stories available</p>
      )}
    </div>
  );
}

export default Stories;
