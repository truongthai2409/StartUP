import React, { useEffect } from "react";
import "./styles.scss"

const WeddingTemplate: React.FC = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const heartContainer = document.querySelector(".heart-container");
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "❤️";
  
      // Randomize heart's position and animation duration
      const randomX = Math.random() * 100; // Random X position between 0% and 100% of screen width
      const randomDuration = Math.random() * 4 + 3; // Random duration between 3s to 7s
  
      // Set the heart's random position and duration using CSS variables
      heart.style.setProperty("--x", `${randomX}vw`); // Random position within the width of the screen
      heart.style.setProperty("--duration", `${randomDuration}s`);
  
      console.log("Heart added to container");
      heartContainer?.appendChild(heart);
  
      // Remove the heart after animation duration
      setTimeout(() => {
        heart.remove();
      }, randomDuration * 1000); // Convert to ms
    }, 1000); // Add new heart every 500ms
  
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Heart Container */}
      <div className="heart-container"></div>

      {/* Header */}
      <header
        className="h-screen text-white bg-center bg-cover"
        style={{ backgroundImage: "url('/gallery/photo1.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="mb-4 text-5xl font-bold">Emma & John</h1>
          <p className="text-xl">We're getting married on May 25, 2024</p>
          <button className="px-4 py-2 mt-6 text-white bg-pink-500 rounded-lg hover:bg-pink-600">
            Save the Date
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="px-6 py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">About Us</h2>
          <p className="text-lg">
            Emma and John met five years ago and have been inseparable ever
            since. Together, they have built a life full of love and laughter.
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-center">
            Wedding Schedule
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start">
              <span className="mr-4 font-bold text-pink-500">4:00 PM</span>
              <p>Ceremony at St. Mary's Church</p>
            </li>
            <li className="flex items-start">
              <span className="mr-4 font-bold text-pink-500">6:00 PM</span>
              <p>Reception at The Grand Hotel</p>
            </li>
            <li className="flex items-start">
              <span className="mr-4 font-bold text-pink-500">8:00 PM</span>
              <p>Dinner & Dance Party</p>
            </li>
          </ul>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="px-6 py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">RSVP</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="px-4 py-2 text-white bg-pink-500 rounded-lg hover:bg-pink-600"
            >
              Submit RSVP
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-white bg-gray-800">
        <p>© 2024 Emma & John Wedding. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default WeddingTemplate;