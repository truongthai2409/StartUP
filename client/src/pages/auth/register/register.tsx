import React, { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { object as YupObject } from "yup";
import {
  emailValidation,
  passwordValidation,
  phoneValidation,
  usernameValidation,
} from "../validate";
import { useRegister } from "@hooks/auth";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Layout from "@components/layouts";

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const mutation = useRegister();
  const formik = useFormik({
    initialValues: {
      username: "",
      phone: "",
      email: "",
      password: "",
      status: "",
    },
    validationSchema: YupObject({
      username: usernameValidation,
      phone: phoneValidation,
      email: emailValidation,
      password: passwordValidation,
    }),
    onSubmit: async (values) => {
      const data = {
        username: values.username,
        phone: values.phone,
        email: values.email,
        password: values.password,
        status: "1",
      };
      console.log(data);
      mutation.mutate(data);
    },
  });

  return (
    <Layout>
      <section className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-pink-500 md:text-2xl dark:text-pink-500">
                Sign up
              </h1>
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
                    placeholder="First Name"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoCapitalize="on"
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <div className="text-sm text-red-600">
                      {formik.errors.username}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-pink-500 dark:text-pink-500"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-pink-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-pink-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Phone Number"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="text-sm text-red-600">
                      {formik.errors.phone}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-pink-500 dark:text-pink-500"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-pink-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-pink-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-sm text-red-600">
                      {formik.errors.email}
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
                  Sign up
                </button>
                <p className="text-sm font-light text-pink-500 dark:text-pink-500">
                  Already have an account?{" "}
                  <Link
                    to="../login"
                    className="font-medium text-pink-500 hover:underline dark:text-pink-500"
                  >
                    Sign In
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

export default Register;
