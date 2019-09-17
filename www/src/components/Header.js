import React from 'react';
import logo from './logo.svg';

const Header = () => {
  return <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    
    <div className="App-description">
    <br/>
    Radix is an application platform built to increase development speed by providing  
    <br />
    the best possible tools to develop and run your applications.
    </div>
    <p>
      Laurent
    </p>
    <a
      className="App-link"
      href="https://www.radix.equinor.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn more
    </a>
  </header>
}

export default Header;