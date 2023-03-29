import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className='sidebar-div'>
        
        <p className='sidebar-list'>
           <Link to="/home"><p>Home</p></Link>
            <Link to="/about"><p>About</p></Link>
            <Link to="/contact"><p>Contact</p></Link>
            <Link to="/login"><p>Login</p></Link>
            <Link to="/login"><p>Logout</p></Link>
            </p>
           
       
    </div>
  )
}

export default Sidebar