import "./App.css";
import React from "react";
import Advice from "./Advice";
import Attribution from "./Attribution";

function App() {
  return (
    <div className="bg-DarkBlue w-full h-screen flex flex-col justify-center items-center p-10 overflow-hidden">
      <Advice />
      <Attribution />
    </div>
  );
}

export default App;
