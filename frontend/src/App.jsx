import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import HomePage from './pages/Home/HomePage'
import Society from './pages/Society/Society'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'
import EventHistory from './pages/EventHistory/EventHistory'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/society" element={<Society />} />
        <Route path="/profile-details" element={<ProfileDetails />} />
        <Route path="/event-history" element={<EventHistory />} />
      </Routes>
    </Router>
  )
}

export default App