import Layout from "@components/layouts";
import { useAppDispatch, useAppSelector } from "@hooks/redux/use_app_dispatch";
import { RootState } from "@stores/index";
import { setAvatar } from "@stores/slices/auth_slices";
import React from "react";

const Account: React.FC = () => {
  // const [avatar, setAvatar] = useState<string>(
  //   "https://via.placeholder.com/150"
  // );
  const avatar = useAppSelector((state: RootState) => state.auth.avatar);
  const dispatch = useAppDispatch();

  // Handle avatar file upload
  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          dispatch(setAvatar(reader.result as string));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-20 h-20 overflow-hidden bg-gray-200 rounded-full">
            <img
              src={avatar}
              alt="Avatar"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-500">john.doe@example.com</p>
          </div>
          <div>
            <label
              htmlFor="avatar-upload"
              className="px-4 py-2 ml-4 text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-600"
            >
              Upload Avatar
            </label>
            <input
              id="avatar-upload"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleAvatarUpload}
            />
          </div>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Personal Information */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Thông tin cá nhân</h2>
            <div className="space-y-2">
              <p className="text-gray-600">Tên: John Doe</p>
              <p className="text-gray-600">Email: john.doe@example.com</p>
              <p className="text-gray-600">Số điện thoại: 0123 456 789</p>
            </div>
            <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">
              Chỉnh sửa thông tin
            </button>
          </div>

          {/* Change Password */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Đổi mật khẩu</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Mật khẩu cũ</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 mt-1 border rounded"
                  placeholder="Nhập mật khẩu cũ"
                />
              </div>
              <div>
                <label className="block text-gray-700">Mật khẩu mới</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 mt-1 border rounded"
                  placeholder="Nhập mật khẩu mới"
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Nhập lại mật khẩu mới
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 mt-1 border rounded"
                  placeholder="Xác nhận mật khẩu mới"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
              >
                Đổi mật khẩu
              </button>
            </form>
          </div>

          {/* Website Management */}
          <div className="p-6 bg-white rounded-lg shadow-md lg:col-span-2">
            <h2 className="mb-4 text-xl font-semibold">Quản lý trang web</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-100 rounded">
                <p className="text-gray-700">Wedding Website 1</p>
                <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                  Xem chi tiết
                </button>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-100 rounded">
                <p className="text-gray-700">Wedding Website 2</p>
                <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                  Xem chi tiết
                </button>
              </div>
              <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600">
                Thêm trang web mới
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
