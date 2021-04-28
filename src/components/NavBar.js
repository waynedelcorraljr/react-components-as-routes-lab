import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  borderRadius: '20px',
  margin: '6px 6px 6px',
  background: 'grey',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'pink'
      }}
      >Home</NavLink>
      <NavLink
      to="/movies"
      exact
      style={link}
      activeStyle={{
        background: 'pink'
      }}
      >Movies</NavLink>
      <NavLink
      to="/directors"
      exact
      style={link}
      activeStyle={{
        background: 'pink'
      }}
      >Directors</NavLink>
      <NavLink
      to="/actors"
      exact
      style={link}
      activeStyle={{
        background: 'pink'
      }}
      >Actors</NavLink>
    </div>
  );
};

export default NavBar;
