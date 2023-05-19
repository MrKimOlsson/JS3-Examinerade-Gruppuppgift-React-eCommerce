import React, { useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { NavLink, Link } from 'react-router-dom';
import { CiEdit } from 'react-icons/ci';
import './userProfile.css';
import Formforlogin from '../form/formforlogin/Formforlogin';
import axios from 'axios';

function UserProfile() {
  const user = localStorage.getItem('user');
  const userInfo = JSON.parse(user);

  const [edit, setEdit] = useState(false);

  const [updateUser, setUpdateUser] = useState({
    firstName: userInfo.firstName || '',
    streetName: userInfo.streetName || '',
    postalCode: userInfo.postalCode || '',
    city: userInfo.city || '',
    email: userInfo.email || ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdateUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    const updatedUser = {
      ...userInfo,
      firstName: updateUser.firstName || userInfo.firstName,
      streetName: updateUser.streetName || userInfo.streetName,
      postalCode: updateUser.postalCode || userInfo.postalCode,
      city: updateUser.city || userInfo.city,
      email: updateUser.email || userInfo.email
    };

    axios
      .put(`http://localhost:9999/api/user/${userInfo._id}`, updatedUser)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setEdit(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="up-container">
      <div className="up-inner-container">
        <div className="up-icon-container">
          <BiUserCircle className="up-user-icon" />
        </div>
        <div className="up-user-info">
          {edit ? (
            <>
              <div className="up-user-detail">
                <input
                  name="firstName"
                  value={updateUser.firstName}
                  type="text"
                  className="up-edit-input"
                  onChange={handleChange}
                />
              </div>
              <div className="up-user-detail">
                <input
                  name="streetName"
                  value={updateUser.streetName}
                  type="text"
                  className="up-edit-input"
                  onChange={handleChange}
                />
              </div>
              <div className="up-user-detail">
                <input
                  name="postalCode"
                  value={updateUser.postalCode}
                  type="text"
                  className="up-edit-input"
                  onChange={handleChange}
                />
              </div>
              <div className="up-user-detail">
                <input
                  name="city"
                  value={updateUser.city}
                  type="text"
                  className="up-edit-input"
                  onChange={handleChange}
                />
              </div>
              <div className="up-user-detail">
                <input
                  name="email"
                  value={updateUser.email}
                  type="text"
                  className="up-edit-input"
                  onChange={handleChange}
                />
              </div>
            </>
          ) : (
            <>
              <div className="up-user-detail">
                <p>{userInfo && userInfo.firstName + ' ' + userInfo.lastName}</p>
              </div>
              <div className="up-user-detail">
                <p>{userInfo && userInfo.streetName}</p>
              </div>
              <div className="up-user-detail">
                <p>{userInfo && userInfo.postalCode}</p>
              </div>
              <div className="up-user-detail">
                <p>{userInfo && userInfo.city}</p>
              </div>
              <div className="up-user-detail">
                <p>{userInfo && userInfo.email}</p>
              </div>
            </>
          )}
          {edit ? (
            <button onClick={handleSave} className="up-save">
              Save
            </button>
          ) : (
            <button onClick={() => setEdit(true)} className="up-save">
              Edit Profile
            </button>
          )}
        </div>
        <div className="up-options">
          <div className="up-errand-cont">
            <Link className="up-options-link">My Errands</Link>
          </div>
          <div className="up-options-bottom">
            <Link className="up-options-link">Show Order History</Link>
            <Link className="up-options-link">Delete Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;