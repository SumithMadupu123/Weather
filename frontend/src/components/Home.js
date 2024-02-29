// import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="Homepage">
        <div className="view">
          <div className="textcontent">
            <h2>Stay ahead of the weather curve with our real-time updates.</h2>
            <p>
              Capture the Moment, Unveil the Forecast: <br />
              <b>Upload an Image to Detect the Weather!</b>
            </p>
            <div className="buttons">
              <Link to="./Detect" className="btn">
                Click here!
              </Link>
            </div>
            <br />
            <p>
              Unlock the Skies, Explore with Ease: <br />
              <b>Enter a City Name to Forecast the Weather Condition!</b>
            </p>
            <div className="buttons">
              <Link to="./WeatherForecast" className="btn">
                Click here!
              </Link>
            </div>
          </div>
          <div className="imgcontent">
            <img
              className="wimage"
              src="https://img.freepik.com/premium-vector/happy-smiling-girl-with-umbrella-walking-rainy-day_179970-623.jpg"
              alt="homepageImg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

// export default Homepage;
