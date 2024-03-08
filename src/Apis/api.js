import axios from "axios";

export const weatherResponse = async ({ latitude, longitude }) => {
  const data = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );

  return data;
};

export const imageResponse = async ({ skip = 0, limit = 5 }) => {
  const data = await fetch(
    `https://dummyjson.com/products?skip=${skip}&limit=${limit}`
  );
  return data.json();
};
