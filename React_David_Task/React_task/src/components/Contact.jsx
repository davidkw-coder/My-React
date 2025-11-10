import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative bg-gray-200 py-20 px-5">
      {/* Green background bar */}
      <div className="absolute top-1/2 left-0 w-full h-60 bg-[#359756] -translate-y-1/2 z-0"></div>

      {/* Contact Card */}
      <div className="relative z-10 bg-white rounded-xl max-w-5xl mx-auto flex flex-wrap justify-between shadow-md px-12 py-14 gap-10">
        {/* Left side - Contact Info */}
        <div className="flex-1 min-w-[320px] mb-6">
          <h2 className="text-4xl font-bold text-[#359756] mb-8">Contact Info</h2>

          <div className="flex items-center mb-5 text-green-700 text-xl">
            <FaPhoneAlt className="mr-3 text-2xl" />
            <span className="text-black text-2xl hover:text-[#359756] hover:cursor-pointer">
              +1 (234) 567-8910
            </span>
          </div>

          <div className="flex items-center mb-5 text-green-700 text-xl">
            <FaEnvelope className="mr-3 text-2xl" />
            <span className="text-[#202020] text-2xl hover:text-[#359756] hover:cursor-pointer">
              contact@yourmail.com
            </span>
          </div>

          <div className="flex items-start text-green-700 text-xl">
            <FaMapMarkerAlt className="mr-3 mt-1 text-2xl" />
            <span className="text-black text-lg leading-relaxed">
              203, Envato Labs, Behind Alis Steet,
              <br />
              Australia
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8">
            <a href="#" className="text-green-700 text-4xl hover:text-green-800 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="text-green-700 text-4xl hover:text-green-800 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="text-green-700 text-4xl hover:text-green-800 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="text-green-700 text-4xl hover:text-green-800 transition-colors">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Right side - Form */}
        <form className="flex-1 min-w-[320px] flex flex-col gap-5">
          <input
            type="text"
            placeholder="Enter your Name"
            className="p-4 text-lg bg-gray-100 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all"
          />
          <input
            type="email"
            placeholder="Enter a valid email address"
            className="p-4 text-lg bg-gray-100 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all"
          />
          <textarea
            placeholder="Enter your message"
            rows={5}
            className="p-4 text-lg bg-gray-100 outline-none resize-y focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all"
          ></textarea>
          <button
            type="submit"
            className="bg-[#359756] text-white font-bold py-4 rounded-lg text-lg mt-3 hover:bg-green-700 transition-all shadow-md"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
