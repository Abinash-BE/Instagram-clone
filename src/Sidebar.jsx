import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProfileContext } from './ProfileContext.jsx'

function Sidebar() {

  const navigate = useNavigate();
  const { profile } = useContext(ProfileContext);
  const handleProfileClick = () => {
    navigate('/profile');
  } 

  return (
    <div className='p-3 d-flex flex-column justify-content-between vh-100 position-fixed side-bar'>
    <div className='d-flex flex-column gap-3' style={{ cursor: "pointer" }}>
        <img className='logo-text' src='/assets/images.png'/>
        <div><i className="bi bi-house-door-fill fs-5"></i>Home</div>
        <div><i className="bi bi-search fs-5"></i>Search</div>
        <div><i className="bi bi-compass fs-5"></i>Explore</div>
        <div><i className="bi bi-play-btn fs-5"></i>Reels</div>
        <div><i className="bi bi-chat-dots fs-5"></i>Messages</div>
        <div><i className="bi bi-heart fs-5"></i>Notifications</div>
        <div><i className="bi bi-plus-square fs-5"></i>Create</div>
        <div onClick={handleProfileClick} className='sidebar-item'>
          <img src={profile?.profile_picture || '/assets/1662496028662.jpg'} alt='Profile' className='sidebar-profile-img'/>
          <span>Profile</span>
        </div>
    </div>
    <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3' style={{ cursor: "pointer" }}>
        <div><i className="bi bi-threads fs-5"></i>Threads</div>
        <div><i className="bi bi-list fs-5"></i>More</div>
    </div>
    </div>
  )
}

export default Sidebar