import React from 'react'
import {NavLink} from 'react-router-dom'


function Sidebar() {
  return (
    <nav className="navbar" >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Explore">Explore</NavLink>
      <NavLink to="/Notifications">Notifications</NavLink>
      <NavLink to="/Message">Message</NavLink>
      <NavLink to="/Bookmarks">Bookmarks</NavLink>
      <NavLink to="/List">List</NavLink>
      <NavLink to="/Profile">Profile</NavLink>
      <NavLink to="/More">More</NavLink>
    </nav>
  );
}

export default Sidebar