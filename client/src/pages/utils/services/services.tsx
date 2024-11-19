import Layout from "@components/layouts";
import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Tổ Chức Tiệc Cưới",
      description:
        "Mang đến một buổi tiệc cưới hoàn hảo với phong cách và sự chuyên nghiệp.",
      icon: "🎉",
    },
    {
      title: "Trang Trí Sự Kiện",
      description:
        "Trang trí sáng tạo theo chủ đề giúp ngày trọng đại của bạn trở nên đặc biệt.",
      icon: "🌸",
    },
    {
      title: "Chụp Ảnh & Quay Phim",
      description:
        "Lưu giữ những khoảnh khắc đáng nhớ với đội ngũ nhiếp ảnh gia chuyên nghiệp.",
      icon: "📸",
    },
    {
      title: "Dịch Vụ Makeup",
      description: "Đội ngũ makeup giúp bạn tỏa sáng trong ngày đặc biệt.",
      icon: "💄",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen py-12 bg-gray-100">
        <div className="container px-6 mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-center text-pink-500">
            Dịch Vụ Của Chúng Tôi
          </h1>
          <p className="mb-12 text-center text-gray-600">
            Chúng tôi cung cấp các dịch vụ hàng đầu để biến ngày cưới của bạn
            thành một kỷ niệm khó quên.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 text-center transition bg-white rounded-lg shadow-lg hover:shadow-xl"
              >
                <div className="mb-4 text-5xl">{service.icon}</div>
                <h2 className="mb-2 text-xl font-semibold text-pink-500">
                  {service.title}
                </h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
