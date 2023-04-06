import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
function Navbar()  {
  return (
    
    
        
          <nav className="navbar navbar-expand-lg bg-body-tertiary "data-bs-theme="dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
              LPND – Prestige Dew Drops
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="./home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./Components/Fold1.js">
                      Overview
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./pricing">
                      Amenities
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./pricing">
                      Pricing Details
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./pricing">
                      Site & Floor Plans
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./pricing">
                      Virtual Tour
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>
        
      );
    
  
}

export default Navbar;
