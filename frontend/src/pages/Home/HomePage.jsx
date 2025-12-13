import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { AGM, HomeHero, IEEELogo, ServiceBg } from '../../assets/assets'


function HomePage() {
  return (
    <div class="w-full h-full m-0 p-0 bg-white overflow-x-hidden">
       <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div id="home" className="flex-col justify-center items-center home-container h-full mt-16">
      
      <section class="text-gray-600 body-font ">
  <div class="container mx-auto flex px-5 py-20 md:flex-row  flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font max-sm:text-[28px] text-4xl mb-3 font-bold text-[#0570c4]">Empowering University Events with AI
      </h1>
      <h2 className="title-font max-sm:text-[18px] text-2xl mb-3 font-medium text-[#3baaf5]">Manage, promote and analyze your society events in one smart platform.</h2>
      <p class="mb-8  leading-relaxed">Manage, promote and analyze university events all in one place with Esyventra. The platform automates scheduling, approval and promotion using AI-driven caption and flyer generation that helping societies save time and boost participation.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-[#0570c4] border-0 py-2 px-6 focus:outline-none hover:bg-[#05599f] rounded text-lg">Events</button>
        <button class="ml-4 inline-flex text-white bg-[#3baaf5]  py-2 px-6 focus:outline-none hover:bg-[#0570c4] rounded text-lg">Societies</button>
      </div>

      
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={HomeHero}/>
    </div>
  </div>
</section>


<section className="text-gray-600 body-font p-0">
  <div className="w-full flex px-5 py-0 mx-auto justify-center items-center flex-wrap gap-20">
    <div className="s1 w-40 h-40 bg-gray-300"></div>
    <div className="s1 w-40 h-40 bg-gray-300"></div>
    <div className="s1 w-40 h-40 bg-gray-300"></div>
    <div className="s1 w-40 h-40 bg-gray-300"></div>
    <div className="s1 w-40 h-40 bg-gray-300"></div>
    <div className="s1 w-40 h-40 bg-gray-300"></div>
    <div className="s1 w-40 h-40 bg-gray-300"></div>
  </div>
</section>


<section id='event' class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
       <h1 className="sm:text-3xl md:text-4xl lg:text-[46px] text-[56px] font-bold mb-2 text-[#0570c4]">
          Upcoming Events</h1>
        {/* <div class="h-1 w-20 bg-indigo-500 rounded"></div> */}
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-full w-full rounded  object-cover object-center mb-6 border-1 border-gray-200"  src={AGM} alt="content"/>
          <h2 class="text-lg text-[#0570c4] font-bold title-font mb-1">Annual General Meeting 2025</h2>
          <h3 class=" text-black text-s font-medium  mb-3">IEEE Student Branch</h3>
          <p class="leading-relaxed text-base text-justify">The IEEE Student Branch SUSL is excited to announce our Annual General Meeting 2025! This is where innovation meets opportunity, and where your voice becomes part of our collective vision.</p>
          <button class="inline-flex justify-center cursor-pointer mt-5 text-white bg-[#0570c4] border-0 py-2 w-full focus:outline-none hover:bg-[#05599f] rounded text-lg">View More</button>
        </div>
      </div>

      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-full w-full rounded  object-cover object-center mb-6 border-1 border-gray-200"  src={AGM} alt="content"/>
          <h2 class="text-lg text-[#0570c4] font-bold title-font mb-1">Annual General Meeting 2025</h2>
          <h3 class=" text-black text-s font-medium  mb-3">IEEE Student Branch</h3>
          <p class="leading-relaxed text-base text-justify">The IEEE Student Branch SUSL is excited to announce our Annual General Meeting 2025! This is where innovation meets opportunity, and where your voice becomes part of our collective vision.</p>
          <button class="inline-flex justify-center cursor-pointer mt-5 text-white bg-[#0570c4] border-0 py-2 w-full focus:outline-none hover:bg-[#05599f] rounded text-lg">View More</button>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-full w-full rounded  object-cover object-center mb-6 border-1 border-gray-200"  src={AGM} alt="content"/>
          <h2 class="text-lg text-[#0570c4] font-bold title-font mb-1">Annual General Meeting 2025</h2>
          <h3 class=" text-black text-s font-medium  mb-3">IEEE Student Branch</h3>
          <p class="leading-relaxed text-base text-justify">The IEEE Student Branch SUSL is excited to announce our Annual General Meeting 2025! This is where innovation meets opportunity, and where your voice becomes part of our collective vision.</p>
          <button class="inline-flex justify-center cursor-pointer mt-5 text-white bg-[#0570c4] border-0 py-2 w-full focus:outline-none hover:bg-[#05599f] rounded text-lg">View More</button>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-full w-full rounded  object-cover object-center mb-6 border-1 border-gray-200"  src={AGM} alt="content"/>
          <h2 class="text-lg text-[#0570c4] font-bold title-font mb-1">Annual General Meeting 2025</h2>
          <h3 class=" text-black text-s font-medium  mb-3">IEEE Student Branch</h3>
          <p class="leading-relaxed text-base text-justify">The IEEE Student Branch SUSL is excited to announce our Annual General Meeting 2025! This is where innovation meets opportunity, and where your voice becomes part of our collective vision.</p>
          <button class="inline-flex justify-center cursor-pointer mt-5 text-white bg-[#0570c4] border-0 py-2 w-full focus:outline-none hover:bg-[#05599f] rounded text-lg">View More</button>
        </div>
      </div>
    </div>
  </div>
</section>


<section id='society' class="text-gray-600 body-font">
  
  <div class="container px-5 py-15 mx-auto">
    <h1 class="title-font text-3xl font-bold text-gray-900 mb-12 text-center">Societies</h1>
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/5
        mb-10 px-6">
        <div class="rounded">
          <img alt="content" class="object-cover rounded-full object-center h-full w-full border-2 border-[#0570c4]" src={IEEELogo}/>
        </div>
        <h2 class="title-font text-lg font-bold text-[#0570c4] mt-6 mb-3">IEEE Student Branch</h2>
        <p class="leading-relaxed text-base">Leading the charge in tech innovation and education.</p>
        <button class="flex mx-auto mt-6 text-white bg-[#0570c4] cursor-pointer  border-0 py-2 px-5 focus:outline-none hover:bg-[#05599f] rounded">View Profile</button>
      </div>

   <div class="sm:w-1/5
     mb-10 px-6">
        <div class="rounded">
          <img alt="content" class="object-cover rounded-full object-center h-full w-full border-2 border-[#0570c4]" src={IEEELogo}/>
        </div>
        <h2 class="title-font text-lg font-bold text-[#0570c4] mt-6 mb-3">IEEE Student Branch</h2>
        <p class="leading-relaxed text-base">Leading the charge in tech innovation and education.</p>
        <button class="flex mx-auto mt-6 text-white bg-[#0570c4] cursor-pointer  border-0 py-2 px-5 focus:outline-none hover:bg-[#05599f] rounded">View Profile</button>
      </div>

      <div class="sm:w-1/5
        mb-10 px-6">
        <div class="rounded">
          <img alt="content" class="object-cover rounded-full object-center h-full w-full border-2 border-[#0570c4]" src={IEEELogo}/>
        </div>
        <h2 class="title-font text-lg font-bold text-[#0570c4] mt-6 mb-3">IEEE Student Branch</h2>
        <p class="leading-relaxed text-base">Leading the charge in tech innovation and education.</p>
        <button class="flex mx-auto mt-6 text-white bg-[#0570c4] cursor-pointer  border-0 py-2 px-5 focus:outline-none hover:bg-[#05599f] rounded">View Profile</button>
      </div>

      <div class="sm:w-1/5
        mb-10 px-6">
        <div class="rounded">
          <img alt="content" class="object-cover rounded-full object-center h-full w-full border-2 border-[#0570c4]" src={IEEELogo}/>
        </div>
        <h2 class="title-font text-lg font-bold text-[#0570c4] mt-6 mb-3">IEEE Student Branch</h2>
        <p class="leading-relaxed text-base">Leading the charge in tech innovation and education.</p>
        <button class="flex mx-auto mt-6 text-white bg-[#0570c4] cursor-pointer  border-0 py-2 px-5 focus:outline-none hover:bg-[#05599f] rounded">View Profile</button>
      </div>

      <div class="sm:w-1/5
        mb-10 px-6">
        <div class="rounded">
          <img alt="content" class="object-cover rounded-full object-center h-full w-full border-2 border-[#0570c4]" src={IEEELogo}/>
        </div>
        <h2 class="title-font text-lg font-bold text-[#0570c4] mt-6 mb-3">IEEE Student Branch</h2>
        <p class="leading-relaxed text-base">Leading the charge in tech innovation and education.</p>
        <button class="flex mx-auto mt-6 text-white bg-[#0570c4] cursor-pointer  border-0 py-2 px-5 focus:outline-none hover:bg-[#05599f] rounded">View Profile</button>
      </div>

      

  
    </div>
  </div>
</section>

<section id='about' class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover h-full w-full object-center rounded" alt="hero" src={ServiceBg}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-6 font-bold text-gray-900">About Esyventra
        
      </h1>
      <p class="mb-8 leading-relaxed text-justify">
      Esyventra is a cutting-edge event management platform designed specifically for university societies and student organizations. Our mission is to simplify the process of organizing, promoting, and analyzing events on campus. With Esyventra, societies can effortlessly create event pages, manage registrations, and leverage AI-powered tools to generate engaging promotional content. Our platform not only saves time but also enhances event visibility and participation through intelligent marketing strategies. Join us in revolutionizing the way university events are managed and experienced!
      </p>

      <div class="flex justify-center">
        <button class="inline-flex text-white bg-[#0570c4] border-0 py-2 px-10 focus:outline-none hover:bg-[#05599f] rounded text-lg">Sign in </button>
        
      </div>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-0 mx-auto">
    
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg text-center">
          <div class="w-30 h-30 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-15 h-15" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-2">Event Planning</h2>
          <p class="leading-relaxed text-center">Create and manage events easily</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg text-center">
          <div class="w-30 h-30 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-15 h-15" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
          <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-2">Get Membership</h2>
          <p class="leading-relaxed text-center">Join your favorite society online</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg text-center">
          <div class="w-30 h-30 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-15 h-15" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-2">Event Publishing</h2>
          <p class="leading-relaxed text-center">Instantly share with students</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg text-center">
          <div class="w-30 h-30 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-15 h-15" viewBox="0 0 24 24">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
            </svg>
          </div>
          <h2 class="text-lg text-center text-gray-900 font-medium title-font mb-2">AI Assistance</h2>
          <p class="leading-relaxed text-center">Smart captions & flyers powered by AI</p>
        </div>
      </div>
     
     
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Event Gallery</h1>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301"/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303"/>
        </div>
      </div>
    </div>
  </div>
</section>


<section id='contact' class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Give your feedback regarding Esyventra.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-[#0570c4] border-0 py-2 px-8 focus:outline-none hover:bg-[#05599f]  rounded text-lg">Send Message</button>
        </div>
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a class="text-black">esyventra@email.com</a>
          <p class="leading-normal my-5"> No 114 Badulla Road<br/>Rathnapura, Sabaragamuwa Province, Sri Lanka
          
          </p>
          <span class="inline-flex">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

      </div>

      <Footer/>
    </div>
  )
}

export default HomePage