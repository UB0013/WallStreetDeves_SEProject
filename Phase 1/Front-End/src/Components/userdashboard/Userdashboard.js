import React from "react";
import './Userdashboard.css'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import { Outlet, NavLink } from "react-router-dom";
import { Link, Routes, Route } from 'react-router-dom';
import Userprofile from "../user-profile/UserProfile";
import NewPost from "../NewPost/NewPost";



function Userdashboard() {
  let { userObj } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* <img
        src={userObj.profileImg}
        className="float-end m-5 profile-pic"
        alt=""
      /> */}
      {/* <h3>DashBoard</h3>
        <Nav className="justify-content-center mt-3" defaultActiveKey="/profile">
        <Nav.Item>
            <Nav.Link to="userdashboard" as={NavLink}>
              Home
            </Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link to="cart" as={NavLink}>
              Notifications
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link to="profile" as={NavLink}>
              User Profile
            </Nav.Link>
          </Nav.Item>
          
        </Nav>
        <div className="mt-3">
          <Outlet />
        </div> */}
      <>
        <div style={{ display: 'flex', alignItems: 'center', marginTop:'40px', marginLeft:'30px' }}>
          <h3 style={{ marginRight: '10px' }}>Hello, {userObj.username}!</h3>
          <h5>Connect with your alumni network.</h5>
        </div>
        <div className="userdashboard-container">
          <div className="user-dashboard-card">
            <Link to="/userdashboard/profile" className="user-dashboard-card-link">
              <div className="user-dashboard-card-content">
                <h3>View Profile</h3>
              </div>
            </Link>
          </div>
          <div className="user-dashboard-card">
            <Link to="/new-post" className="user-dashboard-card-link">
              <div className="user-dashboard-card-content">
                <h3>Create New Post</h3>
              </div>
            </Link>
          </div>
          <div className="user-dashboard-card">
            <Link to="/userdashboard/edit-profile" className="user-dashboard-card-link">
              <div className="user-dashboard-card-content">
                <h3>Edit Profile</h3>
              </div>
            </Link>
          </div>
        </div>

        <div className="user-dashboard">
          <div className="user-dashboard-sidebar">
          </div>

          <div>
            <Routes>
              <Route path="/userdashboard/profile" element={<Userprofile />} />
              <Route path="/new-post" element={<NewPost />} />
            </Routes>
          </div>
        </div>
      </>
    </>
  );
}

export default Userdashboard;