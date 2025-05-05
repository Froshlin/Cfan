import React, { useState } from "react";
import {
  FaEnvelope,
  FaCalendarAlt,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import CountrySelect from "./CountrySelect";
import PaymentModal from "./PaymentModal";
import { Link } from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCountrySelect = (country) => {
    setFormData({ ...formData, country });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-orange-50 text-gray-800 py-8 md:py-12">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start flex-wrap gap-7">
          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#f97316] flex items-center">
              <FaEnvelope className="mr-2" /> Stay Up To Date!
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Get event news, Biblical teachings, and special ministry offers.
              Join our email list!
            </p>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f97316] text-sm sm:text-base"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f97316] text-sm sm:text-base"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f97316] text-sm sm:text-base"
                />
              </div>
              <div>
                <CountrySelect onSelect={handleCountrySelect} />
              </div>
              <button
                type="submit"
                className="w-full bg-[#f97316] text-white p-3 rounded-lg hover:bg-orange-600 transition duration-200 flex items-center justify-center text-sm sm:text-base cursor-pointer"
              >
                <FaEnvelope className="mr-2" /> Submit Now
              </button>
            </form>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#f97316] flex items-center">
              <Link className="mr-2" />Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <a
                href=""
                className="text-sm sm:text-base hover:underline text-orange-600"
              >
                Join our Email List
              </a>
              <a
                href="#"
                className="text-sm sm:text-base hover:underline text-orange-600"
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}
              >
                Monthly Partner
              </a>
              <PaymentModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
              <a
                href="https://wa.me/+12024463004"
                className="text-sm sm:text-base hover:underline text-orange-600"
              >
                Prayer Requests
              </a>
              <a
                href=""
                className="text-sm sm:text-base hover:underline text-orange-600"
              >
                Crusades
              </a>
              <a
                href=""
                className="text-sm sm:text-base hover:underline text-orange-600"
              >
                Donate
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#f97316] flex items-center">
              <FaPhoneAlt className="mr-2" /> Contact
            </h3>
            <div className="text-gray-600 space-y-2 text-sm sm:text-base">
              <div className="flex items-center">
                <FaPhoneAlt className="mr-2 text-[#f97316]" size={14} />{" "}
                <strong className="mr-2">Tel: </strong> 8665855490
              </div>
              <div className="flex items-center">
                <a
                  href="https://wa.me/+12024463004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-[#f97316]"
                >
                  <FaWhatsapp className="mr-2 text-[#f97316]" size={14} />{" "}
                  <strong className="mr-2">WhatsApp: </strong> +12024463004
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="https://www.tiktok.com/@gfan004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-[#f97316]"
                >
                  <FaTiktok className="mr-2 text-[#f97316]" size={14} />{" "}
                  <strong className="mr-2">TikTok: </strong> @gfan004
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="https://www.instagram.com/godofallnation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-[#f97316]"
                >
                  <FaInstagram className="mr-2 text-[#f97316]" size={14} />{" "}
                  <strong className="mr-2">Instagram: </strong> godofallnation
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="https://www.youtube.com/@godofallnations_7997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-[#f97316]"
                >
                  <FaYoutube className="mr-2 text-[#f97316]" size={14} />{" "}
                  <strong className="mr-2">Youtube: </strong> @godofallnations_7997
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="https://www.facebook.com/people/God-of-all-nations-ministries/61574117631735/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-[#f97316]"
                >
                  <FaFacebook className="mr-2 text-[#f97316]" size={14} />{" "}
                  <strong className="mr-2">Facebook: </strong> God-of-all-nations-ministries
                </a>
              </div>

              <div className="flex items-center">
                <div>
                  <FaMapMarkerAlt className="mr-2 text-[#f97316]" size={14} />
                </div>
                <div className="flex items-center">
                  <span className="mr-2">
                    <b> Address: </b>
                  </span>
                  <span>
                    209 Harry S Truman Drive, Upper Marlboro, MD 20774
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
