import React from "react";
import "./error.scss"
import { useNavigate } from "react-router-dom";


const Page404: React.FC = () => {
  const navigate = useNavigate();

const handleBackToHome = () => {
  navigate('/'); 
};
  return (
    <div className="page-404">
      <h1>404 Error Page</h1>
      <p className="zoom-area">
        <b>CSS</b> animations to make a cool 404 page.{" "}
      </p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        {/* <Link
          to="/"
          className="more-link"
        >
          Navigate to Home
        </Link> */}
        <button
          onClick={handleBackToHome}
          className="more-link"
        >
          Navigate to Home
        </button>
      </div>
    </div>
  );
};

export default Page404;
