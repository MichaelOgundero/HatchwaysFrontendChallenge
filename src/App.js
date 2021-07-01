import React from "react";
import FetchData from "./Components/FetchData/FetchData";
import "./App.css";

function App() {
  return (
    <div data-testid="parent-div" style={{ fontFamily: "Raleway" }}>
      <FetchData />
    </div>
  );
}

export default App;
