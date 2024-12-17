import React, { useState, useEffect } from "react";

export default function FuncLifeCycle() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState(0);

  const handleMessage = () => {
    setText(text + 1); // Increment text value when button clicked
  };

  useEffect(() => {
    setValue(value + 1); // Increment value whenever text changes
  }, [text]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Card container */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "200px",
          textAlign: "center",
        }}
      >
        {/* Displaying values inside card */}
        <h3>Card</h3>
        <h2>{`Value: ${value}`}</h2>
        <h2>{`Text: ${text}`}</h2>
      </div>

      {/* Buttons to change text */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleMessage}>+</button>
        <button onClick={() => setText(text - 1)}>-</button>
      </div>
    </div>
  );
}
