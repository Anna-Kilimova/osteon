import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {

  return <nav>
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
}
