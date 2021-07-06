import React, { useEffect, useState } from 'react'
import api from '../api'
import logo from '../logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

// import logi from '../assets/images/wellsFargo.png'
// import wellsFargoLogo from '../assets/images/wellsFargo.png'
// import empowerLogo from '../assets/images/wellsFargo.png'
// import metLifeLogo from '../assets/images/wellsFargo.png'


function MainNavbar(props) {



  let currentUser = api.getLocalStorageUser()
  let userIdentifier = '';


  let logoUrl = ""

  let welcomeMessage = ""


  if (currentUser) {
    console.log('CURRENT USER :', currentUser);
    userIdentifier = currentUser.partnerCode[0];

    welcomeMessage = `Logged in as : ${currentUser.username}`


    if (userIdentifier === 'met') {
      logoUrl = <img src="../assets/images/met.png" className="App-logo" alt="logo" />
    } else if (userIdentifier === 'wellsFargo') {
      logoUrl = <img src="../assets/images/wellsFargo.png" className="App-logo" alt="logo" />
      // logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />;
    }
    else {
      logoUrl = <img src="../assets/images/empower.png" className="App-logo" alt="logo" />
      // logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;
    }

  }

  function handleLogoutClick(e) {
    api.logout()
  }


  // return (
  //   <nav className="App-header">
  //     {/* <img src="../assets/images/met.png" className="App-logo" alt="logo" /> */}
  //     {logoUrl}
  //     <h1 className="App-title">Empower Retirement</h1>


  //     <a href="#" className="bg_image-1">

  //     </a>

  //     <NavLink to="/" exact>
  //       Home
  //     </NavLink>
  //     <NavLink to="/countries">Countries</NavLink>
  //     <NavLink to="/add-country">Add country</NavLink>
  //     {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
  //     {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
  //     {
  //       api.isLoggedIn() && (
  //         <Link to="/" onClick={handleLogoutClick}>
  //           Logout
  //         </Link>
  //       )
  //     }
  //     {
  //       api.isLoggedIn() && (
  //         <Link to={`/demo/${userIdentifier}`}>
  //           Demos
  //         </Link>
  //       )
  //     }
  //     <NavLink to="/secret">Secret</NavLink>
  //   </nav >
  // )

  return (
    <div>
      <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          {logoUrl}
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* <div className="nav-item ml-5">
            {welcomeMessage}
          </div> */}
          <ul className="navbar-nav ">
            <li className="nav-item active">
              {!api.isLoggedIn() && <NavLink to="/signup">Sign Up</NavLink>}
            </li>
            <li className="nav-item">
              {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
            </li>

            <li className="nav-item ">
              {
                api.isLoggedIn() && (
                  <NavLink to={`/demo/${userIdentifier}`}>
                    Demos
                  </NavLink>
                )
              }
            </li>

            {/* <li className="nav-item">
              {api.isLoggedIn() && <NavLink to="/" onClick={handleLogoutClick}>Logout</NavLink>}
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li> */}
          </ul>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li className="nav-item logout">
            {api.isLoggedIn() && <NavLink to="/" className="logout" onClick={handleLogoutClick}>Logout</NavLink>}
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default withRouter(MainNavbar)
