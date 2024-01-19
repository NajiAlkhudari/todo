import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'

import Tasks from './pages/Tasks'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
            <Route path="tasks" element={<Tasks />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
