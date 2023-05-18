import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { CiEdit } from 'react-icons/ci'
import '../userProfile.css'
import Formforlogin from '../../form/formforlogin/Formforlogin'
import { useState } from 'react'
import { useEffect } from 'react'

function EditProfile() {

    const user = localStorage.getItem('user')
    const userInfo = JSON.parse(user)

  return (
    <div className="up-wrapper">
        <div className='up-container'>
            <div className="up-inner-container">
                <div className='up-icon-container'><BiUserCircle className='up-user-icon'/></div>
                <div className="up-user-info">
                    <div className="up-user-detail">
                        <input 
                        placeholder={userInfo && userInfo.firstName + ' ' + userInfo.lastName} 
                        type="text" 
                        className='up-edit-input' />
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
                    <div className="up-user-detail">
                        <li><Link className='up-changeP'>Change password?</Link></li>
                    </div>
                    <button className="up-save">Save</button>
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
    </div>
  )
}

export default EditProfile