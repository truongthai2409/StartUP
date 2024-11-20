import React, { useEffect } from "react";
import "./falling_heart.scss";

const FallingHearts: React.FC = () => {
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

  return <div className="heart-container"></div>;
};

export default FallingHearts;
