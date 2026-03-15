import { useState } from "react";

export default function KeyCounter(){
const [count, setCount] = useState(0);
  const handleKeyPress = () => {
    setCount(count + 1);
  };
    return(
        <div>
      <h2>Key Press Counter</h2>

      <div
        tabIndex="0"
        onKeyDown={handleKeyPress}
        style={{
          border: "2px dashed black",
          padding: "30px",
          width: "300px",
          textAlign: "center",
          color:"Red",
        }}
      >
        Click here and press any key
      </div>

      <h3>Key Press Count: {count}</h3>
    </div>
        
    );
}