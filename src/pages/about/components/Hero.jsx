import YouTubeStylePlayer from "../../../components/YoutubeStylePlayer"


const Hero = () => {
  return (
    <div className="bg-gray-50 duration-300 ease-in transition-all">
      <div className="w-[90%] md:w-[85%] mx-auto">
        <div className="pt-20">
          <nav aria-label="breadcrumb" className="w-full lg:pt-6 md:pt-4">
            <ol className="flex items-center space-x-2 text-gray-800">
              <li className="flex items-center">
                <a rel="noopener noreferrer" href="/" title="Back to homepage" className="flex items-center hover:text-[#3b82f6] md:text-base text-sm lora duration-150 ease-in transition-all font-medium">Home</a>
              </li>

              <li className="flex items-center space-x-1">
                <span className="text-gray-600 text-base">/</span>
                <p className="flex items-center px-1 capitalize md:text-base text-sm lora font-medium">
                  About Us
                </p>
              </li>
            </ol>
          </nav>

          <div className="">
            <div className="absolute z-10 h-fit left-0 w-full lg:flex hidden">
              <img src="shape8.svg" className="absolute animate-[spin_5s_ease-in_infinite] w-[30px] left-52 top-20" />
              <img src="shape8.svg" className="absolute animate-[spin_5s_ease-in_infinite] w-[30px] left-52 top-[75vh]" />
              <img src="shape9.png" className="absolute animate-move z-10 top-[42vh] left-[16rem] invert-0" />
            </div>

            <div className="lg:py-10 md:py-10 py-6 lg:h-[110vh] z-50">
              <h2 className="boss md:text-4xl text-2xl font-light text-center">
                About Us
              </h2>
              <p className="text-center md:text-2xl text-sm md:pt-1 italic font-normal">
                Our History and what we Believe In
              </p>

              <div className="lg:pt-10 md:pt-6 pt-6 ">
                <div className="text-center z-50 right-0 left-0 mx-auto lg:absolute">
                  <YouTubeStylePlayer/>
                  
                </div>
              </div>


            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero