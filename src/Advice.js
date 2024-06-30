import "./App.css";
import React, { useState, useEffect } from "react";
import { fetchAdvice } from "./Api";

function Advice() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

  const getAdvice = async () => {
    setLoading(true);
    try {
      const result = await fetchAdvice();
      setAdvice(result.advice);
      setError(null);
      setCount(count + 1);
    } catch (error) {
      setError("Failed to fetch advice");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div className="bg-DarkGrayishBlue w-96 md:w-128 flex flex-col justify-center items-center gap-5 p-10 rounded-xl relative drop-shadow-2xl">
      <p className="text-center text-NeonGreen font-bold text-xl">
        Advice #{count}
      </p>
      <h1 className="text-LightCyan text-center font-bold text-2xl">
        {loading ? <p>Loading...</p> : <p>{advice}</p>}
      </h1>
      <img className="md:hidden" src="pattern-divider-mobile.svg" alt="img" />
      <img
        className="hidden md:block"
        src="pattern-divider-desktop.svg"
        alt="img"
      />
      <div
        className="p-5 w-20 h-16 rounded-full bg-NeonGreen flex justify-center absolute -bottom-10"
        onClick={getAdvice}
      >
        <img className="" src="icon-dice.svg" alt="img" />
      </div>
    </div>
  );
}

export default Advice;
