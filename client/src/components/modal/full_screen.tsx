import React, { useEffect } from "react";
import { IoMdCloseCircle } from "react-icons/io";

interface FullScreenModalProps {
  isOpen: boolean;
  closeModal: () => void;
  template: React.ReactNode;
}

const FullScreenModal: React.FC<FullScreenModalProps> = ({ isOpen, closeModal, template }) => {
  // Ngừng cuộn trang khi modal mở
  useEffect(() => {
    if (isOpen) {
      // Tắt cuộn trang chính khi modal mở
      document.body.style.overflow = "hidden";
    } else {
      // Bật lại cuộn trang chính khi modal đóng
      document.body.style.overflow = "auto";
    }

    // Cleanup khi component bị unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal}
    >
      <div
        className="relative w-full h-full overflow-auto bg-white"
        onClick={(e) => e.stopPropagation()} // Ngăn không cho modal đóng khi click vào nội dung
      >
        <div className="absolute top-4 right-4">
          <button
            onClick={closeModal}
            className="mr-2 text-3xl text-pink-500"
          >
            <IoMdCloseCircle />
          </button>
        </div>
        <div className="h-full p-8 overflow-y-auto">
          {template} {/* Hiển thị nội dung template (có thể là WeddingTemplate hoặc bất kỳ component nào) */}
        </div>
      </div>
    </div>
  );
};

export default FullScreenModal;
