import React from "react";
import "../styles/inputPage.css";

export default function InputPage() {
  return (
    <>
      <div className="input-container">
        <div className="inner-container">
          <label> Button Tag </label>
          <input type="button" value="button" />
          <label> checkbox </label>
          <input type="checkbox" />
          <label> Color Tag </label>
          <input type="color" />
          <label>
            Date Tag
            <input type="date" />
          </label>
          <label>
            Datetime-local Tag
            <input type="datetime-local" />
          </label>
          <label> Email Tag </label>
          <input type="email" />
          <label>
            File Tag
            <input type="file" />
          </label>
          <label>
            Hidden Tag
            <input type="hidden" />
          </label>
          <label> Image Tag </label>
          <input type="image" src="logo192.png" width="48px" height="48px" />
          <label>
            {" "}
            Month Tag
            <input type="month" />
          </label>
          <label> Number Tag </label>
          <input type="number" />
          <label> Password Tag </label>
          <input type="password" />
          <label> Radio Tag </label>
          <input type="radio" />
          <label> Range Tag </label>
          <input type="range" />
          <label> Reset Tag </label>
          <input type="reset" />
          <label> Search Tag </label>
          <input type="search" />
          <label> Submit Tag </label>
          <input type="submit" />
          <label> Tel Tag </label>
          <input type="tel" />
          <label> Text Tag </label>
          <input type="text" /> (default value)
          <label>
            Time Tag
            <input type="time" />
          </label>
          <label>
            Url Tag
            <input type="url" />
          </label>
          <label>
            Week Tag
            <input type="week" />
          </label>
        </div>
      </div>
    </>
  );
}
