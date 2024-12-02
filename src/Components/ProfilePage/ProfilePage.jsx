import React, { useEffect, useState } from "react";
import "../ProfilePage/ProfilePage.css";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [image,setImage]=useState("https://randomuser.me/api/portraits/men/75.jpg");
  const navigate=useNavigate();
  useEffect(() => {
    const userCookie = Cookies.get('user');
    console.log(userCookie);
    if (userCookie) {
      setUser(JSON.parse(userCookie));
    } else {
      navigate('/login'); // Redirect to login if no user is logged in
    }
  }, [navigate]);
  if (!user) return <div>Loading...</div>;
  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1>Your Profile</h1>
        <img
          src={image}
          alt="Profile"
          className="profile-image"
        />
        <h1 className="profile-name">{user.username}</h1>
        <p className="profile-email">{user.email}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
