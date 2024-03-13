import React from "react";
import { useState } from "react";
import "./converter.css";

function TemperatureConverter() {
  const [farhrenheit, setFarhenheit] = useState("");
  const [celsius, setCelsius] = useState("");

  const farhrenheitChange = (e) => {
    const value = e.target.value;
    setFarhenheit(value);
    setCelsius((parseFloat(value - 32) * (5 / 9)).toFixed(3));
  };

  const celsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFarhenheit((parseFloat(value) * (9 / 5) + 32).toFixed(3));
  };

  return (
    <div>
      <h2 className="title">Temperature Converter</h2>
      <label className="fahrenheit">
        Fahrenheit:
        <input type="number" value={farhrenheit} onChange={farhrenheitChange} />
      </label>
      <br />
      <label className="celsius">
        Celsius:
        <input type="number" value={celsius} onChange={celsiusChange} />
      </label>
    </div>
  );
}

export default TemperatureConverter;
