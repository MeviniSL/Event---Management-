import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import HomePage from './pages/Home/HomePage'
import Society from './pages/Society/Society'
import './App.css'

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/society" element={<Society />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App