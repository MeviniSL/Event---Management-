import React, { useState } from 'react'
import { Logo } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import UserService from '../../services/UserService'

function AdminDashBoard() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('societies')
  const [societies, setSocieties] = useState([
    { id: 1, name: 'IEEE Student Branch', username: 'ieee_admin', createdAt: '2025-01-10' },
    { id: 2, name: 'Rotaract Club', username: 'rotaract_admin', createdAt: '2025-01-15' }
  ])

  const [newSociety, setNewSociety] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const [adminCredentials, setAdminCredentials] = useState({
    currentPassword: '',
    newUsername: '',
    newPassword: '',
    confirmPassword: ''
  })

  const [showAddDialog, setShowAddDialog] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  // Handle add society
const handleAddSociety = async (e) => {
  e.preventDefault()
  
  if (newSociety.password !== newSociety.confirmPassword) {
    alert('Passwords do not match!')
    return
  }

  try {
    const societyData = {
      name: newSociety.name,
      username: newSociety.username,
      password: newSociety.password,
      role: 'SOCIETY'
    }
    
    await UserService.createSociety(societyData)
    alert('Society created successfully!')
    setShowAddDialog(false)
    setNewSociety({ name: '', username: '', password: '', confirmPassword: '' })
    // Refresh societies list if needed
  } catch (error) {
    console.error('Failed to create society:', error)
    alert('Failed to create society: ' + (error.response?.data?.message || error.message))
  }
};


  // Handle delete society
  const handleDeleteSociety = (id) => {
    if (window.confirm('Are you sure you want to delete this society?')) {
      setSocieties(societies.filter(s => s.id !== id))
      alert('Society deleted successfully!')
    }
  }

  // Handle admin credentials change
  const handleChangeCredentials = (e) => {
    e.preventDefault()
    if (adminCredentials.newPassword !== adminCredentials.confirmPassword) {
      alert('New passwords do not match!')
      return
    }
    if (!adminCredentials.currentPassword) {
      alert('Please enter current password!')
      return
    }
    alert('Admin credentials updated successfully!')
    setAdminCredentials({
      currentPassword: '',
      newUsername: '',
      newPassword: '',
      confirmPassword: ''
    })
  }

  const adminSignout = () => {
    UserService.Logout()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#3baaf5] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#3baaf5] rounded-full flex items-center justify-center ">
                <img src={Logo} alt="Esyventra Logo" className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold">Admin Dashboard</h1>
                <p className="text-xs sm:text-sm opacity-90">Esyventra Management System</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:block text-right">
                <p className="font-semibold text-sm">Admin User</p>
                <p className="text-xs opacity-80">admin@esyventra.com</p>
              </div>
              <button className="bg-[#cf0808ff] border-0 py-2 px-4 focus:outline-none hover:bg-[#b80000ff] text-[white] px-4 py-2 rounded transition-colors font-medium text-sm" onClick={adminSignout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('societies')}
              className={`px-6 py-3 font-medium transition-colors flex items-center gap-2 ${
                activeTab === 'societies'
                  ? 'bg-[#0570c4] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Manage Societies
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-6 py-3 font-medium transition-colors flex items-center gap-2 ${
                activeTab === 'settings'
                  ? 'bg-[#0570c4] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Admin Settings
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Societies Tab */}
        {activeTab === 'societies' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#0570c4] text-white rounded-lg shadow-md p-6">
                <h3 className="text-4xl font-bold mb-2">{societies.length}</h3>
                <p className="text-sm opacity-90">Total Societies</p>
              </div>
              <div className="bg-[#3baaf5] text-white rounded-lg shadow-md p-6">
                <h3 className="text-4xl font-bold mb-2">0</h3>
                <p className="text-sm opacity-90">Active Events</p>
              </div>
              <div className="bg-[#05599f] text-white rounded-lg shadow-md p-6">
                <h3 className="text-4xl font-bold mb-2">0</h3>
                <p className="text-sm opacity-90">Total Students</p>
              </div>
            </div>

            {/* Add Society Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setShowAddDialog(true)}
                className="bg-[#0570c4] hover:bg-[#05599f] text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add New Society
              </button>
            </div>

            {/* Societies Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold text-[#0570c4]">Registered Societies</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">#</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Society Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Username</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Created Date</th>
                      <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {societies.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                          No societies registered yet. Add your first society.
                        </td>
                      </tr>
                    ) : (
                      societies.map((society, index) => (
                        <tr key={society.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-sm text-gray-700">{index + 1}</td>
                          <td className="px-6 py-4">
                            <span className="text-sm font-semibold text-gray-900">{society.name}</span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">{society.username}</td>
                          <td className="px-6 py-4 text-sm text-gray-700">{society.createdAt}</td>
                          <td className="px-6 py-4 text-center">
                            <button
                              onClick={() => handleDeleteSociety(society.id)}
                              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition-colors inline-flex items-center gap-2"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Admin Settings Tab */}
        {activeTab === 'settings' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-[#0570c4] mb-2">Change Admin Credentials</h2>
              <p className="text-sm text-gray-600 mb-6">Update your username and password to keep your account secure</p>

              <form onSubmit={handleChangeCredentials} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Current Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={adminCredentials.currentPassword}
                      onChange={(e) => setAdminCredentials({ ...adminCredentials, currentPassword: e.target.value })}
                      required
                      className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-3 focus:bg-white focus:ring-2 focus:ring-[#0570c4] focus:border-transparent outline-none"
                      placeholder="Enter current password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">New Username (Optional)</label>
                  <input
                    type="text"
                    value={adminCredentials.newUsername}
                    onChange={(e) => setAdminCredentials({ ...adminCredentials, newUsername: e.target.value })}
                    className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-3 focus:bg-white focus:ring-2 focus:ring-[#0570c4] focus:border-transparent outline-none"
                    placeholder="Leave blank to keep current username"
                  />
                  <p className="text-xs text-gray-500 mt-1">Leave blank to keep current username</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">New Password</label>
                  <input
                    type="password"
                    value={adminCredentials.newPassword}
                    onChange={(e) => setAdminCredentials({ ...adminCredentials, newPassword: e.target.value })}
                    required
                    minLength="6"
                    className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-3 focus:bg-white focus:ring-2 focus:ring-[#0570c4] focus:border-transparent outline-none"
                    placeholder="Enter new password"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    value={adminCredentials.confirmPassword}
                    onChange={(e) => setAdminCredentials({ ...adminCredentials, confirmPassword: e.target.value })}
                    required
                    minLength="6"
                    className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-3 focus:bg-white focus:ring-2 focus:ring-[#0570c4] focus:border-transparent outline-none"
                    placeholder="Confirm new password"
                  />
                </div>

                <div className="flex gap-4 justify-end pt-4">
                  <button
                    type="button"
                    onClick={() => setAdminCredentials({
                      currentPassword: '',
                      newUsername: '',
                      newPassword: '',
                      confirmPassword: ''
                    })}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-8 rounded transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#0570c4] hover:bg-[#05599f] text-white font-semibold py-3 px-8 rounded transition-colors"
                  >
                    Update Credentials
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Add Society Dialog/Modal */}
      {showAddDialog && (
        <div className="fixed inset-0 backdrop-blur bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h2 className="text-2xl font-bold text-[#0570c4] mb-4">Add New Society</h2>
            <form onSubmit={handleAddSociety} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Society Name</label>
                <input
                  type="text"
                  value={newSociety.name}
                  onChange={(e) => setNewSociety({ ...newSociety, name: e.target.value })}
                  required
                  className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-3 focus:bg-white focus:ring-2 focus:ring-[#0570c4] focus:border-transparent outline-none"
                  placeholder="e.g., IEEE Student Branch"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  value={newSociety.username}
                  onChange={(e) => setNewSociety({ ...newSociety, username: e.target.value })}
                  required
                  className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-3 focus:bg-white focus:ring-2 focus:ring-[#0570c4] focus:border-transparent outline-none"
                  placeholder="e.g., ieee_admin"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={newSociety.password}
                  onChange={(e) => setNewSociety({ ...newSociety, password: e.target.value })}
                  required
                  minLength="6"
                  className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-3 focus:bg-white focus:ring-2 focus:ring-[#0570c4] focus:border-transparent outline-none"
                  placeholder="Enter password"
                />
              </div>
                <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                <input
                  type="password"
                  value={newSociety.confirmPassword}
                  onChange={(e) => setNewSociety({ ...newSociety, confirmPassword: e.target.value })}
                  required
                  minLength="6"
                  className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-3 focus:bg-white focus:ring-2 focus:ring-[#0570c4] focus:border-transparent outline-none"
                  placeholder="Enter password"
                />
              </div>


              <div className="flex gap-4 justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddDialog(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#0570c4] hover:bg-[#05599f] text-white font-semibold py-2 px-6 rounded transition-colors"
                >
                  Add Society
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#0570c4] py-6 absolute bottom-0 w-full">
        <p className="text-center text-white font-medium">© 2025 Esyventra. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default AdminDashBoard