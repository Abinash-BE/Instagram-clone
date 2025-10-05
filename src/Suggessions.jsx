import React, { use } from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Suggestions() {

  const [profile, setProfile] = React.useState(null);
  const [Suggestions, setSuggestions] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/profile")
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.log(err))

    fetch("http://localhost:5000/suggestions")
      .then(res => res.json())
      .then(data => setSuggestions(data))
      .catch(err => console.log(err))

  }, []);

  const navigate = useNavigate();
    const handleProfileClick = () => {
      navigate('/Profile');
    }

  return (
    <div>
      <div className='suggestions w-75 m-4'>
      {profile ?
        <div className='d-flex align-items-center' style={{ cursor: "pointer" }} onClick={handleProfileClick}>
          <img className="db rounded-circle" src={profile.profile_picture} alt="profile pic" />
          <h6 className='ms-2'>{profile.username}</h6>
          <small className='ms-auto text-primary'>Switch</small>
        </div>
      : <p>Loading...</p>}

      <div className='suggestion-sec d-flex justify-content-between mt-3 mb-2'>
        <p>Suggested for you</p>
        <b><small className='me-2'>See All</small></b>
      </div>

      {Suggestions.length > 0 ? (
        <div className='suggestion-list'>
          {Suggestions.map(suggestion => (
            <div key={suggestion.id} className='d-flex align-items-center py-2' style={{ cursor: "pointer" }}>
              <img className="db rounded-circle" src={suggestion.profile_picture} alt="profile pic" />
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
  )
}


export default Suggestions