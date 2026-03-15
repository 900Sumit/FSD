import { useState } from "react";

export default function Form() {
  const [Product, setPname] = useState("");

  const handleChange = (event) => {
    setPname(event.target.value);
  };
  return (
    <div>
      <h2>Product Form</h2>
      <form>
        Enter Product Name:{" "}
        <input
          type="text"
          placeholder="enter the product name"
          value={Product}
          onChange={handleChange}
        />
      </form>
      <h3>Product Name: {Product}</h3>
    </div>
  );
}