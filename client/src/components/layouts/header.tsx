import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full bg-white shadow-md">
      <div className="container flex items-center justify-between px-6 py-3 mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-500">
          <Link to="/">Wedding Bliss</Link>
        </div>

        {/* Navigation Menu */}
        <nav className="absolute hidden space-x-6 transform -translate-x-1/2 left-1/2 md:flex">
          <Link
            to="../about"
            className="text-gray-700 transition hover:text-pink-500"
          >
            Giới Thiệu
          </Link>
          <Link
            to="../gallery"
            className="text-gray-700 transition hover:text-pink-500"
          >
            Bộ Sưu Tập
          </Link>
          <Link
            to="../services"
            className="text-gray-700 transition hover:text-pink-500"
          >
            Dịch Vụ
          </Link>
          <Link
            to="../contact"
            className="text-gray-700 transition hover:text-pink-500"
          >
            Liên Hệ
          </Link>
        </nav>

        {/* Action Section */}
        <div className="flex items-center space-x-3">
          {/* Language Selector */}
          <div className="relative group">
            <button className="flex items-center space-x-1 text-gray-700 transition hover:text-pink-500 focus:outline-none">
              <img
                src="/icons8-globe-50.png"
                alt="Language"
                className="w-5 h-5"
              />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 invisible mt-2 transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-md opacity-0 w-36 group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 focus-within:visible focus-within:opacity-100">
              <Link
                to="/en/home"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <img
                  src="/icons8-english-48.png"
                  alt="English"
                  className="w-4 h-4 mr-2"
                />
                English
              </Link>
              <Link
                to="/vi/home"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <img
                  src="/icons8-vietnam-48.png"
                  alt="Vietnamese"
                  className="w-4 h-4 mr-2"
                />
                Tiếng Việt
              </Link>
              <Link
                to="/kr/home"
                className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <img
                  src="/icons8-south-korea-48.png"
                  alt="Korean"
                  className="w-4 h-4 mr-2"
                />
                한국어
              </Link>
            </div>
          </div>

          {/* Authentication Buttons */}
          <Link
            to="../login"
            className="px-3 py-1 text-sm text-gray-700 transition border border-gray-300 rounded hover:bg-gray-100"
          >
            Đăng nhập
          </Link>
          <Link
            to="../register"
            className="px-3 py-1 text-sm text-white transition bg-pink-500 rounded hover:bg-pink-600"
          >
            Đăng ký
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="text-gray-700 md:hidden focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
