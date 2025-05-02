import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";


function Count() {
  return (
    <div className="bg-white/50 duration-300 ease-in transition-all">
      <div className="">
        <div className="">
          <div className="absolute left-0 w-full z-[1]">
            <img src="shape3.png" className="absolute md:w-[300px] w-[200px] left-0 top-0" />
          </div>


          <div className="bg-white/50 duration-300 ease-in transition-all py-16 md:py-16 flex items-center z-10 relative">
            <div className="relative z-50 w-[90%] mx-auto">
              <div className="flex items-center flex-col md:flex-row justify-between">
                <div className="flex flex-col md:flex-row items-center space-x-3">
                  <h4 className="lg:text-6xl md:text-4xl text-2xl boss font-bold">
                    10,000,000
                  </h4>

                  <p className="md:text-xl py-3 md:py-0 text-base text-center md:text-left lora">
                    Documented Decisions for Christ and Counting
                  </p>
                </div>

                <div className="flex space-x-4 lora md:text-xl text-lg items-center">
                  <p className="">
                    Share
                  </p>

                  <a href="" className="">
                    <FaSquareFacebook />
                  </a>

                  <a href="" className="">
                    <AiFillInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Count