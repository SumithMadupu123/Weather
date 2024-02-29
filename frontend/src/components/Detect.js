import React, { useState } from "react";
import axios from "axios";
import "./Detect.css";

export const Detect = () => {
  const [file, setFile] = useState(null);
  const [res, setRes] = useState("");

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  const fetchWeatherData2 = async () => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("image", file);

        const response = await axios.post("http://127.0.0.1:5000/text", formData, { crossDomain: true });

        const data = response.data;
        setRes(data.predicted_class);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    fetchWeatherData2();
  };

  return (
    <>
      <div className="Detect">
        <form onSubmit={handleSubmit2}>
          <div className="upload-container">
            <h2>Add Image:</h2>
            <div className="infile">
              <input type="file" onChange={handleChange} />
            </div>
            <img
              src={file ? URL.createObjectURL(file) : null}
              alt="Uploaded"
              className="small-image"
            />
            <br />
            <br />
            <button type="submit">Submit</button>
            <div><h3>{res}</h3></div>
          </div>
        </form>
      </div>
    </>
  );
};
