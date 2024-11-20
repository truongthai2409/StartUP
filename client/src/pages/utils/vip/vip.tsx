import Layout from '@components/layouts/layout';
import React from 'react';

const Vip: React.FC = () => {
    return (
        <Layout>
            <div className="px-6 py-12 text-center vip-container">
                <h1 className="mb-4 text-3xl font-bold">Tài khoản VIP</h1>
                <p className="mb-6 text-lg">
                    Nâng cấp lên VIP để trải nghiệm các dịch vụ đặc biệt của chúng tôi:
                </p>
                <ul className="max-w-lg mx-auto mb-6 text-left list-disc">
                    <li>Truy cập vào bộ sưu tập ảnh cưới cao cấp</li>
                    <li>Nhận ưu đãi độc quyền từ các đối tác</li>
                    <li>Tính năng tùy chỉnh giao diện website cưới</li>
                </ul>
                <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                    Nâng cấp ngay
                </button>
            </div>
            
        </Layout>
    );
};

export default Vip;


