import React from "react";
import { useState } from "react";
import TemperatureConverter from "./converter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TemperatureConverter />
      </header>
    </div>
  );
}

export default App;
