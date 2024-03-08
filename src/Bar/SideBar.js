import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/sidebar.css";

export default function SideBar(props) {
  const location = useLocation();
  console.log(location);
  console.log(location);
  return (
    <>
      <div className="sidebar-container">
        <Link
          className={
            location.pathname === "/image-carousel" ? "active-link" : ""
          }
          to="/image-carousel"
        >
          Image Carousel
        </Link>
        <Link
          className={location.pathname === "/weather" ? "active-link" : ""}
          to="/weather"
        >
          Weather
        </Link>
        <Link
          className={location.pathname === "/counter" ? "active-link" : ""}
          to="/counter"
        >
          Counter
        </Link>
        <Link
          className={
            location.pathname === "/infinite-scroll" ? "active-link" : ""
          }
          to="/infinite-scroll"
        >
          Infinite Scroll
        </Link>
        <Link
          className={location.pathname === "/input-tag" ? "active-link" : ""}
          to="/input-tag"
        >
          Input Tags
        </Link>
        <Link
          className={location.pathname === "/quiz" ? "active-link" : ""}
          to="/quiz"
        >
          Quiz App
        </Link>
      </div>
    </>
  );
}
