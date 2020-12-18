import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import './App.css';
import Welcome from './components/Welcome';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('jwtToken');
  return <Route {...rest} render={(props) => {
    return user ? <Component {...rest} {...props}/> : <Redirect to="/login" />
  }}/>
}

function App() {
  return (
    <div className="App">
    <Welcome />
    <About />
    <Footer />
    <Navbar />
    <Login />
    <Profile />
    <Signup />
    </div>
  );
}

export default App;
