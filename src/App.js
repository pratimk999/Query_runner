import React from "react";
import "./App.css";
import Main from "./Components/Main";

function App() {
  return (
    <div className="app">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill=" #1913ae"
          fillOpacity="1"
          d="M0,256L40,240C80,224,160,192,240,181.3C320,171,400,181,480,202.7C560,224,640,256,720,234.7C800,213,880,139,960,106.7C1040,75,1120,85,1200,128C1280,171,1360,245,1400,282.7L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          data-darkreader-inline-fill=""></path>
      </svg>
      <Main />
    </div>
  );
}

export default App;
