import React from "react";
import { useState } from "react";
import "./converter.css";

function TemperatureConverter() {
  const [farhrenheit, setFarhenheit] = useState("");
  const [celsius, setCelsius] = useState("");
  const [fahrenheitWarning, setFarhenheitWarning] = useState("");
  const [celsiusWarning, setCelsiusWarning] = useState("");

  const reset = () => {
    setFarhenheit("");
    setCelsius("");
    setFarhenheitWarning("");
    setCelsiusWarning("");
  };
  const validation = (value, setWarning) => {
    if (isNaN(value)) {
      setWarning("Please enter a valid temperature");
      return false;
    } else {
      setWarning("");
      return true;
    }
  };

  const farhrenheitChange = (e) => {
    const value = e.target.value;

    if (validation(value, setFarhenheitWarning)) {
      setFarhenheit(value);
      setCelsius((parseFloat(value - 32) * (5 / 9)).toFixed(3));
    } else {
      setFarhenheit(value);
    }

    if (celsius == "") {
      reset();
    }
  };

  const celsiusChange = (e) => {
    const value = e.target.value;
    if (validation(value, setCelsiusWarning)) {
      setCelsius(value);
      setFarhenheit((parseFloat(value) * (9 / 5) + 32).toFixed(3));
    } else {
      setCelsius(value);
    }
  };

  return (
    <div>
      <div className="converter-container">
        <h2 className="title">Temperature Converter</h2>
        <div className="inputs-container">
          <div className="input-group">
            <label className="fahrenheit">
              <h2> Fahrenheit: </h2>
              <input
                type="number"
                value={farhrenheit}
                onChange={farhrenheitChange}
                className="unit"
                placeholder="Fahrenheit"
              />
            </label>
            {fahrenheitWarning && (
              <p className="warning">{fahrenheitWarning}</p>
            )}
          </div>
          <br />
          <div className="input-group">
            <label className="celsius">
              <h2> Celsius: </h2>
              <input
                type="number"
                value={celsius}
                onChange={celsiusChange}
                className="unit"
                placeholder="Celsius"
              />
            </label>
            {celsiusWarning && <p className="warning">{celsiusWarning}</p>}
          </div>
          <button onClick={reset} className="reset-button">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default TemperatureConverter;
