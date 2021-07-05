import React, { useEffect, useState } from 'react'
import api from '../api'
import logo from '../logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'



function MainNavbar(props) {



  let currentUser = api.getLocalStorageUser()
  let userIdentifier = '';

  if (currentUser) {
    console.log('CURRENT USER :', currentUser);
    userIdentifier = currentUser.partnerCode[0];
  }

  function handleLogoutClick(e) {
    api.logout()
  }

  return (
    <nav className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Empower Retirement</h1>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/countries">Countries</NavLink>
      <NavLink to="/add-country">Add country</NavLink>
      {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
      {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
      {api.isLoggedIn() && (
        <Link to="/" onClick={handleLogoutClick}>
          Logout
        </Link>
      )}
      {api.isLoggedIn() && (
        <Link to={`/demo/${userIdentifier}`} onClick={handleLogoutClick}>
          Demos
        </Link>
      )}
      <NavLink to="/secret">Secret</NavLink>
    </nav>
  )
}

export default withRouter(MainNavbar)
