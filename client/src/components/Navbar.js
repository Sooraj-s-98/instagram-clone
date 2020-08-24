import React from 'react';
import {Link } from 'react-router-dom';

const NavBar = ()=>{
    return(
        <nav>
        <div class="nav-wrapper white">
          <Link to="/" class="brand-logo  left">Instagram</Link>
          <ul id="nav-mobile" class="right">
            <li><Link to="/signin">signin</Link></li>
            <li><Link to="/signup">signup</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
            <li><Link to="/Create">Create Post</Link></li>
          </ul>
        </div>
      </nav>
    )
}


export default NavBar;