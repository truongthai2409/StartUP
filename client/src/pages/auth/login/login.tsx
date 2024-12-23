import React, { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { object as YupObject } from "yup";
import { usernameValidation, passwordValidation } from "../validate";
import { useLogin } from "@hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Layout from "@components/layouts/layout";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const mutation = useLogin();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: YupObject({
      username: usernameValidation,
      password: passwordValidation,
    }),
    onSubmit: async (values) => {
      const data = {
        username: values.username,
        password: values.password,
      };
      mutation.mutate(data);
    },
  });

  const handleGoogleLogin = () => {
    // Add logic for handling Google login
  };

  const handleFacebookLogin = () => {
    // Add logic for handling Facebook login
  };

  return (
    <Layout>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-pink-500 md:text-2xl dark:text-pink-500">
                Sign in to your account
              </h1>

              {/* Social Login Buttons */}
              <div className="flex flex-col space-y-3">
                <button
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center w-full py-2 text-pink-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 dark:bg-gray-700 dark:text-pink-500 dark:border-gray-600 dark:hover:bg-gray-600"
                >
                  <FcGoogle className="w-5 h-5 mr-2" />
                  Login with Google
                </button>
                <button
                  onClick={handleFacebookLogin}
                  className="flex items-center justify-center w-full py-2 text-white bg-blue-900 rounded-lg hover:bg-blue-800"
                >
                  <FaFacebook className="w-5 h-5 mr-2" />
                  Login with Facebook
                </button>
              </div>

              {/* Divider */}
              <div className="relative flex items-center justify-center mt-4">
                <span className="absolute inset-x-0 h-px bg-gray-300 dark:bg-gray-600"></span>
                <span className="relative px-4 text-sm text-pink-500 bg-white dark:bg-gray-800 dark:text-pink-500">
                  or
                </span>
              </div>

              <form
                className="space-y-4 md:space-y-6"
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-pink-500 dark:text-pink-500"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-pink-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-pink-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="User Name"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <div className="text-sm text-red-600">
                      {formik.errors.username}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-pink-500 dark:text-pink-500"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-pink-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-pink-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoCapitalize="on"
                    />
                    <button
                      type="button"
                      className="absolute transform -translate-y-1/2 right-3 top-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-sm text-red-600">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-500 dark:hover:bg-pink-600 dark:focus:ring-gray-800"
                >
                  Login
                </button>
                <p className="text-sm font-light text-pink-500 dark:text-pink-500">
                  Don’t have an account yet?{" "}
                  <Link
                    to="../register"
                    className="font-medium text-pink-500 hover:underline dark:text-pink-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
