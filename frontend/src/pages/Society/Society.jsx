import React from 'react'
import { Auto, Logo, BG} from '../../assets/assets'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Society = () => {
  return (
    <div className="w-full h-full m-0 p-0">
      <Navbar/>
      {/* Cover image */}
      <div className="w-full h-48 md:h-64 bg-gray-200 flex items-center justify-center">
        <img src={BG} alt="cover" className="w-full h-full object-cover" />
      </div>

      {/* Header: logo, name, button */}
      <div className="max-w-6xl mx-auto -mt-12 px-6">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img src={Logo} alt="logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold">Society Name</h2>
            <p className="text-sm text-gray-500">Org Name</p>
          </div>
          <div className="">
            <button className="bg-[#0570c4] text-white px-4 py-2 hover:bg-[#3baaf5] hover:text-white cursor-pointer rounded-md font-semibold">Get Membership</button>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="max-w-6xl mx-auto px-6 mt-15">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-3">About</h3>
          <p className="text-gray-600">IEEE (Institute of Electrical and Electronics Engineers) is the world’s largest professional
             organization dedicated to advancing technology for the benefit of humanity. 
             It brings together engineers, scientists, and students from around the globe to share ideas, develop innovations, and promote technical excellence. 
             IEEE provides opportunities for learning, networking, research publication, and professional development through conferences, journals, and student branches. It also helps members enhance their skills, stay updated with the latest technologies, and contribute to solving real-world challenges.</p>
        </div>
      </div>

      {/* Three small images */}
      <div className="max-w-6xl mx-auto px-6 mt-15">
        <div className="flex gap-4">
          {[1,2,3].map(i => (
            <div key={i} className="flex-1 bg-white rounded-lg shadow overflow-hidden h-auto">
              <img src={Auto} alt={`auto ${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="max-w-6xl mx-auto px-6 mt-25">
        <h1 className="text-2xl font-bold text-center mb-6">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
              <img src={Auto} alt={`event ${i}`} className="w-full h-auto object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">Title</h4>
                <p className="text-sm text-gray-600">Society · Description</p>
                <div className="mt-4 flex justify-center">
                  <button className="text-sm text-white px-4 py-2 cursor-pointer bg-[#3baaf5] border-0  focus:outline-none hover:bg-[#0570c4] hover:text-white rounded ">View More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Updates */}
      <div className="max-w-6xl mx-auto px-6 mt-25">
        <h2 className="text-xl font-semibold text-center mb-10">Event Updates</h2>
        <div className="mb-4">
          <input placeholder="Event Name" className="w-full md:w-1/3 px-3 py-2 rounded border" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
              <img src={Auto} alt={`update ${i}`} className="w-full h-auto object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">Title</h4>
                <p className="text-sm text-gray-600">Society · Description</p>
                <div className="mt-4 flex justify-center">
                  <button className="text-sm text-white px-4 py-2 cursor-pointer bg-[#3baaf5] border-0  focus:outline-none hover:bg-[#0570c4] hover:text-white rounded ">View More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Announcement */}
      <div className="max-w-6xl mx-auto px-6 mt-10 mb-25">
        <h2 className="text-xl font-semibold text-center mb-10">Announcement</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1,2].map(i => (
            <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
              <img src={Auto} alt={`ann ${i}`} className="w-full h-auto object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">Title</h4>
                <p className="text-sm text-gray-600">Society · Description</p>
               <div className="mt-4 flex justify-center">
                  <button className="text-sm text-white px-4 py-2 cursor-pointer bg-[#3baaf5] border-0  focus:outline-none hover:bg-[#0570c4] hover:text-white rounded ">View More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Society
