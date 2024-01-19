import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'


const Header = () => {


  return (

    <header className='header flex items-center justify-between  px-4'>
        <h1 className='text-3xl font-bold font-serif'>
        United Future Task 
        </h1>
        <div className='space-x-6 text-xl  '>  
              <Link to="/" className='text-white font-sans   hover:text-sky-600'>
  Home
  </Link>
              <Link to="/tasks" className='text-white font-sans hover:text-sky-600'>
  Tasks
  </Link>

  </div>
      </header>

  )
}

export default Header
