import React from "react";
import Preview from "./components/Preview";
import Header from "./components/Header";
import Data from "./components/Data";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <div className="preview">
          <Preview text="Hello world!" />
        </div>
        <div className="code"></div>
        <div className="data">
          <Data />
        </div>
      </div>
    </>
  );
}

export default App;
