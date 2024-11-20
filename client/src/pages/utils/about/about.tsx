import Layout from "@components/layouts/layout";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen py-12 bg-gray-100">
        <div className="container px-6 mx-auto">
          {/* Section Title */}
          <h1 className="mb-8 text-4xl font-bold text-center text-pink-500">
            Về Chúng Tôi
          </h1>
          <p className="mb-12 text-center text-gray-600">
            Chúng tôi là đội ngũ chuyên nghiệp với niềm đam mê mang đến ngày
            cưới hoàn hảo nhất cho bạn.
          </p>

          {/* About Us Content */}
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Section - Image */}
            <div className="flex justify-center">
              <img
                src="/about-us.jpg"
                alt="About Us"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>

            {/* Right Section - Text */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-pink-500">
                Chúng Tôi Là Ai?
              </h2>
              <p className="mb-4 text-gray-700">
                Với hơn 10 năm kinh nghiệm trong lĩnh vực tổ chức sự kiện và
                cưới hỏi, chúng tôi đã giúp hàng trăm cặp đôi biến ước mơ của họ
                thành hiện thực. Chúng tôi tự hào vì sự sáng tạo, tận tâm, và sự
                chuyên nghiệp trong từng chi tiết nhỏ.
              </p>
              <h2 className="mb-4 text-2xl font-bold text-pink-500">
                Tầm Nhìn Của Chúng Tôi
              </h2>
              <p className="text-gray-700">
                Chúng tôi không chỉ tổ chức một buổi tiệc cưới mà còn tạo ra
                những kỷ niệm đẹp lưu giữ suốt đời. Mỗi sự kiện đều là một tác
                phẩm nghệ thuật được thiết kế riêng cho bạn.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-16">
            <h2 className="mb-8 text-3xl font-bold text-center text-pink-500">
              Đội Ngũ Của Chúng Tôi
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Team Member */}
              <div className="text-center">
                <img
                  src="/about/photo1.jpg"
                  alt="Team Member 1"
                  className="object-cover w-32 h-32 mx-auto mb-4 rounded-full shadow-lg"
                />
                <h3 className="text-lg font-semibold text-gray-700">
                  Nguyễn Hoàng Anh
                </h3>
                <p className="text-pink-500">Founder & CEO</p>
              </div>
              <div className="text-center">
                <img
                  src="/about/photo2.jpg"
                  alt="Team Member 2"
                  className="object-cover w-32 h-32 mx-auto mb-4 rounded-full shadow-lg"
                />
                <h3 className="text-lg font-semibold text-gray-700">
                  Trần Mai Phương
                </h3>
                <p className="text-pink-500">Creative Director</p>
              </div>
              <div className="text-center">
                <img
                  src="/about/photo3.jpg"
                  alt="Team Member 3"
                  className="object-cover w-32 h-32 mx-auto mb-4 rounded-full shadow-lg"
                />
                <h3 className="text-lg font-semibold text-gray-700">
                  Phạm Văn Tuấn
                </h3>
                <p className="text-pink-500">Event Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
