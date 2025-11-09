import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function HomePage() {
  return (
    <div class="w-full h-full m-0 p-0">
      <Navbar/>

      <div className="flex justify-center items-center home-container h-150">
      
      Content

      </div>

      <Footer/>
    </div>
  )
}

export default HomePage