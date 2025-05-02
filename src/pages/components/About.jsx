/* eslint-disable no-unused-vars */
import { TiArrowRight } from "react-icons/ti";



function About() {
  return (
    <div className="py-16 bg-white dark:bg-black duration-300 ease-in transition-all dark:text-white">
      <div className="w-[90%] md:w-[85%] mx-auto">
        <div className="grid grid-cols-2 gap-10">
          <div className="lg:col-span-1 col-span-2">
            <h2 className="md:text-4xl text-3xl lora font-semibold">
              Our Upcoming Events
            </h2>

            <p className="md:pb-10 py-4 text-xl text-gray-600 dark:text-gray-400">
              The GoaN Ministry exists to ignite an army of passionate leaders who will set nations ablaze with the transformative power of the Gospel. Through the fire of the Holy Spirit, our world-renowned faculty—leaders who have been on the frontlines of global revival—are ready to pour their hearts, wisdom, and life experiences into you. This is more than education; it’s mentorship, training, and discipleship for those called to carry the Gospel to the ends of the earth and influence every area of society.
            </p>

            <img src="/event.jpg" alt="" className="w-full" />
          </div>


          <div className="lg:col-span-1 col-span-2 lg:h-[86vh] md:h-[45vh] h-[70vh] overflow-y-scroll scroll">
            <div className="grid md:grid-cols-8 grid-cols-12 hol flip mx-4 md:mb-3 mb-4 md:gap-4">
              <div className="md:col-span-2 col-span-4 py-6 gif md:space-y-2 md:p-6 flex flex-col items-center justify-center cursor-default bg-gray-200 dark:bg-gray-950 hover:bg-orange-500 hover:text-white text-center">
                <p className="md:text-6xl text-3xl font-medium salsa">28</p>
                <p className="md:text-xl text-base">October</p>
              </div>

              <div className="md:col-span-6 self-center col-span-8 md:space-y-2 md:p-6 pl-6 text-left">
                <p className="lg:text-xl md:text-2xl text-lg lora text-orange-500 font-medium">9:00 AM - 12:00 PM</p>
                <a href="" className="lg:text-2xl md:text-2xl text-lg boss inline-block hover:text-orange-500 duration-300 ease-in transition-all">The River Flowing North</a>
              </div>
            </div>

            <div className="grid md:grid-cols-8 grid-cols-12 hol flip mx-4 md:mb-3 mb-4 md:gap-4">
              <div className="md:col-span-2 col-span-4 py-6 gif md:space-y-2 md:p-6 flex flex-col items-center justify-center cursor-default bg-gray-200 dark:bg-gray-950 hover:bg-orange-500 hover:text-white text-center">
                <p className="md:text-6xl text-3xl font-medium salsa">06</p>
                <p className="md:text-xl text-base">November</p>
              </div>

              <div className="md:col-span-6 self-center col-span-8 md:space-y-2 md:p-6 pl-6 text-left">
                <p className="lg:text-xl md:text-2xl text-lg lora text-orange-500 font-medium">11:30 AM - 1:00 PM</p>
                <a href="" className="lg:text-2xl md:text-2xl text-lg boss inline-block hover:text-orange-500 duration-300 ease-in transition-all">A Prophetic Moment</a>
              </div>
            </div>

            <div className="grid md:grid-cols-8 grid-cols-12 hol flip mx-4 md:mb-3 mb-4 md:gap-4">
              <div className="md:col-span-2 col-span-4 py-6 gif md:space-y-2 md:p-6 flex flex-col items-center justify-center cursor-default bg-gray-200 dark:bg-gray-950 hover:bg-orange-500 hover:text-white text-center">
                <p className="md:text-6xl text-3xl font-medium salsa">13</p>
                <p className="md:text-xl text-base">November</p>
              </div>

              <div className="md:col-span-6 self-center col-span-8 md:space-y-2 md:p-6 pl-6 text-left">
                <p className="lg:text-xl md:text-2xl text-lg lora text-orange-500 font-medium">11:00 AM - 1:00 PM</p>
                <a href="" className="lg:text-2xl md:text-2xl text-lg boss inline-block hover:text-orange-500 duration-300 ease-in transition-all">Fruit That Remains</a>
              </div>
            </div>

            <div className="grid md:grid-cols-8 grid-cols-12 hol flip mx-4 md:mb-3 mb-4 md:gap-4">
              <div className="md:col-span-2 col-span-4 py-6 gif md:space-y-2 md:p-6 flex flex-col items-center justify-center cursor-default bg-gray-200 dark:bg-gray-950 hover:bg-orange-500 hover:text-white text-center">
                <p className="md:text-6xl text-3xl font-medium salsa">20</p>
                <p className="md:text-xl text-base">November</p>
              </div>

              <div className="md:col-span-6 self-center col-span-8 md:space-y-2 md:p-6 pl-6 text-left">
                <p className="lg:text-xl md:text-2xl text-lg lora text-orange-500 font-medium">12:00 PM - 5:00 PM</p>
                <a href="" className="lg:text-2xl md:text-2xl text-lg boss inline-block hover:text-orange-500 duration-300 ease-in transition-all">Healing for Kindness</a>
              </div>
            </div>

            <div className="grid md:grid-cols-8 grid-cols-12 hol flip mx-4 md:mb-3 mb-4 md:gap-4">
              <div className="md:col-span-2 col-span-4 py-6 gif md:space-y-2 md:p-6 flex flex-col items-center justify-center cursor-default bg-gray-200 dark:bg-gray-950 hover:bg-orange-500 hover:text-white text-center">
                <p className="md:text-6xl text-3xl font-medium salsa">28</p>
                <p className="md:text-xl text-base">November</p>
              </div>

              <div className="md:col-span-6 self-center col-span-8 md:space-y-2 md:p-6 pl-6 text-left">
                <p className="lg:text-xl md:text-2xl text-lg lora text-orange-500 font-medium">9:00 AM - 12:00 PM</p>
                <a href="" className="lg:text-2xl md:text-2xl text-lg boss inline-block hover:text-orange-500 duration-300 ease-in transition-all">A Move of God!</a>
              </div>
            </div>

            <div className="grid md:grid-cols-8 grid-cols-12 hol flip mx-4 md:mb-3 mb-4 md:gap-4">
              <div className="md:col-span-2 col-span-4 py-6 gif md:space-y-2 md:p-6 flex flex-col items-center justify-center cursor-default bg-gray-200 dark:bg-gray-950 hover:bg-orange-500 hover:text-white text-center">
                <p className="md:text-6xl text-3xl font-medium salsa">06</p>
                <p className="md:text-xl text-base">November</p>
              </div>

              <div className="md:col-span-6 self-center col-span-8 md:space-y-2 md:p-6 pl-6 text-left">
                <p className="lg:text-xl md:text-2xl text-lg lora text-orange-500 font-medium">11:30 AM - 1:00 PM</p>
                <a href="" className="lg:text-2xl md:text-2xl text-lg boss inline-block hover:text-orange-500 duration-300 ease-in transition-all">Jesus is Alive!</a>
              </div>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <a href="" className="border border-orange-500 text-center w-full text-white bg-orange-500 duration-200 transition-all hover:bg-transparent hover:text-orange-500 px-4 py-3 inline-block">
              View All Events
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About