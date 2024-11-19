import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-white bg-gray-900">
      <div className="xl:max-w-[1024px] 2xl:max-w-[1280px] px-6 mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-40 2xl:gap-60 md:grid-cols-3">
          {/* About Section */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-pink-500">
              Wedding Bliss
            </h3>
            <p className="text-gray-400">
              Chúng tôi mang đến những trải nghiệm đáng nhớ cho ngày cưới của
              bạn, với sự chuyên nghiệp và tận tâm.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-pink-500">
              Liên Kết Nhanh
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="../about"
                  className="text-gray-400 transition hover:text-pink-500"
                >
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link
                  to="../services"
                  className="text-gray-400 transition hover:text-pink-500"
                >
                  Dịch Vụ
                </Link>
              </li>
              <li>
                <Link
                  to="../gallery"
                  className="text-gray-400 transition hover:text-pink-500"
                >
                  Bộ Sưu Tập
                </Link>
              </li>
              <li>
                <Link
                  to="../contact"
                  className="text-gray-400 transition hover:text-pink-500"
                >
                  Liên Hệ
                </Link>
              </li>
              <li>
                <Link
                  to="../privacy"
                  className="text-gray-400 transition hover:text-pink-500"
                >
                  Chính sách bảo mật
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-pink-500">
              Kết Nối Với Chúng Tôi
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="text-gray-400 transition hover:text-pink-500"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.657-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116c.729 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="text-gray-400 transition hover:text-pink-500"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.036.243 2.501.405a5.007 5.007 0 011.797 1.159 5.007 5.007 0 011.159 1.797c.162.465.349 1.295.405 2.501.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.243 2.036-.405 2.501a5.007 5.007 0 01-1.159 1.797 5.007 5.007 0 01-1.797 1.159c-.465.162-1.295.349-2.501.405-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-2.036-.243-2.501-.405a5.007 5.007 0 01-1.797-1.159 5.007 5.007 0 01-1.159-1.797c-.162-.465-.349-1.295-.405-2.501-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.206.243-2.036.405-2.501a5.007 5.007 0 011.159-1.797 5.007 5.007 0 011.797-1.159c.465-.162 1.295-.349 2.501-.405 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.735 0 8.332.013 7.053.072c-1.319.059-2.223.271-2.978.572a7.007 7.007 0 00-2.598 1.66A7.007 7.007 0 00.071 4.075c-.3.755-.513 1.659-.572 2.978C.013 8.332 0 8.735 0 12s.013 3.668.072 4.947c.059 1.319.271 2.223.572 2.978a7.007 7.007 0 001.66 2.598 7.007 7.007 0 002.598 1.66c.755.3 1.659.513 2.978.572 1.219.059 1.622.072 4.947.072s3.668-.013 4.947-.072c1.319-.059 2.223-.271 2.978-.572a7.007 7.007 0 002.598-1.66 7.007 7.007 0 001.66-2.598c.3-.755.513-1.659.572-2.978.059-1.219.072-1.622.072-4.947s-.013-3.668-.072-4.947c-.059-1.319-.271-2.223-.572-2.978a7.007 7.007 0 00-1.66-2.598A7.007 7.007 0 0016.925.643c-.755-.3-1.659-.513-2.978-.572C15.668.013 15.265 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 mt-8 text-center border-t border-gray-700">
          <p className="text-gray-400">
            © 2024 Wedding Bliss. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
