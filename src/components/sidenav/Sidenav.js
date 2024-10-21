import React from 'react'
import './sidenav.css'
import { Link, useLocation } from 'react-router-dom'

const Sidenav = () => {
    const location=useLocation();
  return (
    <div className='nav-container'>
        <div className='brand-container'>
            <img src={require('../../assets/bookbg.png')} alt='brand-logo' className='profile-logo'/>
            <h2 className='brand-name'>Collage Management</h2>

        </div>
        <div className='menu-container'>
            <Link to='home' className={location.pathname==='/dashboard/home'?'menu-active-link':'menu-link'}>Home</Link>
            <Link to='courses' className={location.pathname==='/dashboard/courses'?'menu-active-link':'menu-link'}>All Course</Link>
            <Link to='add-courses' className={location.pathname==='/dashboard/add-courses'?'menu-active-link':'menu-link'}>Add Course</Link>
            <Link to='all-students' className={location.pathname==='/dashboard/all-students'?'menu-active-link':'menu-link'}>All Students</Link>
            <Link to='add-student' className={location.pathname==='/dashboard/add-student'?'menu-active-link':'menu-link'}>Add Student</Link>
            <Link to='collect-fee' className={location.pathname==='/dashboard/collect-fee'?'menu-active-link':'menu-link'}>Collect Fee</Link>
            <Link to='payment-history' className={location.pathname==='/dashboard/payment-history'?'menu-active-link':'menu-link'}>Payment History</Link>

        </div>

        </div>
  )
}

export default Sidenav