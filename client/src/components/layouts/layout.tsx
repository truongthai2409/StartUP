import React, { Suspense } from "react";
import Header from "./header";
const Footer = React.lazy(() => import("./footer"));

interface LayoutProps {
  children: React.ReactNode;
}

const Skeleton = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md animate-pulse">
      <div className="w-2/3 h-4 mb-2 bg-gray-300 rounded"></div>
      {/* <div className="w-full h-8 mb-2 bg-gray-300 rounded"></div> */}
    </div>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-grow pt-14"> {children}</main>
      <Suspense fallback={<Skeleton />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;
