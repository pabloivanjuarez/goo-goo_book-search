import React from 'react';
import classes from './style.module.css';
import './style.module.css';
const liClasses = `nav-link ${classes.thisClass}`;

function Navbar() {
  return (
    <nav className='navbar navbar-default-lg'>
      <div>
        <ul className='navbar-nav'>
          <li className='nav-link'>
            <a className={liClasses} href='/'>Search<img className='nav-icon' src='{ }'></img>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/'>Search<img className='nav-icon' src='{ }'></img>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
