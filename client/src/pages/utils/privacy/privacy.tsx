import Layout from "@components/layouts/layout";
import React from "react";

const Privacy: React.FC = () => {
  return (
    <Layout>
      <div className="container px-6 py-12 mx-auto">
        {/* Title */}
        <h1 className="mb-8 text-4xl font-bold text-center text-pink-500">
          Chính Sách Bảo Mật
        </h1>

        {/* Introduction */}
        <p className="mb-6 text-gray-600">
          Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn. Chính sách này
          giải thích cách chúng tôi thu thập, sử dụng và bảo mật dữ liệu của
          bạn.
        </p>

        {/* Sections */}
        <div className="space-y-6">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">
              1. Thông Tin Chúng Tôi Thu Thập
            </h2>
            <p className="mt-2 text-gray-600">
              Chúng tôi có thể thu thập các thông tin sau đây từ bạn:
            </p>
            <ul className="mt-2 text-gray-600 list-disc list-inside">
              <li>Họ tên</li>
              <li>Địa chỉ email</li>
              <li>Số điện thoại</li>
              <li>Thông tin liên quan đến giao dịch</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">
              2. Cách Chúng Tôi Sử Dụng Thông Tin
            </h2>
            <p className="mt-2 text-gray-600">Thông tin được sử dụng để:</p>
            <ul className="mt-2 text-gray-600 list-disc list-inside">
              <li>Cung cấp dịch vụ và hỗ trợ bạn</li>
              <li>Phân tích dữ liệu để cải thiện trải nghiệm của bạn</li>
              <li>Gửi thông báo hoặc ưu đãi đặc biệt</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">
              3. Chia Sẻ Thông Tin
            </h2>
            <p className="mt-2 text-gray-600">
              Chúng tôi không chia sẻ thông tin cá nhân của bạn với bên thứ ba,
              trừ khi được yêu cầu bởi pháp luật hoặc để hoàn thành giao dịch.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">
              4. Quyền Riêng Tư Của Bạn
            </h2>
            <p className="mt-2 text-gray-600">
              Bạn có quyền yêu cầu chúng tôi chỉnh sửa, xóa hoặc cung cấp bản
              sao dữ liệu cá nhân của bạn bất kỳ lúc nào.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
