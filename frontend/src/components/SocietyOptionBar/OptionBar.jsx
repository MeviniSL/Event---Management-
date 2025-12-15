import React from 'react'
import { useState } from 'react'

function OptionBar() {
     const [showEventMenu, setShowEventMenu] = useState(false);
  return (
        <nav className="w-full bg-gray-100 border-b shadow-sm flex justify-center items-center py-4">
        <div className="w-full px-8 flex flex-wrap justify-between gap-4 items-center max-w-7xl">
          <button className="w-[170px] py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium transition-colors">
            Profile Details
          </button>
          <div className="relative">
            <button 
              onClick={() => setShowEventMenu(!showEventMenu)}
              className="w-[170px] py-3 bg-[#0570c4] hover:bg-[#05599f] text-white font-medium  transition-colors flex items-center justify-center gap-2"
            >
              Event Manage
              <svg 
                className={`w-4 h-4 transition-transform ${showEventMenu ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showEventMenu && (
              <div className="absolute  left-0 top-full bg-white shadow-lg border border-gray-200 z-20 min-w-[170px]">
                <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-700 border-b">
                  Add New Event
                </a>
                <a href="#" className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-700 ">
                  Edit Event
                </a>
              </div>
            )}
          </div>
          <button className="w-[170px] py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium transition-colors">
            Event History
          </button>
          <button className="w-[170px] py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium transition-colors">
            Event Post
          </button>
        </div>
      </nav>
  )
}

export default OptionBar