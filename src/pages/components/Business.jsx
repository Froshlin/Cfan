/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';


function Business() {
  return (
    <div className="bg-white duration-300 ease-in transition-all">
      <div className="absolute left-0 w-full z-[1]">
        <img src="shape4.png" className="absolute md:w-[300px] w-[200px] right-0 bottom-0" />
      </div>
      <div className="w-[90%] md:pb-16 pt-16 md:pt-0 md:w-[85%] mx-auto">
        <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: false,
            }}
            autoplay={{
              delay: 7500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper pb-4"
          >
            <SwiperSlide>
              <a href="#" className="group relative block bg-black">
                <img
                  alt=""
                  src="/test1.jpg"
                  className="absolute inset-0 h-full w-full object-cover object-top opacity-70 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-purple-700">2014</p>

                  <p className="text-xl font-bold text-white sm:text-2xl h-24">Healing in Africa</p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div
                      className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <p className="text-sm h-24 text-white">

                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide>
              <a href="#" className="group relative block bg-black">
                <img
                  alt=""
                  src="/test2.jpg"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-purple-700">2016</p>

                  <p className="text-xl font-bold text-white sm:text-2xl h-24">The Lame received Healing</p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div
                      className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <p className="text-sm h-24 text-white">

                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide>
              <a href="#" className="group relative block bg-black">
                <img
                  alt=""
                  src="/test3.jpg"
                  className="absolute inset-0 h-full w-full object-top object-cover opacity-70 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-purple-700">2020</p>

                  <p className="text-xl font-bold text-white sm:text-2xl h-24">God's Mercy Located Her</p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div
                      className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <p className="text-sm h-24 text-white">

                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>

            <SwiperSlide>
              <a href="#" className="group relative block bg-black">
                <img
                  alt=""
                  src="/test4.jpg"
                  className="absolute inset-0 h-full w-full object-top object-cover opacity-70 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-purple-700">2020</p>

                  <p className="text-xl font-bold h-24 text-white sm:text-2xl">
                    14 years Paralysis and issue of blood healed in Nakivale, Africa
                  </p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div
                      className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <p className="text-sm h-24 text-white">

                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Business