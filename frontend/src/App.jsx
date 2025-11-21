import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import HomePage from './pages/Home/HomePage'
import Society from './pages/Society/Society'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'
import EventHistory from './pages/EventHistory/EventHistory'
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
        <Route path="/profile-details" element={<ProfileDetails />} />
        <Route path="/event-history" element={<EventHistory />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App