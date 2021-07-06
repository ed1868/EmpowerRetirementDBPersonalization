import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainNavbar from './MainNavbar'
import Home from './pages/Home'
import Countries from './pages/Countries'
import AddCountry from './pages/AddCountry'
import Secret from './pages/Secret'
import Login from './pages/Login'
import Signup from './pages/Signup'
import DemoForm from './pages/DemoForm'
import DemoHub from './pages/DemoHub'

export default function App() {

  return (
    <div className="App">
      <MainNavbar />
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/createDemo" exact component={DemoForm} /> */}
        <Route path="/demo/createDemo" component={DemoForm} />
        <Route path="/countries" component={Countries} />
        <Route path="/demo" component={DemoHub} />
        <Route path="/add-country" component={AddCountry} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/secret" component={Secret} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </div>
  )
}
