import Layout from "@components/layouts";
import React from "react";

const Gallery: React.FC = () => {
  const images = [
    { id: 1, src: "/gallery/photo1.jpg", alt: "Đám cưới lãng mạn bên bờ biển" },
    { id: 2, src: "/gallery/photo2.jpg", alt: "Tiệc cưới phong cách cổ điển" },
    { id: 3, src: "/gallery/photo3.jpg", alt: "Kỷ niệm tình yêu giữa rừng" },
    {
      id: 4,
      src: "/gallery/photo4.jpg",
      alt: "Bữa tiệc ngoài trời đầy màu sắc",
    },
    { id: 5, src: "/gallery/photo5.jpg", alt: "Khung cảnh cưới ban đêm" },
    { id: 6, src: "/gallery/photo6.jpg", alt: "Cô dâu chú rể trong vườn hoa" },
  ];

  return (
    <Layout>
      <div className="min-h-screen py-12 bg-gray-100">
        <div className="container px-6 mx-auto">
          {/* Section Title */}
          <h1 className="mb-8 text-4xl font-bold text-center text-pink-500">
            Bộ Sưu Tập
          </h1>
          <p className="mb-12 text-center text-gray-600">
            Những khoảnh khắc tuyệt vời trong ngày cưới được ghi lại qua từng
            bức ảnh.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {images.map((image) => (
              <div key={image.id} className="relative group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-64 transition-transform transform rounded-lg shadow-lg group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                  <p className="text-lg font-semibold text-white">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
