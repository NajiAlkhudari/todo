import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: JSON.parse(localStorage.getItem('tasks')) || [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload)
      localStorage.setItem('tasks', JSON.stringify(state))
    },
    deleteTask: (state, action) => {
      state.splice(action.payload, 1)
      localStorage.setItem('tasks', JSON.stringify(state))
    },
    updateTask: (state, action) => {
      state[action.payload.index] = action.payload.newTask
      localStorage.setItem('tasks', JSON.stringify(state))
    }
  },
})

export const { addTask ,  deleteTask, updateTask } = tasksSlice.actions

export default tasksSlice.reducer
