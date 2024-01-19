import React from 'react'
import AddTask from '../components/AddTask'
import Tasks from './Tasks'

const Home = () => {
  return (
    <div>
      <AddTask />
      <Tasks />
    </div>
  )
}

export default Home
