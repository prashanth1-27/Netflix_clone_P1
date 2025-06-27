import React from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes> 
      <Route path='/' element={<Home />} /> 
      <Route path='/Login' element={<Login />} />
    </Routes>
  )
}

export default App