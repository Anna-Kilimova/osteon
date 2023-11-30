import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

export const Header = () => {

  return <div className='header col2'> <nav className='header__nav col8'>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/prices'>Users</Link>
      </li>
    </ul>
  </nav>

  </div>
}
