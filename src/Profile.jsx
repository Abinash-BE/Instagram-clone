import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import prev from 'react'

function Profile() {

    const [ProfileData, setProfileData] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:5000/profile")
            .then(response => {
                setProfileData(response.data);
                console.log("Profile data fetched successfully:", response.data);
            })
            .catch(error => {
                console.error("Error fetching profile data:", error);
            });
    }, []);

    if (!ProfileData) {
        return <div>Loading...</div>;
    }

    function HandleOnchange(e){
        setProfileData(Prev =>({
            ...prev,
            [e.target.name]: e.target.value
        }))

    }

        const handleUpdate = async ()=>{
            axios.put("http://localhost:5000/profile",Profile)
            .then(console.log("Updated"))
            .catch(err => console.log(err))
        }


    return (
        <>
            <div className='p-3 d-flex flex-column justify-content-between vh-100 position-fixed top-0 side-bar'>
                <div className='d-flex flex-column gap-3' style={{ cursor: "pointer" }}>
                    <img className='logo-text' src='/assets/images.png'/>
                    <div><i className="bi bi-house-door-fill fs-5"></i>Home</div>
                    <div><i className="bi bi-search fs-5"></i>Search</div>
                    <div><i className="bi bi-compass fs-5"></i>Explore</div>
                    <div><i className="bi bi-play-btn fs-5"></i>Reels</div>
                    <div><i className="bi bi-chat-dots fs-5"></i>Messages</div>
                    <div><i className="bi bi-heart fs-5"></i>Notifications</div>
                    <div><i className="bi bi-plus-square fs-5"></i>Create</div>
                    <div><i className="bi bi-person-circle fs-5"></i>Profile</div>
                </div>
                <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3' style={{ cursor: "pointer" }}>
                    <div><i className="bi bi-threads fs-5"></i>Threads</div>
                    <div><i className="bi bi-list fs-5"></i>More</div>
                </div>
            </div>

    <div className="container mt-4 me-2 profile-page w-75">
      {/* Profile Header */}
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <img
            src="\assets\1662496028662.jpg"
            alt="profile"
            className="rounded-circle profile-img ms-3"
          />
        </div>
        <div className="col-md-8">
          <div className="d-flex align-items-center mb-2">
            <h3 className="me-3">bruce_wayne</h3>
            <button className="btn btn-outline-secondary btn-sm me-2">
              Edit Profile
            </button>
            <button className="btn btn-outline-secondary btn-sm">
              View Archive
            </button>
          </div>
          <div className="d-flex mb-3">
            <p className="me-4"><b>9</b> posts</p>
            <p className="me-4"><b>619</b> followers</p>
            <p><b>333</b> following</p>
          </div>
          <p className="bio">
            💼 CEO | Wayne Enterprises <br />
            🌆 Living in Gotham <br />
            ⚡ Billionaire. Philanthropist. Gentleman <br />
            🦇 Just a man with a vision. <br />
            </p>

            <p>|"It's not who i am underneath, but what I do that defines me"|</p> <br />
        </div>
      </div>

      {/* Highlights */}
<div className="mt-4" style={{ cursor: "pointer" }}>
  <div className="d-flex justify-content-start mt- highlights ms-4">
    {[{title: "Work", imgSrc: "/assets/work.jpg"}, 
      {title: "Nights", imgSrc: "/assets/night.jpg"}, 
      {title: "Me", imgSrc: "/assets/75e7e592a5f11506e13a04825e2b6d39.jpg"},
      {title: "Workout", imgSrc: "/assets/workouts.jpg"}, 
      {title: "Mine", imgSrc: "/assets/mine.jpg"}, 
      {title: "Trip", imgSrc: "/assets/travels.jpg"},
      {title: "Legacy", imgSrc: "/assets/legacy 2.jpg"}
    ].map((highlight, i) => (
      <div key={i} className="text-center highlight-item"> 
        <div className="highlight-circle-wrapper">
          <img 
            src={highlight.imgSrc}
            alt={highlight.title}
            className="highlight-img"
          />
        </div>
        <p className="small highlight-title">{highlight.title}</p>
      </div>
    ))}
  </div>
</div>

      {/* Posts Grid */}
      <div className="row mt-4 post-grid">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="col-4 p-1">
            <img
              src={`https://picsum.photos/200?random=${i}`}
              alt="post"
              className="w-100 post-img"
            />
          </div>
        ))}
      </div>
    </div>
        </>
    );
  }

export default Profile