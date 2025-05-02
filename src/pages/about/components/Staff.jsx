
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';

function Staff() {
  return (
    <div className="duration-300 ease-in bg-gray-100 transition-all">
      <div className="absolute left-0 w-full z-[1]">
        <img src="shape4.png" className="absolute md:w-[300px] w-[200px] right-0 bottom-0" />
      </div>
      <div className="md:w-[85%] py-16 w-[90%] mx-auto">
        <div className="">
          <h1 className="text-center md:text-5xl text-3xl boss font-medium">Church of all Nations Spiritua Leaders</h1>

          <div className="pt-4">
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
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper md:py-8 py-4"
            >
              <SwiperSlide>
                <div className='text-center cursor-pointer text-black'>
                  <img src="https://img.freepik.com/premium-photo/vertical-portrait-african-american-man-wearing-glasses-looking-camera-while-standing-server-room-with-supercomputer-data-center_236854-29070.jpg?w=360" alt="" srcSet="" className='object-cover w-full h-96 md:h-full' />

                  <div className="flex space-y-2 flex-col">
                    <h4 className="text-2xl text-left lora font-medium pt-7">Herbert Marculy</h4>
                    <p className="text-left lora">Operations Associate</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='md:mt-12 mt-0 text-center cursor-pointer text-black'>
                  <img src="https://img.freepik.com/free-photo/young-woman-holding-papers_23-2147953176.jpg?t=st=1711697119~exp=1711700719~hmac=6bbf4a9a0f5652a4ae5fcc249e061644ad576337b344fcc1db93b006ee30716d&w=360" alt="" srcSet="" className='object-cover w-full h-96 md:h-full' />

                  <div className="flex space-y-2 flex-col">
                    <h4 className="text-2xl text-left lora font-medium pt-7">Barbara Allen</h4>
                    <p className="text-left lora">Special Programs Coordinator</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='text-center cursor-pointer text-black'>
                  <img src="https://img.freepik.com/premium-photo/elegance-vibrant-colors-empowered-woman-business_802234-16198.jpg?w=360" alt="" srcSet="" className='object-cover w-full h-96 md:h-full' />

                  <div className="flex space-y-2 flex-col">
                    <h4 className="text-2xl text-left lora font-medium pt-7">Charity Parker</h4>
                    <p className="text-left lora">Associate Director of Admissions</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='md:mt-12 mt-0 text-center cursor-pointer text-black'>
                  <img src="https://img.freepik.com/free-photo/portrait-young-woman-working-her-laptop-startup-company_23-2149116525.jpg?t=st=1711697770~exp=1711701370~hmac=0c12d81da6e859dec69a2a7e2809995b34ea581c0427871582a3db9d2068b166&w=360" alt="" srcSet="" className='object-cover w-full h-96 md:h-full' />

                  <div className="flex space-y-2 flex-col">
                    <h4 className="text-2xl text-left lora font-medium pt-7">Adenike Roselina</h4>
                    <p className="text-left lora">Dean of Admissions</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='text-center cursor-pointer text-black'>
                  <img src="https://img.freepik.com/free-photo/medium-shot-man-having-lunch-restaurant_23-2150491927.jpg?t=st=1711698056~exp=1711701656~hmac=00da08274d98c1a98428533753e9d6659ff28ef00d8f30bcc3b7a275662bc243&w=360" alt="" srcSet="" className='object-cover w-full h-96 md:h-full' />

                  <div className="flex space-y-2 flex-col">
                    <h4 className="text-2xl text-left lora font-medium pt-7">Adebowale Samson</h4>
                    <p className="text-left lora">Dean of Students</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Staff