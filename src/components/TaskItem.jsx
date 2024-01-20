import React from 'react'
import TextInput from './ui/TextInput/TextInput'
import Button from './ui/Button'


const TaskItem = ({ task, index, handleDeleteTask, handleEditTask, selectedTask, handleChange, handleUpdateTask, updatedTask }) => {
    return (
      <ul className='bg-gray-100 rounded-2xl px-4 ' key={index}>
        <div className='flex items-center justify-between'> 
          <div> 
            <li className='text-2xl font-extrabold text-orange-700 font-serif'>{task.title}</li>
            <li className='font-sans  '>{task.description}</li>
            <li className='font-semibold'>{task.date}</li>
          </div>
          <div className='flex space-x-2'>
            <Button className="text-white bg-red-400 hover:bg-red-500 rounded-full px-6" onClick={() => handleDeleteTask(index)}>Delete</Button>
            <Button className="text-white bg-green-400  hover:bg-green-500 rounded-full px-6" onClick={() => handleEditTask(index)}>Update</Button>
          </div>
        </div>
        {selectedTask === index && (
          <div className='  '> 
            <TextInput className="bg-neutral-200  " name="title" onChange={handleChange} value={updatedTask.title} />
            <TextInput className="bg-neutral-200  " name="description" onChange={handleChange} value={updatedTask.description} />
            <TextInput className="bg-neutral-200  " name="date" onChange={handleChange} value={updatedTask.date} type="date" />
            <Button className="float-right rounded-2xl bg-gray-700 px-4 text-white" onClick={() => handleUpdateTask(index)}>Save</Button>
          </div>
        )}
      </ul>
    )
  }

  export default TaskItem