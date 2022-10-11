import React from 'react'
import {NavLink, Link} from "react-router-dom"
import "../../App.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-4">
  <div className="container">
  <Link to="" className="fs-3 ubuntu navbar-brand ">Rick & Morty
      <span className="text-primary"> RYM</span>
      </Link>
    
    <button className="navbar-toggler"
     type="button"
      data-bs-toggle="collapse"
       data-bs-target="#navbarNav" 
       aria-controls="navbarNav" 
       aria-expanded="false" 
       aria-label="Toggle navigation">

        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        
      <span class="fas fa-bars open text-dark"></span>
      
      <span class="fas fa-times close text-dark"></span>
      
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav fs-5">
        <li className="nav-item">
          <NavLink ativeClassName="active" to = "/" className="nav-link fs-5"  >Characters</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to = "/episodes" className="nav-link" >Episodes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to = "/location" className="nav-link">Location</NavLink>
        
       
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar