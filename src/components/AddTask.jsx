import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../store/tasksSlice'
import Accordion from './ui/Accrodion'
import TextInput from './ui/TextInput/TextInput'
import Button from './ui/Button'
import useCurrentDate from '../hooks/useCurrentDate'

const AddTask = () => {
  const dispatch = useDispatch()
  let { currentDate } = useCurrentDate()

  const [data, setData] = useState({
    title: "",
    description: "",
    date: currentDate
  })

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const handleAddTask = () => {
    dispatch(addTask(data))
    setData({ title: "", description: "", date: currentDate })
  }

  return (
    <div>
  
      <Accordion title="Add Task">
        Title
        <TextInput  name="title" onChange={handleChange} value={data.title} />
        Description
        <TextInput
          className=""
          type="text"
          name="description"
          onChange={handleChange}
          value={data.description}
        />
        Date
        <TextInput name="date" onChange={handleChange} value={data.date} type="date" />
        <Button onClick={handleAddTask}
         className="float-right bg-black text-white px-4 rounded-md">Add</Button>
      </Accordion>
    </div>
  )
}

export default AddTask
