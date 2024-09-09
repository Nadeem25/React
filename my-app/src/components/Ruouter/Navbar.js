import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

function Navbar() {
    const auth = useAuth()
  return (
    <div>
      <nav>
        <div>
        <NavLink to='/'>Home</NavLink>
        </div>
        <div><NavLink to='/about'>about</NavLink></div>
        <div><NavLink to='/profile'>Profile</NavLink></div>
        {
            !auth.user && (
                <div><NavLink to='/login'>Login</NavLink></div>
            )
        }
      </nav>
    </div>
  )
}

export default Navbar
