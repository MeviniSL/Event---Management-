import React from 'react'

const EventHistory = () => {
  const mockEvent = {
    name: 'Annual Tech Meetup',
    date: '2025-11-15',
    location: 'Tech Park Auditorium',
    time: '10:00 AM - 4:00 PM'
  };

  const secondMockEvent = {
    name: 'Hackathon 2025',
    date: '2025-12-01',
    location: 'Innovation Hub',
    time: '9:00 AM - 6:00 PM'
  };

  return (
    <div className='p-6'>
        <h2 className='text-xl font-semibold mb-4 text-center py-4'>Event History</h2>
        <div className='overflow-x-auto'>
            <table className='min-w-full bg-white shadow-md rounded-lg overflow-hidden'>
                <thead className='bg-gray-200'>
                    <tr>
                        <th className='px-4 py-2 text-left'>Event Name</th>
                        <th className='px-4 py-2 text-left'>Date</th>
                        <th className='px-4 py-2 text-left'>Location</th>
                        <th className='px-4 py-2 text-left'>Time</th>
                        <th className='px-4 py-2 text-left'>Action</th>
                    </tr>
                </thead>
                <tbody className='border-b'>
                    <tr>
                      <td className='px-4 py-2'>{mockEvent.name}</td>
                      <td className='px-4 py-2'>{mockEvent.date}</td>
                      <td className='px-4 py-2'>{mockEvent.location}</td>
                      <td className='px-4 py-2'>{mockEvent.time}</td>
                      <td>
                        <button className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer'>
                            Delete
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className='px-4 py-2'>{secondMockEvent.name}</td>
                      <td className='px-4 py-2'>{secondMockEvent.date}</td>
                      <td className='px-4 py-2'>{secondMockEvent.location}</td>
                      <td className='px-4 py-2'>{secondMockEvent.time}</td>
                      <td>
                        <button className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer'>
                            Delete
                        </button>
                      </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default EventHistory
