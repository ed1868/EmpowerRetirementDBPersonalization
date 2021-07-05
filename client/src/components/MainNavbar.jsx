import React, { useEffect, useState } from 'react'
import api from '../api'
import logo from '../logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

// import logi from '../assets/images/wellsFargo.png'
import wellsFargoLogo from '../assets/images/wellsFargo.png'
import empowerLogo from '../assets/images/wellsFargo.png'
import metLifeLogo from '../assets/images/wellsFargo.png'


function MainNavbar(props) {



  let currentUser = api.getLocalStorageUser()
  let userIdentifier = '';


  let logoUrl;




  if (currentUser) {
    console.log('CURRENT USER :', currentUser);
    userIdentifier = currentUser.partnerCode[0];


    if (userIdentifier === 'met') {
      logoUrl = <img src="../assets/images/met.png" className="App-logo" alt="logo" />
    } else if (userIdentifier === 'empower') {
      logoUrl = <img src="../assets/images/wellsFargo.png" className="App-logo" alt="logo" />
      // logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />;
    }
    else {
      logoUrl = <img src="/assets/images/logo/nomadblack.png" alt="Digital Agency" />;
      // logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;
    }

  }

  function handleLogoutClick(e) {
    api.logout()
  }


  return (
    <nav className="App-header">
      {/* <img src="../assets/images/met.png" className="App-logo" alt="logo" /> */}
      {logoUrl}
      <h1 className="App-title">Empower Retirement</h1>


      <a href="#" className="bg_image-1">

      </a>

      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/countries">Countries</NavLink>
      <NavLink to="/add-country">Add country</NavLink>
      {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
      {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
      {
        api.isLoggedIn() && (
          <Link to="/" onClick={handleLogoutClick}>
            Logout
          </Link>
        )
      }
      {
        api.isLoggedIn() && (
          <Link to={`/demo/${userIdentifier}`}>
            Demos
          </Link>
        )
      }
      <NavLink to="/secret">Secret</NavLink>
    </nav >
  )
}

export default withRouter(MainNavbar)
