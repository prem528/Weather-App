import React from 'react';
 
 

import './Navbar.css';  

function Navbar() {
  return (
    <nav className="navbar">
      
      <p className='navbar-title'>
      <img  className='logo' 
       src="./cloud_logo.png" alt="bug" />
       Weather App 
     </p>
      
    </nav>
  );
}

export default Navbar;
