import { useAppSelector } from "@hooks/redux/use_app_dispatch";
import { RootState } from "@stores/index";
import React from "react";
import { Link } from "react-router-dom";

import { FaUserPen } from "react-icons/fa6";
import { RiVipCrown2Line } from "react-icons/ri";
import { RiWebhookLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

const isLoggedIn = true;

const Header: React.FC = () => {
  const avatar = useAppSelector((state: RootState) => state.auth.avatar);
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
          {isLoggedIn ? (
            <div className="relative flex items-center space-x-3 cursor-pointer group">
              <div className="relative">
                {/* Wrapper mở rộng vùng hover */}
                <div className="absolute inset-0 z-30 -m-2 bg-transparent w-[100px] rounded-xl"></div>

                {/* Avatar + Dropdown Button */}
                <div className="relative">
                  <div className="absolute w-16 -translate-y-1/2 bg-gray-700 h-7 rounded-xl left-1 top-1/2 -z-10"></div>
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src={avatar}
                    alt="User"
                  />
                  <button className="absolute mt-2 text-white top-1 -right-5 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Dropdown Menu */}
                <div className="absolute hidden w-64 mt-2 pb-1 -translate-x-[70%] bg-white border border-gray-200 rounded-lg shadow-lg group-hover:block group-focus-within:block">
                  <li className="flex px-4 py-2 mt-2 text-sm text-gray-700 cursor-default">
                    <img
                      className="object-cover mt-1 rounded-full w-11 h-11"
                      src={avatar}
                      alt="User"
                    />
                    <div className="ml-3">
                      <h1 className="text-lg font-semibold">John Doe</h1>
                      <h2 className="text-base">ID: 324789273</h2>
                      <h2 className="w-40 truncate">john.doe@example.com</h2>
                      {/* <h2>joh@example.com</h2> */}
                    </div>
                  </li>
                  <li className="list-none border-b"></li>
                  <Link
                    to="../account"
                    className="flex items-center px-4 py-3 text-gray-700 justify-stretch hover:bg-gray-100 hover:text-pink-500"
                  >
                    <FaUserPen  className="mr-3"/>
                    <span>Cài đặt thông tin cá nhân</span>
                  </Link>
                  <Link
                    to="../vip"
                    className="flex items-center px-4 py-2 text-gray-700 justify-stretch hover:bg-gray-100 hover:text-pink-500"
                  >
                    <RiVipCrown2Line className="mr-3"/>Nâng cấp tài khoản VIP
                  </Link>
                  <Link
                    to="../website"
                    className="flex items-center px-4 py-2 text-gray-700 justify-stretch hover:bg-gray-100 hover:text-pink-500"
                  >
                    <RiWebhookLine className="mr-3"/>Website của bạn
                  </Link>
                  <Link
                    to="../logout"
                    className="flex items-center px-4 py-2 text-gray-700 justify-stretch hover:bg-gray-100 hover:text-pink-500"
                  >
                    <FiLogOut className="mr-3"/>Đăng xuất
                  </Link>
                  
                </div>
              </div>
            </div>
          ) : (
            <>
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
            </>
          )}
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
