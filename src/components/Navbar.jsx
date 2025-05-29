import React from 'react'
import logo from '../assets/logo.png'

import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex items-center space-x-8 border-b pl-4 py-4 bg-white shadow-md'>
  <img className='w-[50px] h-auto' src={logo} alt="Logo" />

  <Link to="/" className='text-blue-600 text-2xl font-semibold hover:underline'>
    Movies
  </Link>

  <Link to="/watchlist" className='text-blue-600 text-2xl font-semibold hover:underline'>
    Watchlist
  </Link>
</div>

  )
}

export default Navbar