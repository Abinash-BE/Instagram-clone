import React from "react";
import { PROFILE } from "./data";
import { useNavigate } from "react-router-dom";

function Profile() {
  const ProfileData = PROFILE;

  const navigate = useNavigate();
    const handleHomeClick = () => {
      navigate('/');
    } 

  return (
    <div>
      {/* Sidebar */}
      <div className="p-3 d-flex flex-column justify-content-between vh-100 position-fixed top-0 side-bar sidebar-wrapper">
        <div className="d-flex flex-column gap-3 pointer">
          <img className="logo-text d-none d-md-block" src="/assets/images.png" alt="logo" />

          {/* Desktop: Icon + Text , Mobile: Icon only */}
          <div><i className="bi bi-house-door-fill fs-5" onClick={handleHomeClick}></i><span className="ms-2 d-none d-md-inline">Home</span></div>
          <div><i className="bi bi-search fs-5"></i><span className="ms-2 d-none d-md-inline">Search</span></div>
          <div><i className="bi bi-compass fs-5"></i><span className="ms-2 d-none d-md-inline">Explore</span></div>
          <div><i className="bi bi-play-btn fs-5"></i><span className="ms-2 d-none d-md-inline">Reels</span></div>
          <div><i className="bi bi-chat-dots fs-5"></i><span className="ms-2 d-none d-md-inline">Messages</span></div>
          <div><i className="bi bi-heart fs-5"></i><span className="ms-2 d-none d-md-inline">Notifications</span></div>
          <div><i className="bi bi-plus-square fs-5"></i><span className="ms-2 d-none d-md-inline">Create</span></div>
          <div><i className="bi bi-person-circle fs-5"></i><span className="ms-2 d-none d-md-inline">Profile</span></div>
        </div>

        <div className="position-fixed bottom-0 d-flex flex-column gap-3 mb-3 pointer d-none d-md-flex">
          <div><i className="bi bi-threads fs-5"></i> Threads</div>
          <div><i className="bi bi-list fs-5"></i> More</div>
        </div>
      </div>

      {/* Profile Page */}
      <div className="container-fluid profile-page responsive-profile profile-container">
        <div className="row align-items-center mt-3">
          <div className="col-12 col-md-4 text-center mb-3">
            <img
              src={ProfileData.profile_picture}
              alt={ProfileData.username}
              className="rounded-circle profile-img"
            />
          </div>

          <div className="col-12 col-md-8 text-center text-md-start">
            <div className="d-flex flex-column flex-md-row align-items-center mb-2 gap-2">
              <h3 className="me-md-3">{ProfileData.username}</h3>
              <button className="btn btn-outline-secondary btn-sm">Edit Profile</button>
              <button className="btn btn-outline-secondary btn-sm">View Archive</button>
            </div>

            <div className="d-flex justify-content-center justify-content-md-start gap-4 mb-2">
              <p><b>9</b> posts</p>
              <p><b>619</b> followers</p>
              <p><b>333</b> following</p>
            </div>

            <p className="bio">{ProfileData.bio}</p>
            <p className="bio">
              💼 CEO | Wayne Enterprises <br />
              🌆 Living in Gotham <br />
              ⚡ Billionaire. Philanthropist. Gentleman <br />
              🦇 Just a man with a vision.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="highlight-scroll mt-4">
          <div className="d-flex gap-3">
            {[
              { title: 'Work', imgSrc: '/assets/work.jpg' },
              { title: 'Nights', imgSrc: '/assets/night.jpg' },
              { title: 'Me', imgSrc: '/assets/75e7e592a5f11506e13a04825e2b6d39.jpg' },
              { title: 'Workout', imgSrc: '/assets/workouts.jpg' },
              { title: 'Mine', imgSrc: '/assets/mine.jpg' },
              { title: 'Trip', imgSrc: '/assets/travels.jpg' },
              { title: 'Legacy', imgSrc: '/assets/legacy 2.jpg' },
            ].map((highlight, i) => (
              <div key={i} className="text-center">
                <div className="highlight-circle-wrapper">
                  <img src={highlight.imgSrc} className="highlight-img" alt={highlight.title} />
                </div>
                <p className="small">{highlight.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="row mt-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="col-6 col-md-4 p-1">
              <img
                src={`https://picsum.photos/300?random=${i}`}
                alt="post"
                className="w-100 post-img"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mobile-bottom-nav" style={{cursor: "pointer"}}>
        <i className="bi bi-house-door" onClick={handleHomeClick}></i>
        <i className="bi bi-search"></i>
        <i className="bi bi-plus-square"></i>
        <i className="bi bi-heart"></i>
        <img src='/assets/1662496028662.jpg' alt='Profile' className='bottom-nav-profile'/>
      </div>
    </div>
  );
}

export default Profile;
