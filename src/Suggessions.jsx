import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SUGGESTIONS } from './data';
import { ProfileContext } from './ProfileContext.jsx';

function Suggestions() {
  const navigate = useNavigate();
  const { profile } = useContext(ProfileContext);

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <div>
      <div className='suggestions-section w-75 m-4'>
        {profile ? (
          <div
            className='d-flex align-items-center'
            style={{ cursor: 'pointer' }}
            onClick={handleProfileClick}
          >
            <img
              className='db rounded-circle'
              src={profile.profile_picture}
              alt='profile pic'
            />
            <h6 className='ms-2'>{profile.username}</h6>
            <small className='ms-auto text-primary'>Switch</small>
          </div>
        ) : (
          <p>No profile data available</p>
        )}

        <div className='suggestion-sec d-flex justify-content-between mt-3 mb-2'>
          <p>Suggested for you</p>
          <b>
            <small className='me-2'>See All</small>
          </b>
        </div>

        {SUGGESTIONS.length > 0 ? (
          <div className='suggestion-list'>
            {SUGGESTIONS.map((suggestion) => (
              <div
                key={suggestion.id}
                className='d-flex align-items-center py-2'
                style={{ cursor: 'pointer' }}
              >
                <img
                  className='db rounded-circle'
                  src={suggestion.profile_picture}
                  alt='profile pic'
                />
                <h6 className='ms-2'>{suggestion.username}</h6>
                <small className='ms-auto text-primary'>Follow</small>
              </div>
            ))}
          </div>
        ) : (
          <p>No suggestions available</p>
        )}
      </div>
    </div>
  );
}

export default Suggestions;
