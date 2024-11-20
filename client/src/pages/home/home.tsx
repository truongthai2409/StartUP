import Layout from "@components/layouts/layout";
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <Layout>
        {/* Background Video Section */}
        <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center text-white">
          <video
            className="absolute top-0 left-0 object-cover w-full h-full"
            src="/video/background.mp4"
            autoPlay
            loop
            muted
          ></video>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
          <div className="relative p-6 bg-black bg-opacity-50 rounded-lg">
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
              <Link to='../gallery' className="px-4 py-2 font-semibold text-pink-500 transition bg-white rounded hover:bg-gray-200">
                Xem Bộ Sưu Tập
              </Link>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="py-12 text-center bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">
              Về Chúng Tôi
            </h2>
            <p className="text-lg text-gray-600">
              Chúng tôi chuyên tạo ra những khoảnh khắc đáng nhớ trong các sự
              kiện đặc biệt của bạn. Từ lễ cưới đến tiệc sinh nhật, chúng tôi
              luôn sẵn sàng đồng hành cùng bạn để tạo nên những kỷ niệm khó
              quên.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
              Điểm Nổi Bật
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Dịch Vụ Chuyên Nghiệp",
                  desc: "Đội ngũ tận tâm và giàu kinh nghiệm.",
                },
                {
                  title: "Thiết Kế Sang Trọng",
                  desc: "Không gian sự kiện được cá nhân hóa.",
                },
                {
                  title: "Hỗ Trợ Toàn Diện",
                  desc: "Dịch vụ tư vấn từ A đến Z.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 text-center bg-white rounded-lg shadow-lg"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-700">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
              Bộ Sưu Tập
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {["photo1.jpg", "photo2.jpg", "photo3.jpg"].map(
                (img, index) => (
                  <div key={index} className="overflow-hidden rounded-lg">
                    <img
                      src={`/gallery/${img}`}
                      alt={`Gallery ${index + 1}`}
                      className="object-cover w-full h-64 transition transform hover:scale-105"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-12 text-center text-white bg-pink-500">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold">
              Hãy Để Chúng Tôi Giúp Bạn
            </h2>
            <p className="mb-6 text-lg">
              Liên hệ ngay hôm nay để bắt đầu lập kế hoạch cho ngày trọng đại
              của bạn!
            </p>
            <button className="px-6 py-3 font-semibold text-pink-500 bg-white rounded hover:bg-gray-100">
              Liên Hệ Ngay
            </button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
