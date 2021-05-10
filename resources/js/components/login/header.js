import React from 'react';
import ReactDOM from 'react-dom';


export default function Header() {

  const navbar = {
    height: '125px',
    padding: '8px 16px',
    position: 'fixed',
    backgroundColor: '#0D0D0D',
    top: 0,
    right: 0,
    left: 0
  }

  const navBrand = {
    margin: '0 auto',
    width: '180px',
    height: 'auto',
    display: 'block',
    padding: '5px 0',
  }

  return (
    <div className="header" style={navbar}>
      <img src="/images/marsoc.png" alt="navbar-brand" style={navBrand} />
    </div>
  );
}