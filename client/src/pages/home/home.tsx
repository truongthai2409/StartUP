import Layout from "@components/layouts";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <div className="bg-[url('/wedding-bg.jpg')] bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-center text-white px-4">
          <div className="p-6 bg-black bg-opacity-50 rounded-lg">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              Chào Mừng Đến Với Ngày Trọng Đại
            </h1>
            <p className="mb-6 text-lg md:text-xl">
              Tạo nên khoảnh khắc khó quên cùng chúng tôi. Kế hoạch đám cưới
              hoàn hảo bắt đầu từ đây.
            </p>
            <div className="space-x-4">
              <button className="px-4 py-2 font-semibold text-white transition bg-pink-500 rounded hover:bg-pink-600">
                Tìm Hiểu Thêm
              </button>
              <button className="px-4 py-2 font-semibold text-pink-500 transition bg-white rounded hover:bg-gray-200">
                Xem Bộ Sưu Tập
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
