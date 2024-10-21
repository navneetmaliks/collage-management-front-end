import React from 'react'
import './dashboard.css'
import Sidenav from '../sidenav/Sidenav'
import { Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate=useNavigate();
  const logoutHandler=()=>{
    localStorage.clear();
    navigate('/login')

  }
  return (
    <div className='dashboard-main-container'>
      <div className='dashboard-container'>
        <Sidenav/>
        <div className='main-container'>
          <div className='top-bar'>
            <div className='logo-container'>
              <img src={require('../../assets/bookbg.png')} alt='collage logo' className='profile-logo'/>

            </div>
            <div className='profile-container'>
              <h2 className='profile-name'>{localStorage.getItem('firstname')}</h2>
              <button className='logout-btn' onClick={logoutHandler}>Logout</button>

            </div>

          </div>
          <div className='outlet-area'>
          <Outlet/>
          </div>
          

        </div>

      </div>

    </div>
  )
}

export default Dashboard