import React from 'react'
import PropTypes from 'prop-types'
import { Outlet,Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.abouttext}</Link>
        </li>
        
      </ul>
      {/* <form className="form-inline my-2 my-lg-0">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </nav>
  <Outlet />
  </>
  )
}
Navbar.propTypes = {title: PropTypes.string,
                    abouttext: PropTypes.string,}
Navbar.defaultProps = {
                  title: "Set title here",
                  abouttext: 'About Text Here'
}