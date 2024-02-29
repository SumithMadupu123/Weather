// import { Link } from "react-router-dom";
import "./Home2.css";

export const Home2 = () => {
  return (
    <>
    <section className="pt-md-11 pl-md-5">
  <div className="container">
    <div className="row align-items-center">
      <div
        className="col-12 col-md-7 col-lg-6 order-md-2 aos-init aos-animate"
        data-aos="fade-up"
      >
        {/* Heading */}
        <h1 className="display-3 text-center text-md-start">
          Welcome to <span className="text-primary">SkyCast</span>. <br />
          Detect & Forecast.
        </h1>
        {/* Text */}
        <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8">
          Stay Informed, Stay Prepared
          <br/>
          Start Exploring SkyCast Today!
        </p>
        {/* Buttons */}
        <div className="text-center text-md-start">
          <a href="./Detect" className="btn btn-primary shadow lift me-1">
            Weather Detection
            {/* <i className="fe fe-arrow-right d-none d-md-inline ms-3" /> */}
          </a>
          <a href="./weatherforecast" className="btn btn-primary shadow lift me-1">
            Weather Forecast
          </a>
        </div>
      </div>
      <div className="col-12 col-md-5 col-lg-6 order-md-1">
        {/* Image */}
        <div className="imgset">
          <img
            src="https://png.pngtree.com/png-vector/20220530/ourlarge/pngtree-people-wearing-raincoat-rain-weather-png-image_4761964.png"
            className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate"
            alt="..."
            data-aos="fade-up"
            data-aos-delay={100}
          />
        </div>
      </div>
    </div>{" "}
    {/* / .row */}
  </div>{" "}
  {/* / .container */}
</section>

<section className="py-8 py-md-11 border-bottom">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-4 aos-init aos-animate" data-aos="fade-up">
        {/* Icon */}
        <div className="icon text-primary mb-3">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M0 0h24v24H0z" />
              <path
                d="M7 3h10a4 4 0 110 8H7a4 4 0 110-8zm0 6a2 2 0 100-4 2 2 0 000 4z"
                fill="#335EEA"
              />
              <path
                d="M7 13h10a4 4 0 110 8H7a4 4 0 110-8zm10 6a2 2 0 100-4 2 2 0 000 4z"
                fill="#335EEA"
                opacity=".3"
              />
            </g>
          </svg>{" "}
        </div>
        {/* Heading */}
        <h3>Weather Forecast</h3>
        {/* Text */}
        <p className="text-muted mb-6 mb-md-0">
        Using weather APIs, we access and analyze accurate forecasts for any location, enabling us to make well-informed decisions based on current and upcoming weather conditions..
        </p>
      </div>
      <div
        className="col-12 col-md-4 aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay={50}
      >
        {/* Icon */}
        <div className="icon text-primary mb-3">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M0 0h24v24H0z" />
              <path
                d="M5.5 4h4A1.5 1.5 0 0111 5.5v1A1.5 1.5 0 019.5 8h-4A1.5 1.5 0 014 6.5v-1A1.5 1.5 0 015.5 4zm9 12h4a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5z"
                fill="#335EEA"
              />
              <path
                d="M5.5 10h4a1.5 1.5 0 011.5 1.5v7A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-7A1.5 1.5 0 015.5 10zm9-6h4A1.5 1.5 0 0120 5.5v7a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-7A1.5 1.5 0 0114.5 4z"
                fill="#335EEA"
                opacity=".3"
              />
            </g>
          </svg>{" "}
        </div>
        {/* Heading */}
        <h3>Weather Detection</h3>
        {/* Text */}
        <p className="text-muted mb-6 mb-md-0">
        We employ convolutional neural networks (CNNs) to train our model, enabling it to accurately predict and classify images with remarkable detection capabilities.
        </p>
      </div>
      <div
        className="col-12 col-md-4 aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        {/* Icon */}
        <div className="icon text-primary mb-3">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M0 0h24v24H0z" />
              <path
                d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z"
                fill="#335EEA"
              />
              <rect
                fill="#335EEA"
                opacity=".3"
                transform="rotate(15 12 12)"
                x={11}
                y={4}
                width={2}
                height={16}
                rx={1}
              />
            </g>
          </svg>{" "}
        </div>
        {/* Heading */}
        <h3>User-Friendly</h3>
        {/* Text */}
        <p className="text-muted mb-0">
        Our website is easy to use and navigate, making it simple for users to find what they need.
        </p>
      </div>
    </div>{" "}
    {/* / .row */}
  </div>{" "}
  {/* / .container */}
</section>



    </>
  );
}