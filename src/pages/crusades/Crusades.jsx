/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from './components/Hero'
import Navbar from '../../components/Navbar'
import News from './components/News'
import Direct from './components/Direct'

function Crusades() {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="md:w-[85%] w-[90%] mx-auto">
        <div className="absolute h-fit left-0 w-full z-[1] lg:flex hidden">
          <img src="shape4.png" className="absolute w-[300px] right-32 bottom-0" />
        </div>

        <div className="grid grid-cols-12 gap-4 py-10">
          <div className="lg:col-span-8 col-span-12">
            <News />
          </div>

          <div className="lg:col-span-4 col-span-12">
            <Direct />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Crusades