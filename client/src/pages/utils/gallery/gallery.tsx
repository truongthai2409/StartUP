import Layout from "@components/layouts";
import React, { useState } from "react";
import WeddingTemplate from "@pages/templates/wedding.template";
import FullScreenModal from "@components/modal/full_screen";

const Gallery: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<React.ReactNode>(null);

  const images = [
    { id: 1, src: "/gallery/photo1.jpg", name: "Đám cưới lãng mạn bên bờ biển", description: "Một bãi biển tuyệt đẹp với ánh hoàng hôn." },
    { id: 2, src: "/gallery/photo2.jpg", name: "Tiệc cưới phong cách cổ điển", description: "Không gian sang trọng và cổ điển cho đám cưới." },
    { id: 3, src: "/gallery/photo3.jpg", name: "Kỷ niệm tình yêu giữa rừng", description: "Cảnh sắc thiên nhiên hoang sơ kết hợp với tình yêu lãng mạn." },
    { id: 4, src: "/gallery/photo4.jpg", name: "Bữa tiệc ngoài trời đầy màu sắc", description: "Bữa tiệc ngoài trời với không gian tươi mới." },
    { id: 5, src: "/gallery/photo5.jpg", name: "Khung cảnh cưới ban đêm", description: "Khung cảnh tuyệt đẹp của buổi tiệc vào ban đêm." },
    { id: 6, src: "/gallery/photo6.jpg", name: "Cô dâu chú rể trong vườn hoa", description: "Hình ảnh cô dâu chú rể hạnh phúc giữa những bông hoa." },
  ];

  const openModal = (template: React.ReactNode) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTemplate(null);
  };

  return (
    <Layout>
      <div className="min-h-screen py-12 bg-gray-100">
        <div className="container px-6 mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-center text-pink-500">Bộ Sưu Tập</h1>
          <p className="mb-12 text-center text-gray-600">
            Những khoảnh khắc tuyệt vời trong ngày cưới được ghi lại qua từng bức ảnh.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {images.map((image) => (
              <div key={image.id} className="relative group">
                <img
                  src={image.src}
                  alt={image.name}
                  className="object-cover w-full h-64 transition-transform transform rounded-lg shadow-lg group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                  <button
                    onClick={() => openModal(<WeddingTemplate />)} // Truyền WeddingTemplate vào modal
                    className="px-4 py-2 font-semibold text-white bg-pink-500 rounded-lg hover:bg-pink-600"
                  >
                    Xem Template
                  </button>
                </div>
              </div>
            ))}
          </div>

          {selectedTemplate && (
            <FullScreenModal
              isOpen={isModalOpen}
              closeModal={closeModal}
              template={selectedTemplate} // Truyền ReactNode vào FullScreenModal
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
