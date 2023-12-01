import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './NavBar.css';
import Sehat from './../../assets/Sehat.png';

const NavBar = () => {
  const [click, setClick] = useState (false);
  const handleClick = () => setClick (!click);

  return (
    <div className="headerNav">

      <div className="container">

        <img src={Sehat} alt="sehat logo" />

        <ul
          className={click ? 'nav-menu active' : 'nav-menu'}
          data-testid="nav-menu"
        >
          <li>
            <Link to="upload" smooth="true" duration={500}>Upload</Link>
          </li>
          <li>
            <a href="https://www.github.com/deecodess/Sehat">Github</a>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <div
          className="hamburger"
          onClick={handleClick}
          data-testid="hamburger-button"
        >
          {click
            ? <FaTimes size={20} style={{color: '#333'}} />
            : <FaBars size={20} style={{color: '#333'}} />}

        </div>
      </div>

    </div>
  );
};

export default NavBar;
