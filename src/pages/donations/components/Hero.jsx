import React from 'react'

function Hero() {
  return (
    <div className="bg-[url('/donation-banner3.avif')] bg-cover bg-center">
        <div className="lg:h-[75vh] md:h-[35vh] h-[40vh] duration-300 ease-in transition-all pt-24 w-full mx-auto bg-gray-900/50 dark:bg-black/70 dark:text-white flex items-center justify-center relative">
          <div className="z-50">
            <h1 className="md:text-7xl text-4xl text-center font-bold pb-2 roboto text-white drop-shadow-lg">Donations</h1>
            <p className="flex text-center px-1 capitalize md:text-xl text-lg roboto font-medium text-white drop-shadow-md bg-black/20 py-2 rounded">
              Secure gifts making a global <br className='md:hidden block'/> impact for the Gospel
            </p>
          </div>
        </div>
    </div>
  )
}

export default Hero