import React, { useState } from "react";
import ImageCarousel from "../pages/ImageCarousel";

const ImageContainer = () => {
  return (
    <>
      <div className="image-main-container">
        <header className="App-header">
          <h1>Image Carousel using React and Framer Motion</h1>
        </header>
        <ImageCarousel />
      </div>
    </>
  );
};

export default ImageContainer;
