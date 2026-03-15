import { useState } from "react";

export default function On_Off_btn() {
  const [status, setStatus] = useState("OFF");
  const toggleStatus = () => {
    if (status === "OFF") {
      setStatus("ON");
    } else {
      setStatus("OFF");
    }
  };
  return (
    <div
      style={{
        backgroundColor: status === "ON" ? "lightgreen" : "pink",
        padding: "30px",
      }}
    >
      <h2>Status: {status}</h2>

      <button onClick={toggleStatus}>Toggle</button>
    </div>
  );
}
