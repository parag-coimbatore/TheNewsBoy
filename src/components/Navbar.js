import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/07/News.png"
              alt=""
              width="30"
              height="24"
            />
            
            <Link className="navbar-brand" to="/" my-300>
              TheNewsBoy
            </Link>
        
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                <li>
                  <Link className="nav-link" to="/Business">
                    Business
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/Entertainment">
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/General">
                    General
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/Health">
                    Health
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/Science">
                    Science
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/Sports">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/Technology">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/About">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
      </div>
    );
  }
}

export default Navbar;
