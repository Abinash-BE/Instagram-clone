import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function ViewStory() {
  const { id, total } = useParams();

  const [story, setStory] = useState(null);

  const navigation = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/stories/${id}`)
      .then(res => res.json())
      .then(data => setStory(data))
      .catch(err => console.log(err))
  }, [id]);

  if (id > total || id <= 0) {
    navigation("/");
  }

  return (
    <div>
        {story ? <div className='d-flex justify-content-center align-items-center vh-100 story-background-overlay position-relative'>
            <Link to={`http://localhost:5173/story/${Number(id)-1}/${total}`} ><i className="bi bi-arrow-left-circle-fill fs-3"></i></Link>
            <img className="story-image" src={story.image} alt="story" />
            <Link to={`http://localhost:5173/story/${Number(id)+1}/${total}`} ><i className="bi bi-arrow-right-circle-fill fs-3 ms-2"></i></Link>
        </div> 
        : <div>Loading...</div>}
    </div>
  )
}

export default ViewStory