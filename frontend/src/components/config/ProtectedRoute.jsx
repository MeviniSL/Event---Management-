import React from 'react'
import { Navigate } from 'react-router-dom'
import UserService from '../../services/UserService'

const ProtectedRoute = ({ children, requiredRole }) => {
  if (!UserService.isAuthenticated()) {
    return <Navigate to="/login" replace />
  }
  
  // If a specific role is required, check for it
  if (requiredRole) {
    const userRole = UserService.getUserRole()
    if (userRole !== requiredRole) {
      // Redirect to appropriate dashboard based on user's role
      if (userRole === 'ADMIN') {
        return <Navigate to="/admin" replace />
      } else if (userRole === 'SOCIETY') {
        return <Navigate to="/profile-details" replace />
      } else {
        return <Navigate to="/" replace />
      }
    }
  }
  
  return children
}

export default ProtectedRoute