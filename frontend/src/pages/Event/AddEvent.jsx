import React, { useState } from 'react'
import Society from '../Society/Society'
import SocietyNav from '../../components/SocietyNav/SocietyNav'
import OptionBar from '../../components/SocietyOptionBar/OptionBar'

function AddEvent() {
  const [guests, setGuests] = useState([
    { name: 'Mr. Amal Dahanayeka', position: 'CEO, ABC Foundation' },
    { name: 'Mr. Kusal De Silva', position: 'CEO, ABC Foundation' }
  ])
  
  const [newGuest, setNewGuest] = useState({ name: '', position: '' })
 

  const addGuest = () => {
    if (newGuest.name && newGuest.position) {
      setGuests([...guests, newGuest])
      setNewGuest({ name: '', position: '' })
    }
  }

  const removeGuest = (index) => {
    setGuests(guests.filter((_, i) => i !== index))
  }

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
        <SocietyNav/>

      {/* Navigation Tabs - Full Width */}
        <OptionBar/>

      {/* Main Content */}
      <main className="flex-1 w-full px-8 py-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0570c4] mb-8">Add New Event</h2>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Event Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Event Name</label>
            <input
              type="text"
              className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-3 text-gray-800 focus:bg-white focus:ring-2 focus:ring-[#0570c4] focus:border-transparent outline-none transition-all"
              placeholder="Enter event name"
            />
          </div>

          {/* Date, Time, Venue Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Event Date</label>
              <input
                type="date"
                className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-3 text-gray-800 focus:bg-white focus:ring-2 focus:ring-[#0570c4] focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Event Time</label>
              <input
                type="time"
                className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-3 text-gray-800 focus:bg-white focus:ring-2 focus:ring-[#0570c4] focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Venue</label>
              <input
                type="text"
                className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-3 text-gray-800 focus:bg-white focus:ring-2 focus:ring-[#0570c4] focus:border-transparent outline-none transition-all"
                placeholder="Enter venue"
              />
            </div>
          </div>

          {/* Event Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Event Description</label>
            <textarea
              rows="6"
              className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-3 text-gray-800 focus:bg-white focus:ring-2 focus:ring-[#0570c4] focus:border-transparent outline-none resize-none transition-all"
              placeholder="Enter event description"
            ></textarea>
          </div>

          {/* Special Guests */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Special Guests</h3>
            
            {/* Add Guest Form */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4 mb-6">
              <input
                type="text"
                placeholder="Name"
                value={newGuest.name}
                onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
                className="bg-gray-100 border border-gray-300 rounded px-4 py-3 text-gray-800 focus:bg-white focus:ring-2 focus:ring-[#0570c4] focus:border-transparent outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Position"
                value={newGuest.position}
                onChange={(e) => setNewGuest({ ...newGuest, position: e.target.value })}
                className="bg-gray-100 border border-gray-300 rounded px-4 py-3 text-gray-800 focus:bg-white focus:ring-2 focus:ring-[#0570c4] focus:border-transparent outline-none transition-all"
              />
              <button
                type="button"
                onClick={addGuest}
                className="bg-[#0570c4] hover:bg-[#05599f] text-white font-medium py-3 px-8 rounded transition-colors"
              >
                Add
              </button>
            </div>

            {/* Guest List */}
            <div className="space-y-3">
              {guests.map((guest, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded border border-gray-200">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{guest.name}</p>
                    <p className="text-sm text-gray-600">{guest.position}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeGuest(index)}
                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
         
          </div>

        

          {/* Submit Button */}
          <div className="pt-6 flex justify-center">
            <button
              type="submit"
              className="bg-[#0570c4] hover:bg-[#05599f] text-white font-semibold py-3 px-16 rounded-lg text-lg shadow-md hover:shadow-lg transition-all"
            >
              Create Event
            </button>
          </div>
        </form>
      </main>

      {/* Footer - Full Width */}
      <footer className="w-full bg-[#0570c4] py-6 mt-auto">
        <p className="text-center text-white font-medium">© 2025 Esyventra. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default AddEvent