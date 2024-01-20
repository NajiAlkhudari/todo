import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {


  return (

    <header className=' h-14 bg-sky-700 flex items-center justify-between  px-4'>
        <h1 className='text-3xl font-bold font-serif '>
        United Future Task 
        </h1>
        <div className='space-x-6 text-xl  '>  
              <Link to="/" className='text-white font-sans   hover:text-black'>
  Home
  </Link>
              <Link to="/tasks" className='text-white font-sans hover:text-black'>
  Tasks
  </Link>

  </div>
      </header>

  )
}

export default Header
