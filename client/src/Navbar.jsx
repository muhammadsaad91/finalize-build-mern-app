import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const Navbar = () => {
    
    return (
        <>
        

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Saad Mern App</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <NavLink to="/" className="nav-link">Welcome</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/login" className="nav-link">login</NavLink>
     <NavLink to="/signup" className="nav-link">Register</NavLink> 
        <Logout  />
    </div>
  </div>
</nav>
        

        </>
        );
}
export default Navbar;
