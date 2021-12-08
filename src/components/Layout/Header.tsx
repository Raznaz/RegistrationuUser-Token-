import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav>
        <div className='nav-wrapper'>
          <Link to='/'>Logo</Link>
          <ul id='nav-mobile' className='right'>
            <li>
              <Link to='/users'>User</Link>
            </li>
            <li>
              <Link to='/registration'>Registration</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
