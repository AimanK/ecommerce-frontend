import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {

  return (
    <div>
      <nav id="nav" className="navbar navbar-expand-lg navbar-dark bg-secondary dropdown">
      

        <div className="container-fluid">
        <Link class="py-2" href="#" aria-label="Product" to="/">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Ecommerce</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
        </Link>
          <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

            
          <label class="dropdown navbar-dark bg-secondary">

          <div class="dd-button">
                Shop
          </div>

              <input type="checkbox" class="dd-input" id="test"></input>

              <ul class="dd-menu">
              <Link to="/"><li>Home</li></Link>
              <Link to="/lighting"><li>Lighting</li></Link>
              <Link to="/chairs"><li>Chairs</li></Link>
              <Link to="/tables"><li>Tables</li></Link>
              <Link to="/beds"><li>Beds</li></Link>
              <Link to="/arearugs"><li>Area Rugs</li></Link>
              <Link to="/decor"><li>Decor</li></Link>
              </ul>

          </label> 

          <Link class="py-2 d-none d-md-inline-block text-white" to="/aboutus">About Us</Link>
          <Link class="py-2 d-none d-md-inline-block text-white" to="/yourcart">Cart</Link>

          <Link className="btn btn-outline-light" to="/addcustomer">Sign-Up</Link>
          </div>

      </nav>
    </div>
  )
}