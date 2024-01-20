import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask, updateTask } from '../store/tasksSlice'
import Button from './ui/Button'
import TaskItem from './TaskItem'
import { FcGenericSortingAsc , FcGenericSortingDesc  } from "react-icons/fc";


const TaskList = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks)

  const [selectedTask, setSelectedTask] = useState(null)
  const [updatedTask, setUpdatedTask] = useState({})
  const [sortedTasks, setSortedTasks] = useState([])
  const [sortOrder, setSortOrder] = useState('desc')

  useEffect(() => {
    if (sortOrder === 'desc') {
      setSortedTasks([...tasks].sort((a, b) => new Date(b.date) - new Date(a.date)))
    } else {
      setSortedTasks([...tasks].sort((a, b) => new Date(a.date) - new Date(b.date)))
    }
  }, [tasks, sortOrder])

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index))
  }

  const handleUpdateTask = (index) => {
    dispatch(updateTask({ index, newTask: updatedTask }))
    setSelectedTask(null)
  }

  const handleEditTask = (index) => {
    setSelectedTask(index)
    setUpdatedTask(tasks[index])
  }

  const handleChange = (event) => {
    setUpdatedTask({ ...updatedTask, [event.target.name]: event.target.value })
  }

  const handleSort = () => {
    setSortOrder(sortOrder === 'desc' ? 'asc'
    : 'desc')
  }

  return (
    <>
      <div className=' '>
        <div className='xl:mx-10 space-y-6  mt-4 rounded-3xl my-10'>
          <div className='flex items-center justify-between'>       
               <h1 className='text-xl underline'>Tasks</h1>
               <Button className="text-2xl" onClick={handleSort}>
  {sortOrder === 'desc' ? <FcGenericSortingDesc /> : <FcGenericSortingAsc />}
</Button>          </div>

          {sortedTasks.map((task, index) => (
            <TaskItem 
              task={task} 
              index={index} 
              handleDeleteTask={handleDeleteTask} 
              handleEditTask={handleEditTask} 
              selectedTask={selectedTask} 
              handleChange={handleChange} 
              handleUpdateTask={handleUpdateTask} 
              updatedTask={updatedTask} 
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default TaskList
