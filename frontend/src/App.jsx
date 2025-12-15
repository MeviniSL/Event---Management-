import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import HomePage from './pages/Home/HomePage'
import Society from './pages/Society/Society'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'
import EventHistory from './pages/EventHistory/EventHistory'
import AddEvent from './pages/Event/AddEvent'
import EditEVent from './pages/Event/EditEVent'
import AdminDashBoard from './pages/admin/AdminDashBoard'
import ProtectedRoute from './components/config/ProtectedRoute'
import './App.css'



function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/society" element={<ProtectedRoute><Society /></ProtectedRoute>} />
         {/* Society Routes */}
        <Route path="/profile-details" element={<ProtectedRoute requiredRole="SOCIETY"><ProfileDetails /></ProtectedRoute>} />
        <Route path="/event-history" element={<ProtectedRoute requiredRole="SOCIETY"><EventHistory /></ProtectedRoute>} />
        <Route path="/add-event" element={<ProtectedRoute requiredRole="SOCIETY"><AddEvent /></ProtectedRoute>} />
        <Route path="/edit-event" element={<ProtectedRoute requiredRole="SOCIETY"><EditEVent /></ProtectedRoute>} />
        
        {/* Admin Route */}
        <Route path="/admin" element={<ProtectedRoute requiredRole="ADMIN"><AdminDashBoard /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App