/* eslint-disable react/no-unescaped-entities */
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


export default function Hero() {
  return (
    <div className='lg:min-h-screen'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide className=''>
          <div
            style={{ backgroundImage: " var(--gradient), url('/hero.jpg')" }}
            className="bg-hero"
          >
            <div className="text-white bai py-48 lg:py-0 lg:min-h-screen flex items-center">
              <div className="w-[90%] pt-10 mx-auto">
                <div className="lg:w-[90%] mx-auto text-center">
                  {/* <h4 className="bg-white/10 text-center font-semibold md:text-base text-sm inline-block px-6 py-3 rounded-full">
                    Something Great has Come!
                  </h4> */}

                  <h1 className="lg:text-9xl md:text-4xl text-3xl text-orange-600 md:py-3 py-1 font-bold">
                    God of all Nations <br />
                    Ministry
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className=''>
          <div
            style={{ backgroundImage: " var(--gradient), url('/hero2.jpg')" }}
            className="bg-hero"
          >
            <div className="text-white bai py-48 lg:py-0 lg:min-h-screen flex items-center">
              <div className="w-[90%] pt-10 mx-auto">
                <div className="lg:w-[90%] mx-auto text-center">
                  {/* <h4 className="bg-white/10 text-center font-semibold md:text-base text-sm inline-block px-6 py-3 rounded-full">
                    Something Great has Come!
                  </h4> */}

                  <h1 className="lg:text-9xl md:text-4xl text-3xl text-orange-600 md:py-3 py-1 font-bold">
                    Reaching out to young <br />
                    people in Africa
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className=''>
          <div
            style={{ backgroundImage: " var(--gradient), url('/hero3.jpg')", backgroundPosition: "top" }}
            className="bg-hero"
          >
            <div className="text-white bai py-48 lg:py-0 lg:min-h-screen flex items-center">
              <div className="w-[90%] pt-10 mx-auto">
                <div className="lg:w-[90%] mx-auto text-center">
                  {/* <h4 className="bg-white/10 text-center font-semibold md:text-base text-sm inline-block px-6 py-3 rounded-full">
                    Something Great has Come!
                  </h4> */}

                  {/* <h1 className="lg:text-9xl md:text-4xl text-3xl text-orange-600 md:py-3 py-1 font-bold">
                    Our Spiritual <br />
                    Leaders
                  </h1> */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className=''>
          <div
            style={{ backgroundImage: " var(--gradient), url('/hero5.jpg')", backgroundPosition: "center" }}
            className="bg-hero"
          >
            <div className="text-white bai py-48 lg:py-0 lg:min-h-screen flex items-center">
              <div className="w-[90%] pt-10 mx-auto">
                <div className="lg:w-[90%] mx-auto text-center">
                  {/* <h4 className="bg-white/10 text-center font-semibold md:text-base text-sm inline-block px-6 py-3 rounded-full">
                    Something Great has Come!
                  </h4> */}

                  {/* <h1 className="lg:text-9xl md:text-4xl text-3xl text-orange-600 md:py-3 py-1 font-bold">
                    Our Spiritual <br />
                    Leaders
                  </h1> */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className=''>
          <div
            style={{ backgroundImage: " var(--gradient), url('/hero6.jpg')", backgroundPosition: "center" }}
            className="bg-hero"
          >
            <div className="text-white bai py-48 lg:py-0 lg:min-h-screen flex items-center">
              <div className="w-[90%] pt-10 mx-auto">
                <div className="lg:w-[90%] mx-auto text-center">
                  {/* <h4 className="bg-white/10 text-center font-semibold md:text-base text-sm inline-block px-6 py-3 rounded-full">
                    Something Great has Come!
                  </h4> */}

                  {/* <h1 className="lg:text-9xl md:text-4xl text-3xl text-orange-600 md:py-3 py-1 font-bold">
                    Our Spiritual <br />
                    Leaders
                  </h1> */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className=''>
          <div
            style={{ backgroundImage: " var(--gradient), url('/hero7.jpg')", backgroundPosition: "bottom" }}
            className="bg-hero"
          >
            <div className="text-white bai py-48 lg:py-0 lg:min-h-screen flex items-center">
              <div className="w-[90%] pt-10 mx-auto">
                <div className="lg:w-[90%] mx-auto text-center">
                  {/* <h4 className="bg-white/10 text-center font-semibold md:text-base text-sm inline-block px-6 py-3 rounded-full">
                    Something Great has Come!
                  </h4> */}

                  <h1 className="lg:text-9xl md:text-4xl text-3xl text-orange-600 md:py-3 py-1 font-bold">
                    Crusade in <br />
                    Nigeria
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>



    </div>
  )
}