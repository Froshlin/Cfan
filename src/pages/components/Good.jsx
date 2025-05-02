/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { TiArrowRight } from "react-icons/ti";

function Good() {
  return (
    <div className="bg-white">
      <div className="w-[90%] mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          <article className="overflow-hidden col-span-1 rounded-lg border border-gray-100 bg-white shadow-sm">
            <img
              alt=""
              src="/bish.jpg"
              className="h-56 w-full object-top object-cover"
            />

            <div className="p-4 sm:p-6">
              <p className="">
                <h3 className="text-lg pb-1 hover:text-orange-500 duration-200 transition-all font-medium text-gray-900">
                  BISHOP GODBLESS ABU
                </h3>
              </p>

              <p className="line-clamp-5 text-base/relaxed text-gray-700">
                Godbless Abu is the seventh of twelve children born to Mr. Thomas and Mrs. Alice Abu in Benin, Edo State, Nigeria in West Africa. Godbless Abu has been married to his wife, Rosaline for 24 years and is blessed with four children, who have been very active in his Ministry. His father was the founder and a priest of the Aizenu Secret Society. He was consequently exposed to spiritual darkness of the Aizenu Cult activities and practices at a very tender age of 6 by his father.
              </p>

              <a href="/about" className="group mt-4 inline-flex items-center duration-200 transition-all hover:bg-orange-500 hover:text-white text-sm px-4 py-3 border border-orange-500 rounded font-medium text-orange-500">
                Read More
              </a>
            </div>
          </article>

          <article className="overflow-hidden col-span-1 rounded-lg border border-gray-100 bg-white shadow-sm">
            <img
              alt=""
              src="/stand.jpg"
              className="h-56 w-full object-top object-cover"
            />

            <div className="p-4 sm:p-6">
              <a href="#">
                <h3 className="text-lg pb-4 hover:text-orange-500 duration-200 transition-all font-medium text-gray-900">
                  Watch our Monthly Programs, your hour of miracles and deliverance
                </h3>
              </a>

              {/* <p className=" line-clamp-5 text-base/relaxed text-gray-700">
                Content: Did you know you can watch all of our TV episodes on demand at <a href="" className="text-orange-500"> Goan.org/tv</a>? We air over 30 times throughout the week on over 15 different stations. Check our complete TV schedule for stations and times or watch any episode online now!
              </p> */}

              <a href="#" className="group mt-4 inline-flex items-center duration-200 transition-all hover:bg-orange-500 hover:text-white text-sm px-4 py-3 border border-orange-500 rounded font-medium text-orange-500">
                Watch Now
              </a>
            </div>
          </article>

          <article className="overflow-hidden col-span-1 rounded-lg border border-gray-100 bg-white shadow-sm">
            <img
              alt=""
              src="/join.jpg"
              className="h-56 w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <a href="#">
                <h3 className="text-lg pb-4 hover:text-orange-500 duration-200 transition-all font-medium text-gray-900">
                  Ministry Partner
                </h3>
              </a>

              <p className=" line-clamp-5 text-base/relaxed text-gray-700">
                You can become a Monthly Partner today and your monthly gift will help reach millions with the Gospel...one soul at a time. If you become a sponsor today, we have a special "Thank You" gift for you.
              </p>

              <a href="#" className="group mt-4 inline-flex items-center duration-200 transition-all hover:bg-orange-500 hover:text-white text-sm px-4 py-3 border border-orange-500 rounded font-medium text-orange-500">
                Join Today
              </a>
            </div>
          </article>

        </div>
      </div>
    </div >
  )
}

export default Good