import React from 'react'
import bannerImage from './picture/banner2.jpg'
import Categories from './Categories.jsx';
import Testimonial from './Testimonial.jsx';
import Carousal from './Carousal.jsx';

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <section
        className="w-full h-64 md:h-166 bg-center bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${bannerImage})` }}
        role="img"
        aria-label="Banner"
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex items-center  lg:ms-38 h-full px-4">
          <div className="text-center max-w-3xl">
            <h1 className="text-white  text-md sm:text-2xl md:text-4xl font-bold font-sans leading-tight">NEW YEAR NEW DEAL</h1>
            <p className="text-white text-xs font-roboto sm:text-sm md:text-lg mt-2">From morning coffee to bedtime stories—discover <br/> all you need to live well, all in one place.</p>
            <div className='flex gap-6 mt-7 justify-center'>
            <a href="/products"><button className="mt-4 px-2 py-1 md:px-4 md:py-2 text-xs md:text-lg text-white font-mono border rounded-full font-semibold rounded hover:bg-gray-200 hover:text-black transition duration-300">Shop Now</button></a>
            <a href="/Signin"><button className="mt-4 px-2 py-1 md:px-4 md:py-2 text-xs md:text-lg text-white font-mono border rounded-full  font-semibold rounded hover:bg-gray-200 hover:text-black transition duration-300">Sign IN</button></a>
            </div>
          </div>
        </div>
      </section>
      <Categories/>
      <Carousal/>
      <Testimonial/>
    </div>
  )
}