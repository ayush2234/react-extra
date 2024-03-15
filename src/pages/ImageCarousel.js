import React, { useState } from "react";
import { images } from "../constant/images";
import "../styles/imageCarousel.css";

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentIndex(
      (prevIndex) => prevIndex + 1 < images.length && prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1 >= 0 && prevIndex - 1);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleImageContainer = (index) => {
    const width = 1590;
    const height = 920;
    const imageUrl = images[index];
    const newImageUrl = imageUrl.substring(imageUrl.lastIndexOf("/") + 1);
    const modifiedImageUrl = newImageUrl
      .replace(/w=\d+/g, `w=${width}`)
      .replace(/h=\d+/g, `h=${height}`);

    let newWindow = window.open("_blank");
    newWindow.document.write(`
       <html>
        <head>
          <title>Resized Image</title>
        </head>
        <body>
           <img id="resizedImage" src="${imageUrl}" />
           <script> 
             document.getElementById("resizedImage").style.width = ${width};
             document.getElementById("resizedImage").style.height = ${height};
             window.history.replaceState({}, document.title, "${modifiedImageUrl}");
           </script> 
        </body>
       </html>
     `);
  };

  const isPrevConditionMet = currentIndex === 0 ? "disable" : "";
  const isNextConsitionMet = currentIndex === 5 ? "disable" : "";
  return (
    <>
      <div className="container">
        <div
          className="image-container"
          onClick={() => handleImageContainer(currentIndex)}
        >
          <img src={images[currentIndex]}></img>
        </div>
        <div className="image-button-indicator">
          <button
            className={isPrevConditionMet}
            onClick={handlePreviousImage}
            disabled={isPrevConditionMet}
          >
            previous
          </button>
          <button
            className={isNextConsitionMet}
            onClick={handleNextImage}
            disabled={isNextConsitionMet}
          >
            Next
          </button>
        </div>
        <div className="indicator">
          {images?.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
