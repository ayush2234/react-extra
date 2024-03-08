import React, { useEffect, useState } from "react";
import { weatherResponse } from "../Apis/api";
import "../styles/weatherPage.css";
import { useParams } from "react-router-dom";

const WeatherPage = (props) => {
  const [weatherData, setWeatherData] = useState(null);
  const [coordinates, setCoordinates] = useState({
    latitude: 44.34,
    longitude: 10.99,
  });
  const [isButtonClick, setIsButtonClick] = useState(false);

  console.log("data=====", weatherData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setWeatherData(props);
        const data = await weatherResponse(coordinates);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [isButtonClick]);

  const handleCoordinates = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setCoordinates((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCoordinatesUpdate = () => {
    setIsButtonClick(!isButtonClick);
  };

  console.log(coordinates);

  return (
    <>
      {}
      <div className="weather-section">
        <div className="weather-form">
          <lable>latitude:</lable>
          <input
            name="latitude"
            type="number"
            placeholder="latitude...."
            onChange={handleCoordinates}
          />
          <lable>longitude:</lable>
          <input
            name="longitude"
            type="number"
            placeholder="longitude...."
            onChange={handleCoordinates}
          />
        </div>
        <button onClick={handleCoordinatesUpdate}>Submit</button>
      </div>
    </>
  );
};
export default WeatherPage;
