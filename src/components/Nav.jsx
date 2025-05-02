 
'use client'
import { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaCaretDown, FaCaretRight } from 'react-icons/fa'


const Nav = () => {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('#fff')

  const handleNav = () => {
    setNav(!nav)
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 0) {
        setColor('#fff')
        setTextColor('#000')
      } else {
        setColor('transparent')
        setTextColor('#fff')
      }
    }
    window.addEventListener('scroll', changeColor)
    return () => {
      window.removeEventListener('scroll', changeColor)
    }
  }, [])


  if (location.pathname === '/404') return null

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed w-full py-4 z-[100] px-4 lg:px-16 ease-in duration-100'
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <div className="flex items-center">
          <img src="/cont.png" alt="logo" className="inline-block w-[40px]" />
          {/* <p style={{ color: `${textColor}` }}  className="text-2xl font-bold maincol">Samoge</p> */}
        </div>

        <div className='lg:block hidden'>
          <div style={{ color: `${textColor}` }} className="flex font-semibold text-white items-center justify-between space-x-5">
            <a href="/" className="">Home</a>
            <a href="/about" className="">About</a>
            {/* <a href="/events" className="">Events</a> */}
            <a href="/crusades" className="">Crusade</a>

            {/* <li className="relative parent list-none">
              <p className="flex cursor-pointer justify-between md:inline-flex items-center space-x-1">
                <span className='transition-colors duration-200 lora'>Crusades</span>
                <FaCaretDown size={10} className='' />
              </p>
              <ul className="child transition lora duration-300 md:absolute top-full left-0 md:w-72 p-2 rounded-xl bg-white md:shadow-lg mt-2">
                <li>
                  <a href="" className="flex items-center justify-between px-3 text-sm py-3 hover:bg-purple-800 hover:text-white text-black rounded-xl nav duration-75 ease-in">
                    <span className="link">Africa</span>
                    <FaCaretRight className='text-white' />
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center justify-between px-3 text-sm py-3 hover:bg-purple-800 hover:text-white text-black rounded-xl nav duration-75 ease-in">
                    <span className="link">Europe</span>
                    <FaCaretRight className='text-white' />
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center justify-between px-3 text-sm py-3 hover:bg-purple-800 hover:text-white text-black rounded-xl nav duration-75 ease-in">
                    <span className="link">America</span>
                    <FaCaretRight className='text-white' />
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center justify-between px-3 text-sm py-3 hover:bg-purple-800 hover:text-white text-black rounded-xl nav duration-75 ease-in">
                    <span className="link">Asia</span>
                    <FaCaretRight className='text-white' />
                  </a>
                </li>
              </ul>
            </li> */}

            <a href="/donations" className="">Donations</a>
            <a href="/store" className="">Content</a>
            <a href="/contact" className="">Contact</a>
          </div>
        </div>

        <div className="lg:flex hidden items-center justify-between">
          <button className="bg-purple-900 flex space-x-1 items-center border rounded-md border-none py-3 px-6 text-white">
            <span className="">Donate</span>
          </button>
        </div>







        <div onClick={handleNav} className='lg:hidden flex cursor-pointer'>
          <div className="">
            <AiOutlineMenu size={25} style={{ color: `${textColor}` }} />
          </div>
        </div>
      </div>



      {/* Mobile Nav-Bar */}
      <div className={nav ? 'lg:hidden z-20 fixed left-0 top-0 w-full min-h-screen bg-black/70' : ''} onClick={handleNav}>
        <div className={nav ? 'fixed left-0 top-0 right-0 bg-white w-[75%] md:w-[50%] h-screen ease-in duration-100 transition-all' : 'fixed -left-full top-0 bottom-0 right-0 w-[75%] md:w-[50%] ease-in-out duration-300'}>
          <div className="py-10 ">
            <div className="w-[90%] px-2 md:w-[85%] space-y-2 mx-auto">
              <div className='flex items-center justify-between w-full'>
                <img
                  src="/cont.png"
                  className="cursor-pointer w-[20%] object-contain"
                />

              </div>
              <div className='mt-2 border-b inline-block border-gray-300'>
                <p className='text-sm pb-1 boss'>Transforming Mindsets and Empowering Lives</p>
              </div>
            </div>


            <div className="w-[90%] px-2 md:w-[85%] lora space-y-2 pt-5 mx-auto">
              <a
                href="/"
                className="inline-flex cursor-pointer w-full items-center gap-x-px py-2"
              >
                Home
              </a>

              <a
                href="/about"
                className="inline-flex cursor-pointer w-full items-center gap-x-px py-2"
              >
                About Us
              </a>

              <a href="/crusades"
                className="inline-flex space-x-2 cursor-pointer w-full items-center gap-x-px py-2"
              >
                Events
              </a>

              <a
                href="/donations"
                className="inline-flex space-x-2 cursor-pointer w-full items-center gap-x-px py-2"
              >
                <span className="">Donations</span>
              </a>

              <a
                href="/store"
                className="inline-flex space-x-2 cursor-pointer w-full items-center gap-x-px py-2"
              >
                <span className="">Store</span>
              </a>

              <a
                href="/contact"
                className="inline-flex space-x-2 cursor-pointer w-full items-center gap-x-px py-2"
              >
                <span className="">Contact</span>
              </a>

              <a href="/donations" className="px-4 inline-flex w-full cursor-pointer duration-200 ease-in transition-all hover:bg-transparent space-x-2 items-center justify-between bg-orange-600 border border-orange-600/50 text-white boss text-base py-3 rounded-md">
                {/* <RiMagicLine size={20} className="inline-block" /> */}
                <span className="">Donate</span>
              </a>
            </div>
          </div>

        </div>
      </div>
      {/* End Mobile Nav-Bar */}

    </div>
  )
}

export default Nav