import React from 'react'
import Header from '../components/ui/Headr/Header'
import { Outlet } from "react-router-dom";
import AddTask from '../components/AddTask';
import Home from '../pages/Home';
const Layout = () => {
  return (
    <>
    <Header />
  {<Outlet />
  
  }
 
  

    
    </>
  )
}

export default Layout
