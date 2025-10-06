import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { STORIES } from './data';
import './index.css';

function ViewStory() {
  const { id, total } = useParams();
  const navigate = useNavigate();

  const storyId = Number(id);
  const totalStories = Number(total);

  const story = STORIES.find((s) => s.id === storyId);

  useEffect(() => {
    if (!story || storyId <= 0) {
      navigate('/');
    }
  }, [story, storyId, navigate]);

  useEffect(() => {
    if (storyId === totalStories) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [storyId, totalStories, navigate]);

  if (!story) return null;

  const prevId = storyId - 1;
  const nextId = storyId + 1;

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 story-background-overlay position-relative">
      
      {/* Cancel Button */}
      <button className="cancel-button" onClick={() => navigate('/')}>
        &times;
      </button>

      {/* Previous Story */}
      {prevId > 0 && (
        <Link to={`/story/${prevId}/${totalStories}`}>
          <i className="bi bi-arrow-left-circle-fill fs-3"></i>
        </Link>
      )}

      {/* Story Image */}
      <img className="story-image" src={story.image} alt="story" />

      {/* Next Story */}
      {nextId <= totalStories && (
        <Link to={`/story/${nextId}/${totalStories}`}>
          <i className="bi bi-arrow-right-circle-fill fs-3 ms-2"></i>
        </Link>
      )}
    </div>
  );
}

export default ViewStory;
