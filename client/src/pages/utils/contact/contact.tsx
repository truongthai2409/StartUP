import Layout from "@components/layouts/layout";
import React from "react";

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen pt-16 pb-16 bg-gray-100"> {/* Added pt-16 for header spacing */}
        <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
          <h1 className="mb-6 text-3xl font-bold text-center text-pink-500">
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="mb-8 text-center text-gray-600">
            Hãy để lại thông tin, chúng tôi sẽ liên lạc với bạn sớm nhất.
          </p>
          <form>
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 font-semibold text-gray-700"
              >
                Họ và Tên
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Nhập họ và tên của bạn"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Nhập email của bạn"
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block mb-2 font-semibold text-gray-700"
              >
                Số Điện Thoại
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Nhập số điện thoại của bạn"
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 font-semibold text-gray-700"
              >
                Tin Nhắn
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Nhập nội dung tin nhắn"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 font-semibold text-white transition bg-pink-500 rounded-lg hover:bg-pink-600"
            >
              Gửi Thông Tin
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
