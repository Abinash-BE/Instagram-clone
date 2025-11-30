import React from "react";
import { useNavigate } from "react-router-dom";

function BottomNav() {

    const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate('/Profile');
  } 

  return (
    <div className="mobile-bottom-nav" style={{cursor: "pointer"}}>
      <i className="bi bi-house-door"></i>
      <i className="bi bi-search"></i>
      <i className="bi bi-plus-square"></i>
      <i className="bi bi-heart"></i>
      <img src='/assets/1662496028662.jpg' alt='Profile' onClick={handleProfileClick} className='bottom-nav-profile'/>
    </div>
  );
}

export default BottomNav;