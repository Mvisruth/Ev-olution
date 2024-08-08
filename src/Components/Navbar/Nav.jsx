import React from 'react'
import './Nav.css'

export const Nav = () => {
  return (
    <div className='nav'>

        <div className='nav-logo'>Ev-olution</div>
        <ul className='nav-menu'>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
        </ul>

    </div>
  )
}
