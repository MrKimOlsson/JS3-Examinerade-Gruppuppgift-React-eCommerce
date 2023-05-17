import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { NavLink, Link } from 'react-router-dom'
import { CiEdit } from 'react-icons/ci'
import './userProfile.css'
import Formforlogin from '../form/formforlogin/Formforlogin'
import { useState } from 'react'
import { useEffect } from 'react'

function UserProfile() {


    const user = localStorage.getItem('user')
    const userInfo = JSON.parse(user)

    const [edit, setEdit] = useState(false)
    const [changePass, setChangePass] = useState(false)


    const [updateUser, setUpdateUser] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUpdateUser(values => ({...values, [name]: value}))
      }

    // const handleClick = (e) => {
    //     e.preventDefault()

    //     const updatedUser = {
    //         firstName: e.target.value,
    //         streetName: e.target.value,
    //         city: e.target.value,
    //         postalCode: e.target.value,
    //         email: e.target.value
    //     }

    //     console.log(updatedUser)
    // }

    
    


  return (
    <div className='up-container'>
        <div className="up-inner-container">
            <div className='up-icon-container'><BiUserCircle className='up-user-icon'/></div>
            <div className="up-user-info">
                {edit ? (
                    <>
                    <div className="up-user-detail">
                        <input 
                        placeholder={userInfo && userInfo.firstName + ' ' + userInfo.lastName} 
                        type="text" 
                        className='up-edit-input' 
                        onChange={handleChange}/>
                    </div>
                    <div className="up-user-detail">
                    <input 
                        placeholder={userInfo && userInfo.streetName} 
                        type="text" 
                        className='up-edit-input' />
                    </div>
                    <div className="up-user-detail">
                    <input 
                        placeholder={userInfo && userInfo.postalCode} 
                        type="text" 
                        className='up-edit-input' />
                    </div>
                    <div className="up-user-detail">
                    <input 
                        placeholder={userInfo && userInfo.city} 
                        type="text" 
                        className='up-edit-input' />
                    </div>
                    <div className="up-user-detail">
                    <input 
                        placeholder={userInfo && userInfo.email} 
                        type="text" 
                        className='up-edit-input' />
                    </div>
                    {/* <button onClick={() => setEdit(true)} className="up-save">Edit</button> */}
                    </>
                ) : (
                    <>
                    <div className="up-user-detail">
                        <p>{userInfo && userInfo.firstName + ' ' + userInfo.lastName}</p>
                        {/* <div><CiEdit className="up-edit"/></div> */}
                    </div>
                    <div className="up-user-detail">
                        <p>{userInfo && userInfo.streetName}</p>
                        {/* <div><CiEdit className="up-edit"/></div> */}
                    </div>
                    <div className="up-user-detail">
                        <p>{userInfo && userInfo.postalCode}</p>
                        {/* <div><CiEdit className="up-edit"/></div> */}
                    </div>
                    <div className="up-user-detail">
                        <p>{userInfo && userInfo.city}</p>
                        {/* <div><CiEdit className="up-edit"/></div> */}
                    </div>
                    <div className="up-user-detail">
                        <p>{userInfo && userInfo.email}</p>
                        {/* <div><CiEdit className="up-edit"/></div> */}
                    </div>
                    {/* <button onClick={() => setEdit(false)} className="up-save">Save</button> */}
                    </>
                )}
                {edit ? (
                    <button onClick={() => setEdit(!edit)} className="up-save">Save</button>
                ) : (
                    <button onClick={() => setEdit(!edit)} className="up-save">Edit Profile</button>
                )}
                {changePass ? (
                    <form className='change-pass-form'>
                        <div className="up-form-control">
                            <label>New Password</label>
                            <input type="text" className="up-newPass" />
                        </div>
                        <div className="up-form-control">
                            <label>Confirm Password</label>
                            <input type="text" className="up-confirm-newPass" />
                        </div>
                        <div className="up-form-control">
                            <label>Old Password</label>
                            <input type="text" className="up-oldPass" />    
                        </div>
                        <button className='up-save password-submit' onSubmit={() => setChangePass(false)} type="submit">Submit password</button>
                    </form>
                ) : (
                    <div className="up-user-detail">
                        <li><div onClick={() => setChangePass(true)} className='up-changeP'>Change password?</div></li>
                    </div>
                )}
                
            </div>
                <div className="up-options">
                    <div className="up-errand-cont">
                        <Link className='up-options-link'>My Errands</Link>
                    </div>
                    <div className="up-options-bottom">
                        <Link className='up-options-link'>Show Order History</Link>
                        <Link className='up-options-link'>Delete Account</Link>
                    </div>
                </div>

        </div>
    </div>
  )
}

export default UserProfile



                    {/* <button onClick={() => setEdit(true)} className="up-save">Edit</button> */}
                    