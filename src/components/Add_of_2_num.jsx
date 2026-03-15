import { useState } from "react";

export default function Add_of_2_num() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const addnum = () => {
    setResult(Number(num1) + Number(num2));
  };
  return (
    <div className="App">
      Number1 :{" "}
      <input
        type="number"
        placeholder="Enter num1: "
        onChange={(e) => setNum1(e.target.value)}
      />
      <br />
      Number2 :{" "}
      <input
        type="number"
        placeholder="Enter num2: "
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <br />
      <button onClick={addnum}>Add</button>
      <h2>Result: {result}</h2>
    </div>
  );
}
