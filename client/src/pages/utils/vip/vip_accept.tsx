import { useState } from "react";
import { CheckCircle, Star } from "lucide-react";
import Layout from "@components/layouts/layout";

export default function VIPUpgrade() {
  const [isHovered, setIsHovered] = useState(false);

  const benefits = [
    "Priority Support",
    "Exclusive Content",
    "Ad-free Experience",
    "Early Access to Features",
  ];

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-pink-100 to-indigo-200">
        <div className="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-xl">
          <div className="p-6 text-center bg-gradient-to-r from-pink-500 to-indigo-500">
            <h2 className="flex items-center justify-center gap-2 text-2xl font-bold text-white">
              <Star className="text-yellow-300" />
              Upgrade to VIP
              <Star className="text-yellow-300" />
            </h2>
            <p className="mt-2 text-pink-100">
              Unlock premium features and exclusive benefits
            </p>
          </div>
          <div className="p-6 space-y-6">
            <div className="p-4 text-white rounded-lg shadow-lg bg-gradient-to-r from-pink-500 to-indigo-500">
              <h3 className="mb-3 text-lg font-semibold">VIP Benefits:</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800">$9.99/month</p>
              <p className="mt-1 text-sm text-gray-600">Cancel anytime</p>
            </div>
          </div>
          <div className="p-6 bg-gray-50">
            <button
              className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition duration-300 ease-in-out transform ${
                isHovered
                  ? "bg-gradient-to-r from-pink-600 to-indigo-600 scale-105"
                  : "bg-gradient-to-r from-pink-500 to-indigo-500"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
