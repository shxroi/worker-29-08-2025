"use client"
import { useState } from "react";

export default function AboutPage() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our website!</p>
      <input className="bg-white text-black" value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" />
      <p>You typed: {inputValue}</p>
    </div>
  );
}


